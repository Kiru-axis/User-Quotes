import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = "Quotes"

  quotes: Quote [] = [
    new Quote( 1 ,"Nelson Mandela",  "You can't foresee all the consequences of your actions - But that's no excuse to do nothing.",new Date(2019,6,9),0, 0),
    new Quote( 2, "Robert Mugabe", "It is the peculiar quality of a fool to perceive the faults of others and to forget his own." ,new Date(2011,6,9) ,0, 0),
  ];

  

//  toggle=false;

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
      // this.toggle=!this.toggle;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
      
      let toDelete = confirm(`Are you sure you want to delete by ${this.quotes[index].author}?`)

      
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    let cDate = new Date(quote.completeDate); //Add new variable to hold the input from the form as date.
    quote.completeDate = new Date(cDate.getFullYear(), cDate.getMonth(), cDate.getDate()); //Convert the date being passed to the Goal object to the correct format (YYYY, MM, DD).
    this.quotes.push(quote);
}
  constructor() { }

  ngOnInit(): void {
  }
  

}
