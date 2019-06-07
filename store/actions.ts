import { DndPrismicCmsState } from '../types/DndPrismicCmsState'
import { ActionTree } from 'vuex';
import * as types from './mutation-types'
import config from 'config'
import { SearchAdapter } from '@vue-storefront/core/lib/search/adapter/graphql/searchAdapter'
import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import SearchQuery from '@vue-storefront/core/lib/search/searchQuery'

const CMS_BLOCK_ENTITY_TYPE = 'prismicCmsBlocks'
const CMS_PAGES_ENTITY_TYPE = 'prismicCmsPages'
const GRAPHQL_URL = config.server.protocol + '://' + config.graphql.host + ':' + config.graphql.port + '/graphql'

const storeView = currentStoreView()
const searchQuery = new SearchQuery()
let searchAdapter = new SearchAdapter()

searchAdapter.registerEntityTypeByQuery(CMS_BLOCK_ENTITY_TYPE, {
  url: GRAPHQL_URL,
  query: require('../queries/cmsBlocks.gql'),
  queryProcessor: (query) => {
    return query
  },
  resultPorcessor: (resp, start, size) => {
    if (resp === null) {
      throw new Error('Invalid graphQl result - null not expected for entity type \'prismicCmsBlocks\'')
    }
    if (resp.hasOwnProperty('data')) {
      return resp.data.prismicCmsBlocks
    } else {
      if (resp.error) {
        throw new Error(JSON.stringify(resp.error))
      } else {
        throw new Error('Unknown error with graphQl result in resultPorcessor for entity type \'prismicCmsBlocks\'')
      }
    }
  }
})
searchAdapter.registerEntityTypeByQuery(CMS_PAGES_ENTITY_TYPE, {
  url: GRAPHQL_URL,
  query: require('../queries/cmsPages.gql'),
  queryProcessor: (query) => {
    return query
  },
  resultPorcessor: (resp, start, size) => {
    if (resp === null) {
      throw new Error('Invalid graphQl result - null not expected for entity type \'prismicCmsPages\'')
    }
    if (resp.hasOwnProperty('data')) {
      return resp.data.prismicCmsPages
    } else {
      if (resp.error) {
        throw new Error(JSON.stringify(resp.error))
      } else {
        throw new Error('Unknown error with graphQl result in resultPorcessor for entity type \'prismicCmsPages\'')
      }
    }
  }
})

export const actions: ActionTree<DndPrismicCmsState, any> = {
  // TODO : use local cache

  refreshCmsBlocksCollection (context) {
    return new Promise ((resolve, reject) => {
      // prepare a Request object
      const Request = {
        store: storeView.storeCode,
        type: CMS_BLOCK_ENTITY_TYPE,
        searchQuery: searchQuery,
        sort: ''
      }
      searchAdapter.search(Request).then((resp) => {
        let cmsBlocksData = searchAdapter.entities[Request.type].resultPorcessor(resp, 0, 200)
        context.commit(types.SET_PRISMIC_CMS_BLOCKS, cmsBlocksData)

        resolve(cmsBlocksData)
      }).catch(() => reject())
    })
  },

  refreshCmsPagesCollection (context) {
    return new Promise ((resolve, reject) => {
      // prepare a Request object
      const Request = {
        store: storeView.storeCode,
        type: CMS_PAGES_ENTITY_TYPE,
        searchQuery: searchQuery,
        sort: ''
      }
      searchAdapter.search(Request).then((resp) => {
        let cmsPagesData = searchAdapter.entities[Request.type].resultPorcessor(resp, 0, 200)
        context.commit(types.SET_PRISMIC_CMS_PAGES, cmsPagesData)

        resolve(cmsPagesData)
      }).catch(() => reject())
    })
  }
}
