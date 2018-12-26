<template>
  <div>
    <div class="row">
      <!-- {{loadedNewRequests}} -->
      <!-- <h5 v-for="(item,i) in loadedNewRequests" :key="i">
        {{item}}
      </h5> -->
      <!-- <h5 v-for="(item,i) in chartData" :key="i">
        {{item}}
      </h5> -->
      <!-- {{getPatientData}} -->
        <div class="col-md-6 col-xs-12 col-md-offset-3">
          <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
            <h4 class="title" slot="title">Readings over Time</h4>
            <!-- <span slot="subTitle"> All products including Taxes</span> -->
            <!-- <span slot="footer">
                <i class="ti-check"></i> Data information certified</span> -->
            <div slot="legend">
              <i class="fa fa-circle text-info"></i> BMP
              <i class="fa fa-circle text-warning"></i> SPO
            </div>
          </chart-card>
        </div>
    </div>
  </div>
</template>
<script>
import StatsCard from '~/components/UIComponents/Cards/StatsCard.vue'
import ChartCard from '~/components/UIComponents/Cards/ChartCard.vue'
  let Chartist;
  if(process.client){
    Chartist = require('chartist')
  }
  export default {
  layout: "dashboard",
  components: {
    StatsCard,
    ChartCard
  },
  layout:'dashboard',
  data() {
    return {
      patientPhone: '',
        activityChart: {
          data: {
            labels: [],
            series: [
              [],
              []
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
    }
  },
  created(){
    this.patientPhone = this.$route.params.phone
    console.log('patientEmail has : ', this.patientPhone)
  },
  async fetch({store}){
  store.dispatch('actionLoadNewRequests')
  },
  computed: {
    loadedNewRequests(){
      return Object.values(this.$store.getters.getNewRequests)
    },
    getPatientData(){
      let patientData = []
      patientData = this.loadedNewRequests.filter(nr => nr.pnamePhone === this.patientPhone)
      return patientData
    },
    chartData(){
      let chartData = []
      let self = this
      this.getPatientData.map((gpd,i) => {
        self.activityChart.data.labels.push(i+1)
        self.activityChart.data.series[0].push(Number(gpd.pbmp))
        self.activityChart.data.series[1].push(Number(gpd.pspo))
        chartData.push({
          no: i+1,
          pbmp: gpd.pbmp,
          pspo: gpd.pspo
        })
      })
      return chartData
    }
  }
}
</script>
