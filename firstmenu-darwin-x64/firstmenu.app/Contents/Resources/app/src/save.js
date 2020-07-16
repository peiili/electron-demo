// let remote = require("electron").remote;
// let dialog = remote.dialog;

function onClick_Save() {
  const label = document.getElementById("saveLabel");
  let options = {
    title: "保存",
    buttonLabel: "ok",
    // 保存的文件路径及文件名
    defaultPath: ".",
    // 文件名输入框里label
    nameFieldLabel: "名称",
    // Mac OS
    showsTagField: false,
    filters: [
      { name: "图像文件", extensions: ["jpg", "png"] },
      { name: "音频文件", extensions: ["mp3"] },
      { name: "markdown文件", extensions: ["md"] },
    ],
  };

  dialog.showSaveDialog(options).then((res) => {
    label.innerText = res.filePath;
  });
}
function onClick_Message() {
  let options = {
    title: "提示",
    message: "这是一个很好的开始",
    type: "warning", // none|info|error|question|warning
    buttons: ["好的", "取消", "OK", "CANCEL"],
    detail: "这是额外的信息",
    // checkbox 内容
    checkboxLabel: "已知晓",
    checkbixChecked: false,
  };
  dialog.showMessageBox(options).then((res) => {
    // res.response  点击按钮的索引
    document.getElementById("messagelabel").innerText =
      options.buttons[res.response];
    // res.checkboxChecked 消息弹窗中显示的选择框结果
    document.getElementById("read").checked = res.checkboxChecked;
  });
}
