<template>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="card card-plain">
          <doctorstable type="hover" title="Doctors" sub-title="List of All Doctors" :data="doctorsArranged" :columns="table2.columns">
          </doctorstable>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from '~/components/UIComponents/PaperTable.vue'
  import doctorstable from '~/components/UIComponents/doctorstable.vue'
  const tableColumns = ['Name','Email', 'Phone','Experince']
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
      doctorstable
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
      store.dispatch('actionLoadDoctors')
    },
    computed: {
      loadedDoctors(){
        return Object.values(this.$store.getters.doctorsGetter)
      },
      arrayLoadedDoctors(){
        return Object.values(this.loadedDoctors)
      },
      doctorsArranged(){
        let doctors = []
        // // let data = Object.values(this.arrayLoadedDoctors)
        // console.log('this.arrayLoadedDoctors has : ', this.arrayLoadedDoctors)
        this.arrayLoadedDoctors.map(ald => {
          doctors.push({
            name: `${ald.FirstName} ${ald.LastName}`,
            email: ald.Email,
            phone: ald.PhoneNumber,
            experince: ald.Experince
          })
        })
        return doctors
      }
    }
  }

</script>
<style>

</style>
