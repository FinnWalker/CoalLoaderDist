const Statistics = require("./statistics.js");

function initialiseStatistics() {
  Statistics.findOne({}, function (err, statistics) {
    if (err) {
      console.log(err);
    } else if (!statistics) {
      const newStatistics = new Statistics({
        visits: 0,
        question_01: [],
        question_02: [],
        question_03: [],
        question_04: [],
        question_05: [],
        question_06: [],
        question_07: [],
        question_08: [],
        question_09: [],
        question_10: [],
        question_11: [],
        question_12: [],
        question_13: [],
        question_14: [],
        question_15: [],
        question_16: [],
        question_17: [],
        question_18: [],
        question_19: [],
        question_20: [],
        question_21: [],
      });
      newStatistics.save();
    }
  });
}

module.exports = initialiseStatistics;
