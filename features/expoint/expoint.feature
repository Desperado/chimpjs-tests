@watch
Feature: Automated testing of ex point selectors
  In order to test that ex point is correctly setting
  As a user
  I need to assert that the ex point is correct across my page traversal

  Scenario: Checks that on page load ex point value is set to "sydney" by default
    Given I am on the "home" page
    And I clear the cache
    Then I should see the "homeInternationalFlightsExpoint" ex point matches "sydney"
    Then I should see the "homeStartCity" value matches "Sydney, Australia - Sydney Airport (Kingsford Smith Airport) (SYD)"
    When I am on the "flights" page
    Then I should see the "flightsAustraliaExpoint" ex point matches "sydney"
    And I should see the "flightsStartCity" value matches "Sydney, Australia - Sydney Airport (Kingsford Smith Airport) (SYD)"
    When I am on the "contactus" page
    And I should see the "enquiryDeparting" value matches "Sydney, Australia - Sydney Airport (Kingsford Smith Airport) (SYD)"

  Scenario: Changing the ex point from the flights page corresponds to a change on the alt homepage ex point
    Given I am on the "home" page
    Then I should see the "homeInternationalFlightsExpoint" ex point matches "sydney"
    When I select the "melbourne" from the "homeInternationalFlightsExpoint" selector
    Then I should see the "homeInternationalFlightsExpoint" ex point matches "melbourne"
    And I should see the "homeStartCity" value matches "Melbourne, Australia - Melbourne Airport (MEL)"
    When I am on the "flights" page
    Then I should see the "flightsAustraliaExpoint" ex point matches "melbourne"
    And I should see the "flightsStartCity" value matches "Melbourne, Australia - Melbourne Airport (MEL)"
    When I am on the "contactus" page
    And I should see the "enquiryDeparting" value matches "Melbourne, Australia - Melbourne Airport (MEL)"

  Scenario: Changing the ex point from the flights page corresponds to a change on the homepage ex point
    Given I am on the "flights" page
    Then I should see the "flightsAustraliaExpoint" ex point matches "melbourne"
    And I should see the "flightsStartCity" value matches "Melbourne, Australia - Melbourne Airport (MEL)"
    When I select the "brisbane" from the "flightsAustraliaExpoint" selector
    Then I should see the "flightsAustraliaExpoint" ex point matches "brisbane"
    And I should see the "flightsStartCity" value matches "Brisbane, Australia - Brisbane Airport (BNE)"
    When I am on the "contactus" page
    And I should see the "enquiryDeparting" value matches "Brisbane, Australia - Brisbane Airport (BNE)"

  Scenario: Checks that the ex point is correct on international flights
    Given I am on the "flightsInternational" page
    Then I should see the "flightsInternationalPopularExpoint" ex point matches "brisbane"
    And I should see the "flightsStartCity" value matches "Brisbane, Australia - Brisbane Airport (BNE)"
    When I am on the "contactus" page
    And I should see the "enquiryDeparting" value matches "Brisbane, Australia - Brisbane Airport (BNE)"

  Scenario: Selects a non major city from flights search form
    Given I am on the "flights" page
    And I fill in the "flightsStartCity" field with "tamworth"
    And I select "tamworthAutocomplete" from the autocomplete box
    Then I wait for AJAX to finish
    Then I should see the "flightsAustraliaExpoint" ex point matches "sydney"
    When I am on the "home" page
    Then I should see the "homeInternationalFlightsExpoint" ex point matches "sydney"
    And I should see the "homeStartCity" value matches "Tamworth, Australia - Tamworth Airport (TMW)"
    When I am on the "contactus" page
    Then I should see the "enquiryDeparting" value matches "Tamworth, Australia - Tamworth Airport (TMW)"

  Scenario: Checks that sydney is the only city listed on a flight landing page
    Given I am on the "flightsAuckland" page
    Then I should see the link "Sydney to Auckland"
    And I should see the "enquiryDeparting" value matches "Tamworth, Australia - Tamworth Airport (TMW)"

  Scenario: checks that sydney is the only city listed on a holiday landing page
    Given I am on the "holidaysAuckland" page
    And I should see the "holidaysAirExpoint" value matches "sydney"
    Given I am on the "flightsAuckland" page
    Then I should see the link "Sydney to Auckland"
    And I should see the "enquiryDeparting" value matches "Tamworth, Australia - Tamworth Airport (TMW)"

  Scenario: Checks that changing the departure field from the holidays landing page doesn't affect ex point
    Given I am on the "holidays" page
    And I should see the "holidayStartCity" value matches "Sydney"
    When I select the "Perth" from the "holidayStartCity" selector
    And I am on the "home" page
    And I wait for AJAX to finish
    Then I should see the "homeInternationalFlightsExpoint" ex point matches "sydney"
    And I should see the "homeStartCity" value matches "Tamworth, Australia - Tamworth Airport (TMW)"

  Scenario: Checks that values pass through to SOAR when submitting a search
    Given I am on the "flights" page
    And I fill in the "flightsStartCity" field with "rockhampton"
    And I select "rockhamptonAutocomplete" from the autocomplete box
    Then I fill in the "flightsEndCity" field with "sydney"
    And I select "newSouthWalesAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "flightsStartDate" datepicker
    Then I select a "datePickerEndDate" from the "flightsEndDate" datepicker
    Then I click the "findFlightsButton"
    Then I should see "/results" in the url

  Scenario: Checks that submitting a search without altering the departing field works correctly
    Given I am on the "flights" page
    Then I should see the "flightsAustraliaExpoint" ex point matches "brisbane"
    And I should see the "flightsStartCity" value matches "Rockhampton, Australia - Rockhampton Airport (ROK)"
    Then I fill in the "flightsEndCity" field with "paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "flightsStartDate" datepicker
    Then I select a "datePickerEndDate" from the "flightsEndDate" datepicker
    Then I click the "findFlightsButton"
    Then I should see "/results" in the url

  Scenario: Checks that going to a SEM search page does not have the departing field set
    Given I am on the "baliFlightsGeneralSearch" page
    Then the "enquiryDeparting" field should be empty

  Scenario: Checks that the expoint is correctly set on the flights to london page and the header updates correctly
    Given I am on the "flightsLondon" page
    Then I should see the "flightsLondonExpoint" value matches "brisbane"
    And I should see "Brisbane to London Flights" in the title
    When I select the "sydney" from the "flightsLondonExpoint" selector
    And I wait for AJAX to finish
    Then I should see the "flightsLondonExpoint" value matches "sydney"
    And I should see "Sydney to London Flights" in the title
