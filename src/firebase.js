import firebase from '@firebase/app'
import '@firebase/auth'
import store from './store'

// Initialize Firebase
const config = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXX.firebaseapp.com',
  databaseURL: 'https://XXXXXXXXXXX.firebaseio.com',
  projectId: 'XXXXXXXXXXX',
  storageBucket: '',
  messagingSenderId: 'XXXXXXXXXXX'
}

export default {
  // Firebase初期化
  init() {
    firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },
  // Googleログイン処理
  googleLogin() {
    const Provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(Provider)
  },
  // Twitterログイン処理
  twitterLogin() {
    const Provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(Provider)
  },
  // Emailログイン処理
  emailLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        user => {
          alert('Success! Your name is ' + user.displayName)
        },
        err => {
          alert(err.message)
        }
      )
  },
  // ログアウト処理
  logout() {
    firebase.auth().signOut()
  },
  // 認証状態の設定
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = !user ? {} : user
      store.commit('onAuthStateChanged', user)
      store.commit('onUserStatusChanged', Boolean(user.uid))
    })
  }
}
