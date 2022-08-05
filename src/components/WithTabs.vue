<template>
  <div class="pb-5 border-b border-gray-200 sm:pb-0">
    <h3 class="text-lg leading-6 font-medium text-gray-900">게시글 목록</h3>
    <div class="mt-3 sm:mt-4">
      <div class="sm:hidden">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option v-for="tab in props.tabItems" :key="tab" :selected="tab">{{ tab.value }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8">
          <a v-for="tab in props.tabItems" :key="tab.value" :class="[props.currentTab === tab.value ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer']" :aria-current="tab ? 'page' : undefined" @click="$emit('onTabItemClick', tab.value)">
            {{ tab.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps({
  tabItems : {
    type: Object
  },
  currentTab: {
    type: String
  }
})

</script>