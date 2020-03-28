<template>
  <div>
      <h1>Contacts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Contact</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="Contact in Contacts" :key="Contact._id">
                  <td>{{ Contact.title }}</td>
                  <td>{{ Contact.body }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: Contact._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteContact(Contact._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          Contacts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/Contacts';
      this.axios.get(uri).then(response => {
        this.Contacts = response.data;
      });
    },
    methods: {
      deleteContact(id)
      {
        let uri = `http://localhost:4000/Contacts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.Contacts.splice(this.Contacts.indexOf(id), 1);
        });
      }
    }
  }
</script>