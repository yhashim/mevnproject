<template>
  <div>
      <h3>Directory of Medical Participants</h3>
      <br/>
        <table class="table table-hover table-borderless">
            <thead class="table table-borderless">
            <tr>
              <th>Title</th>
              <th>Full Name</th>
              <th>Specialization</th>
              <th>Email Address</th>
              <th class="actions">Actions</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="Account in Accounts" :key="Account._id">
                  <td>{{ Account.title }}</td>
                  <td>{{ Account.fullName }}</td>
                  <td>{{ Account.specialization }}</td>
                  <td>{{ Account.email }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: Account._id }}" class="btn btn-info">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteAccount(Account._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

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
          // let uri = `http://localhost:4000/Accounts/delete/${id}`;
          // this.axios.delete(uri).then(response => {
          //   this.Accounts.splice(this.Accounts.indexOf(id), 1);
          // });

          // I'm going to borrow this for now! Please understand :)
          let uri = `http://localhost:4000/Accounts/delete/${id}`;
          this.axios.delete(uri).then(response => {
            for (var i = 0; i < this.Accounts.length; ++i) { 
              if (this.Accounts[i]._id === id) { 
                this.Accounts.splice(i, 1); 
                return;
              }
            }
          });

        }
      }
    }
</script>