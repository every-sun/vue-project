import {Model} from "@vuex-orm/core"
import Post from "@/models/Post"
export default class User extends Model{
    static entity = 'users'
    static fields(){
        return {
            id: this.number(0),
            name: this.string(''),
            username: this.string(''),
            email: this.string(''),
            address: this.attr(null),
            phone: this.string(''),
            website: this.string(''),
            company: this.attr(null),
            posts: this.hasMany(Post, 'userId')
        }
    }
}