import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeOffEnabled: boolean = true;

  handleTakeOff(rocketImage: HTMLElement) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );

    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
      rocketImage.style.bottom = "10px";
    }
  }

  handleLand(rocketImage: HTMLElement) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage: HTMLElement) {
    let result = window.confirm("Are you sure you want to abort the mission?");

    if (result) {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage: HTMLElement, direction: string) {
    let movement: string;
    if (direction === "right") {
      movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      console.log(this.width);
    } else if (direction === "left") {
      movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === "up") {
      movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else {
      movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  warning(rocketImage: HTMLElement, background: HTMLElement) {
    let topWarning = background.offsetHeight - 75 - 30;
    let bottomWarning = 30;
    let leftWarning = 30;
    let rightWarning = background.offsetWidth - 75 - 30;

    let topPosition = parseInt(rocketImage.style.bottom);
    let leftPosition = parseInt(rocketImage.style.left);
    if (topPosition >= topWarning || topPosition <= bottomWarning || leftPosition <= leftWarning || leftPosition >= rightWarning) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}
