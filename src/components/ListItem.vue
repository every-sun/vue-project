<template>
  <li>
    <router-link class="block border-b border-slate-300 hover:bg-blue-50" :to="{name : props.component, params: {userId : props.item.userId, id: props.item.postId}}">{{props.item.postId}} {{props.item.print}}</router-link>
  </li>
</template>
<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item: {
    type: Object
  },
  component:{
    type: String
  },
})
</script>