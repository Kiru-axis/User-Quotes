export class Quote {
      
    showDescription: boolean;
    constructor(public id: number,public author: string,public description: string,public completeDate: Date, public upvote:number, public downvote:number){
       this.showDescription=false;
  }
}
