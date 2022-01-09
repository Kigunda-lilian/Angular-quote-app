export class Quote {
  constructor(public index:number, public user:string, public author:string, public quote:string,
              public upVotes:number, public downVotes:number, public createdAt:Date) {
  }
}
