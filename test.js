"use strict"

/**
 * Dependencies
 */

const assert = require("assert")
const RootModel = require("./index")

/**
 * Define test class
 */

class Post extends RootModel {
  
}

/**
 * Assertions
 */

describe("index.js", () => {
  it("should have tests", () => {
    assert.ok(true)
  })
})
