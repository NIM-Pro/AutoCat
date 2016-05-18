'use strict'

const Sqlite3 = require('sqlite3')

class Sqlite3Wrapper {
  constructor(filename) {
    this.connection = new sqlite3.cached.Database(filename)
  }
  close() {
    return new Promise(resolve =>
      this.connection.close(resolve)
    )
  }
  _execQuery(method, ...params) {
    return new Promise((resolve, reject) =>
      this.connection[method](...params, (err, res)=> {
        if (err) return reject(err)
        resolve(res)
      })
    )
  }
  run(...params) {
    return this._execQuery('run', ...params)
  }
  get(...params) {
    return this._execQuery('get', ...params)
  }
  all(...params) {
    return this._execQuery('all', ...params)
  }
}

module.exports = Sqlite3Wrapper
