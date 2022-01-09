export class Quote {
  constructor(public user:string, public author:string, public quote:string,
              public upVotes:number, downVotes:number, public createdAt:Date) {
  }
}
