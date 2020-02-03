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
        label: "Project",
        url: "/project"
      },
      {
        label: "Scenario",
        url: "/project"
      },
      {
        label: "Segment",
        url: "/segment"
      },
      {
        label: "Estimate",
        url: ""
      }
    ];
  }
}
