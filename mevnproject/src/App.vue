<template>
  <div class="container">
    <head> 
      <!-- Bootstrap CSS --> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> 
      <!-- Extra thing for phone zooming etc --> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <div class="navigate" id="navigate">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item navbar-brand">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item navbar-brand">
              <router-link to="/create" class="nav-link">Create Account</router-link>
            </li>
            <li class="nav-item navbar-brand">
              <router-link to="/accounts" class="nav-link">Directory of Medical Participants</router-link>
            </li>
            <li class="nav-item navbar-brand">
              <router-link to="/createPost" class="nav-link">Create Post</router-link>
            </li>
            <li class="nav-item navbar-brand">
              <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>
            <li>
              <div id="app">
                <router-link v-if="authenticated" to="/login" v-on:click.native="logout()">Logout</router-link> <!-- replace -->
                <!-- <router-view @authenticated="setAuthenticated"/> -->
              </div>    
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" id="frmSearch" @submitprevent="search">
            <input class="form-control mr-sm-2" id="googleSearch" type="search" placeholder="Search" aria-label="Search" v-model="googleSearch">
            <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <br/><br/><br/><br/><br/><br/><br/>
        <transition name="fade">
          <router-view></router-view>
        </transition>
    </div>
    <div class="text-center">
      <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-info">
        <a class="navbar-text" href="#">mevnproject for ics4u</a>
      </nav>
    </div>
  </div>
</template>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script>
  export default {
    // this script is for allowing the log-out function 
    // if an account has been authenticated, the log-out function is available
    // otherwise there is no account logged into to log out of
    name: 'App',
    data() {
        return {
            authenticated: false,
            googleSearch: ''
        }
    },
    mounted() {
      if(!this.authenticated) {
        this.$router.replace({ name: "home" });
      }
    },
    methods: {
      updateGoogleSearch(value){
        this.googleSearch = value;
      },
      search() {
        // window.location = 'http://www.google.com/search?q=site:yoursitename.com ' + document.getElementById('txtSearch').value;
        let uri = 'http://www.google.com/search?q=' + this.googleSearch;
        this.$router.push(uri);
        // script for search button in navbar
      },
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
</script>
