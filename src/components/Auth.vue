<template>
    <div class="authentication">
      <!-- ログイン済：ログアウトボタンを表示 -->
      <div v-if="userStatus" key="login" class="navbar-item">
        <p class="navbar-item">Hi, {{ user.displayName }}</p>
        <button type="button" class="button is-small is-info is-outlined" @click="logout">
          ログアウト
        </button>
      </div>
      <!-- 未ログイン：ログインボタンを表示 -->
      <div v-else key="logout">
        <p class="v-button">
        <vs-button color="primary" type="border" @click="loginByGoogle">
          <span class="">Google Login</span>
        </vs-button>
        <vs-button color="primary" type="border" @click="loginByTwitter">
          <span class="">Twitter Login</span>
        </vs-button>
        </p>
        <div class="email-form">
              <vs-input class="inputx" placeholder="Email" v-model="email" />
              <vs-input class="inputx" placeholder="Password" v-model="password" />
          <p>
          <vs-button color="primary" type="border" @click="loginByEmail">
            <span class="">Email Login</span>
          </vs-button>
          </p>
        </div>
      </div>

      <router-link tag="a" to="/">
        戻る
      </router-link>

    </div>
</template>

<script>
import Firebase from './../firebase'
export default {
  name: 'auth',
  created: function () {
    Firebase.onAuth()
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userStatus () {
      // ログインするとtrue
      return this.$store.getters.isLogin
    },
  },
  methods: {
    // ログイン処理
    loginByGoogle () {
      Firebase.googleLogin()
    },
    loginByTwitter () {
      Firebase.twitterLogin()
    },
    loginByEmail () {
      Firebase.emailLogin(this.email, this.password)
    },
    // ログアウト処理
    logout () {
      Firebase.logout()
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.email-form {
  margin: 5px;
}
.email-form div {
  margin: 5px auto;
  text-align: center;
}
.v-button {
  margin: 5px;
}
.v-button button {
  margin: 5px;
}
</style>
