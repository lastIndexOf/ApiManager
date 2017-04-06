const { 
  app, 
  BrowserWindow,
  globalShortcut,
  ipcMain: ipc
} = require('electron')

const request = require('superagent')
let win = null

app.setName('Job Maps')
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
console.log(app.getLocale())
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