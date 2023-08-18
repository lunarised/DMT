import { Character } from "./characters/characters";
const {dialog} = require('electron')
import * as path from 'path';
import fs from 'fs';
import { loadPlayer } from "./adventure"
import { ipcMain } from "electron";
    
export const loadFile = async()=>{  
    console.log("A");   
    const result = await dialog.showOpenDialog({properties: ["openFile"], filters:[{name: "DMT files", extensions: ["dmt"]}]});
    if(result.canceled) return;
    const loadPath = result.filePaths[0];
    console.log(loadPath);

    const fopen = fs.readFileSync(loadPath,  { encoding: 'utf8', flag: 'r' })
    console.log("SNIGHG");
    console.log(fopen);
    let dataArray = JSON.parse(fopen);

    
    //loadPlayer(dataArray);

}
