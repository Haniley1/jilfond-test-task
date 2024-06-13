<template>
  <div class="sidebar-container">
    <h2 class="header">Поиск сотрудников</h2>
    <input class="search-input" v-model="search" placeholder="Введите id или имя" @input="getUsers" />

    <div v-if="loading || searchTimeoutId > -1">
      Loading...
    </div>
    <template v-else>
      <h2 class="header">Результаты</h2>
      <div v-if="!search">начните поиск</div>
      <div v-else-if="!allUsers.length && searchTimeoutId === -1">ничего не найдено</div>
      <div v-else class="users-list">
        <user-list-item v-for="item of allUsers" :key="item.id" :user="item" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
// Bret, Antonette, Samantha, Karianne, Kamren
import { UsersGetterKeys, UsersActionKeys } from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import UserListItem from "./UserListItem.vue";

export default defineComponent({
  computed: mapGetters([UsersGetterKeys.All, UsersGetterKeys.Loading]),
  components: { UserListItem },
  data() {
    return {
      search: "",
      searchTimeoutId: -1
    }
  },
  methods: {
    getUsers() {
      if (!this.search) {
        this.$store.dispatch(UsersActionKeys.Clear)
        return
      }

      window.clearTimeout(this.searchTimeoutId)
      this.searchTimeoutId = window.setTimeout(() => {
        this.$store.dispatch(UsersActionKeys.FetchAll, this.search)
        this.searchTimeoutId = -1
      }, 1000, this)
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  border-right: 1px solid #E0E0E0;
  overflow: hidden;

  & > * {
    padding: 0 30px 0 20px;
  }

  .search-input {
    height: 50px;
    padding: 16px 8px 16px 16px;
    margin: 0 30px 25px 20px;

    border: 2px solid #E9ECEF;
    border-radius: 8px;

    font-size: 0.875rem;
    color: #76787D;

    &:hover, &:focus {
      outline: none;
      border-color: #b8bbbe;
    }
  }

  .header {
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
    margin: 8px 0;

    color: #333;
  }

  .users-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 10px 20px 6px 20px;

    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>