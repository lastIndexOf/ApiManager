const { 
  app, 
  BrowserWindow,
  globalShortcut,
  ipcMain: ipc
} = require('electron')

let win = null

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
app.on('before-quit', e => {
  console.log(e)
})
app.on('browser-window-blur', (e, window) => {
  console.log(`blur: ${ window }`)
})
app.on('browser-window-focus', (e, window) => {
  console.log(`focus: ${ window }`)
})
app.on('browser-window-created', (e, window) => {
  console.log(3)
})
/*
  操作函数
*/
function createWindow() {
  win = new BrowserWindow({ width: 800, hgith: 600 })

  win.loadURL(`file://${ __dirname }/index.html`)

  win.openDevTools()
  
  registerKeys()
  win.on('closed', () => {
    win = null
  })
}

function registerKeys() {
  globalShortcut.register('Ctrl+3', () => {
    console.log(1)
  })
}