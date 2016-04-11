#@ignore
@watch
Feature: Enquire on promotions

  As a User
  I want to be able to submit an enquiry form on a promotion
  So I can have my enquiry responded to

  Scenario: Submit a return booking from a promotion product
    Given I am on the "worldOnSale" page
    Then I click the first bookable product
    And I submit a booking search
    Then I should see "results" in the url
    And I should see some "flightsDomesticOutboundProducts"
    And I should see some "flightsDomesticInboundProducts"

  Scenario: Submit a one way booking from a promotion product
    Given I am on the "worldOnSale" page
    Then I click the first one way bookable product
    And I submit a one way booking search
    Then I should see "results" in the url
    And I should see some "flightsDomesticOutboundProducts"

  Scenario: Check product has travel dates selected and highlighted
    Given I am on the "worldOnSale" page
    Then I click the first product with travel dates
    Then I should see the 'startDate' has a date
    And I should see the datepicker has highlighted dates

#  Scenario: As a customer, I want to be able to contact a consultant about fares on LCC's so that i can book them offline.
#    Given that i am logged in as an administrator
#    When i am on the farecompare configuration screen
#    Then I expect to be able to save a list of comma separated airline carriers
#    When i am on the http://www.flightcentre.com.au/promotions/easter-sale page
#    Then select a flight that is serviced by QZ, TT, AK, D7
#    Then i expect a modal to appear with the option to call or chat.
