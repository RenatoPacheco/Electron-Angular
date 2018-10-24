import { Component, OnInit } from '@angular/core';
import { IpcService } from 'src/app/services/ipc.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly _ipc: IpcService) {}

  title = 'electron-angular';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  sair(evento: MouseEvent) {
    console.log(event);
    this._ipc.send('ng-sair');
  }

  ngOnInit() {

  }

}
