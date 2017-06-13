'use strict'

const fs = require('fs')
//import { readFile, readFileSync } from 'fs'

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

  static parseFromFilePath (filePath) {
    let data = fs.readFileSync(filePath, 'utf8')
    let jSonData = JSON.parse(data)
    return new Employee(jSonData.name, jSonData.title, jSonData.salary)
  } 
}

module.exports = {
  Employee
}

