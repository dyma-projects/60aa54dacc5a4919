import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public exercice: String;
  public color: String;

  constructor() {
    this.exercice = "Exercice 1 Component";
    this.color = "black";
  }

  ngOnInit(): void {}

  public changeColor(): void {
    this.color = "red";
  }
}
