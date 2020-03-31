<template>
  <div class="container">
  <!-- Create New Account -->
  <h5>Create a New Account</h5>
  <br/>
    <form @submit.prevent="addAccount">
      <div class="form-row">
        <div class="col">
          <label for="title">Specialization</label>
          <input type="list" list="specialization" id="specialization" placeholder="Specialization" class="form-control" v-model="Account.specialization" name="specialization" required>
            <datalist>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </datalist>
        </div>
        <div class="col">
          <label for="title">Degree</label>
          <input type="text" class="form-control" id="title" aria-describedby="titleHelp" placeholder="Enter title" name="title" v-model="Account.title" required>
          <small id="titleHelp" class="form-text text-muted">Highest earned degree - e.g. "MBChB"</small>
        </div>
        <div class="col">
          <label for="fullName">Full Name</label>
          <input type="text" class="form-control" id="fullName" aria-describedby="nameHelp" placeholder="Enter full name" name="fullName" v-model="Account.fullName" required>
          <small id="nameHelp" class="form-text text-muted">Format: First-name Last-name</small>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" v-model="Account.email" required>
          <small id="emailHelp" class="form-text text-muted">Please note that emails and passwords are case-sensitive in logging in.</small>
        </div>
        <div class="col">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" v-model="Account.password" required>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
            <label for="securityQuestions">Security Question</label>
            <input type="list" list="securityQuestions" id="securityQuestions" placeholder="Security Question" class="form-control" v-model="Account.securityQuestion" name="securityQuestion" required>
            <datalist>
              <option value="What was the name of your first childhood pet?"></option>
              <option value="Where did your parents meet?"></option>
              <option value="When did you meet your spouse?"></option>
            </datalist>
        </div>
        <div class="col">
          <label for="SecurityAnswer">Security Answer</label>
          <input type="text" class="form-control" id="SecurityAnswer" placeholder="Enter security answer" name="Security Answer" v-model="Account.securityAnswer" required>
        </div>
      </div>
      <br/>
      <button type="submit" class="btn btn-light">Submit</button>
    </form>
  </div>
</template>

<script> 
  export default {
    data(){
      return {
        Account: {},
        Accounts: []
      }
    },
    created() {
      let uri = 'http://localhost:4000/Accounts';
      this.axios.get(uri).then(response => {
        this.Accounts = response.data;
      });
    },
    methods: {
      addAccount(){
        var email = document.querySelectorAll('input[name="email"]')[0].value;
        for (acct of this.Accounts){
          if (acct !== null) {
            if (email === acct.Email) {
              alert("The email: " + email + " is unavailable.");
              return;
            }
          }
        }
        let uri = 'http://localhost:4000/Accounts/add';
          this.axios.post(uri, this.Account).then(() => {
             this.$router.push({name: 'posts'});
          });
        return;  
      }
    }
  }
</script>