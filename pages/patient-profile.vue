<template>
  <div>
    <div class="row">
        <div class="col-md-6 col-xs-12">
          <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
            <h4 class="title" slot="title">SOP over Time</h4>
            <!-- <span slot="subTitle"> All products including Taxes</span> -->
            <!-- <span slot="footer">
                <i class="ti-check"></i> Data information certified</span> -->
            <div slot="legend">
              <i class="fa fa-circle text-info"></i> SOP
              <!-- <i class="fa fa-circle text-warning"></i> BMW 5 Series -->
            </div>
          </chart-card>
        </div>

        <div class="col-md-6 col-xs-12">
          <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
            <h4 class="title" slot="title">BOP over Time</h4>
            <!-- <span slot="subTitle"> All products including Taxes</span> -->
            <!-- <span slot="footer">
                <i class="ti-check"></i> Data information certified</span> -->
            <div slot="legend">
              <i class="fa fa-circle text-info"></i>BOP 
              <!-- <i class="fa fa-circle text-warning"></i> BMW 5 Series -->
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
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              // [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
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
  }
}
</script>
