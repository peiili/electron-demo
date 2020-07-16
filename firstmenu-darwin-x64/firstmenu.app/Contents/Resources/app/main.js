const { app, BrowserWindow, Menu } = require("electron");
console.log(app.name);
// const event  = require('./event')
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    webPreferences: {
      // 浏览器解析require（）
      nodeIntegration: true,
    },
  });
  win.loadFile("./index.html");
  // win.loadURL('https://www.google.com')
  win.webContents.openDevTools();
  // 创建菜单对象
  const template = [
    {
      // 第一个菜单开发环境不会生效
      label: app.name,
      submenu: [
        {
          label: "关于",
          role: "about",
          click: () => {
            var aboutWin = new BrowserView({
              width: "300",
              height: "200",
              parent: win,
              modal: true,
            });
            aboutWin.webContents.loadURL("https://www.baidu.com");
          },
        },
        {
          // 分割线
          type: "separator",
        },
        {
          label: "关闭",
          role: "close",
          click: () => {
            win.close();
          },
        },
      ],
    },
    {
      label: "编辑",
      submenu: [
        {
          label: "复制",
          accelerator: "Command+C",
          click: () => {
            win.webContents.insertText("复制");
          },
        },
        {
          label: "查找",
          accelerator: "Command+F",
          submenu: [
            {
              label: "选择",
              type: "checkbox",
              click: () => {
                win.webContents.insertText("选择");
              },
            },
          ],
          click: () => {
            win.webContents.insertText("查找");
          },
        },
        {
          label: "替换",
          accelerator: "Command+R",
          click: () => {
            win.webContents.insertText("替换");
          },
        },
        {
          label: "选择",
          type: "checkbox",
          click: () => {
            win.webContents.insertText("选择");
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  // 安装应用
  Menu.setApplicationMenu(menu);
  win.on("closed", () => {
    console.log("closed");
    win = null;
  });
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
module.export = win;
