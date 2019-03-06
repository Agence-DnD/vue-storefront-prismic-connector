import { Module } from 'vuex'
import { DndPrismicCmsState } from '../types/DndPrismicCmsState'
import { state } from './state'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

export const module: Module<DndPrismicCmsState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
