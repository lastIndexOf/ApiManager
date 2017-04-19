const {
  app,
  BrowserWindow
} = require('electron')

let win

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

function createWindow() {
  win = new BrowserWindow({
    title: 'Api 前后端管理工具',
    width: 1000,
    height: 600,
    autoHideMenuBar: true,
    transparent: true,
    webPreferences: {},
    show: false
  })

  win.loadURL('http://localhost:8080')

  win.on('ready-to-show', () => {
    win.show()
  })
  win.on('closed', () => {
    win = null
  })
}