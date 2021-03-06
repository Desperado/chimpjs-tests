#@ignore
Feature: Search the Web

  As a User
  I want to be able to search for flights
  So I can see some products

  @watch
  Scenario: I set the state for tests
    Given I am on the "home" page
    Then I setup the tests

  @watch
  Scenario: Search for domestic return flights
    Given I am on the "flights" page
    Then I search for a flight from "Brisbane Airport" to "Sydney Airport" from the "datePickerStartDate" to the "datePickerEndDate"
    Then I should be on the flight "flightsResults" page
    And I should see some "flightsProducts"

  @watch
  Scenario: Search for international return flights from the homepage
    Given I am on the "home" page
    Then I search for a flight from "Sydney Airport" to "Denpasar-Bali" from the "datePickerStartDate" to the "datePickerEndDate"
    Then I should be on the flight "flightsResults" page
    And I should see some "flightsProducts"

  @watch
  Scenario: Search for international one-way flights from the homepage
    Given I am on the "home" page
    Then I search for a one-way flight from "Brisbane Airport" to "Denpasar-Bali" on the "datePickerStartDate"
    Then I should be on the flight "flightsResults" page
    And I should see some "flightsProducts"

  @watch
  Scenario: Search for domestic one-way flights
    Given I am on the "flights" page
    Then I search for a one-way flight from "Brisbane Airport" to "Sydney Airport" on the "datePickerStartDate"
    Then I should be on the flight "flightsResults" page
    And I should see some "flightsProducts"

  Scenario Outline: Submit a search form from holidays search page
    Given I am on the "<location>" page
    And I clear the cache
    And I select the "[1001 TO 3000]" from the "holidayPriceField" selector
    And I select the "Brisbane" from the "holidayStartCity" selector
    Then I fill in the "holidayDestination" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I click the "searchHolidaysButton"
    Then I should see "/holidays/search" in the url
    And I should see some "products"

  Examples:
    | location |
    | holidays |

  Scenario Outline: Submit a search form from rail search page
    Given I am on the "<location>" page
    And I select the "Asia" from the "railDestination" selector
    Then I click the "railSearchButton"
    Then I should see "/rail/search" in the url
    And I should see some "products"

  Examples:
    | location |
    | rail |

  Scenario Outline: Submit a search form the tours search page
    Given I am on the "<location>" page
    When I fill in the "tourDestination" field with "France"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I click the "findToursButton"
    Then I should see "/tours/search" in the url
    And I should see some "products"

  Examples:
    | location |
    | tours |

  Scenario Outline: Submit a search from the cruise search page
    Given I am on the "<location>" page
    When I select the "Europe" from the "cruiseDestination" selector
    And I click the "cruiseSearchButton"
    Then I should see some "products"

  Examples:
    | location |
    | cruises |

#  Scenario: Check that selecting a date in the departing date, the same date is automatically filled in for return date
#    Given I am on the "flights" page
#    When I select the current day in the "flightStartDate" datepicker
#    Then I check that the value of "flightStartDate" element matches that of "flightEndDate" element

  #careers scenario is not working correctly, tab issues
  @ignore
  Scenario: Submit a search form from careers page
    Given I am on the "careers" page
    When I click the "findCareersButton"
    #And I switch tabs
    And I wait for a period of time
    Then I should see "fctg.force.com/" in the url
    And I should see some "jobs"

  Scenario: Submit a search form from travel insurance page
    Given I am on the "travelInsurance" page
    When I fill in the "insuranceCountry" field with "Taiwan"
    And I select "taiwanAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "insuranceStartDate" datepicker
    Then I select a "datePickerEndDate" from the "insuranceEndDate" datepicker
    And I fill in the "insuranceAge" field with "25"
    And I click the "insuranceContinueButton"
    Then I should see "flightcentre.covermore.com.au" in the url

  Scenario: Submit a search form from stores page
    Given I am on the "stores" page
    Then I fill in the "storesLocation" field with "Brisbane"
    And I click the "searchStoreButton"
    Then I follow "Flight Centre Cba Flagship Brisbane"
    Then I should see text "Flight Centre Cba Flagship Brisbane : Your local Flight Centre Store" in the "title"
    And I should see a "storeMap" on the page

  Scenario: Submit a package search from the homepage
    Given I am on the "home" page
    And I click the "homeHotelsTab"
    Then I fill in the "homeHotelsDestination" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "homeHotelsStartDate" datepicker
    Then I select a "datePickerEndDate" from the "homeHotelsEndDate" datepicker
    And I click the "findHotelsButton"
    Then I should see "bookings.flightcentre.com.au/travel/" in the url

  Scenario: Submit a rail search from the homepage
    Given I am on the "home" page
    And I click the "homeRailTab"
    Then I fill in the "homeRailDestination" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I click the "searchRailButton"

  Scenario: Submit a tour search from the homepage
    Given I am on the "home" page
    And I click the "homeToursTab"
    Then I fill in the "homeToursDestination" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I click the "findToursButton"

  Scenario: Submit a cruise search from the homepage
    Given I am on the "home" page
    And I click the "homeCruisesTab"
    Then I select the "Europe" from the "homeCruisesDestination" selector
    Then I click the "findCruisesButton"
    And I should see some "cruiseProducts"

#  Scenario: Submit a car hire search from the homepage
#    Given I am on the "home" page
#    And I click the "homeCarHireTab"
#    Then I click the "domesticCarHireButton"
#    Then I should see "/car-hire" in the url

  Scenario Outline: Submit a global search
    Given I am on the "home" page
    When I search "flights" in the "gsaSearch" field
    Then I should see some "gsaSearchResults"
    Then I select the "<tab>"
    And I should see some "gsaSearchResults"
    And I clear the cache

  Examples:
    | tab |
    | gsaFlightsTab |
    | gsaHotelsTab |
    | gsaPackagesTab |
    | gsaToursTab |
    #| gsaCruisesTab |
    | gsaGuidesTab |

  Scenario Outline: Check validation on a search from the homepage
    Given I am on the "home" page
    And I clear the cache
    When I click the "findFlightsButton"
    Then I should see the message "This field is required" on the error "<error>"

  Examples:
    | error |
    | homeEndCityError |
    | homeStartDateError |
    | homeEndDateError |
