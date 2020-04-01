<template>
  <div>
      <h2>Directory of Medical Participants</h2>
      <br/>
        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Full Name</th>
              <th>Specialization</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="Account in Accounts" :key="Account._id">
                  <td>{{ Account.title }}</td>
                  <td>{{ Account.fullName }}</td>
                  <td>{{ Account.specialization }}</td>
                  <td>{{ Account.email }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: Account._id }}" class="btn btn-light">Edit</router-link></td>
                  <td><button class="btn btn-light" @click.prevent="deleteAccount(Account._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<style>
  tbody {
    font-size: 80%;
  }
</style>

<script>
  export default {
      data() {
        return {
          Accounts: []
        }
      },
      created() {
        let uri = 'http://localhost:4000/Accounts';
        this.axios.get(uri).then(response => {
          this.Accounts = response.data;
        });
      },
      methods: {
        deleteAccount(id)
        {
          let uri = `http://localhost:4000/Accounts/delete/${id}`;
          this.axios.delete(uri).then(response => {
            this.Accounts.splice(this.Accounts.indexOf(id), 1);
          });
        }
      }
    }
</script>