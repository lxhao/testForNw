//hide index.html window
var mainWindow = nw.Window.get();
mainWindow.hide();


var windowProperties = {
    width: nw.App.manifest.window.width,
    height: nw.App.manifest.window.height,
    min_width: nw.App.manifest.window.min_width,
    min_height: nw.App.manifest.window.min_height
};


//open a new window
function openAppWindow(onlineURL) {
    nw.Window.open(onlineURL, windowProperties, function (win) {
        nw.App.on('reopen', function () {
            win.show();
        });
        win.window.onload = function () {
            win.maximize();
        };
    });
}

if (window.process) {
    mainWindow.maximize();
    openAppWindow("tab.html");
    process.on('uncaughtException', function (err) {
        console.error('uncaughtException:', err);
        console.error(err.stack);
    });
}
