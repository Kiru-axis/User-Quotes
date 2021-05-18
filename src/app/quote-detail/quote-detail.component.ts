import { Quote } from './../quote';
import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  //liking events
// active:boolean;


  likes(){
    this.quote.upvote ++;
  }
  dislike(){
    this.quote.downvote --;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
