const { contextBridge, ipcRenderer } = require( 'electron' );

contextBridge.exposeInMainWorld( 'electronAPI', {
  updateAlwaysOnTop: ( flag ) => ipcRenderer.on( 'updateAlwaysOnTop', flag ),
  setAlwaysOnTop   : ( flag ) => ipcRenderer.sendSync( 'setAlwaysOnTop', flag ),

  clipboardRead      : ()       => ipcRenderer.sendSync( 'clipboardRead' ),
  clipboardWrite     : ( text ) => ipcRenderer.sendSync( 'clipboardWrite', text ),
  extFuncCachePath   : ()       => ipcRenderer.sendSync( 'extFuncCachePath' ),
  profilePath        : ()       => ipcRenderer.sendSync( 'profilePath' ),
  fsReadExtFuncCache : ()       => ipcRenderer.sendSync( 'fsReadExtFuncCache' ),
  fsWriteExtFuncCache: ( text ) => ipcRenderer.sendSync( 'fsWriteExtFuncCache', text ),
  fsReadProfile      : ()       => ipcRenderer.sendSync( 'fsReadProfile' ),
  fsWriteProfile     : ( text ) => ipcRenderer.sendSync( 'fsWriteProfile', text ),
  isEnglish          : ()       => ipcRenderer.sendSync( 'isEnglish' ),
  platform           : ()       => ipcRenderer.sendSync( 'platform' ),
  shellBeep          : ()       => ipcRenderer.sendSync( 'shellBeep' ),
  version            : ()       => ipcRenderer.sendSync( 'version' ),
} );
