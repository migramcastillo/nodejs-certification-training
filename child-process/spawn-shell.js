const { spawn } = require('child_process');

const child = spawn('find . -type f | wc -l', {
    stdio: 'inherit',
    shell: true,
    cwd: '/Users/miguelc/Downloads'
});

child.on('error', (err) => {
    console.error(`Error on child process:`, err);
});
