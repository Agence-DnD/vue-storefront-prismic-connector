<template>
  <div class="prismic-cmsblock">
    <span v-if="block" v-html="block.title" />
    <div v-if="block" v-html="block.content" />
  </div>
</template>

<script>
import PrismicCmsBlock from '../../blocks/CmsBlock/View'

export default {
  mixins: [PrismicCmsBlock]
}
</script>

<style lang="scss" scoped>
// style here
</style>
