<script setup lang="ts">
import DefaultHeader from '../default/DefaultHeader.vue'
</script>

<template>
  <main>
    <DefaultHeader />
    <section>
      <slot name="content" />
    </section>
  </main>
</template>

<style scoped>
section {
  padding-bottom: 30px;
}
</style>
