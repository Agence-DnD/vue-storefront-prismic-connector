import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { module } from './store/index'
import { initCacheStorage } from '@vue-storefront/core/helpers/initCacheStorage'
import { beforeEach } from './router/beforeEach'

const KEY = 'dnd-prismic-cms'

export const cacheStorage = initCacheStorage(KEY)

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module: module }] },
  router: { beforeEach }
}

export const DndPrismicCMS = new VueStorefrontModule(moduleConfig)
