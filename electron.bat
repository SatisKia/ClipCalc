cd htdocs

call electron-packager . ClipCalc --app-version=6.5.4 --electron-version=24.1.3 --platform=win32 --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=./favicon.ico --overwrite
@echo on

cd ..

del /Q htdocs\ClipCalc-win32-x64\resources\app\icon.iconset\*.*
rd htdocs\ClipCalc-win32-x64\resources\app\icon.iconset

del htdocs\ClipCalc-win32-x64\resources\app\All.debug.js
del htdocs\ClipCalc-win32-x64\resources\app\clip.debug.js
del htdocs\ClipCalc-win32-x64\resources\app\guide.html
del htdocs\ClipCalc-win32-x64\resources\app\guide_e.html
del htdocs\ClipCalc-win32-x64\resources\app\icon.icns
del htdocs\ClipCalc-win32-x64\resources\app\Main.debug.js

copy History.txt htdocs\ClipCalc-win32-x64\
copy ReadMe.txt htdocs\ClipCalc-win32-x64\

pause
