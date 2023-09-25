<script setup lang="ts">
import { computed } from 'vue'
import { User } from '@/ts/interface/user'
import { useRoute } from 'vue-router'

const route = useRoute()
const { users = [] } = defineProps({ users: { type: Array as () => User[] } })

const searchQuery = computed(() => route.query.search as string | undefined)

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users
  }

  const query = searchQuery.value.toLowerCase()

  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.id.toString().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    )
  })
})
</script>

<template>
  <div>
    <div class="table-content" v-if="filteredUsers.length">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Nível de Acesso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <router-link :to="user.route">Visualizar</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template v-else>
      <span class="notFound">Busca não encontrada.</span>
    </template>
  </div>
</template>

<style scoped>
.notFound {
  font-weight: 600;
  font-size: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
}
th {
  font-weight: 700;
  color: #000;
}
td {
  font-weight: 600;
  color: #9ba3af;
}
td:first-child {
  font-weight: 700;
  color: #000;
}
td:last-child {
  text-align: right;
}
td a {
  font-weight: 700;
  color: #b09e70;
}
th:first-child,
td:first-child {
  border-left: 1px solid #d1d5da;
}
th:last-child,
td:last-child {
  border-right: 1px solid #d1d5da;
}
th,
td {
  border-bottom: 1px solid #d1d5da;
  border-top: 1px solid #d1d5da;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f9fafb;
}

@media (max-width: 1023px) {
  .table-content {
    overflow-x: auto;
    width: 100%;
  }
  table {
    min-width: 600px; /* Adjust this value based on your needs */
  }
}
</style>
