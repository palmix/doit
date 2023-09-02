function getValUrl(url, parameter) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        for (var i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                var pair = pars[i].split('=');
                var str = pair[1];
                var str1 = '#';
                var str2 = str.search(str1);
                var vals = str;
                if (str2 > 1) {
                    vals = str.substring(0, str2);
                }
                return vals;
            }

        }
    }

    return '';
}

function getValLink(parameter) {
    var url = window.location.href;
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        for (var i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                var pair = pars[i].split('=');
                var str = pair[1];
                var str1 = '#';
                var str2 = str.search(str1);
                var vals = str;
                if (str2 > 1) {
                    vals = str.substring(0, str2);
                }
                return vals;
            }

        }
    }

    return '';
}
//var ValUrl = getValUrl('https://www.example.com/hello.png?w=1020&h=100&b=white#2e', 'b');
//var Vallink = getValLink('view');
//console.log(ValUrl);
//console.log(Vallink);




function geturlval(url, vals) {
	if (vals == undefined || vals == 'undefined' || vals == null) {
		vals = url;
		url = window.location.href;
	}
	var queryStart = url.indexOf("?") + 1,
		queryEnd = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		pairs = query.replace(/\+/g, " ").split("&"),
		parms = {},
		i, n, v, nv;
	if (query === url || query === "") {
		return '';
	}
	for (i = 0; i < pairs.length; i++) {
		nv = pairs[i].split("=", 2);
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);
		if (n == vals) {
			return v;
		}
		if (!parms.hasOwnProperty(n)) parms = '';
	}
	return parms;
}
//var urlval = geturlval('code')
//var urlval = geturlval('https://try.doitf.com/p/try.html?code=MW9uaVluZTU4UVp5bWlnLWpvcmZjekJhTTk5dWctRFRS','code')
//console.log(urlval)