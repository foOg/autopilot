# autopilot

During my life as a CTO I found it difficult to be always on top of important topics. This is why I built a CTO checklist. It is here to help CTO handling the right thing at the right time. It is far from exhaustive as each company has its own struggles.

# Contribute

The data is simply stored in a grossy big object composed of the following properties:

```
- title: String (required): this would appear in the cell
- description: String (optional): this would create an expanding cell and appears as details
- tags: [String] (optional): this would create a chip on the right hand side of the cell
- stage: String (required): can be `seed|serie A|post serie A` only
- value: Boolean (unused): this is used as model to store wether or not the item has been tick
```

You can also add a category by adding a root property to content. Be carefull the display name is the key directly (I know...).
You can make pull request directly to the file named `content.js` under `src/content.js`.

### Project setup

```
yarn install
yarn serve
yarn build
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
