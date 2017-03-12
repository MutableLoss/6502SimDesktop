const { app } = require('electron');
const OSXtemplate = [
  {
    label: 'Application',
    submenu: [
      { label: 'About 6502Desktop', selector: 'orderFrontStandardAboutPanel:' },
      { label: 'Quit', accelerator: 'Command+Q', click: function () { app.quit(); } }
    ]
  }, 
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', accelerator: 'Cmd+Z', selector: 'undo:' },
      { label: 'Redo', accelerator: 'Shift+Cmd+Z', selector: 'redo:' },
      { label: 'Cut', accelerator: 'Cmd+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'Cmd+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'Cmd+V', selector: 'paste:' },
      { label: 'Select All', accelerator: 'Cmd+A', selector: 'selectAll:' }
    ]
  },
  {
    label: 'View',
    submenu: (process.env.NODE_ENV === 'development') ? [
      { label: '&Reload', accelerator: 'Ctrl+R', 
        click() { mainWindow.webContents.reload(); } }, 
      { label: 'Toggle &Full Screen', accelerator: 'F11',
        click() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
      }, 
      { label: 'Toggle &Developer Tools', accelerator: 'Alt+Ctrl+I',
        click() { mainWindow.toggleDevTools(); } }
    ] : [
      { label: 'Toggle &Full Screen', accelerator: 'F11',
        click() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); } }
    ]
  }
]

const PCtemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'Quit', accelerator: 'Alt+F4', click: function () { app.quit(); } }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', accelerator: 'Ctrl+Z', selector: 'undo:' },
      { label: 'Redo', accelerator: 'Shift+Ctrl+Z', selector: 'redo:' },
      { label: 'Cut', accelerator: 'Ctrl+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'Ctrl+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'Ctrl+V', selector: 'paste:' },
      { label: 'Select All', accelerator: 'Ctrl+A', selector: 'selectAll:' }
    ]
  },
  {
    label: 'Help',
    submenu: [
      { label: 'About 6502Desktop', selector: 'orderFrontStandardAboutPanel:' },
    ]
  },
]

module.exports.OSXtemplate = OSXtemplate;
module.exports.PCtemplate = PCtemplate;