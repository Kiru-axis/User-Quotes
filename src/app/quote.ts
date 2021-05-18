export class Quote {
      
    showDescription: boolean;
    constructor(public id: number,public author: string,public description: string,public completeDate: Date){
       this.showDescription=false;
  }
}
