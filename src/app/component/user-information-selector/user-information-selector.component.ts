import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserCalculateDataValue } from "src/app/Interface/user-calculate-data-value";

@Component({
  selector: "app-user-information-selector",
  templateUrl: "./user-information-selector.component.html",
  styleUrls: ["./user-information-selector.component.css"]
})
export class UserInformationSelectorComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  maximumSelectDate: Date = new Date(Date.now());
  userSelectedBirthday: Date;

  selectedLastNumberValue: number = 1;

  isCalculateButtonClicked: boolean = false;

  isSelectedValue1: boolean = true;
  isSelectedValue3: boolean = false;
  isSelectedValue5: boolean = false;
  isSelectedValue7: boolean = false;
  isSelectedValue9: boolean = false;

  userBirthdayAndSelectedNumber: UserCalculateDataValue = {
    selectedNumber: this.selectedLastNumberValue,
    userBirthday: this.userSelectedBirthday,
    isCalculateButtonClicked: this.isCalculateButtonClicked
  };

  ngOnInit() {}

  userLuckyNumberChange() {
    if (
      this.userSelectedBirthday == undefined ||
      this.userSelectedBirthday == null
    ) {
      return;
    }

    this.isCalculateButtonClicked = true;

    this.userBirthdayAndSelectedNumber = {
      selectedNumber: this.selectedLastNumberValue,
      userBirthday: this.userSelectedBirthday,
      isCalculateButtonClicked: this.isCalculateButtonClicked
    };
  }

  userBirthdaySelect() {
    if (
      this.userSelectedBirthday == undefined ||
      this.userSelectedBirthday == null
    ) {
      this.toastr.warning("Lütfen doğum tarihinizi seçiniz!", "");
      return;
    }

    this.isCalculateButtonClicked = true;

    this.userBirthdayAndSelectedNumber = {
      selectedNumber: this.selectedLastNumberValue,
      userBirthday: this.userSelectedBirthday,
      isCalculateButtonClicked: this.isCalculateButtonClicked
    };
  }

  luckyNumberChange(selectedNumberValue: number) {
    switch (selectedNumberValue) {
      case 1:
        this.isSelectedValue1 = true;
        this.isSelectedValue3 = false;
        this.isSelectedValue5 = false;
        this.isSelectedValue7 = false;
        this.isSelectedValue9 = false;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 1;
        break;
      case 3:
        this.isSelectedValue1 = false;
        this.isSelectedValue3 = true;
        this.isSelectedValue5 = false;
        this.isSelectedValue7 = false;
        this.isSelectedValue9 = false;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 3;
        break;
      case 5:
        this.isSelectedValue1 = false;
        this.isSelectedValue3 = false;
        this.isSelectedValue5 = true;
        this.isSelectedValue7 = false;
        this.isSelectedValue9 = false;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 5;
        break;
      case 7:
        this.isSelectedValue1 = false;
        this.isSelectedValue3 = false;
        this.isSelectedValue5 = false;
        this.isSelectedValue7 = true;
        this.isSelectedValue9 = false;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 7;
        break;
      case 9:
        this.isSelectedValue1 = false;
        this.isSelectedValue3 = false;
        this.isSelectedValue5 = false;
        this.isSelectedValue7 = false;
        this.isSelectedValue9 = true;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 9;
        break;
      default:
        this.isSelectedValue1 = true;
        this.isSelectedValue3 = false;
        this.isSelectedValue5 = false;
        this.isSelectedValue7 = false;
        this.isSelectedValue9 = false;
        this.userBirthdayAndSelectedNumber.selectedNumber = this.selectedLastNumberValue = 1;
        break;
    }

    this.userLuckyNumberChange();
  }
}
