<template>
  <div class="container">
  <div id="login">
  <!-- Intro page to application -->
    <h1>Welcome to Med QueueExchange</h1>
    <h6>a forum for medical students and profs</h6>
    <br/>
    <h3>Log-in</h3>
    <form @submit.prevent="verifyAccount">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="account.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" required>
        <small id="emailHelp" class="form-text text-muted">Please note that emails and passwords are case-sensitive in logging in.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="account.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info" v-on:click="verifyAccount()">
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Log-in
          <span class="sr-only"></span>
        </button>
      </div>
    </form>
  </div>
  </div>
 </template>
 
 <script>
  export default {
    name: 'Login',
    data(){
      return {
        Accounts:[],
        account: {}
      }
    },
    created() {
      let uri = 'http://localhost:4000/Accounts';
      this.axios.get(uri).then(response => {
        this.Accounts = response.data;
      });
    },
    methods: {
      verifyAccount(){
        var email = document.querySelectorAll('input[name="email"]')[0].value;
        var password = document.querySelectorAll('input[name="password"]')[0].value;
        var acctFound = false;
        var acct;
        for (acct of this.Accounts){
          if (email === acct.email) {
            acctFound = true;
            if (password === acct.password) {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "create" });
              this.$router.push({name: 'posts'}); // change later
              return;
            } else {
              console.log("The password input for the email " + email + " is incorrect.");
            }
          }
        }
        if (!acctFound) {
          console.log("An account under the email " + email + " cannot be found");
        }
        // let uri = 'http://localhost:4000/Accounts/add';
        //   this.axios.posts(uri, this.Account).then(() => {
        //      this.$router.push({name: 'posts'});
        //   });
        return;  
      }
    }
  }
 </script>