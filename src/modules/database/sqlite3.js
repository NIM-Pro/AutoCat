'use strict'

const Sqlite3 = require('sqlite3')

class Sqlite3Wrapper {
  constructor(filename) {
    this.filename = filename
    this.connection = new Sqlite3.cached.Database(filename)
  }
  reopen() {
    return this.close()
    .then(()=> this.connection = new Sqlite3.cached.Database(this.filename))
  }
  close() {
    if (!this.connection) return Promise.resolve()
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
