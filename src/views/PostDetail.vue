<template>
  <h1>{{ post.title }}</h1>
  <div class="flex flex-col gap-1 border border-slate-300 p-2">
    <p>글번호: {{ post.id }}</p>
    <p>작성자: {{ post.userId }}</p>
    <p>제목: {{ post.title }} </p>
    <p>글 상태: {{ post.completed ? '작성완료' : '작성중' }}</p>
  </div>
  <div class="flow-root">
  <ul class="flex justify-center gap-5 mt-10" role="list">
    <SimpleWithIcon v-if="currentIndex>0" :item="{userId: $route.params.userId, postId: prevId, print: `<이전>${post.title}`, completed:null}" component="PostDetail"/>
    <SimpleWithIcon v-if="currentIndex<postList.length-1" :item="{userId: $route.params.userId, postId: nextId, print: `<다음>${post.title}`, completed:null}" component="PostDetail"/>
  </ul>
  </div>
  <button @click="goToList" class="mt-10">목록</button>
</template>
<script setup>
  import {reactive, ref, watch} from "vue";
  import {useStore} from "vuex";
  import { useRoute } from 'vue-router';
  import {router} from "@/router";
  import SimpleWithIcon from "@/components/SimpleWithIcon";

  const store = useStore();
  const route = useRoute();

  const dataList = store.state.todoList.data;
  const postList = dataList.filter(v=>v.userId===Number(route.params.userId));

  const currentIndex = ref(postList.findIndex(post=>post.id===Number(route.params.id)));
  const value = {...postList[currentIndex.value]}; //현재 post 데이터 복사
  const post = reactive(value);
  const prevId = ref(postList[currentIndex.value-1]?.id);
  const nextId = ref(postList[currentIndex.value+1]?.id);

  const goToList =  () => {
    router.push({name: 'PostList', params: {userId: route.params.userId}})
  }

  watch(
      ()=>route.params.id,
      (newId)=>{
        currentIndex.value = postList.findIndex(post=>post.id===Number(newId));
      }
  )

  watch(
      ()=>currentIndex.value,
      (newIdx)=>{
          post.id = postList[newIdx]?.id;
          post.title = postList[newIdx]?.title;
          post.completed = postList[newIdx]?.completed;
          prevId.value = postList[newIdx-1]?.id;
          nextId.value = postList[newIdx+1]?.id;
      }
  )
</script>