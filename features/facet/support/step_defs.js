var common = require("../../lib/pageObjects.js");

module.exports = function() {

this.Given(/^I check the "([^"]*)" checkbox with jquery$/, function (checkbox) {
  client.execute(function(arg1){
    return jQuery('[value="' + arg1 + '"]').attr('checked', true);
  }, checkbox);
});

this.Then(/^I should see that the "([^"]*)" checkbox is checked$/, function (checkbox) {
  var isChecked = client.execute(function(arg1){
    return jQuery('[value="' + arg1 + '"]').length > 0;
  }, checkbox);
  expect(isChecked.value).toBe(true);
});

this.When(/^I uncheck the "([^"]*)" checkbox with jquery$/, function (checkbox) {
  client.execute(function(arg1){
    return jQuery('[value="' + arg1 + '"]').attr('checked', false);
  }, checkbox);
});

this.Then(/^I should see that the "([^"]*)" checkbox is unchecked$/, function (checkbox) {
  var isNotChecked = client.execute(function(arg1){
    return jQuery('[value="' + arg1 + '"]').length > 0;
  }, checkbox);
  expect(isNotChecked.value).toBe(false);
});



}
