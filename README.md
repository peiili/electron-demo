# electron-demo

1. 创建窗口 BrowserWindow
2. 打开文件对话框 dialog.showOpenDialog(options)
3. 保存对话框 dialog.showSaveDialog(options)
4. 消息对话框 dialog.showMessageBox(options)
5. 创建新窗口 window.open(url[,title][,attributes])
6. 子窗口交互 win.postMessage(message,'\*')
   win.postMessage(message,'\*')
   `eval` 仅传入可执行的 javascript 脚本即可
   `win.eval("label.innerText='hello world'", "\*");`
   使用 `const win = remote.getCurrentWindow();`
   `ipcRenderer.send("close", "窗口已经关闭");`
   向主进程传递消息
   接受子进程传递的修消息

   ```javascript
   pcMain.on("close", (event, str) => {
     // str参数就是子窗口返回的数据
     alert(str);
   });
   ```

   与子进程统通讯时需要使用 remote 模块，仅在主进程中可以用
