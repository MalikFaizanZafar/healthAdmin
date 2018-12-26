import { StoreDB, Storage, DB} from '~/plugins/firebase.js'
import Vue from 'vue'
// import { stat } from 'fs';
export const strict = false
export const state = () => ({
  doctors:[],
  patients:[],
  resolvedReports:[]
})

export const mutations = {
  mutationLoadingDoctors(state, payload){
    state.doctors = payload
  },
  mutationLoadResolvedReports(state, payload){
    state.resolvedReports = payload
  },
  mutationLoadPatients(state, payload){
    state.patients = payload
  }
}
export const actions = {
  actionLoadDoctors({commit}, payload){
    DB.ref('Doctors').once('value').then(doctors => {
      // console.log('doctors has : ', doctors.val())
      commit('mutationLoadingDoctors', doctors.val())
    })
  },
  actionLoadResolvedReports({commit}, payload){
    DB.ref('Ressolved').once('value').then(resolvedR => {
      // console.log('resolvedR has : ', resolvedR)
      commit('mutationLoadResolvedReports', resolvedR.val())
    })
  },
  actionLoadPatients({commit}, payload){
    DB.ref('Users').once('value').then(users => {
      console.log('users has : ', users)
      commit('mutationLoadPatients', users.val())
    })
  }
}

export const getters = {
  getReviews(state){
    return state.reviews
  },
  getResolvedReports(state){
    return state.resolvedReports
  },
  doctorsGetter(state){
    return state.doctors
  },
  getPatients(state){
    return state.patients
  }
}
