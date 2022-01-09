import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from "../quote";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;
  constructor() { }

  @Output() upVoteQuoteEvent = new EventEmitter<Quote>();

  ngOnInit(): void {
  }

  upVoteQuote() {
    this.quote.upVotes++;
    this.upVoteQuoteEvent.emit(this.quote);
  }
}
