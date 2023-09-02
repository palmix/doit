
  
function recost_error(error) {
	$(".setSheetHideSite").removeClass("setSheetHideSite");
	$("#cardslistallUser").html('<div class="alert alert-danger d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle my-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: ' + error.status + '</div></div>');
	$('.loadingFullscreen').addClass('d-none');
	$("#PageCardName").addClass('d-none');
}

function recost_done(recosts) {
	profileSet(recosts)
}
var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1MSVD6mO_FyPZS5KM2n7sx3fld45BfjtvrFQw-Ldkm5Q/values/responses?";

function profileSet(recosts) {
	$(document).ready(function() {
		var getIdCard = '';
		try {
			var getAcS = checkCookie('get', 'AcSettings', null);
			if (getSC !== undefined && getSC != '') {
				getIdCard = getAcS.Id;
			}
		} catch (e) {
			$("#alertlogin").removeClass("d-none");
		}
		if (getIdCard != undefined && getIdCard != '') {
			$.getJSON(getusercodedrive, {
				key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
				range: "G:G",
				majorDimension: "ROWS"
			}).done(function(recostss) {
				var user = getIdCard;
				user = user.toString().toLowerCase();
				var userused = false;
				var userId = 0;
				var getUser = recostss.values;
				var i;
				for (i = 0; i < getUser.length; i++) {
					var texts = getUser[i].toString();
					texts = decode(texts);
					texts = texts.toString().toLowerCase();
					if (texts == user) {
						userused = true;
						userId = i + 1;
					}
				}
				if (userused == true) {
					setUserProfile(recosts, userId);
				} else {
					$("#MyProfile").removeClass('d-none');
					$("#MyProfile").html('<div class="alert alert-warning d-flex align-items-center my-4" role="alert"> <i class="fa fa-exclamation-triangle mx-2" aria-hidden="true"></i> <div> لا يوجد ملف شخصي لهذا الإسم </div> </div>');
				}
			});

			function setUserProfile(recosts, nom) {
				var range = nom.toString();
				range = "A" + nom + ":Z" + nom;
				$.getJSON(getusercodedrive, {
					key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
					range: range,
					majorDimension: "COLUMNS"
				}).done(function(recostss) {
					var cars = recostss.values;
					var Timestamp = cars[0].toString();
					var ResponseNumber = cars[1].toString();
					var AccountStatus = cars[2].toString();
					var UserName = cars[3].toString();
					var LastName = cars[4].toString();
					var UserEmail = cars[5].toString();
					var UserUserID = cars[6].toString();
					var UserGender = cars[7].toString();
					var UserImgProfile = cars[8].toString();
					var UserPss = cars[9].toString();
					var InApp = cars[10].toString();
					var LoginWith = cars[11].toString();
					var TheState = cars[12].toString();
					var UserAccountId = cars[13].toString();
					UserName = decode(UserName);
					LastName = decode(LastName);
					UserEmail = decode(UserEmail);
					UserUserID = decode(UserUserID);
					UserGender = decode(UserGender);
					UserImgProfile = decode(UserImgProfile);
					LoginWith = decode(LoginWith);
					UserPss = decode(UserPss);
					AccountStatus = decode(AccountStatus);
					UserName = UserName.toString();
					LastName = LastName.toString();
					UserEmail = UserEmail.toString();
					UserUserID = UserUserID.toString();
					UserGender = UserGender.toString();
					UserImgProfile = UserImgProfile.toString();
					LoginWith = LoginWith.toString();
					AccountStatus = AccountStatus.toString();
					$("#AccountStatus").val(AccountStatus);
					var UserImgProfileLink = UserImgProfile.replace('=s120', '=s1600');
					var UserImgProfiles = UserImgProfile.replace('=s120', '=w360-h360-p');
					var userid = ResponseNumber.replace('ID1000000', '');
					userid = parseInt(userid);
					userid = userid + 2;
					$("#UserName1").html(UserName + ' ' + LastName);
					$("#UserUserID1").html('@' + UserUserID);
					$("#UserImgProfile1").attr('src', UserImgProfiles);
					$("#UserImgProfile1").attr('alt', UserName + ' ' + LastName);
					$("#UserImgProfileLink1").attr('href', UserImgProfileLink);
					$("#UserGender1").html(UserGender);
					$("#TheState1").html(TheState);
					setPropertiesUser(AccountStatus);
					setProfileViews(userid);
					setUserFavoritePost(recosts, UserAccountId, UserName, UserGender);
				});
			}
		} else {
			$("#alertlogin").removeClass("d-none");
		}
	});
}

function setPropertiesUser(Properties) {
	var UserProperties = Properties;
	var name, circle;
	if (UserProperties == 4) {
		circle = '<i class="fas fa-user-shield text-primary mx-1" onclick="properties(&#039;admin&#039;)" aria-hidden="true"></i>';
	} else if (UserProperties == 3) {
		circle = '<i class="fa fa-check-circle text-primary mx-1" onclick="properties(&#039;trust&#039;)" aria-hidden="true"></i>';
	} else if (UserProperties == 2) {
		circle = '<i class="fa fa-crown text-success mx-1" onclick="properties(&#039;vip&#039;)" aria-hidden="true"></i>';
	} else if (UserProperties == 1) {
		circle = '';
	}
	name = $("#UserName1").html();
	var s = name.substring(0, 1);
	var reusername = /^[A-Za-z0-9]*$/;
	if (reusername.test(s) == true) {
		$("#UserName1").html(circle + name);
	} else {
		$("#UserName1").html(name + circle);
	}
}

function setProfileViews(userID) {
	var elem = $("#ViewProfile");
	var userid = userID;
	userid = userid - 2;
	userid = userid.toString();
	userid = 'ID1000000' + userid;
	var blogStats = new Firebase("https://geoarabic1.firebaseio.com/user/id/" + userid);
	blogStats.once("value", function(snapshot) {
		var data = snapshot.val();
		var isnew = false;
		if (data == null) {
			data = {};
			data.value = 0;
			data.id = userid;
			isnew = true;
		}
		elem.text(data.value);
		data.value++;
		if (isnew) {
			blogStats.set(data);
		} else {
			blogStats.child("value").set(data.value);
		}
	});
	$("#MyProfile").removeClass('d-none');
}

function setUserFavoritePost(recosts, UserAccountIds, UserNames, UserGenders) {
	var UserAccountId_favorite = UserAccountIds;
	UserAccountId_favorite = 'U' + UserAccountId_favorite;
	$.getJSON("https://geoarabicuser-default-rtdb.firebaseio.com/favorite/" + UserAccountId_favorite + ".json?", {}).catch(function(error) {
		recost_error(error);
	}).done(function(data) {
		var isnew = false;
		if (data == null) {
			var isnew = true;
		}
		if (isnew) {
			$('#alertNoPostFavorite').removeClass('d-none');
			$('#FavoritePostUser').html('0');
		} else {
			var getPostlength = Object.values(data).length;
			$("#FavoritePostUser").html(getPostlength);
			var n = 0;
			var UserAccountIdcw = "";
			var getAcS = checkCookie('get', 'AcSettings', null);
			if (getSC !== undefined && getSC != '') {
				UserAccountIdcw = getAcS.UserAccountId;
			}
			var cardss = '<h4 class="mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone">';
			var cardse = '</h4><div class="row row-cols-1 row-cols-md-3 g-4 mt-0">';
			var getuserId = UserAccountIds;
			var getUserName = UserNames;
			var getUserGender = UserGenders;
			var cardse = '<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">';
			var cards1 = [cardse];
			var cards1num = 0;
			var windowW = window.innerWidth;
			var windowH = window.innerHeight;
			
			
			
			



var recosts_Questions = recosts.sheets[0].data[0].rowData[1];
var item_Question = recosts.sheets[0].data[0].rowData[1];
var CommonName_Question = recosts_Questions.values[4].formattedValue;//الإسم الشائع


if(CommonName_Question != "الإسم الشائع"){
recosts_Questions = recosts.sheets[0].data[0].rowData.reverse()[1];
item_Question = recosts.sheets[0].data[0].rowData.reverse()[1];
}

  

var CommonName_Question = item_Question.values[4].formattedValue;//الإسم الشائع
var ScientificName_Question = item_Question.values[6].formattedValue;//الاسم العلمي
var Type_Question = item_Question.values[7].formattedValue;//النوع
var Class_Question = item_Question.values[8].formattedValue;//الطائفة
var Order_Question = item_Question.values[10].formattedValue;//الرتبة
var Subfamily_Question = item_Question.values[11].formattedValue;//الفصيلة
var Diet_Question = item_Question.values[12].formattedValue;//النظام الغذائي
var Age_Question = item_Question.values[13].formattedValue;//متوسط العمر
var Size_Question = item_Question.values[14].formattedValue;//الحجم
var Weight_Question = item_Question.values[15].formattedValue;//الوزن
var RedList_Question = item_Question.values[19].formattedValue;//حالة القائمة الحمراء (IUCN)
var Speed_Question = item_Question.values[21].formattedValue;//السرعة
var DurationPregnancy_Question = item_Question.values[22].formattedValue;//مدة الحمل
var PopulationTrend_Question = item_Question.values[16].formattedValue;//إتجاه السكان الحالي
var EcologicalHabitat_Question = item_Question.values[25].formattedValue;//الموطن البيئي
var Color_Question = item_Question.values[26].formattedValue;//الألوان
var Enemy_Question = item_Question.values[27].formattedValue;//الأعداء
var FeedOn_Question = item_Question.values[28].formattedValue;//الغذاء
var Img_Question = item_Question.values[29].formattedValue;//صورة الحيوان
var ImgCover_Question = item_Question.values[30].formattedValue;//صورة الغلاف
var MultipleImages_Question = item_Question.values[31].formattedValue;//صور متعددة
var JsonFileIdInDrive_Question = item_Question.values[32].formattedValue;//ملف Json
var DidYouKnow_Question = item_Question.values[43].formattedValue;//هل تعلم
var SourceInfo_Question = item_Question.values[52].formattedValue;//المراجع
var PostUrlInSite_Question = item_Question.values[61].formattedValue;//رابط المنشور
var PostIdInSite_Question = item_Question.values[62].formattedValue;//معرف المنشور هو
var SummaryPage_Question = item_Question.values[63].formattedValue;//وصف الموضوع
var ImgMaps_Question = item_Question.values[64].formattedValue;//صورة خريطة التواجد
var ImgMaps_table_Question = item_Question.values[67].formattedValue;//صور متعددة








			var Img_W = 214;
			var Img_H = 160;
			var widthcard = '15rem;';
			var paddingx = 2;
			var margint = 2;
			var mx = 'auto'
			var windowW = window.innerWidth;
			var windowH = window.innerHeight;
			if (windowW <= 350) {
				Img_W = 272;
				Img_H = 203;
				widthcard = '100%;';
				paddingx = 3;
				margint = 2;
			} else if (windowW >= 351 && windowW <= 400) {
				Img_W = 166;
				Img_H = 124;
				widthcard = '11rem;';
				paddingx = 1;
				margint = 2;
			} else if (windowW >= 401 && windowW <= 457) {
				Img_W = 182;
				Img_H = 136;
				widthcard = '12rem;';
				paddingx = 1;
				margint = 2;
			} else if (windowW >= 458 && windowW <= 934) {
				Img_W = 190;
				Img_H = 148;
				widthcard = '13rem;';
				paddingx = 1;
				margint = 2;
			} else if (windowW >= 935) {
				Img_W = 214;
				Img_H = 160;
				widthcard = '15rem;';
				paddingx = 2;
				margint = 3;
				mx = 0;
			}
			var getPostxs = Object.values(data);
			//fruits.sort();
			//fruits.reverse();
			var getPosts = Object.keys(data);
			getPosts = Object.values(data);
			var createData = [];
			for (var nom = 0; nom < getPostlength; nom++) {
				var getDate = getPosts[nom].date;
				var getIDpost = getPosts[nom].postID;
				var getIDsheet = getPosts[nom].sheetId;
				createData.push('"' + getDate + '":"' + getIDsheet + '"')
				if (nom == getPostlength - 1) {
					var ss = createData.join();
					var ssx = createData.sort().reverse().join();
					var sxbr = '{' + ssx + '}';
					var setjson = JSON.parse(sxbr);
					for (var nomc = 0; nomc < getPostlength; nomc++) {
						var asv = Object.values(setjson);
						setpost(asv[nomc]);
						if (nomc == getPostlength - 1) {
							cards1.push('</div>');
							document.getElementById('cardslistallUser').innerHTML = '';
							if (cards1num <= 0) {
								if (getUserGender == "Female") {
									$("#cardslistallUser").addClass('mt-4').html('<div class="alert alert-primary d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2 fs-4" aria-hidden="true"></i><div>ليس لديكِ أي مشاركات في قائمة المفضلة</div></div>');
								} else {
									$("#cardslistallUser").addClass('mt-4').html('<div class="alert alert-primary d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2 fs-4" aria-hidden="true"></i><div>ليس لديك أي مشاركات في قائمة المفضلة</div></div>');
								}
							}
							if (cards1num >= 1) {
								document.getElementById('cardslistallUser').innerHTML += cards1.join('');
							}
							$(document).ready(function() {
								$(".showModal").click(function(e) {
									var recostcardId = $(this).attr("data-id");
									var postManagement = true;
									setPostCard(recosts, recosts_Questions, recostcardId, UserAccountIdcw, postManagement);
								});
								if (UserAccountIdcw != undefined && UserAccountIdcw != '') {
									var u = UserAccountIdcw;
									var userID = "U" + u;
									setUserPostFavoriteAll(userID);
								}
							});
							onCompletePage();
							$("#PageCardName").addClass('mt-4 bg-danger bg-gradient text-light mb-0 p-2 rounded-top text-center typeicone').html('<h5>المشاركات المفضلة</h5>');
						}
					}
				}
			}
		}

		function setpost(havepost) {
			var getPostNum = havepost;
			getPostNum = getPostNum.replace("ID1000000", "");
			getPostNum = parseInt(getPostNum);
			getPostNum = getPostNum + 2;
var item = recosts.sheets[0].data[0].rowData[getPostNum];
var recosts_each = recosts.sheets[0].data[0].rowData.reverse();
var CommonName_Question_id = recosts_each[1].values[1].formattedValue;//id
if(CommonName_Question_id == "ID"){
recosts_each = recosts.sheets[0].data[0].rowData.reverse();
item = recosts.sheets[0].data[0].rowData.reverse()[getPostNum];
}              
			var Timestamp = item.values[0].formattedValue; //تاريخ النشر
			var ResponseNumber = item.values[1].formattedValue; //ID
			var Published = item.values[2].formattedValue; //حالة النشر
			var UserStatus = item.values[3].formattedValue; //حالة الحساب
			var CommonName_Answer = item.values[4].formattedValue; //الإسم الشائع
			var CommonName_Answer_En = item.values[5].formattedValue; //الإسم الشائع بالانجليزية هو
			var ScientificName_Answer = item.values[6].formattedValue; //الاسم العلمي
			var Type_Answer = item.values[7].formattedValue; //النوع
			var Class_AnswerAR = item.values[8].formattedValue; //الطائفة
			var Class_AnswerEN = item.values[9].formattedValue; //الإسم العلمي للطائفة
			var Order_Answer = item.values[10].formattedValue; //الرتبة
			var Subfamily_Answer = item.values[11].formattedValue; //الفصيلة
			var Diet_Answer = item.values[12].formattedValue; //النظام الغذائي
			var Age_Answer = item.values[13].formattedValue; //متوسط العمر
			var Size_Answer = item.values[14].formattedValue; //الحجم
			var Weight_Answer = item.values[15].formattedValue; //الوزن
			var PopulationTrend_Answer = item.values[16].formattedValue; //إتجاه السكان الحالي
			var PopulationTrend_Code = item.values[17].formattedValue; //رمز إتجاه السكان الحالي
			var PopulationTrend_Num = item.values[18].formattedValue; //رقم إتجاه السكان الحالي
			var RedList_Answer = item.values[19].formattedValue; //حالة القائمة الحمراء (IUCN)
			var RedList_Num = item.values[20].formattedValue; //رقم حالة القائمة الحمراء (IUCN)
			var Speed_Answer = item.values[21].formattedValue; //السرعة
			var DurationPregnancy_Answer = item.values[22].formattedValue; //مدة الحمل
			var NumBirths_Question = item.values[23].formattedValue; //عدد الصغار/البيض
			var NumBirths_Answer = item.values[24].formattedValue; //عدد الصغار/البيض هو
			var EcologicalHabitat_Answer = item.values[25].formattedValue; //الموطن البيئي
			var Color_Answer = item.values[26].formattedValue; //الألوان
			var Enemy_Answer = item.values[27].formattedValue; //الأعداء
			var FeedOn_Answer = item.values[28].formattedValue; //الغذاء
			var Img_Answer = item.values[29].formattedValue; //صورة الحيوان
			var ImgCover_Answer = item.values[30].formattedValue; //صورة الغلاف
			var MultipleImages_Answer = item.values[31].formattedValue; //صور متعددة
			var JsonFileIdInDrive_Answer = item.values[32].formattedValue; //معرف ملف Json
			var ImgSizeComparison_Question = item.values[33].formattedValue; //صورة مقارنة الحجم
			var ImgSizeComparison_Answer = item.values[34].formattedValue; //صورة مقارنة الحجم
			var info1_Question = item.values[35].formattedValue; //المعلومات الإضافية 1
			var info1_Answer = item.values[36].formattedValue; //المعلومات الإضافية 1 هي
			var info2_Question = item.values[37].formattedValue; //المعلومات الإضافية 2
			var info2_Answer = item.values[38].formattedValue; //المعلومات الإضافية 2 هي
			var info3_Question = item.values[39].formattedValue; //المعلومات الإضافية 3
			var info3_Answer = item.values[40].formattedValue; //المعلومات الإضافية 3 هي
			var info4_Question = item.values[41].formattedValue; //المعلومات الإضافية 4
			var info4_Answer = item.values[42].formattedValue; //المعلومات الإضافية 4 هي
			var DidYouKnow_Answer = item.values[43].formattedValue; //هل تعلم
			var UserAccountId = item.values[44].formattedValue; //معرف حساب المستخدم
			var UserLoginWith = item.values[45].formattedValue; //تسجيل دخول بإستخدام
			var UserAccountImg = item.values[46].formattedValue; //صورة الملف الشخصي للمستخدم
			var UserName = item.values[47].formattedValue; //إسم المستخدم
			var UserEmail = item.values[48].formattedValue; //البريد الإلكتروني
			var Name_publishing = item.values[49].formattedValue; //اظهار معلومات الناشر
			var PageTitle = item.values[50].formattedValue; //عنوان الصفحة
			var PageLink = item.values[51].formattedValue; //رابط الصفحة
			var SourceInfo_Answer_Title = item.values[52].formattedValue; //عنوان المراجع
			var SourceInfo_Answer_link = item.values[53].formattedValue; //رابط المراجع
			var TheState = item.values[54].formattedValue; //الدولة
			var CountryCode = item.values[55].formattedValue; //رمز الدولة
			var IPAddress = item.values[56].formattedValue; //عنوان IP
			var ScreenWidth = item.values[57].formattedValue; //عرض الشاشة
			var ScreenHeight = item.values[58].formattedValue; //إرتفاع الشاشة
			var MoreInformation = item.values[59].formattedValue; //معلومات إضافية
			var dateID = item.values[60].formattedValue; //معرف تاريخ المنشور
			var PostUrlInSite_Answer = item.values[61].formattedValue; //رابط المنشور
			var PostIdInSite_Answer = item.values[62].formattedValue; //معرف المنشور
			var SummaryPage_Answer = item.values[63].formattedValue; //وصف الموضوع
			var ImgMaps_Answer = item.values[64].formattedValue; //صورة خريطة التواجد
			var folderNameBasicSheet = item.values[65].formattedValue; //إسم المجلد
			var folderIDBasicSheet = item.values[66].formattedValue; //معرف المجلد
			var MultipleImages_table = item.values[67].formattedValue; //صور متعددة
			UserStatus = parseInt(UserStatus); //حالة الحساب
			PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
			RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
			var cardURL = 'http://card.geoarabic.com/p/card.html?id=' + ResponseNumber;
			if (CommonName_Answer.length >= 30) {
				CommonName_Answer = CommonName_Answer.substring(0, 30) + '...';
			}
			if (ScientificName_Answer == "" || ScientificName_Answer == "NoData") {
				ScientificName_Answer = "";
			}
			if (CommonName_Answer_En == "" || CommonName_Answer_En == "NoData") {
				CommonName_Answer_En = "";
			}
			if (Img_Answer == "" || Img_Answer == "NoData") {
				Img_Answer = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png";
			}
			var Img_Answer_favorite = Img_Answer;
			ImgCover_Answer = ImgCover_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/w' + Img_W + '-h' + Img_H + '-p/');
			ImgCover_Answer = ImgCover_Answer.replace('=s120', '=w' + Img_W + '-h' + Img_H + '-p');
			Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, '/w' + Img_W + '-h' + Img_H + '-p/');
			Img_Answer = Img_Answer.replace('=s120', '=w' + Img_W + '-h' + Img_H + '-p');
			if (ImgCover_Answer == "NoData" || ImgCover_Answer == "") {
				ImgCover_Answer = Img_Answer;
			}
			if (Published === "0") {} else if (Published === "حالة النشر") {} else if (Published === "Published") {} else {
				var showModalClassImg = 'showModal';
				var showModalOnClickImg = 'return false;';
				var showModalClass = 'showModal';
				var showModalOnClick = 'return false;';
				if (Openframe == 0) {
					showModalClassImg = '';
					showModalOnClickImg = '';
					showModalClass = '';
					showModalOnClick = '';
				} else if (Openframe == 1) {
					showModalClassImg = '';
					showModalOnClickImg = '';
					showModalClass = 'showModal';
					showModalOnClick = 'return false;';
				} else if (Openframe == 2) {
					showModalClassImg = 'showModal';
					showModalOnClickImg = 'return false;';
					showModalClass = 'showModal';
					showModalOnClick = 'return false;';
				}

				function GetList(num) {
					num.push('<div class="col mx-' + mx + ' px-' + paddingx + ' mt-' + margint + '" style="width:' + widthcard + '">');
					num.push('<div class="card">');
					if (UserAccountIdcw != undefined && UserAccountIdcw != '') {
						var p = PostIdInSite_Answer;
						var u = UserAccountIdcw;
						p = p.toString();
						u = u.toString();
						var pu = "\'P" + p + "\',\'U" + u + "\',\'" + ResponseNumber + "\'";
						var btn_favoriteID = "P" + p;
						num.push('<button type="button" onclick="btn_favorite(' + pu + ')" data-sheetId="" data-name="' + CommonName_Answer + '" data-img="' + Img_Answer_favorite + '" class="btn btn-sm btn-outline-warning btn_favorite ' + btn_favoriteID + ' d-none"> <input type="checkbox" class="btn-check post_favorite" autocomplete="off" ><i class="far fa-star"></i><div class="spinner-grow text-warning spinner-grow-sm d-none" role="status"><span class="visually-hidden">إنتظر...</span></div></button>');
					}
					num.push('<a href="' + PostUrlInSite_Answer + '" data-post-id="' + PostIdInSite_Answer + '" data-card-href="' + cardURL + '" style="height:' + Img_H + 'px;" class="' + showModalClassImg + ' dataimg rounded-top" onclick="' + showModalOnClickImg + '" data-id="' + ResponseNumber + '" title="' + ScientificName_Answer + '">');
					num.push('<img src="' + ImgCover_Answer + '" width="' + Img_W + '" height="' + Img_H + '" loading="lazy" class="card-img-top lazyload" alt="' + CommonName_Answer + '">');
					num.push('</a>');
					num.push('<div class="card-body text-center p-0 rounded-bottom">');
					num.push('<a href="' + PostUrlInSite_Answer + '" data-post-id="' + PostIdInSite_Answer + '" data-card-href="' + cardURL + '" data-id="' + ResponseNumber + '" onclick="' + showModalOnClick + '" title="' + CommonName_Answer_En + '" class="list-group-item list-group-item-action border-0 ' + showModalClass + '">' + CommonName_Answer + '</a>');
					num.push('</div>');
					num.push('</div>');
					num.push('</div>');
				}
				cards1num += 1;
				GetList(cards1);
			}
		}
	});
}
