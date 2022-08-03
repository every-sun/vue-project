<template>
  <p>{{ todoList }}</p>
</template>
<script setup>
import {useStore} from "vuex";
import {fetchTodoList} from "@/api";
const store = useStore();
const fetchData = await fetchTodoList();
store.commit("setData", fetchData);
const todoList = store.state.todoList.data;
</script>