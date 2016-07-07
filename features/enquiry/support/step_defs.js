var common = require("../../lib/pageObjects.js")

module.exports = function() {

this.Then(/^I fill out the enquiry form$/, function () {
  client.waitForExist("#edit-firstname--2");
  client.setValue(common.pageObjects.enquiryDeparting, 'Brisbane');
  client.setValue(common.pageObjects.enquiryDestination, 'Sydney');
  client.setValue(common.pageObjects.comments, 'test.mavericks');
  client.setValue(common.pageObjects.firstName, 'test.mavericks');
  client.setValue(common.pageObjects.lastName, 'test.mavericks');
  client.setValue(common.pageObjects.postcode, '4000');
  client.setValue(common.pageObjects.phone, '0400000000');
  client.setValue(common.pageObjects.email, 'fcl.websolutions@gmail.com');
});

this.Then(/^I click submit$/, function () {
  client.click(common.pageObjects.enquirySubmitButton);
});

this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
  browser.setValue('input[name="q"]', searchTerm);
  browser.keys(['Enter']);
});

this.Then(/^I see "([^"]*)"$/, function (link) {
  browser.waitForExist('a=' + link);
});

this.Then(/^I select an exact date of today$/, function () {
  client.waitForVisible('.form-item-travelDateKnown');
  browser.click('.form-item-travelDateKnown:nth-child(2)');
  client.waitForVisible('#edit-rough-month');
  browser.click('#edit-rough-month');
  client.waitForVisible('.form-item-rough-month > div > ul > li:nth-child(7) > a');
  browser.click('.form-item-rough-month > div > ul > li:nth-child(7) > a');
  client.waitForVisible('div.submit > a');
  browser.click('div.submit > a');
});


this.When(/^I click on the "([^"]*)" checkbox$/, function (selector) {
  client.click(common.pageObjects[selector]);
});

this.Then(/^I should see "([^"]*)" is a required field$/, function (selector) {
  var found = (client.getText(common.pageObjects[selector]) == '*');
  expect(found).toBe(true);
});

this.Then(/^I should not see "([^"]*)" is a required field$/, function (selector) {
  var found = client.isExisting(common.pageObjects[selector]);
  expect(found).not.toBe(true);
});

this.Given(/^I set the "([^"]*)" dropdown to display$/, function (selector) {
  var el = common.pageObjects[selector];
  client.execute(function(arg1){
    document.querySelector(arg1).style.display= 'block';
  }, el)
});

this.Then(/^the "([^"]*)" hidden field should contain the value "([^"]*)"$/, function (selector, val) {
  expect(client.getValue(common.pageObjects[selector])).toContain(val);
});

this.Then(/^I click the "([^"]*)" progressive disclosure button$/, function (selector) {
  client.click(common.pageObjects[selector])
});

this.Given(/^I fill in the "([^"]*)" with 250 characters$/, function (selector) {
  var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
         " Proin ac lectus eu ex congue suscipit. Phasellus lobortis leo posuere " +
         "metus blandit placerat. Donec in laoreet nulla. " +
         "Phasellus vel est varius, suscipit nunc ut, ultrices dolor. Suspendisse sed.";

  client.setValue(common.pageObjects[selector], text);

});

this.Then(/^I should see "([^"]*)" in the hidden keyword$/, function (selector) {
  expect(client.getValue(common.pageObjects[selector])).toEqual('250characters');
});

this.Then(/^I should be on the confirmation page$/, function () {
  client.waitForExist('h1', 30000);
  var header = client.getText('h1');
  expect(header).toContain('Confirmation');
  var found = browser.url().value.indexOf(common.siteSettings.enquiryConfirmation) > -1;
  expect(found).toBe(true);
});

}
