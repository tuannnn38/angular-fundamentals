import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    h3 {
      color: red
    }
  `]
})
export class ServersComponent implements OnInit {

  name: string = "Bui Thanh Tuan";
  age: number = 23;
  isAvailiable: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
