var common = require("../../lib/pageObjects.js");

module.exports = function() {

this.Given(/^I clear cache$/, function () {
  client.execute(function(){
    localStorage.clear();
  });
});

this.Then(/^I fill in the search departure field with "([^"]*)"$/, function (departure) {
  client.setValue('#edit-startcitystr', departure);
});

this.Then(/^I fill in the search destination field "([^"]*)"$/, function (destination) {
  client.setValue('#edit-endcitystr', destination);
	// browser.waitForVisible('.ui-autocomplete', 30000);
});

this.Then(/^I search for a flight from "([^"]*)" to "([^"]*)" from the "([^"]*)" to the "([^"]*)"$/, function (departure, destination, startDate, endDate) {
    browser.setValue(common.pageObjects.flightsStartCity, departure);
    browser.uiAutocomplete(departure);
    browser.setValue(common.pageObjects.flightsEndCity, destination);
    browser.uiAutocomplete(destination);
    browser.click(common.pageObjects.flightsStartDate);
    browser.click(common.pageObjects.datePickerStartDate);
    browser.click(common.pageObjects.flightsEndDate);
    browser.click(common.pageObjects.datePickerEndDate);
    browser.click(common.pageObjects.findFlightsButton);
});

this.Then(/^I search for a one\-way flight from "([^"]*)" to "([^"]*)" on the "([^"]*)"$/, function (departure, destination, startDate) {
  // browser.addCommand("uiAutocomplete", function (selector){
  //   browser.pause(5000);
  //   client.execute(function(){
  //     jQuery('.ui-autocomplete').css('display', 'block');
  //   })
  //   browser.pause(5000);
  //   client.click('//*[contains(text(), "' + selector + '")]');
  // });
  browser.click(common.pageObjects.flightsOneWayCheckbox);
  browser.setValue(common.pageObjects.flightsStartCity, departure);
  browser.uiAutocomplete(departure);
  browser.setValue(common.pageObjects.flightsEndCity, destination);
  browser.uiAutocomplete(destination);
  browser.click(common.pageObjects.flightsStartDate);
  browser.click(common.pageObjects.datePickerStartDate);
  browser.click(common.pageObjects.findFlightsButton);
});

this.Then(/^I select "([^"]*)" from the autocomplete box$/, function (selector) {
  browser.pause(5000);
  client.execute(function(){
    jQuery('.ui-autocomplete').css('display', 'block');
  })
  browser.pause(5000);
  client.click(common.pageObjects[selector]);
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

this.Then(/^I should be on the flight "([^"]*)" page$/, function (selector) {
  browser.waitForVisible(common.pageObjects[selector], 30000);
	var title = browser.getText(common.pageObjects[selector]);
  expect(title).toEqual('Select Departing Flight');
});

this.Then(/^I should see some "([^"]*)"$/, function (products) {
  browser.waitForExist(common.pageObjects[products]);
	browser.element(common.pageObjects[products]);
});

this.Given(/^I select the "([^"]*)" from the "([^"]*)" selector$/, function (value, selector) {
  client.selectByValue(common.pageObjects[selector], value);
});

this.When(/^I select the current day in the "([^"]*)" datepicker$/, function (selector) {
  browser.click(common.pageObjects[selector]);
  browser.waitForVisible('.ui-datepicker', 30000);
  browser.click('.ui-state-highlight', 30000);

});

this.Then(/^I check that the value of "([^"]*)" element matches that of "([^"]*)" element$/, function (startSelector, endSelector) {
  var startDate = browser.getValue(common.pageObjects[startSelector]);
  var endDate = browser.getValue(common.pageObjects[endSelector]);
  expect(startDate).toEqual(endDate);
});

this.Given(/^I follow "([^"]*)"$/, function (link) {
  browser.waitForVisible('a=' + link, 30000);
  // browser.pause(500);
  browser.click('a=' + link);
});

this.Then(/^I should see text "([^"]*)" in the "([^"]*)"$/, function (text, selector) {
  var el = browser.getText(common.pageObjects[selector]);
  expect(el).toEqual(text);
});

this.Then(/^I should see a "([^"]*)" on the page$/, function (selector) {
  var el = browser.waitForVisible(common.pageObjects[selector]);
  expect(el).toBe(true);
});

this.Then(/^I select a "([^"]*)" from the "([^"]*)" datepicker$/, function (date, selector) {
  browser.click(common.pageObjects[selector]);
  browser.click(common.pageObjects[selector]);
  browser.click(common.pageObjects[selector]);
  browser.click(common.pageObjects[date]);
});

this.When(/^I search "([^"]*)" in the "([^"]*)" field$/, function (text, selector) {
  browser.setValue(common.pageObjects[selector], text);
  browser.submitForm(common.pageObjects[selector]);
});

this.Then(/^I select the "([^"]*)"$/, function (selector) {
  browser.click(common.pageObjects[selector]);
});

this.Then(/^I should see the message "([^"]*)" on the error "([^"]*)"$/, function (value, selector) {
  browser.pause(5000);
  var el = common.pageObjects[selector];
  var val = client.execute(function(arg1){
    return jQuery(arg1).text()
    // return jQuery('#edit-location label.error').text()
  }, el);
  var valstr = val.value;
  expect(valstr).toContain(value);
});

}
