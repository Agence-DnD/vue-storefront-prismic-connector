import { MutationTree } from 'vuex'
import * as types from './mutation-types'

export const mutations: MutationTree<any> = {
  [types.SET_PRISMIC_CMS_BLOCKS] (state, blocks) {
    state.prismicCmsBlocks = blocks
  },
  [types.SET_PRISMIC_CMS_PAGES] (state, pages) {
    state.prismicCmsPages = pages
  }
}
