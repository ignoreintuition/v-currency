const RULES = {
  "USD": {
    "symbol": "$",
    "thousandSeperator": 0,
    "decimalSeperator": 0,
    "negativePattern": 2
  },
  "CAD": {
    "symbol": "$_",
    "thousandSeperator": 0,
    "decimalSeperator": 0,
    "negativePattern": 2
  },
  "EUR": {
    "symbol": "€_",
    "thousandSeperator": 1,
    "decimalSeperator": 1,
    "negativePattern": 0
  },
  "GBP": {
    "symbol": "£_",
    "thousandSeperator": 1,
    "decimalSeperator": 1,
    "negativePattern": 0
  },
  "JPY": {
    "symbol": "¥_",
    "thousandSeperator": 0,
    "decimalSeperator": 0,
    "negativePattern": 0
  },
  "DEU": {
    "symbol": "_€",
    "thousandSeperator": 1,
    "decimalSeperator": 1,
    "negativePattern": 0
  },
};

export default {
  install: function (Vue, options) {
    Vue.prototype.$helpers = {
      currency: function(val) {
        if (typeof val !== 'number')
          return "NAN";
        val = (val / 1).toFixed(2)
        return convert(options, val);
      },
      changeCurrency: function(c) {
        options.type = c;
      }
    }
  }
}

function convert(o, val){
  if (o.type === undefined || RULES[o.type] === undefined)
    return `${val.toString()}`
  val = (o.thousandSeparator) ? insertThousandSeparator(val, RULES[o.type].thousandSeperator) : val;
  val = insertDecimalSeperator(val, RULES[o.type].decimalSeperator);
  val = negativePattern(val, RULES[o.type].negativePattern);
  val = insertCurrencySymbol(val, RULES[o.type].symbol);
  return val
};

// 0: comma (e.g. 100,000)
// 1: decimal (e.g. 100.000)
// 2: space (e.g. 100 000)
// 3: apostrophe (e.g. 100'000)
function insertThousandSeparator(val, format) {
  var seperators = [',', '.', ' ', '\'']
  var originalValue = val.toString().split("");
  var oValLength = originalValue.length - 3
  var seperatedValue = [];
  originalValue.forEach(function(a, i){
    seperatedValue.push(a)
    if((oValLength - i) % 3 == 1 && i + 1 < oValLength && a !=='-'){
      seperatedValue.push(seperators[format])
    }
  })
  return seperatedValue.join('');
};

// 0: decimal (e.g. 10.00)
// 1: comma (e.g. 10,00)
// 2: space (e.g. 10 00)
function insertDecimalSeperator(val, format){
  var seperators = ['.', ',', ' ']
  return val.substr(0,val.length - 3) + seperators[format] + val.substr(val.length -2);
};

// 0: pre (e.g. -10.00)
// 1: post (e.g. 10.00-)
// 2: parenthesis (e.g. (10.00))
function negativePattern(val, format){
  if (val.indexOf('-') > -1) {
    switch (format){
      case 0:
        return val;
      case 1:
        return val.replace('-', '') + '-';
      case 2:
        return val.replace('-', '(') + ')';
      default:
        return val;
    }
  }
  else
    return val;
}

function insertCurrencySymbol(val, format){
  var pSign = '';
  if (format.indexOf('_') > -1) {
    if (val.indexOf('-') === 0) {
      pSign = '-'
      val = val.substr(1, val.length);
    }
    val = (format.indexOf('_') === 0) ? `${pSign + val.toString() + " " + format.substr(1,format.length)}` : `${pSign + format.substr(0, format.length-1) + " " + val.toString()}`
  }
  else
    val = `${format + " " + val.toString()}`
  return val;
}
