# v-currency

> A plugin for formatting currency in Vue.js

## Usage

```
 Vue.use(Currency, {
  "type": "USD",
  "thousandSeparator": true,
 });
```

In order to use it in your components:

```
export default {
  name: 'Sample',
  data () {
    return {
      moneys: [
        100500.945, 15043.5, 9909, 210, 44.30, -24, 'tq1'
      ]
    }
  },
  methods: {
    getMoneys(i) {
      return this.$helpers.currency(this.moneys[i]);
    },
  },

```

To change currency on the fly
```
onChange(e){
  this.$helpers.changeCurrency(e.target.value);
  this.$forceUpdate();
}
```

## Supported formats
* USD (US)
* CAD (Canada)
* EUR (Europe)
* GBP (Great Britain)
* JPY (Japan)
* DEU (Germany)
* BRA (Brazil)
* FRA (France)
* ITA (Italy)
* CHE (Switzerland)
* BGR (Bulgaria)

To create a custom format you can add rules to the components

```
"YOUR_CUSTOM_CURRENCY": {
  "symbol": "$_", // preceding underscore places numbers before symbol.  succeeding underscore places numbers after symbol
  "thousandSeperator": 0, // (0: comma || 1: decimal || 2: space || 3: apostrophe)
  "decimalSeperator": 0, // (0: decimal || 1: comma || 2: space)
  "negativePattern": 2 // (0: symbol before || 1: symbol after || 2: Parenthesis)
},
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
