md build
md build\tmp
copy htdocs\*.*                build\tmp
copy electron\api.js           build\tmp
copy electron\index.js         build\tmp
copy electron\package_win.json build\tmp\package.json
copy electron\preload.js       build\tmp

cd build
call electron-packager ./tmp ClipCalc --app-version=6.5.5 --electron-version=24.1.3 --platform=win32 --arch=x64 --app-copyright="Copyright (C) SatisKia" --icon=../htdocs/favicon.ico --overwrite
@echo on
cd ..

del build\ClipCalc-win32-x64\resources\app\All.debug.js
del build\ClipCalc-win32-x64\resources\app\clip.debug.js
del build\ClipCalc-win32-x64\resources\app\guide.html
del build\ClipCalc-win32-x64\resources\app\guide_e.html
del build\ClipCalc-win32-x64\resources\app\Main.debug.js

copy History.txt build\ClipCalc-win32-x64\
copy ReadMe.txt build\ClipCalc-win32-x64\

pause
