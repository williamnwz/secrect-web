import { Comment } from './comment.model';

export class Post{

    public Id : string;
    public Description : string;
    public Comments: Array<Comment> = [];
    public Create : Date;
    public Alias : string;

    constructor() {
    }
}