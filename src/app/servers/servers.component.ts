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
  isClicked:boolean = false;
  names = ['Bui Thanh Tuan', 'Bui Thanh Sang']

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateAge(){
    this.age += 1;
    this.isClicked = true;
  }

  onUpdateName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }

  addName(){
    this.names.push(this.name);    
  }
  
}
