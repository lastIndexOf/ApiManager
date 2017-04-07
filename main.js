const { 
  app, 
  BrowserWindow,
  globalShortcut,
  ipcMain: ipc,
  dialog,
  clipboard,
  session
} = require('electron')

let win = null
let child = null

app.setName('Job Maps')
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

ipc.on('cookie', (e, ...msgs) => {
  session.defaultSession.cookies.set({
    url: 'https://localhost.com',
    name: 'name',
    value: 'value'
  }, err => {
    if (err) console.error(err)
    session.defaultSession.cookies.get({name: 'name'}, (err, cookies) => {
      console.log(cookies)
    })
  })
})
/*
  操作函数
*/
function createWindow() {
  win = new BrowserWindow({ 
    width: 800, 
    hgith: 600, 
    show: false,
    backgroundColor: '#ddd',
    // autoHideMenuBar: true,
    disableAutoHideCursor: true,
    transparent: true
  })

  child = new BrowserWindow({
    width: 600,
    height: 400,
    parent: win,
    dialog: true
  })

  win.loadURL(`file://${ __dirname }/index.html`)

  win.openDevTools()

  registerKeys()
  win.once('ready-to-show', () => {
    console.log(1)
    win.show()
  })
  child.on('closed', () => {
    child = null
  })
  win.on('closed', () => {
    win = null
  })
}

function registerKeys() {
  globalShortcut.register('Ctrl+3', () => {
    console.log(1)
  })
}