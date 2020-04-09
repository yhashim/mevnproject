<template>
  <div class="container">
  <div id="secure">
  <!-- Create New Post -->
  <h3>Create a New Post</h3>
  <br/>
    <form @submit.prevent="addPost">
      <div class="form-row">
        <div class="col">
          <label for="title">Post Title</label>
          <input type="text" id="title" placeholder="Post Title" class="form-control" v-model="Post.title" name="title" required>
        </div>
        <div class="col">
          <label for="poster">Author</label>
          <input type="text" id="poster" placeholder="Author" class="form-control" v-model="Post.poster" name="poster" required>
        </div>
        <br/><br/><br/>
        <div class="form-row">
          <div class="col">
            <label for="text">Text</label>
            <input type="text" class="form-control" id="text" aria-describedby="textHelp" placeholder="Enter text here..." name="text" v-model="Post.text" required>
            <small id="textHelp" class="form-text text-muted">Insert your question or ideas. Be sure to abide to our rules of equality and respect of others. Posts found to violate the rights of others including but not limited to: posts of hate speech, posts of disrespect, and posts of inappropriate information, can result in the expulsion of a user from our interface.</small>
          </div>
        </div>
      </div>
      <br/>
      <div class="text-center">
        <button type="submit" class="btn btn-info">Submit</button>
      </div>
    </form>
  </div>
  </div>
</template>

<style>
  #text {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    resize: none;
  }
</style>

<script> 
  export default {
    name: 'Secure',
    data(){
      return {
        Post: {},
        Posts: []
      }
    },
    created() {
      let uri = 'http://localhost:4000/Posts';
      this.axios.get(uri).then(response => {
        this.Posts = response.data;
      });
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:4000/posts/add';
          this.axios.post(uri, this.Post).then(() => {
            console.log("pushing");
          });
        // console.log("done");
        console.log(this.Post);
        console.log(this.Posts);
        return;  
      }
    }
  }
</script>