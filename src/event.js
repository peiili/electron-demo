let remote = require("electron").remote;
let dialog = remote.dialog;

function onClick_OpenFile() {
  const label = document.getElementById("label");
  var options = {};
  options.title = "打开文件";
  // mac os 下弹弹窗标题
  options.message = "打开我的文件";
  // 提交按钮文字
  options.buttonLabel = "选择";
  options.canceled = false;
  // 打开指定类型文件
  options.filters = [
    { name: "图像文件", extensions: ["jpg"] },
    { name: "音频文件", extensions: ["mp3"] },
  ];
  // 默认情况下 使用的绝对目录路径，绝对文件路径或文件名
  options.defaultPath = "／home/yhl/Desktop/web";
  // 打开弹窗后 内容操作行为
  options.properties = [
    "openFile",
    "openDirectory",
    "multiSelections",
    "createDirectory",
  ];

  dialog.showOpenDialog(options).then((res) => {
    label.innerText = res.filePaths.join(",");
  });
}
