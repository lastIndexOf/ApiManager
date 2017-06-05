const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

const mongoose = require('mongoose')

const Doc = require('./Models/doc.js')

mongoose.connect('mongodb://localhost:27017/apiManager', err => {
  if (err)
    console.error(err)
  else {
    console.log('connect to databse success')
  }
})

let win

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})

ipcEventHandler()

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

function ipcEventHandler() {
  ipcMain.on('create-new-doc', async (e, title) => {
    let newDoc = new Doc({ title })

    try {
      await newDoc.save()
    } catch(e) {
      swal('', e.message, 'error')
    }
  }) 
}
