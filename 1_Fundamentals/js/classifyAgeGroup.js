const age = "10";
let classified = "";

function classifyAge(age){
    
    let classified = "not classified";
    
    if (age <= 0){
        classified = "Invalid!";
    } else if (age <= 12){
        classified = "Children";
    } else if (age > 12 && age <= 17){
        classified = "Teenager";
    } else if (age > 17 && age <= 59){
        classified = "Adult";
    } else if (age > 59){
        classified = "Elderly";
    }
    return classified;
}

classified = classifyAge(age);

let result = `${age} years old is a ${classified}`;

console.log(result);