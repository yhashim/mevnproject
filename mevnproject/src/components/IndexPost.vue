<template>
  <div>
      <h5>Posts</h5>
      <br/>
        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <!-- <th>Text</th> -->
              <th>Author</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="Post in Posts" :key="Post._id">
                  <td>{{ Post.title }}</td>
                  <!-- <td>{{ Post.text }}</td> -->
                  <td>{{ Post.poster }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: Post._id }}" class="btn btn-light">Edit</router-link></td>
                  <td><button class="btn btn-light" @click.prevent="deletePost(Post._id)">Delete</button></td>
                  <td><button class="btn btn-light" @click.prevent="flagPost(Post._id)">Report As Inappropriate</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<style>
  /*tbody {
    font-size: 80%;
  }*/
</style>

<script>
  export default {
      data() {
        return {
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
        deletePost(id)
        {
          let uri = `http://localhost:4000/Posts/delete/${id}`;
          this.axios.delete(uri).then(response => {
            this.Posts.splice(this.Posts.indexOf(id), 1);
          });
        },
        flagPost(id)
        {
          var Post;
          for (Post of this.Posts) {
            if (Post._id === id) {
              Post.flagged+=1;
              if (Post.flagged>=3) {
                // add Post.email to a block list and prevent them from being able to ever make an acct under that email address ever again
                let uri = `http://localhost:4000/Posts/delete/${id}`;
                this.axios.delete(uri).then(response => {
                  this.Posts.splice(this.Posts.indexOf(id), 1);
                });
                console.log("This post has been flagged 3 times and has been removed.");
              }
            }
          }
        }
      }
    }
</script>