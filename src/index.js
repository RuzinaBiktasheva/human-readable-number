module.exports = function toReadable(number) {
    let numbersSectionOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numbersSectionTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numbersSectionThree = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number >= 0 && number < 10) {
      return numbersSectionOne[number];
    } else if (number > 10 && number < 20) {
      return numbersSectionTwo[number - 10];
    } else if (number % 10 === 0 && number < 100) {
      return numbersSectionThree[number / 10];
    } else if (number > 20 && number < 100) {
      return `${numbersSectionThree[Math.trunc(number / 10)]} ${numbersSectionOne[number % 10]}`;
    } else if (number % 100 === 0) {
      return `${numbersSectionOne[number / 100]} hundred`;
    } else if (number > 100 && number % 10 === 0) {
      return `${numbersSectionOne[Math.trunc(number / 100)]} hundred ${numbersSectionThree[(number % 100) / 10]}`;
    } else if (number > 100 && number % 100 > 20) {
      return `${numbersSectionOne[Math.trunc(number / 100)]} hundred ${numbersSectionThree[Math.trunc((number % 100) / 10)]} ${numbersSectionOne[number % 10]}`;
    } else if (number > 100 && number % 100 < 10) {
      return `${numbersSectionOne[Math.trunc(number / 100)]} hundred ${numbersSectionOne[number % 10]}`;
    } else {
      return `${numbersSectionOne[Math.trunc(number / 100)]} hundred ${numbersSectionTwo[number % 100 - 10]}`;
    }
};
