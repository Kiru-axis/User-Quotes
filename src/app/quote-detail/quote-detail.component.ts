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
  like:number = 0;
  active:boolean;

  nolike:number = 0;
  likes(){
    this.like ++;
  }
  dislike(){
    this.nolike --;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
