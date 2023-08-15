import { loadFile } from "./charFile"

const { app, Menu, dialog} = require('electron')

const isMac = process.platform === 'darwin'

const template = [
  {
    label: "Menu",
    submenu: [
      {label: 'open',
    click: async ()=>{
      console.log("X");
     loadFile();
    },
  accelerator: "CommandOrControl+O"},
      {label: 'save'}

    ]
  }
]

export const menu = Menu.buildFromTemplate(template)
