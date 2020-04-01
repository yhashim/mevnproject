<template>
  <div class="container">
  <!-- Intro page to application -->
    <h2>Welcome to Med StackExchange</h2>
    <p>a forum for medical students and professors</p>
    <br/>
    <h5>Log-in</h5>
    <br/>
    <form @submit.prevent="verifyAccount">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" required>
        <small id="emailHelp" class="form-text text-muted">Please note that emails and passwords are case-sensitive in logging in.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required>
      </div>
<!--       <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
  </div>
 </template>
 
 <script>
  export default {
    data(){
      return {
        Accounts:[]
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
              this.$router.push({name: 'posts'}); // change later
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