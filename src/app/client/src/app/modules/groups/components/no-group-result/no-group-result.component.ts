import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-group-result',
  templateUrl: './no-group-result.component.html',
  styleUrls: ['./no-group-result.component.scss']
})
export class NoGroupResultComponent implements OnInit {
@Input() noMember = false;
@Input() msg;
  constructor() { }

  ngOnInit() {
  }

}
