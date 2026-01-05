const fs = require('fs');
const sass = require('sass');
const uswds = require("@uswds/compile");

uswds.settings.version = 3;

// src location(s)
uswds.paths.src.projectSass = './src/styles'

// dist (output) location(s)
uswds.paths.dist.components = './dist/uswds/components';
uswds.paths.dist.img = './dist/uswds/images';
uswds.paths.dist.fonts = './dist/uswds/fonts';
uswds.paths.dist.js = './dist/uswds/js';
uswds.paths.dist.css = './dist/uswds/css';

// these can be executed (the left side name) via 'npx gulp <target>'
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.compileSass = uswds.compileSass
exports.copyAll = uswds.copyAll
exports.update = uswds.updateUswds // copies all assets and compiles all sass
exports.watch = uswds.watch;

async function buildStyles () {
    let inputFile = './src/styles/index.scss';
    let outputFile = './dist/fpac-design-system.css';
    
    // delete the target file, just in case
    if (fs.existsSync(outputFile)) {
        console.info('Cleaning target file location: ' + outputFile)
        fs.rmSync(outputFile);
    }

    console.info('Sass compilation starting...')
    let compiledSass = sass.compile(inputFile, {
        logger: {
            warn (message, options) {
                // do nothing
            }
        },
        loadPaths: [
            './node_modules/@uswds/uswds',
            './node_modules/@uswds/uswds/packages'
        ]
    });
    console.info('Sass compilation done!')

    console.info('Writing compiled css to: ' + outputFile)
    fs.writeFileSync(outputFile, compiledSass.css)
    await Promise.resolve(outputFile)
}

exports.buildStyles = buildStyles