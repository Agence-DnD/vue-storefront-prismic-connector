import { Route } from 'vue-router'
import store from '@vue-storefront/core/store'

const PRISMIC_CMS_PAGE_CODE = 'prismic-cms-page'

export function beforeEach(to: Route, from: Route, next) {
  if (to.name !== PRISMIC_CMS_PAGE_CODE) {
    next()
    return false
  }

  store.dispatch('dnd-prismic-cms/refreshCmsPagesCollection').then((cmsPagesCollection) => {
    const slug = to.path.replace('/', '')
    const page = store.getters[`dnd-prismic-cms/getCmsPage`](slug)
    if (typeof page != 'undefined' && page.id.length > 0) {
      next()
      return false
    }

    next({ name: 'page-not-found' })
    return false
  })
}
