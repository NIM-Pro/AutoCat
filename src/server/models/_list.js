'use strict'

const DataBase = require('database')

class List {
  constructor(tableName = 'list') {
    this.tableName = tableName
  }
  init() {
    return DataBase.run(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        value TEXT
      )
    `)
    .then(()=> this)
  }
  addOne(value) {
    return DataBase.run(`INSERT INTO ${this.tableName}(value) VALUES (?)`, [value])
  }
  getAll() {
    return DataBase.all(`SELECT * FROM ${this.tableName}`)
  }
}

module.exports = List
