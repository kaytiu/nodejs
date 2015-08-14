var co = require('co');
// wrap the function to thunk
function readFile(filename) {
    return function(callback) {
        require('fs').readFile(filename, 'utf8', callback);
    };
}

co(function () {
    var file1 = yield readFile('aa.txt');
    var file2 = yield readFile('bb.txt');

    console.log(file1);
    console.log(file2);
    return 'done';
})(function(err, result) {
    console.log(result)
});