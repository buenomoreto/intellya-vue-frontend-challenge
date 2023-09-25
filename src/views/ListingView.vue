<script setup lang="ts">
import LayoutDefault from '@/components/layout/LayoutDefault.vue'
import useUserService from '@/composables/useUserService'
import { ref, onMounted } from 'vue'
import { User } from '@/ts/interface/user'
import DefaultTableVue from '@/components/default/DefaultTable.vue'

const users = ref<User[]>([])
const { getUsers } = useUserService()

onMounted(async () => {
  users.value = await getUsers()
})
</script>

<template>
  <LayoutDefault>
    <template #content>
      <div class="row">
        <div class="listing-content">
          <h1 class="title">Listagem de Usuário</h1>
          <p class="paragraph">Visualize os usuários que acessam sua plataforma.</p>
        </div>
        <div class="listing-table">
          <DefaultTableVue v-if="Object.keys(users).length" :users="users" />
        </div>
      </div>
    </template>
  </LayoutDefault>
</template>
<style scoped>
.listing-content {
  margin-bottom: 30px;
}
</style>
