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
      <div class="col-md-4">
        <update-member>

        </update-member>
        
        <delete-member>

        </delete-member>
      </div>
      <div class="col-md-8">
        <register-member>

        </register-member>
      </div>
    </div>

    <div class="row">

    </div>
    
  </div>
</template>

<script>
import PaperTable from 'components/UIComponents/PaperTable.vue'
import UpdateMember from 'components/Dashboard/Views/Puma/UpdateMember.vue'
import DeleteMember from 'components/Dashboard/Views/Puma/DeleteMember.vue'
import RegisterMember from 'components/Dashboard/Views/Puma/RegisterMember.vue'

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
    PaperTable,
    UpdateMember,
    DeleteMember,
    RegisterMember
  },
  data () {
    return {
      listTable: {
        title: 'Dashboard Member',
        subTitle: 'Member that have access to this table',
        columns: [...tableColumns],
        data: [...adminMembers]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
