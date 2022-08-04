<template>
 <Suspense>
    <user-list-item-group />
    <template #fallback>
      <div class="flex items-center justify-center gap-3">
        <span class="w-6 h-6 bg-blue-100 rounded-full animate-bounce" />
        <span class="w-4 h-4 bg-blue-300 rounded-full animate-bounce" />
        <span class="w-5 h-5 bg-blue-400 rounded-full animate-bounce" />
      </div>
    </template>
  </Suspense>
</template>
<script setup>
  import UserListItemGroup from "@/components/UserListItemGroup";
</script>