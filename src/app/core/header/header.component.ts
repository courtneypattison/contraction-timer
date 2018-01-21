import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Contraction Timer';

  constructor() { }

  ngOnInit() {
  }

}
