<template>
  <div class="user-list-item" :class="{ selected: selectedUser?.id === user.id }" @click="setActiveUser">
    <img src="../assets/img/avatar-ph.png" alt="" class="avatar">
    <div class="description">
      <span class="name">{{ user.name }}</span>
      <span class="email">{{ user.email }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from '@/model/user';
import { UsersGetterKeys, UsersMutationKeys } from '@/store';
import { PropType, defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  computed: mapGetters([UsersGetterKeys.Selected]),
  methods: {
    setActiveUser() {
      this.setSelectedUser(this.user)
    },
    ...mapMutations([UsersMutationKeys.SetSelectedUser])
  }
})
</script>

<style scoped>
.user-list-item {
  display: flex;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px #0000001A;
  cursor: pointer;
  transition: all 200ms ease;

  &.selected,
  &:hover {
    border-color: #E0E0E0;
    background: #E0E0E0;
  }

  .avatar {
    width: 70px;
    height: 70px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    object-fit: cover;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 14px;

    border-left: 2px solid #E0E0E0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      width: 100%;
      font-size: 0.875rem;
      line-height: 17px;
      font-weight: 400;

      &.name {
        font-weight: 600;
      }

      &.email {
        color: #76787D;
      }
    }
  }
}
</style>