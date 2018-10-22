import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

/**
 * Referência: https://dev.to/michaeljota/integrating-an-angular-cli-application-with-electron---the-ipc-4m18
 */
@Injectable({
  providedIn: 'root'
})
export class IpcService {

  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  private _ipc: IpcRenderer | undefined = void 0;

  public on(channel: string, listener: Function): void {
    if (!this._ipc) {
      return;
    }
    this._ipc.on(channel, listener);
  }

  public send(channel: string, ...args): void {
    if (!this._ipc) {
      return;
    }
    this._ipc.send(channel, ...args);
  }
}
