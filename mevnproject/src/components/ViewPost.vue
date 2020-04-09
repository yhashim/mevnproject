<template>
  <div>
    <div class="card text-center">
      <div class="card-header">
        Post
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ Post.title }}</h5>
        <p class="card-text">{{ Post.text }}</p>
        <router-link to="/posts" class="btn btn-info">View Other Posts</router-link>
      </div>
      <div class="card-footer text-muted">
        Post by: {{ Post.poster }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        Post: {},
        Posts: []
      }
    },
    created() {
      let uri = `http://localhost:4000/Posts/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.Post = response.data;
      });
      let uri1 = 'http://localhost:4000/Posts';
      this.axios.get(uri1).then(response => {
        this.Posts = response.data;
      });
    },
    methods: {
      
    }
  }
</script>
