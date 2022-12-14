import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sudent',
  templateUrl: './sudent.component.html',
  styleUrls: ['./sudent.component.css']
})
export class SudentComponent implements OnInit {
  
  @Input() parentmsg:string;
  @Output() myoutput:EventEmitter<string>=new EventEmitter();
  outputmessage:string="I am child component";
  constructor() { 

    this.parentmsg="";//if don't want to change setting strict to false in tsconfig.json file

  }

  ngOnInit(): void {
    console.log(this.parentmsg);
  }

  sendValues(){
    this.myoutput.emit(this.outputmessage);
  }
}
