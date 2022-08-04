<template>
 <Suspense>
    <user-list-item-group />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<script setup>
import UserListItemGroup from "@/components/UserListItemGroup";
</script>