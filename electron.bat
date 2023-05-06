cd htdocs

call electron-packager . ClipCalc --app-version=6.5.3 --electron-version=24.1.3 --platform=win32 --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=./favicon.ico --overwrite

cd ..

del htdocs\ClipCalc-win32-x64\resources\app\All.debug.js
del htdocs\ClipCalc-win32-x64\resources\app\clip.debug.js
del htdocs\ClipCalc-win32-x64\resources\app\guide.html
del htdocs\ClipCalc-win32-x64\resources\app\guide_e.html
del htdocs\ClipCalc-win32-x64\resources\app\Main.debug.js
copy History.txt htdocs\ClipCalc-win32-x64\
copy ReadMe.txt htdocs\ClipCalc-win32-x64\

pause
