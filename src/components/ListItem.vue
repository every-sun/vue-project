<template>
  <router-link :to="{name : props.component, params: {userId : props.item.userId, id: props.item.postId}}">{{props.item.print}}</router-link>
</template>
<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item: {
    type: Object
  },
  component:{
    type: String
  }
})
</script>
<style scoped>
  a {
    display: block;
    text-decoration: none;
    color: black;
    border: 1px solid #eee;
    text-align: center;
    margin: 4px;
  }
  a:hover{
    background: #ddd;
    color: #fff;
  }
</style>