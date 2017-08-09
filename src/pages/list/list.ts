import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { MovieQuote } from "../../models/movie-quote";
import { QuoteDetailPage } from "../quote-detail/quote-detail";

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public movieQuotesStream: FirebaseListObservable<MovieQuote[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase,
    public alertCtrl: AlertController) {
      this.movieQuotesStream = this.db.list('/quotes');
  }

  showAddQuoteDialog(): void {
    const prompt = this.alertCtrl.create({
      title: 'Add Quote',
      inputs: [
        {
          name: 'quote',
          placeholder: 'Quote that you like'
        },
        {
          name: 'movie',
          placeholder: 'From movie'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            
          }
        },
        {
          text: 'Add Quote',
          handler: (data:any) => {
            console.log('Saved clicked');
            if (data.quote && data.movie) {
              this.movieQuotesStream.push(data);
            } else {
              console.log("Not a valid MovieQuote");
              return false;
            }
          }
        }
      ]
    });
    prompt.present();
  }

  removeQuote(quoteToDeleteKey: string) {
    this.movieQuotesStream.remove(quoteToDeleteKey);
  }

  pushDetailView(movieQuote: MovieQuote): void {
    this.navCtrl.push(QuoteDetailPage, {key: movieQuote.$key});
  }

}
