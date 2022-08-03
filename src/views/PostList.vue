<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <div class="flex mb-[30pxx] gap-0.5">
    <button @click="filterPostList">전체</button>
    <button @click="filterPostList">작성중</button>
    <button @click="filterPostList">완료</button>
  </div>
<!--  <p>{{ postList }}</p>-->
  <ul>
    <list-item v-for="post in postList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
</template>
<script setup>
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import ListItem from "@/components/ListItem";

  const store = useStore();
  const route = useRoute();

  const dataList = store.state.todoList.data;
  let postList = dataList.filter(v=>v.userId===Number(route.params.userId));
  const filterPostList = event => {
    const state = event.target.innerText;
    if(state==='전체'){
      postList = dataList.filter(v=>v.userId===Number(route.params.userId))
    }else if(state==='작성중'){
      postList = dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===false);
    }else{
      postList = dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===true);
    }
    console.log(postList);
  }
</script>