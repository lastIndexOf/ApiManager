const electron = require('electron')

const { app, BrowserWindow } = electron

let win

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function createWindow() {
  win = new BrowserWindow({ width: 800, hgith: 600 })

  win.loadURL(`file://${ __dirname }/index.html`)
  
  win.openDevTools()
  win.on('closed', () => {
    win = null
  })
}