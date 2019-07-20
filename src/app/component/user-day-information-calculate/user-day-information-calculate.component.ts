import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { UserCalculateDataValue } from "src/app/Interface/user-calculate-data-value";
import { UserCalculatedSpecialDayValues } from "src/app/Interface/user-calculated-special-day-values";

@Component({
  selector: "app-user-day-information-calculate",
  templateUrl: "./user-day-information-calculate.component.html",
  styleUrls: ["./user-day-information-calculate.component.css"]
})
export class UserDayInformationCalculateComponent implements OnInit, OnChanges {
  @Input() userSelectedValues: UserCalculateDataValue;

  dateTimeNow = Date.now();
  userCalculatedSpecialDateAge: UserCalculatedSpecialDayValues;
  userCalculatedSpecialDateAgeArray: number[] = [0, 0, 0, 0, 0, 0];
  userXDayRemember: string[] = ["0", "0", "0", "0", "0", "0"];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (
      this.userSelectedValues != undefined &&
      this.userSelectedValues.userBirthday != undefined &&
      this.userSelectedValues != null &&
      this.userSelectedValues.userBirthday != null
    ) {
      this.calculateDay();
    }
  }

  calculateDay() {
    var xTypeNumber: string = "";

    for (let i = 0; i < 7; i++) {
      for (let y = 0; y < i + 1; y++) {
        xTypeNumber += this.userSelectedValues.selectedNumber + "";
      }

      this.userXDayRemember[i] = xTypeNumber;
      var convertxTypeNumber = +xTypeNumber;
      var convertedDate = convertxTypeNumber * 1000 * 60 * 60 * 24;
      var userNextAgeDate = new Date(this.dateTimeNow + convertedDate);

      xTypeNumber = "";

      // console.log(
      //   userNextAgeDate.getFullYear() +
      //     " - " +
      //     this.userSelectedValues.userBirthday.getFullYear() +
      //     " => " +
      //     (userNextAgeDate.getFullYear() -
      //       this.userSelectedValues.userBirthday.getFullYear())
      // );

      this.userCalculatedSpecialDateAgeArray[i] =
        userNextAgeDate.getFullYear() -
        this.userSelectedValues.userBirthday.getFullYear();
    }
  }
}
