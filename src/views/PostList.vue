<template>
  <h1>{{ $route.params.userId }} 님의 게시글 목록</h1>
  <div class="flex mb-[30px] justify-around bg-blue-500 rounded-lg overflow-hidden">
    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='all'}" @click="onTabMenuClick">전체</button>
    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='false'}" @click="onTabMenuClick">작성중</button>
    <button :class="{ 'w-[34%]':true, 'bg-sky-400' : tabMenuStatus==='true'}" @click="onTabMenuClick">완료</button>
  </div>
  <ul v-if="tabMenuStatus==='all'">
    <list-item v-for="post in allList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
  <ul v-else-if="tabMenuStatus==='false'">
    <list-item v-for="post in proceedingList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
  <ul v-else>
    <list-item v-for="post in completedList" :key="post.id" :item="{userId: $route.params.userId, postId: post.id, print: post.title }" component="PostDetail" />
  </ul>
</template>
<script setup>
  import {ref} from 'vue';
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import ListItem from "@/components/ListItem";

  const store = useStore();
  const route = useRoute();

  let tabMenuStatus = ref('all');

  const dataList = store.state.todoList.data;

  const allList = dataList.filter(v=>v.userId===Number(route.params.userId));
  const proceedingList =  dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===false);
  const completedList = dataList.filter(v=> v.userId===Number(route.params.userId) && v.completed===true);

  const onTabMenuClick = event => {
    const state = event.target.innerText;
    if(state==='전체'){
      tabMenuStatus.value = 'all';
    }else if(state==='작성중'){
      tabMenuStatus.value = 'false';
    }else{
      tabMenuStatus.value = 'true';
    }
  }

</script>