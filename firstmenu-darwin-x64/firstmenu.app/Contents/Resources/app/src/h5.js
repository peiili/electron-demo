let win;
function onClick_OpenWidow() {
  win = window.open("./src/view/child.html", "新的页面");
  console.log(win);
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
