<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>

  <WithTabs :tabItems="tabItems" :currentTab="currentTab" @onTabItemClick="onTabItemClick" />

<!--  <div class="flex mb-[30px] justify-around rounded-lg overflow-hidden">-->
<!--    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='all'}" @click="onTabMenuClick">전체</button>-->
<!--    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='false'}" @click="onTabMenuClick">작성중</button>-->
<!--    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='true'}" @click="onTabMenuClick">완료</button>-->
<!--  </div>-->
  <ul v-if="currentTab==='all'">
    <list-item v-for="post in allList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
  <ul v-else-if="currentTab==='false'">
    <list-item v-for="post in proceedingList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
  <ul v-else>
    <list-item v-for="post in completedList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
  <button @click="goToList">사용자 목록</button>
</template>
<script setup>
  import {ref} from 'vue';
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import ListItem from "@/components/ListItem";
  import {router} from "@/router";
  import WithTabs from "@/components/WithTabs";

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