<template>
  <div class="prismic-cmspage">
    <span v-if="page" v-html="page.title" />
    <div v-if="page" v-html="page.content" />
  </div>
</template>

<script>
import PrismicCmsPage from '../../blocks/CmsPage/View'

export default {
  mixins: [PrismicCmsPage]
}
</script>

<style lang="scss" scoped>
// style here
</style>
