<template>
  <h1>게시글 디테일</h1>
  <div class="pb-5 border-b border-gray-200">
    <h3 class="text-lg leading-6 font-medium text-gray-900">{{ post.title }}</h3>
    <p class="mt-2 max-w-4xl text-sm text-gray-500">글번호: {{ post.id }}</p>
    <p class="mt-2 max-w-4xl text-sm text-gray-500">작성자: {{ post.userId }}</p>
    <p class="mt-2 max-w-4xl text-sm text-gray-500">글 상태: {{ post.completed ? '작성완료' : '작성중' }}</p>
  </div>
  <ul class="flex justify-center gap-5 mt-10" role="list">
    <SimpleWithIcon v-if="currentIndex>0" :item="{userId: $route.params.userId, postId: prevId, print: `<이전>${post.title}`, type: 'left', completed:null}" component="PostDetail"/>
    <SimpleWithIcon v-if="currentIndex<postList.length-1" :item="{userId: $route.params.userId, postId: nextId, print: `<다음>${post.title}`, type: 'right', completed:null}" component="PostDetail"/>
  </ul>
  <AddCommentForm />
  <Suspense>
    <CommentListItemGroup />
    <template #fallback>
      <div class="flex items-center justify-center gap-3">
        <span class="w-6 h-6 bg-blue-100 rounded-full animate-bounce" />
        <span class="w-4 h-4 bg-blue-300 rounded-full animate-bounce" />
        <span class="w-5 h-5 bg-blue-400 rounded-full animate-bounce" />
      </div>
    </template>
  </Suspense>
  <button @click="goToList" class="mt-10">목록</button>
</template>
<script setup>
  import {reactive, ref, watch} from "vue";
  import { useRoute } from 'vue-router';
  import {router} from "@/router";
  import SimpleWithIcon from "@/components/SimpleWithIcon";
  import CommentListItemGroup from "@/components/CommentListItemGroup"
  import AddCommentForm from "@/components/AddCommentForm";
  import Post from "@/models/Post";

  const route = useRoute();

  const postList = Post.query().where(post=>{return post.userId===Number(route.params.userId)}).get();
  const currentIndex = ref(postList.findIndex(post=>post.id===Number(route.params.id)));
  const value = {...postList[currentIndex.value]}; //현재 post 데이터 복사
  const post = reactive(value);
  const prevId = ref(postList[currentIndex.value-1]?.id);
  const nextId = ref(postList[currentIndex.value+1]?.id);

  const goToList =  () => { // 목록으로
    router.push({name: 'PostList', params: {userId: route.params.userId}})
  }

  watch(
      ()=>route.params.id,
      async (newId)=>{
        if(newId){
          currentIndex.value = postList.findIndex(post=>post.id===Number(newId));
        }
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