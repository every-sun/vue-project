<template>
 <Suspense>
    <template #default>
    <test-component />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<!--  {{todoList}}-->
<script setup>

import TestComponent from "@/components/TestComponent";
</script>