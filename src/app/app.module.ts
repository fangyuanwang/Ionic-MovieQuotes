import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { QuoteDetailPageModule } from "../pages/quote-detail/quote-detail.module";
import { ListPageModule } from "../pages/list/list.module";

export const firebaseConfig = {
  apiKey: "AIzaSyDAZ2MjujKPAf7gYbglPQsYGEBDK7ODrM0",
  authDomain: "wangf-ionic-moviequotes.firebaseapp.com",
  databaseURL: "https://wangf-ionic-moviequotes.firebaseio.com",
  projectId: "wangf-ionic-moviequotes",
  storageBucket: "wangf-ionic-moviequotes.appspot.com",
  messagingSenderId: "938687432214"
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuoteDetailPageModule,
    ListPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
