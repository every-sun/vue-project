<template>
  <div class="flex items-start space-x-4 mt-40">
    <div class="flex-shrink-0">
      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    </div>
    <div class="min-w-0 flex-1">
      <form action="#" class="relative">
        <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea rows="3" name="comment" id="comment" class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm" placeholder="Add your comment..." v-model="message"></textarea>
          <div class="py-2" aria-hidden="true">
            <div class="py-px">
              <div class="h-9" />
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
          <div class="flex-shrink-0">
            <button type="submit"
                    @click="onSubmit"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Post</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {router} from "@/router";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore();
const route = useRoute();
let message = ref("");

const onSubmit = () =>{
  store.dispatch('addComment', {postId: route.params.id, body: message});
  router.go(0);
}


</script>