//Refactor the Code using function

//Constants
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;
let MAX_WORKING_DAYS = 20;
let MAX_HRS_IN_MONTH = 100;

//Variables
let empHrs = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let totalEmpHrs = 0;

function getWorkHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      empHrs = 4;
      break;
    case IS_FULL_TIME:
      empHrs = 8;
      break;
    default:
      empHrs = 0;
  }
  return empHrs;
}

while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays <= MAX_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 3);
  empHrs = getWorkHours(empCheck);
  totalEmpHrs += empHrs;
}

totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is: " + totalEmpWage);
