import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-griditem',
  templateUrl: './griditem.component.html',
  styleUrls: ['./griditem.component.css']
})
export class GriditemComponent implements OnInit {

  @Input()
  item;

  constructor() { }

  ngOnInit() {
  }

}
