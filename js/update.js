const statisticsModel = require("./statistics");
const sanitize = require("mongo-sanitize");

const path = require("path");
const fs = require("fs");

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

  getStatistics: function (req, res) {
    let content =
      "Visits,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21\n";
    const password = sanitize(req.body.password);
    if (password === "Loader11712") {
      statisticsModel.find({}, function (err, raw_statistics) {
        if (err) {
          console.log("There was an error finding users");
        } else {
          if (raw_statistics) {
            statistics = raw_statistics[0];
            let questions = [];

            let correct = 0;
            let incorrect = 0;
            console.log(statistics);
            console.log(statistics.question_01);
            for (let i = 0; i < statistics.question_01.length; ++i) {
              if (statistics.question_01[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_02.length; ++i) {
              if (statistics.question_02[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_03.length; ++i) {
              if (statistics.question_03[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_04.length; ++i) {
              if (statistics.question_04[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_05.length; ++i) {
              if (statistics.question_05[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_06.length; ++i) {
              if (statistics.question_06[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_07.length; ++i) {
              if (statistics.question_07[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_08.length; ++i) {
              if (statistics.question_08[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_09.length; ++i) {
              if (statistics.question_09[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_10.length; ++i) {
              if (statistics.question_10[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_11.length; ++i) {
              if (statistics.question_11[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_12.length; ++i) {
              if (statistics.question_12[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_13.length; ++i) {
              if (statistics.question_13[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_14.length; ++i) {
              if (statistics.question_14[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_15.length; ++i) {
              if (statistics.question_15[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_16.length; ++i) {
              if (statistics.question_16[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_17.length; ++i) {
              if (statistics.question_17[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_18.length; ++i) {
              if (statistics.question_18[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_19.length; ++i) {
              if (statistics.question_19[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_20.length; ++i) {
              if (statistics.question_20[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            correct = 0;
            incorrect = 0;
            for (let i = 0; i < statistics.question_21.length; ++i) {
              if (statistics.question_21[i]) {
                ++correct;
              } else {
                ++incorrect;
              }
            }
            questions.push((100 * correct) / incorrect);

            content += statistics.visits;

            for (let i = 0; i < questions.length; ++i) {
              content += "," + questions[i];
            }

            content += "\n";
            const directory = path.join(
              __dirname,
              "..",
              "coal_loader_stats.csv"
            );
            console.log(directory);
            fs.writeFile(directory, content, function (err) {
              if (err) throw err;
              const directory = path.join(
                __dirname,
                "..",
                "coal_loader_stats.csv"
              );
              console.log(directory);

              res.set({
                "Content-Disposition":
                  "attachment; filename=coal_loader_stats.csv",
                "Content-type": "text/csv",
              });
              res.sendFile(directory);
            });
          } else {
            res.send("Unable to get statistics at this time");
          }
        }
      });
    } else {
      const directory = path.join(__dirname, "..", "data.html");
      res.sendFile(directory);
    }
  },
};
