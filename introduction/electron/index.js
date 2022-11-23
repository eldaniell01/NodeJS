const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', create)

function create(params) {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile('index.html')
}