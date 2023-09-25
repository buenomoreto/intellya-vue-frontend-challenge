import { api } from '@/config/axios'
import { User } from '@/ts/interface/user'

export default function useUserService() {
  const getUsers = async () => {
    const response = await api.get('/users')

    const users = response.data.map((user: User) => ({
      ...user,
      route: `/user/${user.id}`
    }))

    return users
  }

  const getUser = async (id: number | string) => {
    const response = await api.get('/users')
    const user = response.data.filter((user: User) => user.id == id)[0]

    return user
  }

  return {
    getUsers,
    getUser
  }
}
