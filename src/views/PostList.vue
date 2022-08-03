<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <div id="tab-menu">
    <button class="menu-item">전체</button>
    <button class="menu-item">작성중</button>
    <button class="menu-item">완료</button>
  </div>
  <list-item v-for="post in postList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import ListItem from "@/components/ListItem";

  const store = useStore();
  const route = useRoute();

  const dataList = store.state.todoList.data;
  const postList = dataList.filter(v=>v.userId===Number(route.params.userId));
</script>
<style scoped>
  #tab-menu{
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 30px;
  }
  .menu-item{
    all: unset;
    cursor: pointer;
    border: 1px solid #5b8cb7;
    border-radius: 6px;
    padding: 4px;
  }
  .menu-item:active{
    background: #5b8cb7;
    color: #fff;
  }
</style>