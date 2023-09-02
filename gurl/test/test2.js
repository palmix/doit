function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({
            scope: "https://www.googleapis.com/auth/blogger"
        })
        .then(function() {
                console.log("Sign-in successful");
                document.getElementById("showbtnpost").style.display = "inline-table";
                document.getElementById("response").innerHTML = "<div class='alert alert-primary alert-dismissible fade show' role='alert'> <strong>تم تسجيل الدخول والإستعداد للنشر بنجاح</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
                $("#showbtnpost").removeClass("awsub");
                $("#showbtnpost").removeAttr("disabled");
            },
            function(err) {
                console.error("Error signing in", err);
                document.getElementById("showbtnpost").style.display = "none"
            });
}

function loadClient() {
    gapi.client.setApiKey("AIzaSyBgOW_RNDHKafENI80VMH_cyvJo_0wmFKs");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/blogger/v3/rest")
        .then(function() {
                console.log("GAPI client loaded for API");
            },
            function(err) {
                console.error("Error loading GAPI client for API", err);
            });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    var testing1 = document.getElementById("geotitlepost").value;
    var testing2 = document.getElementById("newText").value;
    var getlabel = document.getElementById("boxwordlabel").value;
    if (testing1 <= 1) {
        document.getElementById("response").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>يجب الا يكون العنوان فارغ</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
    } else if (testing2 <= 1) {
        document.getElementById("response").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>يجب الا يكون المحتوى فارغ</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
    } else if (getlabel <= 1) {
        document.getElementById("response").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>يجب إختيار التسميات</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
    } else {
        document.getElementById("geofarefresh").style.display = "inline-block";
        return gapi.client.blogger.posts.insert({
                "blogId": "4386765292661375373",
                "fetchImages": true,
                "prettyPrint": true,
                "isDraft": document.getElementById("isdraft").value,
                "resource": {
                    "labels": [getlabel],
                    "title": document.getElementById("geotitlepost").value,
                    "content": document.getElementById("newText").value

                }
            })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                    document.getElementById("response").innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'> <strong>تم إرسال المنشور بنجاح</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
                    UploadfileJsonToDrive();
                    document.getElementById("deletepost").value = response.result.id;
                    document.getElementById("showbtndeletepost").style.display = "inline-block";
                    $("#showbtndeletepost").removeAttr("disabled");
                },
                function(err) {
                    console.error("Execute error", err);
                    document.getElementById("response").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>حدث خطأ بالنشر</strong><br/>" + err.result.error.message + " <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
                    document.getElementById("geofarefresh").style.display = "none";
                });
    }
}

function deletepost() {
    document.getElementById("geofarefreshs").style.display = "inline-block";
    return gapi.client.blogger.posts.delete({
            "blogId": "4386765292661375373",
            "postId": document.getElementById("deletepost").value
        })
        .then(function(response) {
                console.log("Response", response);
                $("#showbtndeletepost").attr("disabled", "disabled");
                document.getElementById("response").innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'> <strong>تم حذف المنشور بنجاح</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
                document.getElementById("geofarefreshs").style.display = "none";
            },
            function(err) {
                console.error("Execute error", err);
                document.getElementById("response").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>حدث خطأ أثناء حذف المنشور</strong><br/>" + err + " <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
                document.getElementById("geofarefreshs").style.display = "none";
            });
}
gapi.load("client:auth2", function() {
    gapi.auth2.init({
        client_id: "174081960663-doarvfi676utb4auvuvhlg54oipc80b5.apps.googleusercontent.com"
    });
});
