const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string'
  || /[a-zA-Z]/g.test(sampleActivity)
  || sampleActivity <= 0
  || sampleActivity > MODERN_ACTIVITY) {
    return false
  }
  let activity = parseFloat(sampleActivity)
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693)

  return Math.abs(result)
};
