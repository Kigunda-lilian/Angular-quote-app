import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0,"Jane", "Nelson Mandela", "The greatest glory in living lies not in never falling, but in rising every time we fall.", 0, 0, new Date()),
    new Quote(1,"Jane", "Walt Disney", "The way to get started is to quit talking and begin doing. ", 0, 0, new Date()),
    new Quote(2,"Jane", "Steve jobs", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 0, 0, new Date()),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(quote: Quote) {
    // @ts-ignore
    quote.index = quotes.length;
    this.quotes.push(quote)
    console.log(quote);
    console.log(this.quotes);
  }

  upVoteQuote(quote: Quote) {
    this.quotes[quote.index].upVotes = quote.upVotes;
  }

  downVoteQuote(quote: Quote) {
    this.quotes[quote.index].downVotes = quote.downVotes;
  }
}
