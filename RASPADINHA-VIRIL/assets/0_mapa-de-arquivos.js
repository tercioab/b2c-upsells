/* Mapa do ripador: endereços originais -> cópias locais deste clone. */
(function () {
  var MAP = {"https://checkout.payt.com.br/multiple-oneclickbuyscript/4MJPAV.js": "assets/9_4MJPAV.js", "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap": "assets/10_css2.css", "https://fonts.gstatic.com/s/barlow/v13/7cHpv4kjgoGqM7E_A8s52Hs.woff2": "assets/14_7cHpv4kjgoGqM7E_A8s52Hs.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHpv4kjgoGqM7E_Ass52Hs.woff2": "assets/11_7cHpv4kjgoGqM7E_Ass52Hs.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHpv4kjgoGqM7E_DMs5.woff2": "assets/7_7cHpv4kjgoGqM7E_DMs5.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E30-8s51os.woff2": "assets/4_7cHqv4kjgoGqM7E30-8s51os.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E30-8s6FospT4.woff2": "assets/26_7cHqv4kjgoGqM7E30-8s6FospT4.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E30-8s6VospT4.woff2": "assets/13_7cHqv4kjgoGqM7E30-8s6VospT4.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3_-gs51os.woff2": "assets/6_7cHqv4kjgoGqM7E3_-gs51os.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3_-gs6FospT4.woff2": "assets/12_7cHqv4kjgoGqM7E3_-gs6FospT4.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3_-gs6VospT4.woff2": "assets/15_7cHqv4kjgoGqM7E3_-gs6VospT4.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3t-4s51os.woff2": "assets/5_7cHqv4kjgoGqM7E3t-4s51os.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3t-4s6FospT4.woff2": "assets/24_7cHqv4kjgoGqM7E3t-4s6FospT4.woff2", "https://fonts.gstatic.com/s/barlow/v13/7cHqv4kjgoGqM7E3t-4s6VospT4.woff2": "assets/25_7cHqv4kjgoGqM7E3t-4s6VospT4.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuQ.woff2": "assets/22_HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuQ.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3jWuZEC.woff2": "assets/19_HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3jWuZEC.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3nWuZEC.woff2": "assets/17_HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3nWuZEC.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3bWuQ.woff2": "assets/8_HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3bWuQ.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3jWuZEC.woff2": "assets/23_HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3jWuZEC.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3nWuZEC.woff2": "assets/21_HTxwL3I-JCGChYJ8VI-L6OO_au7B47b1z3nWuZEC.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3bWuQ.woff2": "assets/16_HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3bWuQ.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3jWuZEC.woff2": "assets/20_HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3jWuZEC.woff2", "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3nWuZEC.woff2": "assets/18_HTxwL3I-JCGChYJ8VI-L6OO_au7B4873z3nWuZEC.woff2", "https://seguro.betaprost.com/home/upsell/meta/versao-2/up1/css/style.css?v=3": "assets/1_style.css", "https://seguro.betaprost.com/home/upsell/meta/versao-2/up1/img/frascos-5.webp": "assets/3_frascos-5.webp", "https://seguro.betaprost.com/home/upsell/meta/versao-2/up1/js/app.js": "assets/2_app.js"};
  var ORIGIN = "https://seguro.betaprost.com";
  var here = document.currentScript && document.currentScript.src;
  var root = here ? here.replace(/assets\/[^\/]*$/, '') : '';

  function local(value) {
    if (value == null) return null;
    var text = String(value);
    if (!text || /^(data|blob|javascript):/i.test(text)) return null;
    var url;
    try { url = new URL(text, location.href); } catch (e) { return null; }
    var key = url.href.split('#')[0];
    var hit = MAP[key];
    if (!hit && url.origin === location.origin && ORIGIN) {
      // Built from location: on the original site that was its own host.
      hit = MAP[ORIGIN + url.pathname + url.search];
    }
    if (!hit && url.protocol === 'http:') hit = MAP['https:' + key.slice(5)];
    return hit ? root + hit : null;
  }

  var nativeFetch = window.fetch;
  if (nativeFetch) {
    window.fetch = function (input, init) {
      try {
        var isRequest = typeof Request !== 'undefined' && input instanceof Request;
        var method = ((init && init.method) || (isRequest && input.method) || 'GET').toUpperCase();
        var target = method === 'GET' || method === 'HEAD' ? local(isRequest ? input.url : input) : null;
        if (target) input = isRequest ? new Request(target, input) : target;
      } catch (e) {}
      return nativeFetch.call(this, input, init);
    };
  }

  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    try {
      var target = /^(GET|HEAD)$/i.test(method) ? local(url) : null;
      if (target) arguments[1] = target;
    } catch (e) {}
    return open.apply(this, arguments);
  };

  function hook(proto, prop) {
    var d = proto && Object.getOwnPropertyDescriptor(proto, prop);
    if (!d || !d.set || !d.configurable) return;
    Object.defineProperty(proto, prop, {
      configurable: true,
      enumerable: d.enumerable,
      get: d.get,
      set: function (value) { d.set.call(this, local(value) || value); }
    });
  }
  hook(window.HTMLImageElement && HTMLImageElement.prototype, 'src');
  hook(window.HTMLMediaElement && HTMLMediaElement.prototype, 'src');
  hook(window.HTMLSourceElement && HTMLSourceElement.prototype, 'src');
  hook(window.HTMLScriptElement && HTMLScriptElement.prototype, 'src');
  hook(window.HTMLLinkElement && HTMLLinkElement.prototype, 'href');

  var setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    if (/^(src|href|poster)$/i.test(name) && this.tagName !== 'A') {
      var target = local(value);
      if (target) value = target;
    }
    return setAttribute.call(this, name, value);
  };
})();
