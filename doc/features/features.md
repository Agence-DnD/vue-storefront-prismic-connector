# Features:

### Call a CMS block:

You can call a single block by its Prismic identifier (see [Vue Storefront API - Prismic Connector readme](https://github.com/Agence-DnD/vue-storefront-api-prismic-connector) for more details about this field):

```typescript
import PrismicCmsBlock from 'src/modules/dnd-prismic-cms/components/CmsBlock/View.vue'

//...
<prismic-cms-block :identifier="'banner'" />
```

### Call a CMS block collection:

You can call multiple CMS blocks with only one component if you want to display them together. The order of the provided identifiers will define the blocks display order:

```typescript
import PrismicCmsBlockCollection from 'src/modules/dnd-prismic-cms/components/CmsBlock/Collection'

//...
<prismic-cms-block-collection :identifiers="['banner', 'reassurance']"/>
```

### Call a CMS page:

* You can call a CMS page the same way as a block using its slug instead of the identifier:

```typescript
import PrismicCmsPage from 'src/modules/dnd-prismic-cms/components/CmsPage/View'

//...
<prismic-cms-page :slug="'summer-promotion'" />
```

* You can register a page in the router to get it called on its slug:

In the file `src/themes/default/router/index.js`:

```typescript
const PrismicCmsPage = () => import(/* webpackChunkName: "prismic-cms" */ 'src/modules/dnd-prismic-cms/components/CmsPage/View')

//...
{ name: 'demo-prismic-promo', path: '/summer-promotion', component: PrismicCmsPage, props: {slug: 'summer-promotion'} }
```

* Auto register pages from Prismic, based on their slug attribute:

To enable the CMS page registration you will have to add the following line in your `src/themes/<app_theme>/router/index.js` at the end of `routes` var declaration:

```typescript
{ name: 'prismic-cms-page', path: '/:cmsSlug', component: PrismicCmsPage }
```

Example:

```typescript
  //...
  const PrismicCmsPage = () => import(/* webpackChunkName: "prismic-cms" */ 'src/modules/dnd-prismic-cms/components/CmsPage/View')
  //...
  { name: 'page-not-found', path: '/page-not-found', component: PageNotFound },
  { name: 'cms-page-sync', path: '/cms-page-sync', component: CmsData, props: {identifier: 'about-us', type: 'Page', sync: true} },
  { name: 'prismic-cms-page', path: '/:cmsSlug', component: PrismicCmsPage } // should be always at the end
]
if (!config.products.useShortCatalogUrls) {
  routes = routes.concat([{ name: 'virtual-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  //...
```

After this, all the pages published on the Prismic associated account are available on VSF, on the slug defined in the related Prismic attribute.
See [Vue Storefront API - Prismic Connector](https://github.com/Agence-DnD/vue-storefront-api-prismic-connector) for more details about this attribute.


##### [> Back to summary](../summary.md)
