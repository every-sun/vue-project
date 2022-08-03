<template>
 <Suspense>
    <template #default>
    <data-fetch />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<!--  {{todoList}}-->
<script setup>

import DataFetch from "@/components/DataFetch";
</script>