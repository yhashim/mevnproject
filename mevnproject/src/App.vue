<template>
  <div class="container" id="App">
    <div class="navigate" id="navigate">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Log-in</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/create" class="nav-link">Create Account</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/accounts" class="nav-link">Directory of Medical Participants</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/createPost" class="nav-link">Create Post</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>
          </ul>
        </nav><br/>
        <transition name="fade">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
  export default{
    // get logged in id
    // use the id to pass into various thing
    // let you know which to display
    // what functs they can do
    // etc.
  }
</script>