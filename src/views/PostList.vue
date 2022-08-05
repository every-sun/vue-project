<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <WithTabs :tabItems="tabItems" :currentTab="currentTab" @onTabItemClick="onTabItemClick" />
  <div class="flow-root">
  <ul v-if="currentTab==='all'" role="list">
    <SimpleWithIcon v-for="post in allList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  <ul v-else-if="currentTab==='false'" role="list">
    <SimpleWithIcon v-for="post in proceedingList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  <ul v-else role="list">
    <SimpleWithIcon v-for="post in completedList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title, completed: post.completed?'작성완료':'작성중' }" component="PostDetail"/>
  </ul>
  </div>
  <button @click="goToList" class="mt-10">사용자 목록</button>
</template>
<script setup>
  import {ref} from 'vue';
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import {router} from "@/router";
  import WithTabs from "@/components/WithTabs";
  import SimpleWithIcon from "@/components/SimpleWithIcon";
  const store = useStore();
  const route = useRoute();

  const tabItems = [{value: 'all', name: '전체'}, {value: 'false', name: '작성중'}, {value:'true', name:'작성완료'} ];
  const currentTab = ref('all');

  const dataList = store.state.todoList.data;

  const allList = dataList.filter(v=>v.userId===Number(route.params.userId));
  const proceedingList =  dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===false);
  const completedList = dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===true);

  const onTabItemClick = item => {
    currentTab.value = item;
    console.log(item, currentTab.value);
  }

  const goToList =  () => {
    router.push({name: 'Home'})
  }

</script>