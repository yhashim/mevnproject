<template>
  <div class="container">
    <div class="navigate" id="navigate">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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