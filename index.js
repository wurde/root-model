"use strict"

/**
 * Dependencies
 */

const model_errors = require("model-errors")

/**
 * Define RootModel
 */

class RootModel {
  constructor(param, req, res) {
    this.req = req
    this.res = res
    this.model_errors = model_errors
    this.errors = new model_errors.Errors()
    this.is_valid = model_errors.is_valid
  }

  t(key) {
    return this.req.app.locals.t(this., key)
  }
}

/**
 * Export RootModel
 */

module.exports = RootModel
