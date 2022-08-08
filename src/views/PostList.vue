<template>
  <h1>{{ userName }} 님의 게시글 목록</h1>
  <WithTabs :tabItems="tabItems" :currentTab="currentTab" @onTabItemClick="onTabItemClick" />
  <div class="flow-root mt-10">
  <ul v-if="currentTab==='all'" role="list">
    <SimpleWithIcon v-for="post in allList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, type:'list', completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  <ul v-else-if="currentTab==='false'" role="list">
    <SimpleWithIcon v-for="post in proceedingList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, type:'list', completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  <ul v-else role="list">
    <SimpleWithIcon v-for="post in completedList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, type:'list', completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  </div>
  <button @click="goToList" class="mt-10">사용자 목록</button>
</template>
<script setup>
  import {ref} from 'vue';
  import { useRoute } from 'vue-router';
  import {router} from "@/router";
  import WithTabs from "@/components/WithTabs";
  import SimpleWithIcon from "@/components/SimpleWithIcon";
  import Post from "@/models/Post"
  import User from "@/models/User"

  const route = useRoute();

  const userName = User.find(Number(route.params.userId)).name;
  const tabItems = [{value: 'all', name: '전체'}, {value: 'false', name: '작성중'}, {value:'true', name:'작성완료'} ];
  const currentTab = ref('all');

  const allList = Post.query().where((post)=>{return post.userId===Number(route.params.userId)}).get();
  const proceedingList = Post.query().where((post)=>{return post.userId===Number(route.params.userId) && post.completed===false}).get();
  const completedList = Post.query().where((post)=>{return  post.userId===Number(route.params.userId) && post.completed===true}).get();

  const onTabItemClick = item => {
    currentTab.value = item;
  }

  const goToList =  () => {
    router.push({name: 'Home'})
  }

</script>