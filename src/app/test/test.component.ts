import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

 @Input('hello') public name;

 @Output() public childevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireevent(){
    this.childevent.emit('tektuts');
 }

}
