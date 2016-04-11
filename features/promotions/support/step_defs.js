var common = require("../../lib/pageObjects.js");

module.exports = function() {

  this.Given(/^that i am logged in as an administrator$/, function () {
    browser.url(common.siteSettings.login);
    client.click(common.pageObjects.loginButton);
  });

  this.Then(/^I click the first bookable product$/, function () {
    browser.waitForExist(common.pageObjects.domesticFlightsTab, 30000);
    client.click(common.pageObjects.domesticFlightsTab);
    browser.waitForVisible(common.pageObjects.firstBookable, 30000);
    client.click(common.pageObjects.sydneyToGoldCoastAirfare);
});

this.Then(/^I submit a booking search$/, function () {
  browser.waitForVisible(common.pageObjects.startDate, 30000);
  client.execute(function(){
    jQuery("#edit-flighttype").val('return').trigger("chosen:updated");
  });
  browser.click(common.pageObjects.startDate, 5000);
  browser.waitForVisible('.ui-datepicker', 5000);
  browser.click(common.pageObjects.datePickerStartDate, 5000);
  browser.waitForVisible('.ui-datepicker', 5000);
  browser.click(common.pageObjects.datePickerEndDate, 5000);
  browser.click(common.pageObjects.findAndBookOnline);
});

this.Then(/^I should be on the soar search form$/, function () {
  var url = browser.url()
  expect(url).toContain('/results');
});

this.Then(/^I click the first one way bookable product$/, function () {
  browser.waitForExist(common.pageObjects.domesticFlightsTab, 30000);
  client.click(common.pageObjects.domesticFlightsTab);
  browser.waitForVisible(common.pageObjects.oneWayProduct, 30000);
  client.click(common.pageObjects.sydneyToGoldCoastAirfare);
});

this.Then(/^I submit a one way booking search$/, function () {
  browser.waitForVisible(common.pageObjects.startDate, 30000);
  browser.click(common.pageObjects.startDate);
  browser.click(common.pageObjects.datePickerStartDate, 5000);
  //Executes JS in the browser to check that the end date is not enabled for One-Way
  var val = client.execute(function(){
    if (jQuery('.form__end-date').is(':enabled')){
      return false;
    }  else {
        return true;
      }

    });
    var isEnabled = val.value;
    expect(isEnabled).toBe(true);
  browser.click(common.pageObjects.findAndBookOnline, 5000);
});

this.Then(/^I click the first product with travel dates$/, function () {
  pending();
});

this.Then(/^I should see the 'startDate' has a date$/, function () {
  // Write the automation code here
  pending();
});

this.Then(/^I should see the datepicker has highlighted dates$/, function () {
  // Write the automation code here
  pending();
});

  this.When(/^i am on the farecompare configuration screen$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^I expect to be able to save a list of comma separated airline carriers$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.When(/^i am on the http:\/\/www\.flightcentre\.com\.au\/promotions\/easter\-sale page$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^select a flight that is serviced by QZ, TT, AK, D(\d+)$/, function (arg1, callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});

this.Then(/^i expect a modal to appear with the option to call or chat\.$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});


}
