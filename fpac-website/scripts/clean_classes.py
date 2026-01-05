import re
import sys

css_path = r"C:\SoftwareDistribution\fpacdev\workspaces\FPAC-design-system\fpac-design-system\dist\fpac-design-system.css"
html_path = r"c:\SoftwareDistribution\fpacdev\workspaces\FPAC-design-system\fpac-design-system\fpac-website\pages\2-style-guide\layout\layout-grid.html"
out_path = html_path + ".cleaned"

# Read CSS
css = open(css_path, 'r', encoding='utf-8', errors='ignore').read()
# Find class selectors like .foo or .foo\:bar
css_class_matches = re.findall(r"\.([a-zA-Z0-9_\\:.-]+)", css)
css_classes = set()
for m in css_class_matches:
    normalized = m.replace('\\\:', ':')
    # strip pseudo parts if any (.foo:hover -> foo)
    normalized = normalized.split(':')[0] if ':' in normalized else normalized
    css_classes.add(normalized)

# Read HTML
html = open(html_path, 'r', encoding='utf-8', errors='ignore').read()

# Find skip ranges for <pre>...</pre> and <code>...</code>
skip_ranges = []
for tag in ('pre', 'code'):
    for mo in re.finditer(rf"<{tag}[^>]*>.*?</{tag}>", html, flags=re.DOTALL | re.IGNORECASE):
        skip_ranges.append((mo.start(), mo.end()))

def in_skip(pos):
    for s,e in skip_ranges:
        if pos >= s and pos < e:
            return True
    return False

# Process class attributes
removed_counts = {}
processed = 0
out_parts = []
last = 0
for mo in re.finditer(r'class="([^"]*)"', html):
    start, end = mo.start(), mo.end()
    out_parts.append(html[last:start])
    last = end
    if in_skip(start):
        out_parts.append(html[start:end])
        continue
    processed += 1
    val = mo.group(1)
    classes = [c for c in val.split() if c.strip()]
    # normalize requested background replacement
    classes = ['bg-secondary-lighter' if c=='bg-color-primary-light' else c for c in classes]
    kept = []
    for c in classes:
        if c in css_classes:
            kept.append(c)
        else:
            removed_counts[c] = removed_counts.get(c, 0) + 1
    newval = ' '.join(kept)
    out_parts.append(f'class="{newval}"')

out_parts.append(html[last:])
new_html = ''.join(out_parts)

# Ensure empty class attributes remain as class=""
new_html = re.sub(r'class="\s+"', 'class=""', new_html)

open(out_path, 'w', encoding='utf-8').write(new_html)

# Print a summary
print('Processed class attributes:', processed)
print('Unique removed classes:', len(removed_counts))
for k,v in sorted(removed_counts.items(), key=lambda x: -x[1]):
    print(f"{k}: {v}")
print('\nWrote cleaned file to:', out_path)
