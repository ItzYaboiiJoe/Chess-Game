// main.js
const { app, BrowserWindow } = require('electron');
const Stockfish = require('./stockfish.js');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');

  const stockfish = new Stockfish('C:\\Users\\ItzYaboiiJoe\\Desktop\\VSCodes\\Chess Game\\stockfish\\stockfish-windows-x86-64-avx2.exe');

  stockfish.sendCommand('uci');

  mainWindow.on('closed', function () {
    mainWindow = null;
    
    stockfish.stockfishProcess.kill();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
