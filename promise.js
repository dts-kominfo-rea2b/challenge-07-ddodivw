const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(mood) => {
  try {
    let theaterIXX = await promiseTheaterIXX()
    let theaterVGC = await promiseTheaterVGC()

    let moodPenonton = [...theaterIXX, ...theaterVGC]
    let result = moodPenonton.filter((hasilMood=> hasilMood.hasil === mood)).length
    return result;
  } 
  catch (err) {
    console.log("Error :"+err)
  }
};

module.exports = {
  promiseOutput,
};
