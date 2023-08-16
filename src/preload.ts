// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { loadFile } from "./charFile";


contextBridge.exposeInMainWorld("electronAPI", 
{
    loadState: (callback) => ipcRenderer.on('openedFile', callback)
}
);