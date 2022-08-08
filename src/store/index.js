import {createStore} from 'vuex';
import {todoList} from "@/store/modules/todoList";
import createPersistedState from "vuex-persistedstate";
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
        todoList
    },
    plugins: [createPersistedState(), VuexORM.install(database)]
})