<template>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="card card-plain">
          <paper-table type="hover" title="Doctors" sub-title="List of All Doctors" :data="table2.data" :columns="table2.columns" patient="false">

          </paper-table>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from '~/components/UIComponents/PaperTable.vue'
  const tableColumns = ['Id', 'Name', 'City', 'Actions']
  const tableData = [{
    id: 1,
    name: 'Dakota Rice',
    city: 'Oud-Turnhout'
  },
  {
    id: 2,
    name: 'Minerva Hooper',
    city: 'Sinaai-Waas'
  },
  {
    id: 3,
    name: 'Sage Rodriguez',
    city: 'Baileux'
  },
  {
    id: 4,
    name: 'Philip Chaney',
    city: 'Overland Park'
  },
  {
    id: 5,
    name: 'Doris Greene',
    city: 'Feldkirchen in Kärnten'
  }]

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
    }
  }

</script>
<style>

</style>
