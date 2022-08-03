<template>
  <h1>게시글 자세히</h1>
  <div class="flex flex-col gap-1">
    <p class="border border-slate-300">글번호: {{ post.id }}</p>
    <p class="border border-slate-300">사용자: {{ post.userId }}</p>
    <p class="border border-slate-300">제목: {{ post.title }} </p>
    <p class="border border-slate-300">글 상태: {{ post.completed ? '작성중' : '작성완료' }}</p>
  </div>
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';

  const store = useStore();
  const route = useRoute();

  const postList = store.state.todoList.data;
  const post = postList.filter(v=>v.id===Number(route.params.id))[0];
</script>