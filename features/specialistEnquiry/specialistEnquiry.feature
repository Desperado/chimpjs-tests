@watch
Feature: Specialist Enquiry Routing

  As a User
  I want my enquiries to go to the appropriate teams
  So I can have my enquiries responded to correctly

  Scenario Outline: Testing that business related pages have the correct enquiry routing via a hidden field value
    Given I am on the "<location>" page
    Then the "keyword" hidden field should contain the value "businessfirstclass"
    Then the Phone number in the header should be "1300038785"
    Then I should see the phone number "1300038785" in the "sidebar"
    Then the "instantCallBack" hidden field should contain the value "5HJjkZv"


  Examples:
    | location |
    | businessClass                        |
    | flightsLondonBusinessClass           |
    | flightsSydneyToLondonBusinessClass   |
    | flightsBrisbaneToSydneyBusinessClass |
    | flightsSydneyBusinessClass           |
    | firstClass                           |

  Scenario: Testing that mixed class flights have the correct enquiry routing via a hidden field value
    Given I am on the "mixedClassFlights" page
    Then the "keyword" hidden field should contain the value "businessfirstclass"
    Then the Phone number in the header should be "1300038785"
    Then I should see the phone number "1300038785" in the "mixedClassSidebar"
    Then the "instantCallBack" hidden field should contain the value "FeZd4z1"

  Scenario Outline: Testing that round the world related pages have the correct enquiry routing via a hidden field value
    Given I am on the "<location>" page
    Then the "keyword" hidden field should contain the value "fcl.rtw"
    Then the Phone number in the header should be "1300550416"
    Then I should see the phone number "1300550416" in the "mixedClassSidebar"
    Then the "instantCallBack" hidden field should contain the value "msvUeZ"

  Examples:
    | location         |
    | doubleDipFlights |
    | tripleDipFlights |

  Scenario Outline: Testing that honemyoon related pages have the correct enquiry routing via a hidden field value
    Given I am on the "<location>" page
    Then the "keyword" hidden field should contain the value "honeymoon"
    Then the Phone number in the header should be "1300405158"
    Then I should see the phone number "1300405158" in the "sidebar"

  Examples:
    | location          |
    | weddingHoneymoons |

  Scenario Outline: Testing that cruise related pages have the correct enquiry routing via a hidden field value
    Given I am on the "<location>" page
    Then the "keyword" hidden field should contain the value "fc.cruiseexperts"
    Then the Phone number in the header should be "1300726597"
    Then I should see the phone number "1300726597" in the "sidebar"
    Then the "instantCallBack" hidden field should contain the value "mhvNAgP"

  Examples:
    | location                |
    | cruisesTypes            |
    | beInspired              |
    | worldCruises            |
    | oceanCruises            |
    | corporateCruises        |
    | cruiseTours             |
    | cruiseWeddingHoneymoons |
    | singleCruises           |
    | gayLesbianCruises       |
    | seniorCruises           |
    | christmasMarketsCruises |
