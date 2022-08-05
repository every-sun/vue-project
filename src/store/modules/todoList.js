export const todoList = {
    state: {
        data: [],
        userList: [],
        currentPostId: 0,
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
        setCurrentPostId(state, value){
            state.currentPostId = value;
        },
        setCommentList(state, value){
            state.commentList = value;
        }
    },
    actions: {
    }
}