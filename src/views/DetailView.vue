<script setup lang="ts">
import LayoutDefault from '@/components/layout/LayoutDefault.vue'
import useUserService from '@/composables/useUserService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { User } from '@/ts/interface/user'
import { formatDate } from '@/utils/formatDate'

const route = useRoute()
const user = ref<User>()
const { getUser } = useUserService()

onMounted(async () => {
  user.value = await getUser(route.params.id as string)
})
</script>

<template>
  <LayoutDefault>
    <template #content>
      <div class="row" v-if="user">
        <div class="detail-content">
          <h1 class="title">Usuário nº {{ user.id }}</h1>
          <p class="paragraph">Visualize as informações do usuário solicitado abaixo.</p>
        </div>
        <div class="detail">
          <div class="detail__row">
            <div class="detail__key">Nome</div>
            <div class="detail__label">{{ user.name }}</div>
          </div>
          <div class="detail__row">
            <div class="detail__key">E-mail</div>
            <div class="detail__label">{{ user.email }}</div>
          </div>
          <div class="detail__row">
            <div class="detail__key">Nível de Acesso</div>
            <div class="detail__label">{{ user.role }}</div>
          </div>
          <div class="detail__row">
            <div class="detail__key">Status</div>
            <div class="detail__label">
              <span v-if="user.active">Ativo</span>
              <span v-else>Inativo</span>
            </div>
          </div>
          <div class="detail__row">
            <div class="detail__key">Data de Cadastro</div>
            <div class="detail__label">{{ formatDate(user.created_at) }}</div>
          </div>
        </div>
      </div>
    </template>
  </LayoutDefault>
</template>
<style scoped>
.detail-content {
  margin-bottom: 30px;
}
.detail {
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
.detail__row {
  display: flex;
  align-items: center;
}

.detail__key,
.detail__label {
  width: 100%;
  padding: 20px 20px;
  border-bottom: 1px solid #f3f4f6;
}
.detail__row:last-child .detail__key {
  border-bottom: 0;
}
.detail__row:last-child .detail__label {
  border-bottom: 0;
}
.detail__key {
  font-weight: 700;
  color: #000;
}
</style>
