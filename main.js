const {
  app,
  BrowserWindow,
  Menu,
  Tray
} = require('electron')

let win
let content
let appIcon

app.setName('Job Maps')
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

/**
 * 操作函数
 */
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ddd',
    show: false
  })
  win.loadURL(`file://${ __dirname }/index.html`)

  content = win.webContents  
  nextHandle(content)
  win.openDevTools()
  win.on('ready-to-show', () => {
    win.show()
  })
  win.on('closed', () => {
    win = null
  })
} 

function nextHandle (content) {
  content.on('cursor-changed', e => {
    console.log(content.printToPDF)
  })
  appIcon = new Tray('./logo1.png')
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  appIcon.setToolTip('This is my application.')
  appIcon.setContextMenu(contextMenu)
}