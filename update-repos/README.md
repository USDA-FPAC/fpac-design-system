# update-repos - helper scripts

This directory contains scripts to configure remotes and push branches across repositories.

Files:
- setupRepos.bat  - add/configure GitHub and Bitbucket remotes for the current repo
- pushAll.bat    - push all local branches to 'origin' (safe preview and dry-run modes)

Usage examples

1) Ensure remotes exist and are configured

  cd path\to\your\repo\update-repos
  setupRepos.bat

  Options:
  - debug  : prints extra information while scanning remotes

2) Preview pushAll and run a dry-run

  pushAll.bat            # shows the command that would run
  pushAll.bat --dry-run  # lists the local branches that would be pushed (no network)
  pushAll.bat --yes      # actually run: git push origin --all

Notes and safety

- Both scripts check they are executed inside a git repository and will exit if not.
- pushAll.bat will not perform network operations unless invoked with --yes.
- Review the remotes added by setupRepos.bat before pushing. Use git remote -v to inspect.

If you want, I can also:
- Add interactive confirmations before adding remotes or pushing.
- Limit pushAll.bat to only push branches that have an upstream set.
