import { StoreDB, Storage, DB} from '~/plugins/firebase.js'
import Vue from 'vue'
export const strict = false
export const state = () => ({
  doctors:[]
})

export const mutations = {
  mutationAddingDoctors(state, payload){
    state.doctors = payload
  }
}
export const actions = {
  actionGetDoctors({commit}, payload){
    DB.ref('Doctors').once('value').then(doctors => {
      // console.log('doctors has : ', doctors.val())
      commit('mutationAddingDoctors', doctors.val())
    })
  }
}

export const getters = {
  getReviews(state){
    return state.reviews
  },
  doctorsGetter(state){
    return state.doctors
  }
}
