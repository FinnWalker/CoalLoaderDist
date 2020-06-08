const mongoose = require("mongoose");

const Statistics = mongoose.model("Statistics", {
  visits: Number,
  completions: Number,
  question_01: [{ type: Boolean }],
  question_02: [{ type: Boolean }],
  question_03: [{ type: Boolean }],
  question_04: [{ type: Boolean }],
  question_05: [{ type: Boolean }],
  question_06: [{ type: Boolean }],
  question_07: [{ type: Boolean }],
  question_08: [{ type: Boolean }],
  question_09: [{ type: Boolean }],
  question_10: [{ type: Boolean }],
  question_11: [{ type: Boolean }],
  question_12: [{ type: Boolean }],
  question_13: [{ type: Boolean }],
  question_14: [{ type: Boolean }],
  question_15: [{ type: Boolean }],
  question_16: [{ type: Boolean }],
  question_17: [{ type: Boolean }],
  question_18: [{ type: Boolean }],
  question_19: [{ type: Boolean }],
  question_20: [{ type: Boolean }],
  question_21: [{ type: Boolean }],
});

module.exports = Statistics;
