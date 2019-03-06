export default {
  name: 'PrismicCmsPage',
  props: {
    slug: {
      type: String,
      default: null,
      required: false
    }
  },
  data () {
    return {
      page: null
    }
  },
  methods: {},
  created () {
    let slug = this.slug
    if (this.slug === null) {
      slug = this.$route.params.cmsSlug
    }

    this.$store.dispatch('dnd-prismic-cms/refreshCmsPagesCollection').then((cmsPagesCollection) => {
      this.page = this.$store.getters[`dnd-prismic-cms/getCmsPage`](slug)
    })
  }
}
