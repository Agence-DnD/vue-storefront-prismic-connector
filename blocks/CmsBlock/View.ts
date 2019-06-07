import { currentStoreView } from '@vue-storefront/core/lib/multistore'
import config from 'config'

export default {
  name: 'PrismicCmsBlock',
  props: {
    identifier: {
      type: String,
      default: null,
      required: true
    }
  },
  data () {
    return {
      block: null
    }
  },
  methods: {},
  created () {
    const storeView = currentStoreView()
    let storeCode = 'en-gb'
    if (typeof config.prismic != 'undefined' && typeof config.prismic.defaultLocale != 'undefined') {
      storeCode = config.prismic.defaultLocale
    }
    if (storeView && storeView.storeCode.length !== 0) {
      storeCode = storeView.storeCode
    }

    this.$store.dispatch('dnd-prismic-cms/refreshCmsBlocksCollection').then((cmsBlocksCollection) => {
      let lang = storeCode.split('-')[0]
      this.block = this.$store.getters[`dnd-prismic-cms/getCmsBlock`](this.identifier, lang)
    })
  }
}
