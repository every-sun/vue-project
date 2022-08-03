export const todoList = {
    state: {
        data: [],
        userList: []
    },
    getters: {
    },
    mutations: {
        setData(state, value){
            state.data = value;
        },
        setUserList(state, value){
            state.userList = value;
        }
    },
    actions: {
        uniqueUserList(context, payload){
            // 중복 user id 제외
            const userIdList = payload.map(v=>{
                return v.userId
            })
            const userSet = new Set(userIdList);
            context.commit('setUserList', userSet);
        }
    }
}