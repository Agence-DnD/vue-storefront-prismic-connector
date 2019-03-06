# Installation guide:

### How to install Vue Storefront - Prismic Connector:

To install Vue Storefront - Prismic Connector, put this extension in `src/modules/dnd-prismic-cms`:

Then, open file `src/modules/index.ts` and import the module:

```typescript
import { DndPrismicCMS } from './dnd-prismic-cms'

//...
export const registerModules: VueStorefrontModule[] = [
  Checkout,
  //...
  // register Prismic CMS module
  DndPrismicCMS
]
```

Finally, define the module configuration in your `config/local.json`:

```json
"prismic": {
  "defaultLocale": "en-gb"
},
```

* the `defaultLocale` will define the base Prismic lang to use for CMS blocks display, you can find it on your Prismic account, in *Settings > Translations & locales*

##### [> Back to summary](../summary.md)
