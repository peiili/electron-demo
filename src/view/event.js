const { ipcRenderer, remote } = require("electron");

var label;
function onLoad() {
  console.log("加载完成");
  label = document.getElementById("messageData");
  window.addEventListener("message", function (e) {
    console.log(e);
    label.innerText = e.data;
  });
}
function onClick_Close() {
  const win = remote.getCurrentWindow();
  ipcRenderer.send("close", "窗口已经关闭");
  win.close();
}
window.onload = onLoad;
