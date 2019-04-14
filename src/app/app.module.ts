import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HollerComponent } from './holler/holler.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { masterFirebaseConfig } from "./api-keys";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AdminComponent } from './admin/admin.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { ReviewComponent } from './review/review.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    HollerComponent,
    BusinessDetailComponent,
    AdminComponent,
    EditBusinessComponent,
    ReviewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
