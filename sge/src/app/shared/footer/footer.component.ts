import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string;
  yyyy: number;
  constructor() { }

  ngOnInit() {
    this.yyyy = new Date().getFullYear();
  }

}
