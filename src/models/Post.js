import {Model} from "@vuex-orm/core"
import Comment from "@/models/Comment";

export default class Post extends Model {
    static entity = 'posts'
    static fields(){
        return {
            userId: this.attr(null),
            id: this.uid(),
            title: this.string(''),
            completed: this.boolean(false),
            comments: this.hasMany(Comment, 'postId')
        }
    }
}