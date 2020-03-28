<template>
  <div class="container">
    <h2>Welcome to MedBoard</h2>
    <h5>a shift organizing and assigning program</h5>
    <br>

    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
    <div id="id01" class="modal" style="text-align: right; padding-left: 2.25%; padding-right: 2.25%;">
      <form class="modal-content animate" action="/action_page.php" method="post">
        <div class="imgcontainer">
          <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <div class="login">
          <p style="display: inline;"><b>Username</b></p>
          <input style="display: inline; width: 33%;" type="text" placeholder="Enter Username" name="uname" required>
          <br>
          <p style="display: inline;"><b>Password</b></p>
          <input style="display: inline; width: 33%;" type="password" placeholder="Enter Password" name="psw" required> 
          <button type="submit" onclick="checkAcct()">Login</button>
        </div>
        <div class="forgot" style="background-color:#f1f1f1">
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>

    <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">New Account</button>
    <div id="id02" class="modal" style="padding-top: 7%; text-align: right; padding-left: 2.25%; padding-right: 2.25%;">
      <form class="modal-content animate" action="/action_page.php" method="post">
        <div class="imgcontainer">
          <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>
        <div class="login">
          <p style="display: inline;"><b>Full Name</b></p>
          <input style="display: inline; width: 33%;" type="text" placeholder="Full Name" name="fname" required>
          <br>
          <p style="display: inline;"><b>Title</b></p>
          <input style="display: inline; width: 33%;" type="list" list="titles" placeholder="Title" name="title" required>
          <datalist id="titles">
            <option value="Department Lead"></option>
            <option value="Doctor"></option>
            <option value="Nurse"></option>
          </datalist>
          <br>
          <p style="display: inline;"><b>Username</b></p>
          <input style="display: inline; width: 33%;" type="text" placeholder="New Username" name="newuname" required>
          <br>
          <p style="display: inline;"><b>Password</b></p>
          <input style="display: inline; width: 33%;" type="password" placeholder="New Password" name="newpsw" required> 
          <br>
          <p style="display: inline;"><b>Security Question</b></p>
          <input style="display: inline; width: 33%;" type="list" list="sqs" placeholder="Security Questions" name="sqs" required>
          <datalist id="sqs">
            <option value="What was the name of your first childhood pet?"></option>
            <option value="Where did your parents meet?"></option>
            <option value="When did you meet your spouse?"></option>
          </datalist>
          <br>
          <p style="display: inline;"><b>Security Answer</b></p>
          <input style="display: inline; width: 33%;" type="text" placeholder="Security Answer" name="sqa" required> 
          <button type="submit" onclick="newAcct()">Submit</button>
        </div>
        <div class="forgot" style="background-color:#f1f1f1">
          <span class="psw"></span>
        </div>
      </form>
    </div>

      <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Log-in</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/create" class="nav-link">Create New Account</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>
          </ul>
        </nav><br />
        <transition name="fade">
          <router-view></router-view>
        </transition> -->

  </div>
</template>

<style>
h2 {
  padding-top: 25%;
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
  border-radius: 20%;
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
  padding-top: 14%;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #91ceeb;
  border-radius: 20%;
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

<script>
  // Get the modal
  var modal = document.getElementById('id01');
  var modal = document.getElementById('id02');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  export default{
  }

  // checkAcct(){
    //var uname = document.querySelectorAll('input[name="uname"]');
      // if uname available in list of accts, check psw
      // else, pop-up "uname does not exist"
    //var psw = document.querySelectorAll('input[name="psw"]');
      // if psw matches to uname's psw, login to the next page under their acct
      // else, pop-up "psw incorrect"
  // }

  // newAcct() {

  // }

</script>