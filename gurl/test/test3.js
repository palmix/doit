function uploadFile() {
startUpFile();
    // from the oauth playground
    const refresh_token = "1//04JAqwtLVq_HdCgYIARAAGAQSNwF-L9Irftzg9ZHu_o6tB6QGo1-fQVYlcwZaLWblX830BHA1G3QLxRyO8FVGwzVyn_r8-Ykrt0A";
    // from the API console
    const client_id = "174081960663-doarvfi676utb4auvuvhlg54oipc80b5.apps.googleusercontent.com";
    // from the API console
    const client_secret = "woTFFJ4OpvEuSudjBgtlhzel";
    // from https://developers.google.com/identity/protocols/OAuth2WebServer#offline
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



//*** رفع الملفات إلى جوجل درايف
uploadImg();
UploadfileJsonToDrive();
}
