<template>
  <div>
    <h5>{{ Post.title }}</h5>
    <small>Post by: {{ Post.poster }}</small>
    <br/>
    <small>{{ Post.text }}</small>
    <br/><br/>

    <h5>Add a reply:</h5>
    <form @submit.prevent="addReply">
      <div class="form-row">
        <div class="form-row">
          <label for="poster">Author</label>
          <input type="text" id="poster" placeholder="Author" class="form-control" v-model="Reply.poster" name="poster" required>
        </div>
        <br/><br>
        <div class="form-row">
          <label for="text">Text</label>
          <input type="text" class="form-control" id="text" aria-describedby="textHelp" placeholder="Enter text here..." name="text" v-model="Reply.text" required>
        </div>
      </div>
      <br/>
      <button type="submit" class="btn btn-light">Submit</button>
    </form>

    <br/><br/>
    <h5>Replies to: {{ Post.title }}</h5>
    <table class="table table-hover">
      <thead>
        <tr>
        <th>Author</th>
        <th>Reply</th>
      </tr>
      </thead>
      <tbody>
          <tr v-for="Reply in Replies" :key="Reply._id">
            <td>{{ Reply.poster }}</td>
            <td>{{ Reply.text }}</td>
          </tr>
      </tbody>
    </table>

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
