<template>
  <h1>게시글 자세히</h1>
  <div id="post-info">
    <p>글번호: {{ post.id }}</p>
    <p>사용자: {{ post.userId }}</p>
    <p>제목: {{ post.title }} </p>
    <p>글 상태: {{ post.completed ? '작성중' : '작성완료' }}</p>
  </div>
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';

  const store = useStore();
  const route = useRoute();

  const postList = store.state.todoList.data;
  const post = postList.filter(v=>v.id===Number(route.params.id))[0];
  console.log(post)
</script>
<style scoped>
  #post-info{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #post-info > p{
    border: 1px solid #eee;
  }
</style>