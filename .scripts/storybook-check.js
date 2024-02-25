#!/usr/bin/env node

require('dotenv').config();
const glob = require('glob');
const pagesFolderName = 'pages';
const storiesFolderName = 'stories';
const srcPath = process.env.SRC_PATH;
const excludedFilesString = process.env.EXCLUDED_FILES;

function findTSXFiles(directory, excludedFiles = []) {
  return glob.sync('**/*.tsx', { cwd: directory, ignore: excludedFiles });
}

function filterStatelessComponents(files) {
  const directory = `${srcPath}/${pagesFolderName}`;
  const pagesComponents = glob.sync('**/*.tsx', { cwd: directory });
  const filteredFiles = pagesComponents
    .filter((file) => {
      const pathArray = file.replace('.tsx', '').split('/');
      return pathArray.length === 2 && pathArray[0] === pathArray[1];
    }).map((file) => `${pagesFolderName}/${file}`);
  return files.filter((file) => !filteredFiles.includes(file));
}

function checkIsStoryExists(file) {
  const arrayPath = file.split('/');
  const fileName = arrayPath[arrayPath.length - 1];
  const storybookFile = `${storiesFolderName}/${fileName.replace('.tsx', '.stories.tsx')}`;
  const parentFolder = `${srcPath}/${arrayPath.slice(0, 2).join('/')}`;
  return glob.sync(`**/${storybookFile}`, { cwd: parentFolder }).length > 0;
}

function checkFiles(files) {
  const missingStories = [];
  files.forEach((file) => {
    const isStoryExists = checkIsStoryExists(file);
    if (!isStoryExists) {
      missingStories.push(`${srcPath}/${file}`);
    }
  });
  return missingStories;
}

function throwError(message) {
  console.error('\x1b[31m', message);
  process.exit(1);
}

if (srcPath && excludedFilesString) {
  const excludedFiles = excludedFilesString.split(',');
  const tsxFiles = findTSXFiles(srcPath, excludedFiles);
  const statelessComponents = filterStatelessComponents(tsxFiles);
  const missingStories = checkFiles(statelessComponents);
  if (missingStories.length > 0) {
    throwError(`Missing stories for the following components:\n - ${missingStories.join('\n - ')}`);
  }
  process.exit(0);
} else {
  throwError('Add SRC_PATH and STORYBOOK_EXCLUDED_FILES to .env file!');
}


