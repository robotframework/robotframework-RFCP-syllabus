#!/usr/bin/env node

/**
 * Patches versioned sidebar files: replaces __VERSION__ with the actual
 * version from the filename before build, and restores afterward.
 *
 * Usage:
 *   node patch-versioned-sidebars.js          # patch (prebuild)
 *   node patch-versioned-sidebars.js restore   # restore (postbuild)
 */

const fs = require('node:fs');
const path = require('node:path');

const sidebarsDir = path.join(__dirname, '..', 'versioned_sidebars');
const restore = process.argv[2] === 'restore';

for (const file of fs.readdirSync(sidebarsDir)) {
  const match = file.match(/^version-(.+)-sidebars\.json$/);
  if (!match) continue;

  const version = match[1];
  const filePath = path.join(sidebarsDir, file);
  const original = fs.readFileSync(filePath, 'utf-8');

  const patched = restore
    ? original.replace(new RegExp(`RFCP-Syllabus-${version.replace(/\./g, '\\.')}\\.pdf`, 'g'), 'RFCP-Syllabus-__VERSION__.pdf')
    : original.replace(/__VERSION__/g, version);

  if (patched !== original) {
    fs.writeFileSync(filePath, patched);
  }
}
