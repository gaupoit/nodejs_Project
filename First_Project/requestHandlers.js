/*var exec = require("child_process").exec;*/
var queryString = require("querystring");
    fs = require("fs");

function start(response, postData) {
    console.log("Request handler 'start' was called");

    /*exec("find /",
        { timeout : 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, sdterr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('Test');
        response.write(stdout);
        response.end();
    });*/
        var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();

}

function upload(response, postData) {
        console.log("Request handler 'upload' was called");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("You've sent " +
        queryString.parse(postData).text);
        response.end();
}

function show(response, postData) {
    console.log("Request handler 'show' was called");
    fs.readFile("./tmp/test.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

function sleep(miliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + miliSeconds);
}

exports.start = start;
exports.upload = upload;
exports.show = show;