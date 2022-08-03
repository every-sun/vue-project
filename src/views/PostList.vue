<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  {{postList}}
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  const store = useStore();
  const route = useRoute();
  const dataList = store.state.todoList.data;
  console.log(dataList);
  const postList = dataList.filter(v=>v.id===Number(route.params.userId));
</script>