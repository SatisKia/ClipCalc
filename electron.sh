#!/bin/bash

cd htdocs

iconutil -c icns icon.iconset
electron-packager . ClipCalc --app-version=6.5.5 --electron-version=24.1.3 --platform=darwin --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=./icon.icns --overwrite

cd ..

rm -r htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/icon.iconset

rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/All.debug.js
rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/clip.debug.js
rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/guide.html
rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/guide_e.html
rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/icon.icns
rm htdocs/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/Main.debug.js
