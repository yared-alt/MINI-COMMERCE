var exec = require('child_process').exec; // Import the exec function
function shutdown() {
    var command = process.platform === 'win32' ? 'shutdown /s /t 0' : 'sudo shutdown now';
    exec(command, function (error, stdout, stderr) {
        if (error) {
            console.error("Error: ".concat(error.message));
            return;
        }
        if (stderr) {
            console.error("Stderr: ".concat(stderr));
            return;
        }
        console.log("Output: ".concat(stdout));
    });
}
// Call the shutdown function
shutdown();
