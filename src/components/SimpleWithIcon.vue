<template>
      <li>
        <router-link :to="{name : props.component, params: {userId : props.item.userId, id: props.item.postId}}" class="relative pb-8">
          <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="['bg-blue-500', 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                <component :is="ThumbUpIcon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <p class="text-sm text-gray-500">
                  {{ props.item.print }} <span class="font-medium text-gray-900">{{ props.item.completed  }}</span>
                </p>
            </div>
          </div>
        </router-link>
      </li>
</template>

<script setup>
import { ThumbUpIcon } from '@heroicons/vue/solid'
import {defineProps} from "vue";
const props = defineProps({
  item: {
    type: Object
  },
  component: {
    type: String
  },
})
</script>