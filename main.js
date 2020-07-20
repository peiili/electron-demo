const { app, BrowserWindow } = require("electron");
// const event  = require('./event')
function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    webPreferences: {
      // 浏览器解析require（）
      nodeIntegration: true,
    },
  });
  win.loadFile("./index.html");
  // win.loadURL("https://www.google.com");
  // win.webContents.openDevTools();
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("active", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
