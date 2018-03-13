export default {
  install: function (Vue, options) {
    Vue.prototype.$helpers = {
      currency: function(val) {
        val = (val / 1).toFixed(2);
        return convert(options.type, val);
      },
      changeCurrency: function(c) {
        options.type = c;
      }
    }
  }
}

function convert(t, val){
  switch (t){
    case 'USD':
      return `$${val.toString()}`;
    case 'EUR':
      return `€${val.toString().replace('.', ',')}`;
    case 'JPY':
      return `¥${val.toString()}`;
    default:
      return `${val.toString()}`
  }
}
