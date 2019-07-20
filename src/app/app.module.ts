import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import {
  MatToolbarModule,
  MatDatepickerModule,
  MatRippleModule,
  MatNativeDateModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MAT_DATE_LOCALE,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApplicationToolbarComponent } from "./component/application-toolbar/application-toolbar.component";
import { UserInformationSelectorComponent } from "./component/user-information-selector/user-information-selector.component";
import { UserDayInformationCalculateComponent } from "./component/user-day-information-calculate/user-day-information-calculate.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationToolbarComponent,
    UserInformationSelectorComponent,
    UserDayInformationCalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    ToastrModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "tr-TR" },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
