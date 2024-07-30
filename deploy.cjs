const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');
const simpleGit = require('simple-git');

const buildDir = path.join(__dirname, 'yarm');
const tempDir = path.join(__dirname, 'temp-build');
const git = simpleGit();

async function deploy() {
  try {
    // Ensure all changes in the main branch are committed
    await git.add('.');
    await git.commit('Committing changes before deploying', { '--allow-empty': true });

    // Clean up the temp directory
    if (fs.existsSync(tempDir)) {
      fs.removeSync(tempDir);
    }
    fs.mkdirSync(tempDir);

    // Copy all files from build/yarm to temp directory
    fs.copySync(buildDir, tempDir);

    // Checkout the gh-pages branch
    await git.checkout('gh-pages');

    // Clean up the current directory except the .git folder
    shell.ls('-A').forEach(file => {
      if (file !== '.git') {
        shell.rm('-rf', file);
      }
    });

    // Copy all files from the temp directory to the current directory
    fs.copySync(tempDir, '.');

    // Clean up the temp directory
    fs.removeSync(tempDir);

    // Add all files to git
    await git.add('.');

    // Commit the changes
    await git.commit('Deploy new version');

    // Push the changes to the gh-pages branch
    await git.push('origin', 'gh-pages');

    console.log('Deployment successful!');
  } catch (err) {
    console.error('Deployment failed:', err);
  } finally {
    // Checkout back to the main branch
    await git.checkout('main');
  }
}

deploy();
