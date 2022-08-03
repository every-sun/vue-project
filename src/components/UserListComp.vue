<template>
  <div>
  <h1>사용자 목록</h1>
  <list-item v-for="user in userList" :key="user" :item="user" />
<!--    {{userList}}-->
  </div>
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