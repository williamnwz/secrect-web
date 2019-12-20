import { Comment } from './comment.model';

export class Post{

    public id : string;
    public description : string;
    public comments: Array<Comment> = [];
    public create : Date;
    public alias : string;
    public colorProfileUsed : string;

    constructor() {
    }
}