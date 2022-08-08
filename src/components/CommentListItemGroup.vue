<template>
  <AddCommentForm @addComment="addComment"/>
  <div class="flow-root mt-6">
    <p v-if="commentList.value?.length===0">댓글이 없음</p>
    <p class="mb-10 ">총 댓글 수: {{ commentList.value?.length }}</p>
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
              <div class="mt-4" v-if="comment.id!==targetId">
              <button type="button"
                      @click="editComment(comment)"
                      class="inline-flex items-center border border-transparent text-[12px] rounded-md shadow-sm mx-0.5 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">수정</button>
              <button type="button"
                      @click="deleteComment(comment.id)"
                      class="inline-flex items-center border border-transparent text-[12px] font-medium rounded-md mx-0.5 shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">삭제</button>
              </div>
            </div>
          </div>
          <form v-if="comment.id===targetId" class="mb-4">
            <textarea rows="3" class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm" v-model="message"></textarea>
            <button type="submit" @click.prevent="updateComplete(comment)" class="inline-flex items-center border border-transparent text-[12px] font-medium rounded-md mx-0.5 shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">완료</button>
          </form>
        </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from "vue";
import { useRoute } from 'vue-router';
import {fetchCommentList} from "@/api";
import Post from "@/models/Post";
import Comment from "@/models/Comment";
import AddCommentForm from "@/components/AddCommentForm";

const route = useRoute();
const commentList = reactive({value: []})

const message = ref('');
const targetId = ref(0);


if(Comment.all().length===0 || Comment.query().where('postId',  Number(route.params.id)).get().length===0){
  const fetchCommentData = await fetchCommentList(route.params.id);
  for(let i=0; i<fetchCommentData.length; i++){
    await Comment.insert({
      data: fetchCommentData[i]
    })
  }
}
commentList.value = Post.query().where('id', Number(route.params.id)).with('comments').first()?.comments;


watch(
    ()=>route.params.id,
    async (newId)=>{
      if(newId){
        if(Comment.query().where('postId',  Number(route.params.id)).get().length===0){
          const fetchCommentData = await fetchCommentList(route.params.id);
          for(let i=0; i<fetchCommentData.length; i++){
            await Comment.insert({
              data: fetchCommentData[i]
            })
          }
        }
        commentList.value = Post.query().where('id', Number(route.params.id)).with('comments').first()?.comments;
      }
    }
)

const addComment = (message) => {
  Comment.insert({
    data: {
      postId: Number(route.params.id),
      name: '게스트',
      email: 'guest@amuz.co.kr',
      body: message,
    }
  })
  commentList.value = Post.query().where('id', Number(route.params.id)).with('comments').first()?.comments;
  console.log(Comment.all())
}

const deleteComment = (id) => {
  Comment.delete(id);
  commentList.value = Post.query().where('id', Number(route.params.id)).with('comments').first()?.comments;
}

const editComment = (target) => {
  targetId.value = target.id;
  message.value = target.body;
}

const updateComplete = (target) => {
  Comment.update({
    where: target.id,
    data: {
      body: message.value
    }
  })
  targetId.value = 0;
  commentList.value = Post.query().where('id', Number(route.params.id)).with('comments').first()?.comments;
}

</script>