const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const is = require('electron-is')
const os = require('os')
const reactDevToolsPath = path.join(
  os.homedir(),
  '%LOCALAPPDATA%/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.10.1_0'
)
app.on('ready', async () => {
  // await session.defaultSession.loadExtension(
  //   reactDevToolsPath,
  //   // allowFileAccess is required to load the devtools extension on file:// URLs.
  //   { allowFileAccess: true }
  // )
  let mainWindow = new BrowserWindow({
    window: 1024,
    height: 560,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  const urlLocation = is.dev ? 'http://localhost:3000' : 'dummyurl'
  mainWindow.loadURL(urlLocation)
  // mainWindow.webContents.openDevTools();
})
