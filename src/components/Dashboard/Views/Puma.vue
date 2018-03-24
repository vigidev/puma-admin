<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="listTable.title" :sub-title="listTable.subTitle" :data="listTable.data" :columns="listTable.columns">
          </paper-table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="header">
            <h4 class="title">Edit Profile</h4>
          </div>
          <div class="content">
            <form action="">
              <div class="row">
                <div class="col-md-12">
                  <fg-input type="text"
                      label="Student ID"
                      placeholder="Paper dashboard"
                      v-model="findID"
                      >
                  </fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p><b>Full Name: </b>-</p>
                  <p><b>Nickname: </b>-</p>
                  <p><b>Position: </b>-</p>
                  <p><b>Email: </b>-</p>
                  <p><b>Phone Number: </b>-</p>
                  <p><b>Password: </b>-</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import PaperTable from 'components/UIComponents/PaperTable.vue'
const tableColumns = ['id', 'Fullname', 'Position', 'Email']
var adminMembers = [{
  id: '001201500028',
  fullname: 'Muhammad Iqbal Lukman',
  position: 'Web Dev',
  email: 'muhiqballukman@gmail.com'
},
{
  id: '001201500072',
  fullname: 'Rakha Viantoni Prastya',
  position: 'Web Dev',
  email: 'rakhaviantoni'
},
{
  id: '001201500069',
  fullname: 'Teuku Hilman Revanda',
  position: 'Web Dev',
  email: 'teukuatjeh'
}
]
export default {
  components: {
    PaperTable
  },
  data () {
    return {
      listTable: {
        title: 'Dashboard Member',
        subTitle: 'Member that have access to this table',
        columns: [...tableColumns],
        data: [...adminMembers]
      },
      findId: '',
      findName: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
