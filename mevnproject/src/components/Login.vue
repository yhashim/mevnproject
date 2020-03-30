<template>
  <div class="container">
  <!-- Intro page to application -->
  <!-- Create New Account or Login With Existing -->
    <h2>Welcome to MedBoard</h2>
    <h5>a shift organizing and assigning program</h5>
    <br>

    <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">New Account</button>
    <div id="id02" class="modal" style="padding-top: 13%; text-align: right; padding-left: 25%; padding-right: 25%;">
      <form @submit.prevent="addAccount" class="modal-content animate">
        <div class="imgcontainer">
          <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <div class="login">
            <p style="display: inline;"><b>Full Name</b></p>
            <input style="display: inline; width: 33%;" type="text" placeholder="Full Name" name="fname" class="form-control" v-model="Account.fullName" required>
            <br/>
            <p style="display: inline;"><b>Title</b></p>
            <input style="display: inline; width: 33%;" type="list" list="titles" placeholder="Title" name="title" class="form-control" v-model="Account.title" required>
            <datalist id="titles">
              <option value="Department Lead"></option>
              <option value="Doctor"></option>
              <option value="Nurse"></option>
            </datalist>
            <br/>
            <p style="display: inline;"><b>Username</b></p>
            <input style="display: inline; width: 33%;" type="text" placeholder="New Username" name="newuname" class="form-control" v-model="Account.userName" required>
            <br/>
            <p style="display: inline;"><b>Password</b></p>
            <input style="display: inline; width: 33%;" type="password" placeholder="New Password" name="newpsw" class="form-control" v-model="Account.password" required>
            <br/>
            <p style="display: inline;"><b>Security Question</b></p>
            <input style="display: inline; width: 33%;" type="list" list="sqs" placeholder="Security Questions" name="sqs" class="form-control" v-model="Account.securityQuestion" required>
            <datalist id="sqs">
              <option value="What was the name of your first childhood pet?"></option>
              <option value="Where did your parents meet?"></option>
              <option value="When did you meet your spouse?"></option>
            </datalist>
            <br/>
            <p style="display: inline;"><b>Security Answer</b></p>
            <input style="display: inline; width: 33%;" type="text" placeholder="Security Answer" name="sqa" class="form-control" v-model="Account.securityQuestionAnswer" required>
          <br/>
          <!-- <button class="btn btn-primary">Create</button> -->
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script> 
  export default {
    data(){
      return {
        Account:{}
      }
    },
    methods: {
      addAccount(){
        var uname = document.querySelectorAll('input[name="newuname"]')[0].value;
        for (var i = 0; i<accts.length; i++){
          if (uname == accts[i].getUname()) {
            alert("The username: " + uname + " is unavailable.");
            return;
          }
        }
        let uri = 'http://localhost:4000/Accounts/add';
          this.axios.Account(uri, this.Account).then(() => {
             this.$router.push({name: 'Accounts'});
          });
        console.log("new page");
        return;  
      }
    }
  }
</script>

<style>
.container {
  color: #6a8591;
}

h2 {
  padding-top: 20%;
  padding-bottom: 1.15%;
}

p {
  padding-right: 1.25%;
  text-align: right;
}

button {
  margin-right: 0.15%;
  margin-left: 0.15%;
}

.container {
  text-align: center;
}

.forgot {
  padding-right: 2.5%;
  padding-bottom: 1.25%;
}

/* Full-width input fields */
input[type=text], input[type=password], input[type=list] {
  width: 100%;
  padding: 1.15px 10px;
  margin: 1.15% 29% 1.15% 0%;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #91ceeb;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: 0px solid white;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #91ceeb;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 6px 0 6px 0;
  position: relative;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 18%;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #91ceeb;
  width: 100%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #81b4cc;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
