<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <list-item v-for="post in postList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import ListItem from "@/components/ListItem";
  const store = useStore();
  const route = useRoute();
  const dataList = store.state.todoList.data;
  console.log(dataList);
  const postList = dataList.filter(v=>v.userId===Number(route.params.userId));
</script>