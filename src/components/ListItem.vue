<template>
  <router-link :to="{name : 'PostList', params: {userId : props.item}}">{{props.item}}</router-link>
</template>
<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item: {
    type: Object
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