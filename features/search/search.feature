#@ignore
#@watch
Feature: Search the Web

  As a User
  I want to be able to search for flights
  So I can see some products

  Scenario Outline: Search for domestic flights
    Given I am on the "<location>" page
    Then I fill in the search departure field with "brisbane"
    Then I select "queenslandAutocomplete" from the autocomplete box
    And I fill in the search destination field "sydney"
    Then I select "newSouthWalesAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "flightsStartDate" datepicker
    Then I select a "datePickerEndDate" from the "flightsEndDate" datepicker
    Then I click the "findFlightsButton"
    Then I should be on the "outBoundFlightsHeader" page
    And I should see some "flightsDomesticProducts"

  Examples:
    | location |
    | flights |

  Scenario Outline: Search for one way domestic flights
    Given I am on the "<location>" page
    And I click the "flightsOneWayCheckbox"
    Then I fill in the search departure field with "brisbane"
    Then I select "queenslandAutocomplete" from the autocomplete box
    And I fill in the search destination field "sydney"
    Then I select "newSouthWalesAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "flightsStartDate" datepicker
    Then I click the "findFlightsButton"
    Then I should be on the "outBoundFlightsHeader" page
    And I should see some "flightsDomesticProducts"

  Examples:
    | location |
      | flights |


  Scenario Outline: Submit a search form from holidays search page
    Given I am on the "<location>" page
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

  #@ignore
  Scenario Outline: Submit a search form the tours search page
    Given I am on the "<location>" page
    When I fill in the "tourDestination" field with "France"
    Then I select "franceAutocomplete" from the autocomplete box
    And I select the "[1501 TO 2000]" from the "tourPriceField" selector
    And I select the "[8 TO 14]" from the "tourDurationField" selector
    And I select the "EXODUS%20%28Adventure%20World%29" from the "tourCompanyField" selector
    Then I click the "searchTourButton"
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

#  @watch
#  Scenario: Validate text when not entering text into search fields on the homepage
#    Given I am on the "home" page
#    And I click the "findDealsButton"
#    Then I should see "This field is required." on "endCityError"
#    Then I should see "THIS FIELD IS REQUIRED." on "startDateError"
#    Then I should see "THIS FIELD IS REQUIRED." on "endDateError"

#  Scenario Outline: Validate text when not entering text into search fields on the flights page
#    Given I am on the "<location>" page
#    And I click the "findFlightsButton"
    #Then I should see "THIS FIELD IS REQUIRED." on "startCityError"
#    Then I should see "THIS FIELD IS REQUIRED." on "endCityError"
#    Then I should see "THIS FIELD IS REQUIRED." on "startDateError"
#    Then I should see "THIS FIELD IS REQUIRED." on "endDateError"

#  Examples:
#    | location |
#    | flights |

#  Scenario: Check that selecting a date in the departing date, the same date is automatically filled in for return date
#    Given I am on the "flights" page
#    When I select the current day in the "flightStartDate" datepicker
#    Then I check that the value of "flightStartDate" element matches that of "flightEndDate" element

#  Scenario: Validate the unaccompanied minors link on the international flights search form
#    Given I am on the "flightsInternational" page
#    When I follow "under 15 years old travelling alone »"
#    Then I should see "/unaccompanied-minors" in the url

  Scenario: Submit a search form from careers page
    Given I am on the "careers" page
    Then I fill in the "careersKeyword" field with "Sales"
    And I select the "Sales/Travel Consultants" from the "careersCategory" selector
    And I select the "Queensland" from the "careersLocation" selector
    When I click the "findCareersButton"
    Then I should see "/careers/search" in the url
    And I should see some "jobs"

    #date not currently working
  Scenario: Submit a search form from travel insurance page
    Given I am on the "travelInsurance" page
    Then I select the "Worldwide (inc. Americas and Africa)" from the "insuranceRegion" selector
    And I select the "Japan" from the "insuranceCountry" selector
    Then I fill in the "insuranceStartDate" field with "20/12/2016"
    And I fill in the "insuranceEndDate" field with "31/12/2016"
    And I fill in the "insuranceAge" field with "25"
    And I click the "insuranceSearchbutton"
    Then I should see "/flight-centre" in the url
    #Then I should see text matching "Please select a plan and excess level"

  Scenario: Submit a search form from stores page
    Given I am on the "stores" page
    Then I fill in the "storesLocation" field with "Queen Street, Brisbane QLD, Australia"
    And I click the "searchStoreButton"
    Then I follow "Flight Centre Cba Flagship Brisbane"
    Then I should see text "Flight Centre Cba Flagship Brisbane : Your local Flight Centre Store" in the "title"
    And I should see a "storeMap" on the page

  Scenario: Submit a flight search from the homepage
    Given I am on the "home" page
    Then I fill in the "homeStartCity" field with "Sydney"
    Then I select "newSouthWalesAutocomplete" from the autocomplete box
    Then I fill in the "homeEndCity" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "homeStartDate" datepicker
    Then I select a "datePickerEndDate" from the "homeEndDate" datepicker
    And I click the "findFlightsButton"
    Then I should see "/results" in the url
    And I should see some "flightsInternationalOutBoundProducts"
    And I should see some "flightsInternationalInBoundProducts"

  Scenario: Submit a one-way flight search from the homepage
    Given I am on the "home" page
    And I click the "homeOneWayCheckbox"
    Then I fill in the "homeStartCity" field with "Sydney"
    Then I select "newSouthWalesAutocomplete" from the autocomplete box
    Then I fill in the "homeEndCity" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "homeStartDate" datepicker
    And I click the "findFlightsButton"
    Then I should see "/results" in the url
    And I should see some "flightsInternationalOutBoundProducts"

  Scenario: Submit a package search from the homepage
    Given I am on the "home" page
    And I click the "homeHotelsTab"
    Then I fill in the "homeHotelsDestination" field with "Paris"
    Then I select "franceAutocomplete" from the autocomplete box
    Then I select a "datePickerStartDate" from the "homeHotelsStartDate" datepicker
    Then I select a "datePickerEndDate" from the "homeHotelsEndDate" datepicker

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
    And I click the "homeCruiseTab"
    Then I select the "Europe" from the "homeCruiseDestination" selector
    Then I click the "findCruisesButton"
    And I should see some "cruiseProducts"

  Scenario: Submit a car hire search from the homepage
    Given I am on the "home" page
    And I click the "homeCarHireTab"
    Then I click the "domesticCarHireButton"
    Then I should see "/car-hire" in the url

  Scenario Outline: Submit a global search
    Given I am on the "home" page
    When I search "flights" in the "gsaSearch" field
    Then I should see some "gsaSearchResults"
    Then I select the "<tab>"
    And I should see some "gsaSearchResults"

  Examples:
    | tab |
    | gsaFlightsTab |
    | gsaHotelsTab |
    | gsaPackagesTab |
    | gsaToursTab |
    | gsaCruisesTab |
    | gsaGuidesTab |

  Scenario Outline: Check validation on a search from the homepage
    Given I am on the "home" page
    When I click the "findFlightsButton"
    Then I should see the message "This field is required" on the error "<error>"

  Examples:
    | error |
    | homeEndCityError |
    | homeStartDateError |
    | homeEndDateError |
