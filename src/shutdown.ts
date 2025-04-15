const { exec } = require('child_process'); 
function shutdown() {
    const command = process.platform === 'win32' ? 'shutdown /s /t 0' : 'sudo shutdown now';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}


shutdown();