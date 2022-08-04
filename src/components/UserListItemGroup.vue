<template>
  <h1>사용자 목록 (총 유저: {{userList.length}}명)</h1>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <horizontal-link-card v-for="user in userList" :key="user.id" :info="{id: user.id, name: user.name, email: user.email, phone: user.phone, company: user.company.name}" component="PostList" />
  </div>
</template>
<script setup>
  import {useStore} from "vuex";
  import {fetchTodoList, fetchUserList} from "@/api";
  import HorizontalLinkCard from "@/components/HorizontalLinkCard";

  const store = useStore();
  const fetchData = await fetchTodoList();

  const fetchUserData = await fetchUserList();

  store.commit("setData", fetchData);
  store.commit("setUserList", fetchUserData);

  const userList = store.state.todoList.userList;
</script>

