
$(document).ready(function(){
getFile()
});


  
  
function getFile() {
    // from the oauth playground
    const refresh_token = "1//04JAqwtLVq_HdCgYIARAAGAQSNwF-L9Irftzg9ZHu_o6tB6QGo1-fQVYlcwZaLWblX830BHA1G3QLxRyO8FVGwzVyn_r8-Ykrt0A";
    // from the API console
    const client_id = "174081960663-doarvfi676utb4auvuvhlg54oipc80b5.apps.googleusercontent.com";
    // from the API console
    const client_secret = "woTFFJ4OpvEuSudjBgtlhzel";
    // from https://developers.google.com/identity/protocols/OAuth2WebServer#offline
    const refresh_url = "https://www.googleapis.com/oauth2/v4/token";

    const post_body = 'grant_type=refresh_token&client_id='+client_id+'&client_secret='+client_secret+'&refresh_token='+refresh_token;

    var refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    // post to the refresh endpoint, parse the json response and use the access token to call files.list
    fetch(refresh_url, refresh_request).then( response => {
            return(response.json());
        }).then( response_json =>  {
            files_list(response_json.access_token);
    });
}


function files_list(access_token) {
  

var code = $.query.get("code");
if(code != ''&&code != undefined&&code != null){
$('.loading').removeClass('d-none');
code= decode(code);
get_doc(code,access_token)
  }
}







  function get_doc(code,access_token){
    const url = 'https://www.googleapis.com/drive/v3/files/'+code+'?alt=media';
    if(self.fetch){
    var setHeaders = new Headers();
    setHeaders.append('Authorization', 'Bearer ' + access_token);
    setHeaders.append('Content-Type', 'text/html');
      
      
    var setOptions = {
        method: 'GET',
        headers: setHeaders,
    };
    fetch(url,setOptions).then(response => {

      if(response.ok){

        var reader = response.body.getReader();
        var decoder = new TextDecoder();
		var textHtml = ""
      function s(){
        reader.read().then(function(result){
            var data = {}
            data = decoder.decode(result.value, {stream: !result.done});
        //  textHtml += data;

          if(data.length != 0 || !result.done){
 			textHtml += data;
            s();
          }else{
           editor.setValue(textHtml)
            $('.loading').addClass('d-none');
            submitTryit(1);refreshadSlot1();
          }
          
    });
        
    }
      s();

        }
    else{
        $('.loading').addClass('d-none');
        alert("حدث خطأ في جلب الرمز الخاص بك. يرجى إعادة المحاولة");
    }


        
        
  })
      .catch(error => {
    //    console.log("There is an error " + error.message);
              $('.loading').addClass('d-none');
              alert("حدث خطأ في جلب الرمز الخاص بك");
        });

}

}



      function CreateFile() {
  $('#sentCreateFile').attr('disabled','disabled');
  $('#spinnerbtnsave').removeClass('d-none');
  
  
       var  createFile = $("#chooseFileName").val();
        if(createFile.length <= 0){
          $("#chooseFileNameinvalid").removeClass('d-none');
  $('#sentCreateFile').removeAttr('disabled');
  $('#spinnerbtnsave').addClass('d-none');
        }else{
  GetUser();
        }
      }
  
      function GetUser() {
        
        
var id = Cookies.get('UserAccountId');
        
        
      
if(id == undefined || id == null || id == ''){
  $('#savedcodes').modal('hide');
  $('#LoginModalLabel').modal('show');
  
}else{
      
var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/13ZNpkUYV2X3OSfzjmVUG4I7SjwYWLw9moRK0W7biwAQ/values/responses?";

  
  
  
$.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    range: "H3:H",
    majorDimension: "ROWS"
}).done(function(recostss) {
    var cars = recostss.values;
    var userused = false;
  	var userAccountId = Cookies.get('UserAccountId');
    var nom = 0;
    nom = parseInt(nom);
    var i;
    for (i = 0; i < cars.length; i++) {
        let texts = cars[i];
        var nomi = i + 3;
        if (texts == userAccountId) {
            userused = true;
          nom = nomi;
        }
         // console.log(nomi)
         // console.log(texts)
    }
    if (userused == true) {
      SaveFile(nom)
    } else {
      SaveFile1()
      
      
    }

});
  
  
  
  
  
  
  
  
  
  
  
  
  

}
    };
	
	
	
function SaveFile(nom) {
        

      
var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/13ZNpkUYV2X3OSfzjmVUG4I7SjwYWLw9moRK0W7biwAQ/values/responses?";

  
var range = "A"+nom+":Z"+nom;
$.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    range: range,
    majorDimension: "COLUMNS"
}).done(function(recostss) {
    var cars = recostss.values;
var Timestamp = cars[0].toString();
var ResponseNumber = cars[1].toString();
var AccountStatus = cars[2].toString();

  
var UserName =cars[3].toString();
var LastName =cars[4].toString();
var UserEmail =cars[5].toString();
var UserUserID =cars[6].toString();
var UserAccountId =cars[7].toString();
var UserFolder =cars[8].toString();

  
$("#AccountStatus").val(AccountStatus);
$("#UserName").val(UserName);
$("#LastName").val(LastName);
$("#UserEmail").val(UserEmail);
$("#UserUserID").val(UserUserID);
$("#UserAccountId").val(UserAccountId);
$("#UserFolder").val(UserFolder);
UploadfileHtml(UserFolder);
  
});
  
  
  

  

}




function SaveFile1() {
        
  

  
  
  
  


var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1MSVD6mO_FyPZS5KM2n7sx3fld45BfjtvrFQw-Ldkm5Q/values/responses?";
$.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    range: "N3:N",
    majorDimension: "ROWS"
}).done(function(recostss) {
    var cars = recostss.values;
    var userused = false;
  	var userAccountId = Cookies.get('UserAccountId');
    var nom = 0;
    nom = parseInt(nom);
    var i;
    for (i = 0; i < cars.length; i++) {
        let texts = cars[i];
        var nomi = i + 3;
        if (texts == userAccountId) {
            userused = true;
          nom = nomi;
        }
        //  console.log(nomi)
        //  console.log(texts)
    }
    if (userused == true) {
      
      
      //  console.log('تم ايجاد المعرف',userAccountId + "      " + nom);
      
      setUserProfile(nom)
      
    } else {
      
        alert('يرجى تسجيل الدخول');
      
      
      
    }

});
  
  
  
  
  
  
  
  
  
  
  
      

  
  
  

  

}


function setUserProfile(nom){
var getusercodedrive = "https://sheets.googleapis.com/v4/spreadsheets/1MSVD6mO_FyPZS5KM2n7sx3fld45BfjtvrFQw-Ldkm5Q/values/responses?";
var range = "A"+nom+":Z"+nom;
$.getJSON(getusercodedrive, {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    range: range,
    majorDimension: "COLUMNS"
}).done(function(recostss) {
    var cars = recostss.values;
var Timestamp = cars[0].toString();
var ResponseNumber = cars[1].toString();
var AccountStatus = cars[2].toString();
var UserName =cars[3].toString();
var LastName =cars[4].toString();
var UserEmail =cars[5].toString();
var UserUserID =cars[6].toString();
var UserGender =cars[7].toString();
var UserImgProfile =cars[8].toString();
var UserPss =cars[9].toString();
var InApp =cars[10].toString();
var LoginWith =cars[11].toString();
var TheState =cars[12].toString();
var UserAccountId =cars[13].toString();
var AgeAtRegist = cars[24].toString();


$("#AccountStatus").val(AccountStatus);
$("#UserName").val(UserName);
$("#LastName").val(LastName);
$("#UserEmail").val(UserEmail);
$("#UserUserID").val(UserUserID);
$("#UserAccountId").val(UserAccountId);

UserName = decode(UserName);
LastName = decode(LastName);
var name = UserName+"_"+LastName;


  

CreateAfolder(name);

});
  

  
}



function UploadfileHtml(UserFolder) {
  
  
  
var fileContent = editor.getValue();
  
    const refresh_token = "1//04JAqwtLVq_HdCgYIARAAGAQSNwF-L9Irftzg9ZHu_o6tB6QGo1-fQVYlcwZaLWblX830BHA1G3QLxRyO8FVGwzVyn_r8-Ykrt0A";
    const client_id = "174081960663-doarvfi676utb4auvuvhlg54oipc80b5.apps.googleusercontent.com";
    const client_secret = "woTFFJ4OpvEuSudjBgtlhzel";
    const refresh_url = "https://www.googleapis.com/oauth2/v4/token";
  
    const post_body = 'grant_type=refresh_token&client_id='+client_id+'&client_secret='+client_secret+'&refresh_token='+refresh_token;
    let refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    // post to the refresh endpoint, parse the json response and use the access token to call files.list
    fetch(refresh_url, refresh_request).then( response => {
            return(response.json());
        }).then( response_json =>  {
            //console.log(response_json);
            files_list(response_json.access_token);
    });

// a quick and dirty function to list some Drive files using the newly acquired access token
function files_list (access_token) {
    const drive_url = "https://www.googleapis.com/drive/v3/files";
    let drive_request = {
        method: "GET",
        headers: new Headers({
            Authorization: "Bearer "+access_token

        })
    }



var folderId = UserFolder;
var fileName = $("#chooseFileName").val();
var filesName = fileName.replace(/ /ig,'_');
$("#NumLetters").val(fileContent.length);

  
  
var file = new Blob([fileContent], {type: 'text/html'});
var metadata = {
    'name': filesName+'.html',
    'mimeType': 'text/html',
    'parents': [folderId]
};

var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
form.append('file', file);

var xhr = new XMLHttpRequest();
xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
xhr.responseType = 'json';
xhr.onload = () => {
 //   console.log(xhr.response.id); // Retrieve uploaded file ID.
    var saved = "معرف الملف";
    var savedId = xhr.response.id;
	$("#FileCodeId").val(savedId);
	$("#FileName").val(fileName);

$("#sendToSheetHide").click();
};

xhr.send(form);
}
}


function showsaveModalLabel() {
    var id ='1';
  try{
id = Cookies.get('UserAccountId');
  } catch(e) {
   id = '1';
  }
  
  
  
  
 if(id != undefined && id != null){
  $('#savedcodes').modal('show');
 }else{
  $('#LoginModalLabel').modal('show');
 }
  
  
 }
 
 
 
function openURL(url){
window.open(url, "_blank");
}
  
  
function openModal(url,login){
  if(login == 'login'){
   $('#loginsign').html('تسجيل الدخول');
  }else{
   $('#loginsign').html('إنشاء حساب جديد');
  }
  
  
  $('#LoginModalLabel').modal('hide');
  $('#iframeModalLabel').modal('show');
  $('#iframeModal').attr('src',url);
  
  
  
}

  
  
  
  
  
  
  function donesend(){
  $('#chooseFileName').val('');
  $('#alertmodal').removeClass('d-none');
  $('#alertmodalerror').addClass('d-none');
  $('#formmodal').addClass('d-none');
  $('#sentCreateFile').attr('disabled','disabled');
  $('#spinnerbtnsave').addClass('d-none');

  }
  
  function errorsend(){
  $('#chooseFileName').val('');
  $('#alertmodal').addClass('d-none');
  $('#alertmodalerror').removeClass('d-none');
  $('#formmodal').addClass('d-none');
  }
  
  
function CreateAfolder(name){
    const refresh_token = "1//04JAqwtLVq_HdCgYIARAAGAQSNwF-L9Irftzg9ZHu_o6tB6QGo1-fQVYlcwZaLWblX830BHA1G3QLxRyO8FVGwzVyn_r8-Ykrt0A";
    const client_id = "174081960663-doarvfi676utb4auvuvhlg54oipc80b5.apps.googleusercontent.com";
    const client_secret = "woTFFJ4OpvEuSudjBgtlhzel";
    const refresh_url = "https://www.googleapis.com/oauth2/v4/token";
    const post_body = 'grant_type=refresh_token&client_id='+client_id+'&client_secret='+client_secret+'&refresh_token='+refresh_token;
    let refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }
    fetch(refresh_url, refresh_request).then( response => {
            return(response.json());
        }).then( response_json =>  {
        //    console.log(response_json);
            Createfolder(response_json.access_token,name);
    });
}
  
  
  
  
  
  
  function Createfolder (access_token,name) {
 const drive_url = "https://www.googleapis.com/drive/v3/files";
 var FolderID = '1kNkjAwyeTd-QdddSk2_7NuDljeoqnUcC';


//*** إنشاء مجلد
    
    
var fileName = name;
var fileNameID = Cookies.get('UserAccountId');


if(fileName != ''){
fileName = fileName;
}else if(fileNameID != ''){
fileName = fileNameID;
}else{
fileName = "file";
}
  
  
fileName = fileName.replace(/ /ig,'_');
  
var fileMetadata = {
  'name': fileName,
  'mimeType': 'application/vnd.google-apps.folder',
  'parents': [FolderID]
};

  

var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(fileMetadata)], {type: 'application/json'}));


var xhr = new XMLHttpRequest();
xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,kind');
xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
xhr.responseType = 'json';
xhr.onload = () => {
var savedId = xhr.response.id;
var savedName = xhr.response.name;
//$('#folderBasic').val(savedId);
//$('#folderIDBasicSheet').val(savedId);
//$('#folderNameBasicSheet').val(savedName);
//console.log("تم انشاء المجلد بنجاح")
//console.log(savedId);
//console.log(savedName);
$("#UserFolder").val(savedId);
UploadfileHtml(savedId);
}

xhr.send(form)

}



$('#savedcodes').on('show.bs.modal', function () {
  $('#alertmodal').addClass('d-none');
  $('#alertmodalerror').addClass('d-none');
  $('#formmodal').removeClass('d-none');
  $('#sentCreateFile').removeAttr('disabled');
  $('#spinnerbtnsave').addClass('d-none');
  $('#chooseFileName').val('');
});
