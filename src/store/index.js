import {createStore} from 'vuex';
import {todoList} from "@/store/modules/todoList";

export default createStore({
    modules: {
        todoList
    }
})