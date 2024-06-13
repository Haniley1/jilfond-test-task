<template>
  <div id="form-card-container">
    <SideBar />
    <div class="user-description" v-if="selectedUser">
      <img src="../assets/img/avatar-ph.png" alt="avatar" class="user-avatar">
      <div class="user-info">
        <span class="bold">{{ selectedUser.name }}</span>
        <span>
          <span class="bold">email: </span>
          <a :href="'mailto:' + selectedUser.email">{{ selectedUser.email }}</a>
        </span>
        <span>
          <span class="bold">phone: </span>
          <span>{{ selectedUser.phone }}</span>
        </span>
        <span class="bold about-header">О себе:</span>
        <span>{{ lorem }}</span>
      </div>
    </div>
    <div class="no-user-selected" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import SideBar from './SideBar.vue';
import { defineComponent } from "vue";
import { UsersGetterKeys } from '@/store';
import { LOREM_IPSUM } from '@/model/const';

export default defineComponent({
  components: {
    SideBar
  },
  computed: mapGetters([UsersGetterKeys.Selected]),
  data() {
    return {
      lorem: LOREM_IPSUM
    }
  }
})
</script>

<style scoped lang="scss">
#form-card-container {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 290px 1fr;
  height: 100%;
  min-height: 400px;

  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  background: #fdfdfd;

  .user-description {
    display: flex;
    gap: 60px;
    padding: 30px 30px 20px 20px;
    overflow: hidden;

    .user-avatar {
      width: 50%;
      height: 50%;
      object-fit: contain;
      object-position: top left;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
      width: 50%;

      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      color: #76787D;

      & > span {
        margin-bottom: 10px;
      }
      a {
        color: #E31F24;
      }

      .bold {
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #000;

        &.about-header {
          margin: 20px 0;
        }
      }
    }
  }

  .no-user-selected {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.875rem;
    font-weight: 400;
    color: #76787D;
  }
}
</style>