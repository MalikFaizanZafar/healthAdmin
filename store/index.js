import { StoreDB, Storage, DB} from '~/plugins/firebase.js'
import Vue from 'vue'
// import { stat } from 'fs';
export const strict = false
export const state = () => ({
  doctors:[],
  patients:[],
  newRequests: [],
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
  },
  mutationLoadNewRequests(state, payload){
    state.newRequests = payload
  }
}
export const actions = {
  actionLoadDoctors({commit}){
    DB.ref('Doctors').once('value').then(doctors => {
      // console.log('doctors has : ', doctors.val())
      commit('mutationLoadingDoctors', doctors.val())
    })
  },
  actionLoadResolvedReports({commit}){
    DB.ref('Ressolved').once('value').then(resolvedR => {
      console.log('resolvedR has : ', resolvedR)
      commit('mutationLoadResolvedReports', resolvedR.val())
    })
  },
  actionLoadPatients({commit}){
    DB.ref('Users').once('value').then(users => {
      console.log('users has : ', users)
      commit('mutationLoadPatients', users.val())
    })
  },
  actionLoadNewRequests({commit}){
    DB.ref('NewRequest').once('value').then(newRequests => {
      console.log('newRequests has : ', newRequests)
      commit('mutationLoadNewRequests', newRequests.val())
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
  },
  getNewRequests(state){
    return state.newRequests
  }
}
