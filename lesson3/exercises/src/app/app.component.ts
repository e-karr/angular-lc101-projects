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
  movementEnabled: [boolean, boolean, boolean, boolean] = [
    false,
    false,
    false,
    false,
  ];

  handleTakeOff(rocketImage: HTMLElement, background: HTMLElement) {
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
      this.disableDirectionButtons(rocketImage, background);
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

  moveRocket(
    rocketImage: HTMLElement,
    direction: string,
    background: HTMLElement
  ) {
    let movement: string;
    if (direction === "right") {
      movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === "left") {
      movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === "up") {
      movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === "down") {
      movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }

    this.warning(rocketImage, background);

    this.disableDirectionButtons(rocketImage, background);
  }

  disableDirectionButtons(rocketImage: HTMLElement, background: HTMLElement) {
    if (parseInt(rocketImage.style.left) >= background.offsetWidth - 75) {
      this.movementEnabled[2] = true;
    } else {
      this.movementEnabled[2] = false;
    }

    if (parseInt(rocketImage.style.left) <= 0) {
      this.movementEnabled[3] = true;
    } else {
      this.movementEnabled[3] = false;
    }

    if (parseInt(rocketImage.style.bottom) >= background.offsetHeight - 75) {
      this.movementEnabled[0] = true;
    } else {
      this.movementEnabled[0] = false;
    }

    if (parseInt(rocketImage.style.bottom) <= 0) {
      this.movementEnabled[1] = true;
    } else {
      this.movementEnabled[1] = false;
    }
  }

  warning(rocketImage: HTMLElement, background: HTMLElement) {
    let topWarning = background.offsetHeight - 75 - 10;
    let bottomWarning = 10;
    let leftWarning = 10;
    let rightWarning = background.offsetWidth - 75 - 10;

    let topPosition = parseInt(rocketImage.style.bottom);
    let leftPosition = parseInt(rocketImage.style.left);
    if (
      topPosition >= topWarning ||
      topPosition <= bottomWarning ||
      leftPosition <= leftWarning ||
      leftPosition >= rightWarning
    ) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}
