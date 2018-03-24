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
  </div>
</template>

<script>
import PaperTable from 'components/UIComponents/PaperTable.vue'
const tableColumns = ['id', 'Fullname', 'Position', 'Email']
var adminMember = [{
  id: '0012015000**',
  fullname: 'Muhammad Iqbal Lukman',
  position: 'Web Dev',
  email: 'muhiqballukman@gmail.com'
},
{
  id: '0012015000**',
  fullname: 'Rakha Viantoni Prastya',
  position: 'Web Dev',
  email: 'rakhaviantoni'
},
{
  id: '0012015000**',
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
        data: [...adminMember]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
