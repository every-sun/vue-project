import {Model} from "@vuex-orm/core";
import Post from "@/models/Post";

export default class Comment extends Model {
    static entity = "comments"
    static fields(){
        return {
            postId: this.attr(null),
            id: this.uid(),
            name: this.string(''),
            email: this.string(''),
            body: this.string(''),
            post: this.belongsTo(Post, 'postId')
        }
    }
}