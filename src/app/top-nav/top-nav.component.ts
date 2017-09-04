import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() private sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

}
