import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeoffEnabled = false;
  // bottom = "0px";
  // lefty = "0px";

  handleTakeoff() {
    let result = confirm("Do you want to Takeoff?");
    if (result) {
      this.message = "Shuttle in Flight";
      this.color = "blue";
      this.height += 10000;
      this.takeoffEnabled = true;
    }
  }
  handleLanding() {
    let result = alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    this.takeoffEnabled = false;
  }
  handleMissionAbort() {
    let result = confirm("Do you want to abort?");
    if (result) {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      this.takeoffEnabled = false;
    }
  }
  moveRocket(rocketImage, direction) {
    if (this.takeoffEnabled === true) {
      if (direction === "up") {
        let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
        rocketImage.style.bottom = movement;
        this.height += 10000;
      }
      if (direction === "down") {
        let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
        rocketImage.style.bottom = movement;
        this.height -= 10000;
      }
      if (direction === "right") {
        let movement = parseInt(rocketImage.style.left) + 10 + "px";
        rocketImage.style.left = movement;
        this.width += 10000;
      }
      if (direction === "left") {
        let movement = parseInt(rocketImage.style.left) - 10 + "px";
        rocketImage.style.left = movement;
        this.width -= 10000;
      }
    }
  }
  // up() {
  //   let bottomInt = parseInt(this.bottom);
  //   bottomInt += 10;
  //   this.bottom = bottomInt + "px";
  //   this.height += 10000;
  // }
  // down() {
  //   let bottomInt = parseInt(this.bottom);
  //   bottomInt -= 10;
  //   this.bottom = bottomInt + "px";
  //   this.height -= 10000;
  // }
  // right() {
  //   let leftyInt = parseInt(this.lefty);
  //   leftyInt += 10;
  //   this.lefty = leftyInt + "px";
  // }
  // left() {
  //   let leftyInt = parseInt(this.lefty);
  //   leftyInt -= 10;
  //   this.lefty = leftyInt + "px";
  // }
}
