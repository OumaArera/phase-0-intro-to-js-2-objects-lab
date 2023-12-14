// Write your solution in this file!
const employee = {
    name: "Rambungfee",
    streetAddress: "Robert Ouko Street"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee [key] = value;
    return employee;
  }
  
function deleteFromEmployeeByKey(employee, key) {

    const newEmployee = Object.assign({}, employee);  

    delete newEmployee[key];

    return newEmployee;
}  

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
};

  