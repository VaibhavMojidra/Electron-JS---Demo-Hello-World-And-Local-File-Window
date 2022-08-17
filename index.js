const { app, BrowserWindow } = require('electron')

let mainWindow
const createWindow = () => {
    mainWindow = new BrowserWindow({
        title: "Vaibhav Mojidra Electron JS Hello World",
        width: 500,
        height: 600,
    })// to create window
    // mainWindow.loadURL(`file://${__dirname}/app/helloworld.html`)// to load local file window using file://
    mainWindow.loadFile('./app/helloworld.html')// to load local file window using file://
}


app.on('ready', createWindow)