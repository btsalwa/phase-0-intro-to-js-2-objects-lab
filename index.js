// Write your solution in this file!
const employee = {name:"Sam"};


function updateEmployeeWithKeyAndValue(employee){

    return {...employee, name:"Sam", streetAddress:"11 Broadway"}
    
 
}

updateEmployeeWithKeyAndValue(employee);


let streetAddress ="streetAddress";

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    
    employee[key] = value;
    return employee;
    
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,"12 Broadway"); 


let name ="name"
function deleteFromEmployeeByKey(employee,key){
    let newemployee = {...employee};
    newemployee["streetAddress"] = "11 Broadway" ;
    delete newemployee[key];
    return newemployee;  
    
 
}

deleteFromEmployeeByKey(employee,name);




function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
   
}

deleteFromEmployeeByKey(employee,key);