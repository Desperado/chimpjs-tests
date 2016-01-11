var pageObjects = require("../../lib/pageObjects.js")
module.exports = function() {

this.Given(/^I have visited "([^"]*)"$/, function (url) {
	flights = 'http://www.flightcentre.com.au/flights'
  browser.url(flights);
});

this.Given(/^I clear cache$/, function () {
  client.execute(function(){
    localStorage.clear();
  });
});

this.Then(/^I fill in the search departure field with "([^"]*)"$/, function (departure) {
  client.setValue('#flights-dest-str-string-startCity', departure);
  browser.waitForVisible('.ui-autocomplete', 30000);
});

this.Then(/^I fill in the search destination field "([^"]*)"$/, function (destination) {
  client.setValue('#flights-dest-str-string-endCity', destination);
	browser.waitForVisible('.ui-autocomplete', 30000);
});

// this.Then(/^I select "([^"]*)" from the autocomplete box$/, function (selector) {
//   browser.waitForVisible('.ui-autocomplete', 30000);
//   browser.waitForVisible(selectorMapping[selector], 30000);
//   browser.pause(5000);
//   client.click(selectorMapping[selector], 30000);
//   console.log('selector clicked');
// });

this.Then(/^I select "([^"]*)" from the autocomplete box$/, function (selector) {
  browser.waitForVisible('.ui-autocomplete', 30000);
  browser.waitForVisible(selectorMapping[selector], 30000);
  browser.pause(5000);
  client.element(selectorMapping[selector]);
  client.keys('Down arrow');
  client.keys('Enter');
  console.log('selector clicked');
});

this.Then(/^I click today$/, function () {
	browser.waitForVisible('.ui-state-highlight');
  client.click('.ui-state-highlight');
	browser.pause(500);
	browser.waitForVisible('.ui-state-highlight');
  client.click('.ui-state-highlight');
});

this.Then(/^I submit the search$/, function () {
  client.click('.fc-form-inner #edit-submit');
});

this.Then(/^I should be on the "([^"]*)" page$/, function (selector) {
  browser.waitForVisible(selectorMapping[selector], 30000);
	var title = browser.getText(selectorMapping[selector]);
  expect(title).toEqual('Select Departing Flight');
});

this.Then(/^I should see some "([^"]*)"$/, function (products) {
  browser.waitForExist(selectorMapping[products]);
	browser.element(selectorMapping[products]);
});

this.Given(/^I select the "([^"]*)" from the "([^"]*)" selector$/, function (value, selector) {
  client.selectByValue(selectorMapping[selector], value);
});

this.Then(/^I should see that the "([^"]*)" checkbox is checked$/, function (arg1, startCity) {
  // Write the automation code here
  pending();
});

this.When(/^I select the current day in the "([^"]*)" datepicker$/, function (selector) {
  browser.click(selectorMapping[selector]);
  browser.waitForVisible('.ui-datepicker', 30000);
  browser.click('.ui-state-highlight', 30000);

});

this.Then(/^I check that the value of "([^"]*)" element matches that of "([^"]*)" element$/, function (startSelector, endSelector) {
  startDate = browser.getValue(selectorMapping[startSelector]);
  endDate = browser.getValue(selectorMapping[endSelector]);
  expect(startDate).toEqual(endDate);
});

this.Given(/^I follow "([^"]*)"$/, function (link) {
  browser.waitForVisible('a=' + link, 30000);
  browser.pause(500);
  browser.click('a=' + link);
});

this.Then(/^I should see text "([^"]*)" in the "([^"]*)"$/, function (text, selector) {
  el = browser.getText(selectorMapping[selector]);
  expect(el).toEqual(text);
});


this.Then(/^I should see a "([^"]*)" on the page$/, function (selector) {
  el = browser.waitForVisible(selectorMapping[selector]);
  expect(el).toBe(true);
});

this.Then(/^I select a "([^"]*)" from the "([^"]*)" datepicker$/, function (date, selector) {
  browser.click(selectorMapping[selector]);
  browser.click(selectorMapping[selector]);
  browser.click(selectorMapping[selector]);
  browser.click(selectorMapping[date]);
});

this.When(/^I search "([^"]*)" in the "([^"]*)" field$/, function (text, selector) {
  browser.setValue(selectorMapping[selector], text);
  browser.submitForm(selectorMapping[selector]);
});

this.Then(/^I select the "([^"]*)"$/, function (selector) {
  browser.click(selectorMapping[selector]);
});






}
