function load_recost() {
	var tablesheet = 'MWJyNEdqUGtINXBiMkw3emV2dmduZFRBSG9wT1VEd3pkTjB6eFJaamM2Rkk=',
		geoark = 'QUl6YVN5RFh3RFRXMldudlVsTVc2U1Q3aFJGWWZ1dE5TN3RiNUU4',
		geturl = 'aHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLw==',
		setfields = 'c2hlZXRzKGRhdGEucm93RGF0YS52YWx1ZXMuZm9ybWF0dGVkVmFsdWUp';
	tablesheet = decode(tablesheet),
		geoark = decode(geoark),
		geturl = decode(geturl),
		setfields = decode(setfields);
	jQuery.getJSON(geturl + tablesheet + "/?", {
		key: geoark,
		alt: "json",
		fields: setfields
	}).catch(function(error) {
		try {
			if (typeof recost_error == 'function') {
				recost_error(error)
			}
		} catch (e) {}
		try {
			if (typeof recostSearch_error == 'function') {
				setnote("حدث خطأ");
				console.log('Error', error);
			}
		} catch (e) {}
	}).done(function(recosts) {
		try {
			if (typeof recost_done == 'function') {
				recost_done(recosts);
				try {
					var setdataInStorage = JSON.stringify(recosts);
					var xmlString = setdataInStorage.toString();
					localStorage.setItem('dataInStorage', xmlString);
				} catch (e) {
					console.log('Error load dataStorage ', e);
				}
			}
		} catch (e) {}
		try {
			if (typeof recostSearch_done == 'function') {
				recostSearch_done(recosts)
			}
		} catch (e) {}
	});
	var lastVersion = localStorage.getItem('lastVersion');
  if(lastVersion != null){
	console.log('Version Update', lastVersion);
//	setnote('Version Update ' + lastVersion);
  }
}
function load_recostWithoutcookie() {
	var tablesheet = 'MWJyNEdqUGtINXBiMkw3emV2dmduZFRBSG9wT1VEd3pkTjB6eFJaamM2Rkk=',
		geoark = 'QUl6YVN5RFh3RFRXMldudlVsTVc2U1Q3aFJGWWZ1dE5TN3RiNUU4',
		geturl = 'aHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLw==',
		setfields = 'c2hlZXRzKGRhdGEucm93RGF0YS52YWx1ZXMuZm9ybWF0dGVkVmFsdWUp';
	tablesheet = decode(tablesheet),
		geoark = decode(geoark),
		geturl = decode(geturl),
		setfields = decode(setfields);
	jQuery.getJSON(geturl + tablesheet + "/?", {
		key: geoark,
		alt: "json",
		fields: setfields
	}).catch(function(error) {
				setnote("حدث خطأ");
				console.log('Error', error);
	}).done(function(recosts) {
		try {
			if (typeof recost_done == 'function') {
				recost_done(recosts);
			}
		} catch (e) {
        setnote("حدث خطأ");
        console.log('Error', e);
        }
		try {
			if (typeof recostSearch_done == 'function') {
				recostSearch_done(recosts)
			}
		} catch (e) {}
	});

}
$(document).ready(function() {
	function gethn() {
		var url = location.host;
		var hn = url.split(".").slice(-2).join(".");
		return encode(hn)
	}
	if (gethn() == "ZG9pdGYuY29t" || gethn() == "Z2VvYXJhYmljLmNvbQ==") {
      
      
if (navigator.cookieEnabled == false) {
  load_recostWithoutcookie()
}else{
      
		var dataStorage = localStorage.getItem('dataInStorage');
		if (dataStorage != null && dataStorage != "" && dataStorage != undefined) {
			try {
				var setDataStorage = JSON.parse(dataStorage);
				try {
					if (typeof recost_done == 'function') {
						recost_done(setDataStorage);
						checklastUpdate();
					}
				} catch (e) {
					console.log('Error load jQueryisFunction_recost_done ', e);
					load_recost();
				}
				try {
					if (typeof recostSearch_done == 'function') {
						recostSearch_done(setDataStorage);
					}
				} catch (e) {
					console.log('Error load jQueryisFunction_recostSearch_done ', e);
					load_recost();
				}
			} catch (e) {
				console.log('Error Get dataStorage ', e);
				load_recost();
			}
		} else {
			load_recost();
		}
	}}
  
    

  
});

function checklastUpdate() {
	var idget = 'MWJyNEdqUGtINXBiMkw3emV2dmduZFRBSG9wT1VEd3pkTjB6eFJaamM2Rkk=',
		geoark = 'QUl6YVN5RHBDdXZBY0wwRVNZaEk1WDlhbW95MTJOR3Bzd3dYZGxR',
		geturl = 'aHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZHJpdmUvdjMvZmlsZXMv',
		setfields = 'dmVyc2lvbg==';
	idget = decode(idget),
		geoark = decode(geoark),
		geturl = decode(geturl),
		setfields = decode(setfields),
		$.getJSON(geturl + idget + "?", {
			key: geoark,
			fields: setfields
		}).done(function(recosts) {
			var lastVersion = recosts.version;
			var lastInstalledVersion = localStorage.getItem('lastVersion');
			if (lastVersion != lastInstalledVersion) {
				localStorage.setItem('lastVersion', lastVersion);
				load_recost();
			}
		});
}
