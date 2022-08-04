<template>
  <h1>사용자 목록 (총 유저: {{userList.length}}명)</h1>
  <h5 class="text-xl mb-2 text-center  bg-blue-500 text-white">사용자명</h5>
  <ul>
    <list-item v-for="user in userList" :key="user" :item="{userId: user, postId: null, print: user }" component="PostList" />
  </ul>
</template>
<script setup>
import {useStore} from "vuex";
import {fetchTodoList} from "@/api";
import ListItem from "@/components/ListItem";

const store = useStore();
const fetchData = await fetchTodoList();

store.commit("setData", fetchData);
store.dispatch('filterUserList', fetchData);
const userList = store.state.todoList.userList;
</script>