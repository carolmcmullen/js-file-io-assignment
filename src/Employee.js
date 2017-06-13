'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote(title, salary) {
    this.title = title
    this.salary = salary
  }

/*
  static parseFromFilePath (filePath) {
    let data = fs.readFileSync(filePath, 'utf8')
    let jSonData = JSON.parse(data)
    return new Employee(jSonData.name, jSonData.title, jSonData.salary)
  } 
}
*/

 static parseFromFilePath = 
   readFile =>
    filePath =>
      new Promise((resolve, reject) => {
        readFile(filePath, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
}

module.exports = {
  Employee
}

