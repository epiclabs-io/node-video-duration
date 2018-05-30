const { exec } = require('child_process');

module.exports = function (filename) {
    return new Promise(function (resolve, reject){
        var cmd = ['ffprobe',
            '-v', 'error', '-show_entries',
            'format=duration', '-of',  'csv="p=0"',
            filename
        ];

        exec(cmd.join(' '), (error, stdout, stderr) => {
            if (error) {
                reject('Not valid inout file or ffprobe not installed');
            }
            resolve(parseFloat(stdout));
        });
    });
}
