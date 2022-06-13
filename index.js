const employee = {
    name: 'Sam', streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(Sam, key, value) {
    return Object({}, { [key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);

    delete newObj[key];
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return "name";
}