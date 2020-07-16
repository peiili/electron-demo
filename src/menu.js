const win = require("./../main");
const { BrowserView } = require("electron");
/**
 * 添加菜单项
 */
const template = [
  {
    label: "文件",
    submenu: [
      {
        label: "关222于",
        role: "about",
        click: () => {
          var aboutWin = new BrowserView({
            width: "300",
            height: "200",
            parent: win,
            modal: true,
          });
          aboutWin.loadUrl("https://www.baidu.com");
        },
      },
      {
        // 分割线
        type: "separator",
      },
    ],
  },
];

module.exports = template;
