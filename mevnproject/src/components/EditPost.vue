<template>
  <div>
    <h5>Edit Post</h5>
    <br/>
      <form @submit.prevent="updatePost">
        <div class="form-row">
        <div class="col">
          <label for="title">Post Title</label>
          <input type="text" id="title" placeholder="Post Title" class="form-control" v-model="Post.title" name="title" required>
        </div>
        <div class="col">
          <label for="poster">Author</label>
          <input type="text" id="poster" placeholder="Author" class="form-control" v-model="Post.poster" name="poster" required>
        </div>
        <div class="form-row">
          <label for="text">Text</label>
          <input type="text" class="form-control" id="text" aria-describedby="textHelp" placeholder="Enter text here" name="text" v-model="Post.text" required>
          <small id="textHelp" class="form-text text-muted">Insert your question or ideas. Be sure to abide to our rules of equality and respect of others. Posts found to violate the rights of others including but not limited to: posts of hate speech, posts of disrespect, and posts of inappropriate information, can result in the expulsion of a user from our interface.</small>
        </div>
      </div>
      <br/>
        <div class="form-group">
            <button type="submit" class="btn btn-light">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
      data() {
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
      },
      methods: {
        updatePost() {
          let uri = `http://localhost:4000/Posts/update/${this.$route.params.id}`;
          this.axios.Post(uri, this.Post).then(() => {
            this.$router.push({name: 'Posts'});
          });
        }
      }
    }
</script>
