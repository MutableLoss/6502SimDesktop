const {app, Menu, BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')

const { OSXtemplate, PCtemplate } = require('./app/electron/menu')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 700, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // mainWindow.webContents.openDevTools()

  if(process.platform === 'darwin') {
    Menu.setApplicationMenu(Menu.buildFromTemplate(OSXtemplate))
  } else if(process.platform !== 'darwin') {
    BrowserWindow.setMenu(Menu.buildFromTemplate(PCtemplate))
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
