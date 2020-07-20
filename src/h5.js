// 与子进程统通讯时需要使用remote模块，仅在主进程中可以用
const { ipcMain } = require("electron").remote;

let win;
function onClick_OpenWidow() {
  // 网络页面需要填写完整的路径
  // win = window.open("http://www.baidu.com", "新的页面");
  // 静态地址需要填写绝对路径
  win = window.open(
    "./src/view/child.html",
    "新的子页面",
    "width=300,height=200,alwaysOnTop=true"
  );
  // let win = window.open(
  //   "https://geekori.com",
  //   "新的页面",
  //   "width=800,height=600"
  // );
}
function onClick_Windowfocus() {
  if (win !== undefined) {
    console.log(win);
    win.focus();
  }
}
function onClick_WindowBlur() {
  if (win !== undefined) {
    console.log(win);
    win.blur();
  }
}
function onClick_WindowCloes() {
  if (win !== undefined) {
    if (win.closed) {
      alert("窗口已关闭");
    } else {
      win.close();
    }
  }
}
function onClick_WindowPrint() {
  if (win !== undefined) {
    console.log("print");
    win.print();
    // win.postMessage("henaho");
  }
}

function onClick_Message() {
  if (win !== undefined) {
    win.postMessage("my data……这是发给子页面的消息", "*");
  }
}
function onClick_evalMessage() {
  if (win !== undefined) {
    win.eval("label.innerText='hello world'", "*");
  }
}
ipcMain.on("close", (event, str) => {
  // str参数就是子窗口返回的数据
  alert(str);
});
