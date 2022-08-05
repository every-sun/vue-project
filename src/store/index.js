import {createStore} from 'vuex';
import {todoList} from "@/store/modules/todoList";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        todoList
    },
    plugins: [createPersistedState()]
})