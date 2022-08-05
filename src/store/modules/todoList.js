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
        addComment(context, payload){
            console.log(context, payload)
            const newComment = {
                postId: payload.postId,
                id: context.state.commentList.length===0? 1 : context.state.commentList[context.state.commentList-1]?.id+1,
                name: 'guest',
                body: payload.body
            }
            const allCommentList = context.state.commentList.concat(newComment);
            context.commit('setCommentList', allCommentList)
        }
    }
}