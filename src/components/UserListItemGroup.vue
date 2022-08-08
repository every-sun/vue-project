<template>
  <h1>사용자 목록 (총 유저: {{userList.length}}명)</h1>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <horizontal-link-card v-for="user in userList" :key="user.id" :info="{id: user.id, name: user.name, email: user.email, phone: user.phone, company: user.company.name}" component="PostList" />
  </div>
</template>
<script setup>
  import {fetchTodoList, fetchUserList} from "@/api";
  import HorizontalLinkCard from "@/components/HorizontalLinkCard";
  import User from "@/models/User";
  import Post from "@/models/Post";

  const fetchData = await fetchTodoList();
  const fetchUserData = await fetchUserList();

  for(let i=0; i<fetchUserData.length; i++){
    User.insert({
      data: fetchUserData[i]
    })
  }

  for(let i=0; i<fetchData.length; i++){
    Post.insert({
      data: fetchData[i]
    })
  }

  const userList = User.all();
</script>

