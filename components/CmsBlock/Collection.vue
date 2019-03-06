<template>
  <div>
    <div v-for="identifier in identifiers" :key="identifier.id">
      <prismic-cms-block :identifier="identifier" />
    </div>
  </div>
</template>

<script>
import PrismicCmsBlockCollection from '../../blocks/CmsBlock/Collection'
import PrismicCmsBlock from './View.vue'

export default {
  components: {
    PrismicCmsBlock
  },
  mixins: [PrismicCmsBlockCollection]
}
</script>

<style lang="scss" scoped>
// style here
</style>
