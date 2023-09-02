function UploadfileJsonToDrive() {
CreateAFile();
var g3ForJsonDrive = $('#g3').val();
var fileForJsonDrive = $('#textareajson').val();
if(g3ForJsonDrive.length >= 1 && fileForJsonDrive.length >= 100){
  
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
            console.log(response_json);
            files_list(response_json.access_token);
    });
}

// a quick and dirty function to list some Drive files using the newly acquired access token
function files_list (access_token) {
    const drive_url = "https://www.googleapis.com/drive/v3/files";
    let drive_request = {
        method: "GET",
        headers: new Headers({
            Authorization: "Bearer "+access_token

        })
    }

var fileName = $('#g3').val();
var fileNameEn = $('#g2_En').val();
var fileNameAr = $('#g2').val();

var fileContent = $('#textareajson').val();

if(fileName == ''){
fileName = fileNameEn;
if(fileNameEn == ''){
 fileName =fileNameAr;
  if(fileNameAr == ''){
    fileName = 'Json File';
  }
}
}


fileName = fileName.replace(/ /ig,'_');
var file = new Blob([fileContent], {type: 'text/plain'});
var metadata = {
    'name': fileName+'.json', // Filename at Google Drive
    'mimeType': 'application/json', // mimeType at Google Drive
    'parents': ['1MK1ijUbf98OjQJN1TGh6_Z9MZRTZqeb8'], // Folder ID at Google Drive
};

var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
form.append('file', file);

var xhr = new XMLHttpRequest();
xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.response.id); // Retrieve uploaded file ID.
    var saved = "معرف الملف";
    var savedId = xhr.response.id;
	$("#JsonFileIdInDrive_Answer").val(xhr.response.id);
  	SendAFile()
    document.getElementById("response").innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'> <strong>تم إرسال المنشور بنجاح وتم رفع نسخة Json إلى درايف</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span></button></div>";
document.getElementById("geofarefresh").style.display="none";
};

xhr.send(form);
}
}