var fs = require('fs');
//writing to the file: created because it does not exist
fs.writeFile('welcome.txt', 'Hello Node', (error) => {
    if (error) throw error;
    console.log('Data created successfully');
});
//reading from the file
fs.readFile('welcome.txt',function(error,data){
    if(error) throw error;
    console.log('Data : ',data.toString());
});