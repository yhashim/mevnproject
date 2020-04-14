<template>
  <div class="container">
  <!-- Create New Account -->
  <h3>Create a New Account</h3>
  <br/>
    <form @submit.prevent="addAccount">
      <div class="row">
        <div class="col">
          <label for="title">Specialization</label>
          <!-- <input type="list" list="specialization" id="specialization" placeholder="Specialization" class="form-control" v-model="Account.specialization" name="specialization" required> -->
          <select id="specialization" placeholder="Specialization" class="form-control" v-model="Account.specialization" name="specialization" required>
            <!-- https://www.sgu.edu/blog/medical/ultimate-list-of-medical-specialties/ -->
              <option value="Allergy and Immunology">Allergy and Immunology</option>
              <option value="Anesthesiology">Anesthesiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Diagnostic Radiology">Diagnostic Radiology</option>
              <option value="Emergency Medicine">Emergency Medicine</option>
          </select>
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
      <div class="row">
        <div class="col">
          <label for="exampleInputEmail1">Email address</label>
<!--           <div class="input-group mb-2">
          <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div> -->
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" v-model="Account.email" required>
          <!-- </div> -->
          <small id="emailHelp" class="form-text text-muted">Please note that emails and passwords are case-sensitive in logging in.</small>
        </div>
        <div class="col">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" v-model="Account.password" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <label for="securityQuestions">Security Question</label>
            <!-- <input type="list" list="securityQuestions" id="securityQuestions" placeholder="Security Question" class="form-control" v-model="Account.securityQuestion" name="securityQuestion" required> -->
            <div class="input-group mb-2">
            <div class="input-group-prepend">
                <div class="input-group-text">Q</div>
              </div>
              <select id="securityQuestions" placeholder="Security Question" class="form-control" v-model="Account.securityQuestion" name="securityQuestion" required>
                <option value="What was the name of your first childhood pet?">What was the name of your first childhood pet?</option>
                <option value="Where did your parents meet?">Where did your parents meet?</option>
                <option value="When did you meet your spouse?">When did you meet your spouse?</option>
              </select>
            </div>
        </div>
        <div class="col">
          <label for="SecurityAnswer">Security Answer</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">A</div>
            </div>
              <input type="text" class="form-control" id="SecurityAnswer" placeholder="Enter security answer" name="Security Answer" v-model="Account.securityAnswer" required>
          </div>
        </div>
      </div>
      <br/>
      <div class="text-center">
        <button type="submit" class="btn btn-info">
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Submit
          <span class="sr-only"></span>
        </button>
      </div>
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
        console.log(email);

        var used = false;

        for (var i = 0; i < this.Accounts.length; ++i) {
          console.log(this.Accounts[i].email); 
          if (email === this.Accounts[i].email) { 
            used = true;
            console.log("The email: " + email + " is unavailable.");
            return;
          }
        }

        if (!used) { 
          // console.log("passed check");
          let uri = 'http://localhost:4000/accounts/add';
            this.axios.post(uri, this.Account).then(() => {
              let uri = 'http://localhost:4000/Accounts';
              this.axios.get(uri).then(response => {
                this.Accounts = response.data;
              });
              // this.$router.push({name: 'posts'});
                        this.$router.push({name: 'accounts'}); // change later

              console.log("An account under the email " + email + " was successfully created.");
            });
            console.log(this.Accounts);
          return;  
        }
      }
    }
  }
</script>