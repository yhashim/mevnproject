<template>
  <div>
      <h3>All Posts</h3>
      <br/>
     <!--  <form class="form-inline my-2 my-lg-0" id="frmSearch" @submitprevent="search"> -->
            <input class="form-control mr-sm-2" type="text" v-model="search" placeholder="Search for posts" aria-label="Search">
            <!-- <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
          </form> -->
          <br/>
        <table class="table table-hover table-borderless">
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
                <tr v-for="Post in filteredPosts" :key="Post._id">
                  <td><router-link :to="{name: 'viewPost', params: { id: Post._id }}" class="btn btn-outline-info">{{ Post.title }}</router-link></td>
                  <!-- <td>{{ Post.text }}</td> -->
                  <td>{{ Post.poster }}</td>
                  <td><router-link :to="{name: 'editPost', params: { id: Post._id }}" class="btn btn-info">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(Post._id)">Delete</button></td>
                  <td><button class="btn btn-danger" @click.prevent="flagPost(Post._id)">Report</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          Posts: [],
          search: ''
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
          // let uri = `http://localhost:4000/Posts/delete/${id}`;
          // this.axios.delete(uri).then(response => {
          //   this.Posts.splice(this.Posts.indexOf(id), 1);
          // });

          // I'm going to borrow this for now! Please understand :)
          let uri = `http://localhost:4000/Posts/delete/${id}`;
          this.axios.delete(uri).then(response => {
            for (var i = 0; i < this.Posts.length; ++i) { 
              if (this.Posts[i]._id === id) { 
                this.Posts.splice(i, 1); 
                return;
              }
            }
          });
        },
        flagPost(id)
        {
          // var Post;
          // for (Post of this.Posts) {
          //   if (Post._id === id) {
          //     Post.flagged+=1;
          //     if (Post.flagged>=3) {
          //       // add Post.email to a block list and prevent them from being able to ever make an acct under that email address ever again
          //       let uri = `http://localhost:4000/Posts/delete/${id}`;
          //       this.axios.delete(uri).then(response => {
          //         this.Posts.splice(this.Posts.indexOf(id), 1);
          //       });
          //       console.log("This post has been flagged 3 times and has been removed.");
          //     }
          //   }
          // }

          for (var i = 0; i < this.Posts.length; ++i) { 
            if (this.Posts[i]._id === id) {
              this.Posts[i].flagged+=1; 
              console.log(this.Posts[i]);
              console.log("This post has been flagged");
              let uri = 'http://localhost:4000/Posts';
              this.axios.get(uri).then(response => {
                this.Accounts = response.data;
              });
              if (this.Posts[i].flagged>=3) {
                deletePost(id);
                console.log("This post has been flagged 3 times and has been removed.");
              }
            }
          }

        }
      },
      computed: {
        // https://www.youtube.com/watch?v=G34_yNV8FMY
        filteredPosts: function() {
          return this.Posts.filter((post) => {
            return post.title.match(this.search)
          });
        }
      }
    }
</script>