#!/bin/bash

mkdir build
mkdir build/tmp
cp htdocs/*.*                build/tmp
cp electron/api.js           build/tmp
cp electron/index.js         build/tmp
cp electron/package_osx.json build/tmp/package.json
cp electron/preload.js       build/tmp

cd icns
iconutil -c icns icon.iconset
cd ..

cd build
electron-packager ./tmp ClipCalc --app-version=6.5.5 --electron-version=24.1.3 --platform=darwin --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=../icns/icon.icns --overwrite
cd ..

rm build/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/All.debug.js
rm build/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/clip.debug.js
rm build/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/guide.html
rm build/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/guide_e.html
rm build/ClipCalc-darwin-x64/ClipCalc.app/Contents/Resources/app/Main.debug.js
