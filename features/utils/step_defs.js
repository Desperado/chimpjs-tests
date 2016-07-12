var common = require("../lib/pageObjects.js")
var cacheBust = '?' + (new Date).getTime();

module.exports = function() {

  this.Given(/^I am on the "([^"]*)" page$/, function (location) {
    // browser.url(common.siteSettings[location] + cacheBust);
    browser.url(common.siteSettings[location]);
  });

  this.Then(/^I clear the cache$/, function () {
    client.execute(function(){
      localStorage.clear();
    });
  });

  this.Then(/^I setup the tests$/, function () {
    browser.addCommand("uiAutocomplete", function (selector){
      browser.pause(5000);
      client.execute(function(){
        jQuery('.ui-autocomplete').css('display', 'block');
      })
      browser.pause(5000);
      client.click('//*[contains(text(), "' + selector + '")]');
    });
    client.execute(function(){
      localStorage.clear();
    });
  });

  this.Then(/^I fill in the "([^"]*)" field with "([^"]*)"$/, function (selector, value) {
    client.setValue(common.pageObjects[selector], value);
  });

  this.Then(/^I click the "([^"]*)"$/, function (selector) {
    client.click(common.pageObjects[selector]);
  });

  this.Then(/^I set the "([^"]*)" to display$/, function (selector) {
    client.execute(jQuery(common.pageObjects[selector]).css('display', 'block'));
  });

  this.Then(/^I should see "([^"]*)" in the title$/, function (text) {
    client.waitForExist('h1', 5000);
    var header = client.getText('h1');
    expect(header).toContain(text);
  });

  this.Then(/^I should see "([^"]*)" in the url$/, function (partial) {
    client.waitForExist('h2', 5000);
    var found = browser.url().value.indexOf(partial) > -1;
    expect(found).toBe(true);
  });

  this.Then(/^I should see "([^"]*)" on "([^"]*)"$/, function (text, selector) {
    client.waitForExist(common.pageObjects[selector], 3000);
    expect(client.getText(common.pageObjects[selector])).toEqual(text);
  });

  this.Given(/^I wait for a period of time$/, function () {
    browser.pause(10000);
  });

  this.When(/^I switch tabs$/, function () {
    browser.switchTab(2);
  });
}
