"use strict"

/**
 * Dependencies
 */

const model_errors = require("model-errors")
const struct = require("struct-extras")

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

  /**
   * Translations from different locales.
   *
   * @method
   * @since 0.1.0
   * @public
   */

  t(key) {
    return this.req.app.locals.t(this.res.locals.locale, key)
  }

  /**
   * Whitelist parameters to avoid mass assignment.
   *
   * @method
   * @since 0.1.0
   * @param {Object} param - instance key values.
   * @param {Object} strong_param - whitelist of parameters.
   * @returns {String|null} err - any error messages.
   * @public
   */

  assignment(param, strong_param) {
    if (param === undefined || param === null) { return; }

    strong_param = struct(strong_param)

    if (strong_param.test(param)) {
      let keys = Object.keys(param)
      for (let i=0; i < keys.length; i++) {
        this[keys[i]] = param[keys[i]]
      }
      return null
    } else {
      return strong_param.validate(param)
    }
  }
}

/**
 * Export RootModel
 */

module.exports = RootModel
