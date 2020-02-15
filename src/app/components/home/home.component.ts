import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  breadcrumbs: any;
  constructor() {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "page1",
        url: "/page1"
      },
      {
        label: "page2",
        url: "/page2"
      },
      {
        label: "page3",
        url: ""
      }
    ];
  }
}
