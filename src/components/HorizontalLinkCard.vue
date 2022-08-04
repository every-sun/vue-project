<template>
    <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <div class="flex-1 min-w-0">
        <router-link class="focus:outline-none" :to="{name : props.component, params: {userId : props.info.id}}">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ props.info.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            email: {{ props.info.email }}
          </p>
          <p class="text-sm text-gray-500 truncate">
           phone: {{ props.info.phone }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ props.info.company }}
          </p>
        </router-link>
      </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps({
  info: {
    type: Object
  },
  component: {
    type: String
  }
})

</script>