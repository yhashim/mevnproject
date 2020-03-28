<template>
  <div>
    <h1>Create A Contact</h1>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contact Name:</label>
            <input type="text" class="form-control" v-model="Contact.name">
          </div>
        </div>
            <br/>
        <div class="col-md-4">
          <div class="form-group">
            <label>Contact Email:</label>
            <input type="text" class="form-control" v-model="Contact.email">
          </div>
        </div>
          <br/>
        <div class="col-md-2">
          <div class="form-group">
            <label>Contact Phone:</label>
            <input type="text" class="form-control" v-model="Contact.phone">
          </div>
        </div>
          <br/>
        <div class="col-md-0">
          <div class="form-group">
            <label>Contact Birthday:</label>
            <input type="date" class="form-control" v-model="Contact.birthday">
          </div>
        </div>
        </div><br/>
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>
 <script>
    export default {
        data(){
        return {
          Contact:{}
        }
    },
    methods: {
      addContact(){
    let uri = 'http://localhost:4000/Contacts/add';
    this.axios.Contact(uri, this.Contact).then(() => {
       this.$router.push({name: 'Contacts'});
    });
}
    }
  }
</script>
