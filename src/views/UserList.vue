<template>
 <Suspense>
    <user-list-comp />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<!--  {{todoList}}-->
<script setup>

import UserListComp from "@/components/UserListComp";
</script>