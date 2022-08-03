<template>
  <p>{{ fetchData }}</p>
</template>
<script setup>
// import {useStore} from "vuex";
import {fetchTodoList} from "@/api";
// const store = useStore();
const fetchData = await fetchTodoList();
// store.commit("setData", [1, 1, 2]);
// const todoList = store.state.data;
// console.log('todoList: ', todoList);
</script>