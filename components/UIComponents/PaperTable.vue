<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table" :class="tableClass">
        <thead>
          <th v-for="column in columns" :key="column" >{{column}}</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data" :key="index">
            <td v-for="column in columns" :key="column" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
            <td style="margin-left: -100px;">
              <button type="submit" class="btn btn-success btn-fill btn-wd" @click="toPatientProfile(item.phone)">
                View Profile
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      columns: Array,
      patient: Boolean,
      data: Array,
      type: {
        type: String, // striped | hover
        default: 'striped'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''

      }
    },
    computed: {
      tableClass () {
        return `table-${this.type}`
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      },
      toPatientProfile(phone){
        this.$router.push(`patients/${phone}/patient-profile`)
      }
    }
  }

</script>
<style>

</style>
