export const todoList = {
    state: {
        data: [],
        userList: [],
        commentList: []
    },
    getters: {
    },
    mutations: {
        setData(state, value){
            state.data = value;
        },
        setUserList(state, value){
            state.userList = value;
        },
        setCommentList(state, value){
            state.commentList = value;
        }
    },
    actions: {
    }
}