<template>
    <div class="row">
      <!-- {{tableData}} -->
      <div class="col-md-8 col-md-offset-2">
        <div class="card">
          <paper-table title="Patients" sub-title="List of All Patients" :data="tableData" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from '~/components/UIComponents/PaperTable.vue'
  const tableColumns = ['No', 'Name', 'Phone', 'Email']
  const tableData = []

  export default {
    layout: "dashboard",
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Stripped Table',
          subTitle: 'Here is a subtitle for this table',
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          title: 'Table on Plain Background',
          subTitle: 'Here is a subtitle for this table',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    },
    async fetch({store}){
      store.dispatch('actionLoadPatients')
    },
    computed: {
      loadedPatients(){
        return Object.values(this.$store.getters.getPatients)
      },
      tableData(){
        let patients = []
        let data = Object.values(this.loadedPatients)
        data.map((dat,i) => {
          patients.push({
            no: i+1,
            name: dat.name,
            email: dat.email,
            phone: dat.phone
          })
        })
        return patients
      }
    }
  }

</script>
<style>

</style>
