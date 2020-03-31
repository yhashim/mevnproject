<template>
  <div class="container">
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
              <router-link to="/posts" class="nav-link">Directory of Medical Participants</router-link>
            </li>
          </ul>
        </nav><br />
        <transition name="fade">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default{

  }
</script>