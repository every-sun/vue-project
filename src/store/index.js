import {createStore} from 'vuex';
import VuexORM from "@vuex-orm/core"
import Post from "@/models/Post";
import User from "@/models/User";
import Comment from "@/models/Comment"

const database = new VuexORM.Database();
database.register(Post);
database.register(User);
database.register(Comment);

export default createStore({
    modules: {
    },
    plugins: [VuexORM.install(database)]
})