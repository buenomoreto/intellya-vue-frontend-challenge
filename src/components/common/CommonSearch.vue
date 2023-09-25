<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const query = ref('')

watch(query, (newValue) => {
  const updatedQuery = { ...route.query }

  if (newValue.length === 0) {
    delete updatedQuery.search
  } else {
    updatedQuery.search = newValue
  }

  router.push({ path: route.path, query: updatedQuery })
})
</script>

<template>
  <div class="input-search">
    <img src="@/assets/img/icon-search.png" class="input-search__icon" alt="" />
    <input id="search" type="text" v-model="query" class="input-search__input" placeholder="Buscar" />
  </div>
</template>

<style scoped>
.input-search__icon {
  max-width: 25px;
  max-height: 25px;
}
.input-search {
  padding: 4px 8px;
  border: 1px solid #9ba3af;
  gap: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
}
.input-search__input {
  border: 0;
  font-size: 16px;
  font-weight: 500;
  outline: none;

  &:focus {
    color: #e4ca85;
  }
}
.input-search__input::placeholder {
  font-weight: 500;
  color: #9ba3af;
}
</style>
