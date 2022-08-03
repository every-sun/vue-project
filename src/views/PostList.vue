<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <div id="tab-menu">
    <button class="menu-item" @click="filterPostList">전체</button>
    <button class="menu-item" @click="filterPostList">작성중</button>
    <button class="menu-item" @click="filterPostList">완료</button>
  </div>
  <p>{{ postList }}</p>
  <list-item v-for="post in postList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
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