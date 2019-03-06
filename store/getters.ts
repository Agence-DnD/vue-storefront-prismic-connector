import { DndPrismicCmsState } from '../types/DndPrismicCmsState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<DndPrismicCmsState, any> = {
  getCmsBlock: (state) => (identifier, lang) => {
    return state.prismicCmsBlocks.find(item => item.identifier === identifier && item.lang.match(lang))
  },
  getCmsPage: (state) => (slug) => {
    return state.prismicCmsPages.find(item => item.slug === slug)
  }
}
