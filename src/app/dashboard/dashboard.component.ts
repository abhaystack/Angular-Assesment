import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dataOne={
    image:"",
    text:"Dashboard"
  };
  dataTwo={
    image:"",
    text:"Your Profile"
  };
  dataThree={
    image:"",
    text:"Orders"
  };
  dataFour={
    image:"",
    text:"Your Cart"
  };
  textHeader="Stir Fry Pasta";
  textParagraph="The in-house pasta and chicken by chef Moose";
  textCost="N1000.00";
  contentOne=["img1","img2","img3"];
  contentTwo=["img4","img5","img6"]
}
