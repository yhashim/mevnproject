<template>
  <div>
    <h1>Edit Contact</h1>
    <form @submit.prevent="updateContact">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contact Title:</label>
            <input type="text" class="form-control" v-model="Contact.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Contact Body:</label>
              <textarea class="form-control" v-model="Contact.body" rows="5"></textarea>
            </div>
          </div>
        </div>
         <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <label>Contact Author:</label>
               <input type="text" class="form-control" v-model="Contact.author">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          Contact: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/Contacts/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.Contact = response.data;
        });
      },
      methods: {
        updateContact() {
          let uri = `http://localhost:4000/Contacts/update/${this.$route.params.id}`;
          this.axios.Contact(uri, this.Contact).then(() => {
            this.$router.push({name: 'Contacts'});
          });
        }
      }
    }
</script>
