# Configuration guide:

### How to configure Vue Storefront - Prismic Connector:

To configure Vue Storefront - Prismic Connector, define the module configuration in your `config/local.json`:

```
"prismic": {
  "defaultLocale": "en-gb"
},
```

The `defaultLocale` will define the base Prismic locale to use for CMS blocks display, you can find it on your Prismic account, in *Settings > Translations & locales*

You can also enable the CMS page registration by adding the following line in your `src/themes/<app_theme>/router/index.js` at the end of `routes` var declaration:

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

##### [> Back to summary](../summary.md)
