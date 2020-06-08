const statisticsModel = require("./statistics");
const sanitize = require("mongo-sanitize");

module.exports = {
  view: (req, res) => {
    statisticsModel.findOne({}, (err, statistics) => {
      if (statistics) {
        statistics.visits += 1;
        statistics.save();
      } else {
        console.log(err);
      }
    });
    res.status(200);
  },
  score: (req, res) => {
    let score = sanitize(req.body.score);
    if (score.length == 21) {
      statisticsModel.findOne({}, (err, statistics) => {
        if (statistics) {
          statistics.question_01 = score[0];
          statistics.question_02 = score[1];
          statistics.question_03 = score[2];
          statistics.question_04 = score[3];
          statistics.question_05 = score[4];
          statistics.question_06 = score[5];
          statistics.question_07 = score[6];
          statistics.question_08 = score[7];
          statistics.question_09 = score[8];
          statistics.question_10 = score[9];
          statistics.question_11 = score[10];
          statistics.question_12 = score[11];
          statistics.question_13 = score[12];
          statistics.question_14 = score[13];
          statistics.question_15 = score[14];
          statistics.question_16 = score[15];
          statistics.question_17 = score[16];
          statistics.question_18 = score[17];
          statistics.question_19 = score[18];
          statistics.question_20 = score[19];
          statistics.question_21 = score[20];
          statistics.save();
        }
      });
    }
    res.status(200);
  },
};
