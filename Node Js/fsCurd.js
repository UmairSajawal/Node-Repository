// ******  CRUD with File System | Create, Read, Update, Delete Files ******
// Create folder where creates new files

const fs = require('fs')

// For New File Create:
//fs.writeFileSync('files/fruit.txt', "This is a Mango fruit")

// For File Delete:
//fs.unlinkSync("files/peach.txt")

// For Add Data In Created File:
//fs.appendFileSync("files/fruit.txt", " and this is very delicious fruit");

// For Read File:
// const data = fs.readFileSync("files/fruit.txt", "utf-8");
// console.log(data);


// *** Now create, read, ..., files with input in terminal: ***

// For Create New File Through Input in Terminal 
// like run this :  node fsCurd.js write blue "this is blue file"
// "write" means check condition, "blue" means file name,  "this is blue file" means file content
/*
const operation = process.argv[2];
if(operation == "write"){
    const name = process.argv[3];
    const content = process.argv[4]
    const fullName = "files/"+name+".txt";
    fs.writeFileSync(fullName, content)
}
*/

// For Create, Read, Update, Delete Through Input in Terminal 
const operation = process.argv[2];
if(operation == "write"){                   // To write File Through Input In terminal:   node fscurd.js write blue "this is blue file "
    const name = process.argv[3];
    const content = process.argv[4]
    const fullName = "files/"+name+".txt";
    fs.writeFileSync(fullName, content)
} else if(operation == "read"){             // To read file Through Input terminal:  node fsCurd.js read blue
    const name = process.argv[3];
    //const content = process.argv[4]
    const fullName = "files/"+name+".txt";
    let data =  fs.readFileSync("files/blue.txt", "utf-8");
    console.log(data)
}else if(operation == "update"){            // To update File Through Input In terminal:   node fscurd.js update blue " and this is primary color"
    const name = process.argv[3];          
    const content = process.argv[4]
    const fullName = "files/"+name+".txt";
    fs.appendFileSync(fullName, content)
} else if(operation == "delete"){           // To delete File Through Input In terminal:   node fsCurd.js delete red
    const name = process.argv[3];          
    //const content = process.argv[4]
    const fullName = "files/"+name+".txt"; 
    fs.unlinkSync(fullName)
} else [
    console.log("Operation not Found")
]