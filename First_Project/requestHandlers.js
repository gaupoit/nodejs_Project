var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called");

    exec("find /",
        { timeout : 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, sdterr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('Test');
        response.write(stdout);
        response.end();
    });

}

function upload(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Upload");
        response.end();
}

function sleep(miliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + miliSeconds);
}

exports.start = start;
exports.upload = upload;