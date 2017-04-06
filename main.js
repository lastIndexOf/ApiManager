const { 
  app, 
  BrowserWindow,
  ipcMain: ipc
} = require('electron')

let win = null

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipc.on('online-status-changed', (e, status) => {
  console.log(status)
})

/*
  操作函数
*/
function createWindow() {
  win = new BrowserWindow({ width: 800, hgith: 600 })

  win.loadURL(`file://${ __dirname }/index.html`)
  
  win.openDevTools()
  win.on('closed', () => {
    win = null
  })
}
