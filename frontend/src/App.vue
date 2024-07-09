<script>
  import AuthService from './service/authService';
  const authService = new AuthService();
  import { Keyword } from './config/key';
  export default {
    data() {
      return {
        status: ''
      }
    },
    methods: {
      async logIn(){
        const username = this.$refs.username?.value;
        const password = this.$refs.password?.value;
        const data = await authService.logIn({username: username, password: password});
        this.status = data;
      }
    }
  }
</script>

<template>
  <div class="login-page">
    <div class="form">
      <!-- <form class="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form> -->
      <form class="login-form">
        <h1 class="heading">Login</h1>
        <input type="text" name="username" ref="username" placeholder="Enter username"/> 
        <!-- <i class="noti" v-if="status === 'Account Invalid' ">Account Invalid</i> -->
        <input type="password" name="password" ref="password" placeholder="Enter password"/>
        <!-- <i class="noti" v-if="status === 'Wrong password' ">Wrong password</i> -->
        <p>{{status}}</p>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
      <button v-on:click="logIn()">Login</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
.noti{
  color: #EF3B3A;
}
.heading{
  font-weight: 500;
  margin-bottom: 20px;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Lexend Deca", sans-serif;
}
.login-form{
  margin-bottom: 10px;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .gw {
  color: #EF3B3A;
}
body {
  background: #76b852; 
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
