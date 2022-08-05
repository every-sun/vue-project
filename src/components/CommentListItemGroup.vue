<template>
  <div class="flow-root mt-6">
    <p v-if="commentList.value.length===0">댓글이 없음</p>
    <p class="mb-10 ">총 댓글 수: {{ commentList.value.length }}</p>
    <ul role="list" class="-my-5 divide-y divide-gray-200">
        <li v-for="comment in commentList.value" :key="comment.id" class="py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ comment.name }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{  comment.email }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{  comment.body }}
              </p>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script setup>
import {reactive, watch} from "vue";
import {useStore} from "vuex";
import { useRoute } from 'vue-router';
import {fetchCommentList} from "@/api";

const store = useStore();
const route = useRoute();

let commentList = reactive({value: []});

if(store.state.todoList.commentList.length===0 || store.state.todoList.commentList[0].postId!==Number(route.params.id)){
  const fetchCommentData = await fetchCommentList(route.params.id);
  store.commit("setCommentList", fetchCommentData);
}
commentList.value = store.state.todoList.commentList;



watch(
    ()=>route.params.id,
    async (newId)=>{
      if(newId){
        const fetchCommentData = await fetchCommentList(newId);
        store.commit("setCommentList", fetchCommentData);
        commentList.value =  store.state.todoList.commentList;
      }
    }
)


</script>