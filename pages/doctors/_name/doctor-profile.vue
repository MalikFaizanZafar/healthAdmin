<template>
  <div>
    <div class="row">
      <!-- <h5 v-for="(rReports,i) in getDoctorResolvedReports" :key="i">
        {{rReports}}
      </h5> -->
      <div class="col-md-6 col-md-offset-3">
        <doctors-resolved-reports type="hover" title="Ressolved Reports" sub-title="List of Doctors's Ressolved Reports" :data="tableData" :columns="tableColumns"></doctors-resolved-reports>
      </div>
    </div>
  </div>
</template>
<script>
import doctorsResolvedReports from '~/components/UIComponents/doctorsResolvedReports.vue'
  export default {
  layout:'dashboard',
  components: {
    doctorsResolvedReports
  },
  data() {
    return {
      doctorName: '',
      tableColumns: ['No','Name','pbmp', 'pspo','Prescription']
    }
  },
  async fetch({store}){
      store.dispatch('actionLoadResolvedReports')
    },
  computed: {
    loadedResolvedReports(){
        return Object.values(this.$store.getters.getResolvedReports)
      },
    arrangedResolvedReports(){
        let resolvedReports = []
        this.loadedResolvedReports.map(lrr => {
          let innerData = Object.values(lrr)
          // console.log('lrr has : ', lrr)
          // console.log('innerData has :', innerData)
          innerData.map(iData => {
            resolvedReports.push(iData)
          })
        })
        return resolvedReports
      },
      getDoctorResolvedReports(){
        let doctorsResolvedReports = []
        // console.log('this.doctorName has ', this.doctorName)
        doctorsResolvedReports = this.arrangedResolvedReports.filter(arr => arr.doctorName === this.doctorName)
        return doctorsResolvedReports
      },
      tableData(){
        let reports = []
        this.getDoctorResolvedReports.map((drr,i) => {
          reports.push({
            no: i+1,
            name: drr.pname,
            pbmp: drr.pbmp,
            pspo: drr.pspo,
            prescription: drr.prescription
          })
        })
        return reports
      }
    },
  created(){
      this.doctorName = this.$route.params.name
      // console.log('doctorName has : ', this.doctorName)
    }
}
</script>
