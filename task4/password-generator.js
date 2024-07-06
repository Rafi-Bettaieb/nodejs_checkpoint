var generator = require('generate-password');
var passwords = [];
for(let i = 0;i<5;i++){
    //generating password and pushing them to the array
    var password = passwords.push(generator.generate({
        length : 12,
        numbers : true,
        lowercase : true,
        uppercase : true,
        symbols : true
    }));
}

console.log(passwords);