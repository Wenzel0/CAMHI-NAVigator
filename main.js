const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

    const win = new BrowserWindow({

        width: 1280,
        height: 720,
        minWidth: 500,
        minHeight: 700,

        autoHideMenuBar: true,

        icon: path.join(__dirname, "Assets", "Icons", "favicon.png"),

        webPreferences: {
            contextIsolation: true
        }

    });

    win.loadFile("index.html");

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});