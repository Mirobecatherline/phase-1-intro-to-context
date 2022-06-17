// Your code here
let createEmployeeRecord=function(array1) {
    return {firstName:array1[0],
        familyName:array1[1],
        title:array1[2],
        payPerHour:array1[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}


let createEmployeeRecords = function(employee) {
    return employee.map(function(array1){
        return createEmployeeRecord(array1)
    })
}

let createTimeInEvent=function(record,date1) {
    let[date,hour]=date1.split(' ')
    record.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour),
        date:date
    })
    return record
}
let createTimeOutEvent=function (record,date1) {
    let[date,hour]=date1.split(' ')
    record.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour),
        date:date
    })
    return record
}
let hoursWorkedOnDate=function(record,date2) {
    let eventin = record.timeInEvents.find(function(event){
        return event.date === date2
    })

    let eventout = record.timeOutEvents.find(function(event){
        return event.date === date2
    })

    return (eventout.hour - eventin.hour) / 100
}
function wagesEarnedOnDate(record,date3) {
        let wage = hoursWorkedOnDate(record, date3)
            * record.payPerHour
    return parseFloat(wage.toString())
}
function allWagesFor(record) {
    let datespossible = record.timeInEvents.map(function(event){
        return event.date 
    })

    let pay = datespossible.reduce(function(mm, dd){
        return mm + wagesEarnedOnDate(record, dd)
    }, 0)

    return pay
}
let findEmployeeByFirstName = function(array3, firstName) {
    return array3.find(function(record){
      return record.firstName === firstName
    })
  }

function calculatePayroll(record1) {
    return record1.reduce(function(mm, record){
        return mm + allWagesFor(record)
    }, 0)
}