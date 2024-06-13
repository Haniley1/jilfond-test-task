import { User } from '@/model/user';
import { Store, createStore } from 'vuex';

export interface State {
  users: User[];
  usersLoading: boolean;
  selectedUser: User | null;
}

export enum UsersGetterKeys {
  All = "allUsers",
  Loading = "loading",
  Selected = "selectedUser"
}
export enum UsersMutationKeys {
  SetList = 'setUsers',
  SetLoading = 'setLoading',
  SetSelectedUser = 'setSelectedUser'
}

export enum UsersActionKeys {
  FetchAll = "fetchUsers",
  Clear = "clearUserState"
}

export default createStore<State>({
  state: {
    users: [],
    usersLoading: false,
    selectedUser: null
  },
  getters: {
    [UsersGetterKeys.All](state): User[] {
      return state.users
    },
    [UsersGetterKeys.Loading](state): boolean {
      return state.usersLoading
    },
    [UsersGetterKeys.Selected](state): User | null {
      return state.selectedUser
    }
  },
  mutations: {
    [UsersMutationKeys.SetList](state, users: User[]) {
      state.users = users
    },
    [UsersMutationKeys.SetLoading](state, loading: boolean) {
      state.usersLoading = loading
    },
    [UsersMutationKeys.SetSelectedUser](state, user: User) {
      state.selectedUser = user
    }
  },
  actions: {
    async [UsersActionKeys.FetchAll](ctx, username: string) {
      const usernamesArr = username.replaceAll(" ", "").split(",")
      const queryKeyValueArr = usernamesArr.map(item => ["username", item])
      const params = "?" + new URLSearchParams(queryKeyValueArr).toString()

      ctx.commit(UsersMutationKeys.SetLoading, true)
      // TODO: Handle errors
      const response = await fetch(`https://jsonplaceholder.typicode.com/users${params}`)
      const users = await response.json() as User[]

      ctx.commit(UsersMutationKeys.SetLoading, false)
      ctx.commit(UsersMutationKeys.SetList, users)
    },
    [UsersActionKeys.Clear](ctx) {
      ctx.state.users = [];
      ctx.state.selectedUser = null;
    }
  },
  modules: {
  }
})

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
