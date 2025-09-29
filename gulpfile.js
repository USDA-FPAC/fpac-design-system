
/*
 * Gulp configuration file for FPAC Design System.
 * 
 * - Imports required packages: fs, sass, gulp, and USWDS compile.
 * - Initializes USWDS with version 3 and sets source/dist paths for SASS, components, images, fonts, and JS.
 * - Deletes specific subfolders within the USWDS images output directory to clean up old or unwanted assets.
 * - Defines a Gulp task 'copy-fpac-images' to copy FPAC-specific images from the source directory to the distribution folder.
 * 
 * This setup allows for a mixture of USWDS and FPAC assets to be managed and built together, with clear separation of output paths.
 */

// Import packages
const fs = require('fs');
const sass = require('sass');
const gulp = require('gulp');
const uswds = require('@uswds/compile');

// Initialize USWDS
uswds.settings.version = 3;

// src location of the USWDS project SASS files
uswds.paths.src.projectSass = './src/styles';

// Copy USWDS files to the dist folder
uswds.paths.dist.components = './dist/uswds/components';
uswds.paths.dist.img = './dist/uswds/images';  
uswds.paths.dist.fonts = './dist/uswds/fonts';
uswds.paths.dist.js = './dist/uswds/js';

// Delete multiple subfolders within the USWDS images folder
const subfoldersToDelete = [
    `${uswds.paths.dist.img}/favicons`,
    `${uswds.paths.dist.img}/material-icons`,
    `${uswds.paths.dist.img}/material-icons-deprecated`,
    // add more subfolder paths as needed
];

subfoldersToDelete.forEach(subfolder => {
    if (fs.existsSync(subfolder)) {
        fs.rmSync(subfolder, { recursive: true, force: true });
    }
});

// Copy FPAC images from the source directory to the distribution folder
gulp.task('copy-fpac-images', function () {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/fpac'));
});

/*
 * To run this gulpfile from the command line:
 * 1. Make sure you have Node.js and npm installed.
 * 2. Install dependencies by running: npm install
 * 3. Run a gulp task using: npx gulp <taskname>
 *    For example, to run the 'copy-fpac-images' task:
 *    npx gulp copy-fpac-images
 * 4. To run the default task (if defined), use: npx gulp
 */

async function buildStyles () {
    let inputFile = './src/styles/index.scss';
    let outputFile = './fpac-design-system.css';
    
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
