exports.pageObjects = {
    // email: '#edit-contacttype-email',
    outBoundFlightsHeader: '#outboundFlights h2',
    emailCheckbox: '#edit-contacttype-email',
    phoneCheckbox: '#edit-contacttype-phone',
    emailRequired: '#edit-contact > div > div.form-item.form-type-textfield.form-item-email > label > span',
    phoneRequired: '#edit-contact > div > div.form-item.form-type-textfield.form-item-phone > label > span',
    adults: '#edit-numadults',
    children: '#edit-numchildren',
    keyword: '.fc-sf-enquiry-form [name=keyword]',
    firstName: '#edit-firstname--2',
    lastName: '#edit-lastname--2',
    postcode: '#edit-postcode--2',
    phone: '#edit-phone--2',
    email: '#edit-email--2',
    firstNameError: '.edit-firstname--2-error',
    lastNameError: '.edit-lastname--2-error',
    phoneError: '.edit-phone--2-error',
    postcodeError: '.edit-postcode--2-error',
    budget: '.feature-button-budget',
    budgetField: '#edit-budget',
    enquirySubmitButton: '//*[@value= "GET YOUR QUOTE"]',
    newSouthWalesAutocomplete: '//*[contains(text(), "Sydney Airport")]',
    brisbaneAutocomplete: '//*[contains(text(), "Brisbane Airport")]',
    queenslandAutocomplete: '//*[contains(text(), "Queensland, Australia")]',
    tamworthAutocomplete: '//*[contains(text(), "Tamworth")]',
    rockhamptonAutocomplete: '//*[contains(text(), "Rockhampton")]',
    taiwanAutocomplete: '//*[contains(text(), "Taiwan")]',
    newsletterCheckbox: '#edit-newsletter',
    comments: '#edit-freetext--2',
    groups: '//*[@name="keyword" and @value="groups"]',
    passengers: '#edit-passengers',
    enquiryDeparting: '#edit-departing',
    enquiryDestination: '#edit-destination',
    twoHundredFiftyCharacters: '//*[@name="keyword" and @value="250characters"]',
    holidayPrice: '[1001 TO 3000]',
    holidayPriceField: '#edit-submitted-fprice',
    holidayStartCity: '#edit-submitted-fdeparture',
    holidayDestination: '#ajax-dest-str-string-destination_in',
    franceAutocomplete: '//*[contains(text(), ", France")]',
    searchHolidaysButton: '//*[@value= "Search Holidays »"]',
    flightsDomesticProducts: '.availability-results',
    flightsDomesticOutboundProducts: '#outboundFlights > div.flights-wrapper > div > div',
    flightsDomesticInboundProducts: '#inboundFlights > div.flights-wrapper > div > div',
    flightsInternationalOutBoundProducts: '.outbound-flight-details',
    flightsInternationalInBoundProducts: '.inbound-flight-details',
    christmasPromotionProducts: '.product-image--airline',
    findThisFlightButton: '//a[contains(text(), "Find this flight")]',
    railDestination: '#edit-submitted-destination',
    railPrice: '[1501 TO 2000]',
    railPriceField: '#edit-submitted-price',
    railDuration: '[11 TO 14]',
    railDurationField: '#edit-submitted-fduration',
    railSearchButton: '//*[@value= "Search Rail »"]',
    asia: 'Asia',
    products: '.fcl-procat-product-full',
    procatProducts: '.fcl-procat-product',
    procatProductView: '.fcl-procat-product .btn.product-button',
    tourDestination: '#edit-destination-str',
    tourPrice: '[1501 TO 2000]',
    tourPriceField: '#edit-submitted-half-2-price',
    tourDuration: '[8 TO 14]',
    tourDurationField: '#edit-submitted-duration',
    tourCompany: 'EXODUS%20%28Adventure%20World%29',
    tourCompanyField: '#edit-submitted-half-2-fsupplier',
    findToursButton: '//*[@value= "FIND TOURS »"]',
    findDealsButton: '//*[@value= "Find deals »"]',
    startCityError: '#startCity-string-error',
    endCityError: '#endCity-string-error',
    startDateError: '#startDate-error',
    endDateError: '#endDate-error',
    flightStartDate: '//*[@name="startDate"]',
    startDate: '//*[@name="startDate"]',
    flightEndDate: '//*[@name="endDate"]',
    careersKeyword: '#edit-submitted-description',
    careersCategory: '#edit-submitted-sector-name',
    careersLocation: '#edit-submitted-location-state',
    findCareersButton: '.btn-green',
    jobs: '.fcl-job-search',
    insuranceCountry: '#edit-country',
    insuranceStartDate: '//*[@name = "departureDate"]',
    insuranceEndDate: '//*[@name = "returnDate"]',
    insuranceAge: '#edit-travelerage-1',
    insuranceContinueButton: '//*[@value= "CONTINUE"]',
    storesLocation: '#fcl-stores-google-places-box',
    searchStoreButton: '#fcl-stores-google-places-submit',
    title: 'h1',
    storeMap: '#fcl-stores-locator-map',
    homeStartCity: '#edit-startcitystr',
    homeEndCity: '#edit-endcitystr',
    homeStartDate: '//*[@name= "startDate"]',
    homeEndDate: '//*[@name= "endDate"]',
    findFlightsButton: '//*[@value= "FIND FLIGHTS"]',
    datepickerNextMonth: '.ui-icon-circle-triangle-e',
    datePickerStartDate: '//a[contains(text(), "28") and contains(@class, "ui-state-default")]',
    datePickerEndDate:'//a[contains(text(), "10") and contains(@class, "ui-state-default")]',
    homeHotelsTab: 'a[href="#hotels"]',
    homeHotelsDestination: '#edit-area2',
    homeHotelsStartDate: '//*[@name= "date1"]',
    homeHotelsEndDate: '//*[@name= "date2"]',
    homeRailTab: 'a[href="#rail"]',
    homeRailDestination: '#edit-destination-str--2',
    searchRailButton: '//*[@value= "SEARCH RAIL JOURNEYS"]',
    homeToursTab: 'a[href="#tours"]',
    homeToursDestination: '#edit-destination-str--3',
    findToursButton: '//*[@value= "FIND TOURS"]',
    homeCruisesTab: 'a[href="#cruises"]',
    homeCruisesDestination: '#edit-destination-in',
    findCruisesButton: '//*[@value= "FIND CRUISES"]',
    findHotelsButton: '//*[@value= "FIND HOTELS"]',
    cruiseProducts: '.fcl-procat-product-full',
    homeCarHireTab: 'a[href="#car-hire"]',
    domesticCarHireButton: 'a[href="/car-hire"]',
    gsaSearch: '#edit-search-keys',
    gsaSearchResults: '.google-appliance-result',
    gsaFlightsTab: 'a[href*="/search-flights/"]',
    gsaHotelsTab: 'a[href*="/search-hotels/"]',
    gsaPackagesTab: 'a[href*="/search-packages/"]',
    gsaToursTab: 'a[href*="/search-tours/"]',
    gsaCruisesTab: 'a[href*="/search-cruises/"]',
    gsaGuidesTab: 'a[href*="/search-guides/"]',
    homeOneWayCheckbox: '#edit-flighttypeoption',
    flightsOneWayCheckbox: '#edit-flighttypeoption',
    flightsStartDate: '//*[@name= "startDate"]',
    flightsEndDate: '//*[@name= "endDate"]',
    cruiseDestination: '#edit-submitted-destination',
    cruiseSearchButton: '//*[@value="Search Cruises »"]',
    keyword: '//*[@name="keyword"]',
    instantCallBack: '//*[@name="plid"]',
    sidebar: '#click-to-call-sidebar > ul > li.contact-phone',
    mixedClassSidebar: '#click-to-call-sidebar',
    homeInternationalFlightsExpoint: '//div[@id="international-flights"]//select[starts-with(@id, "fcl-edit-air_ex_points_list")]',
    flightsAustraliaExpoint: '//div[@id="australia"]//select[starts-with(@id, "fcl-edit-air_ex_points_list")]',
    flightsInternationalPopularExpoint: '//div[@id="popular"]//select[starts-with(@id, "fcl-edit-air_ex_points_list")]',
    flightsLondonExpoint: '//div[@id="recommended-flights"]//select[starts-with(@id, "fcl-edit-air_ex_points_list")]',
    flightsStartCity: '#edit-startcitystr',
    flightsEndCity: '#edit-endcitystr',
    holidaysAirExpoint: '//*[@name="air_ex_points_list"]',
    homeEndCityError: '#edit-location label.error',
    homeStartDateError: 'div.form-item-startDate label.error',
    homeEndDateError: 'div.form-item-endDate label.error',
    loginButton: '#edit-github-login',
    firstBookable: 'div.fcl-procat-product.is-bookable',
    domesticFlightsTab: 'a[href*="#domestic-flights"]',
    findAndBookOnline: '//*[@value= "Find & Book Online"]',
    sydneyToGoldCoastAirfare: '//*[contains(text(), "Sydney to Gold Coast Airfare")]',
    oneWayProduct: '//*[contains(text(), "One way from")]',
    modalStartDate: '.form__start-date',
    modalEndDate: '.form__end-date',
    modalFlightType: '#edit_flighttype_chosen > a > span',
    wishListCounter: '.shortlist-header.btn-flat.primary .shortlist-counter',
    title: 'h1',
    secondHeader: 'h2',
    dialogueBox: '#cboxClose',
    wishlistAddButton: '.shortlist-product-add-btn',
    removeFromWishlist: '.shortlist-product-add-btn.mini.shortlisted',
    productsDisplay: '#edit-items-per-page',
    pagesDropdown: '//*[@name="page"]',
    autocomplete: '.ui-autocomplete',
    travellers: '#edit-passengers > div',

};

var baseUrl = 'http://www.flightcentre.com.au';

exports.siteSettings = {

    home: baseUrl + '/',
    login: baseUrl + '/user',
    flights: baseUrl + '/flights',
    contactus: baseUrl + '/contact-us',
    flights: baseUrl + '/flights',
    flightsInternational: baseUrl + '/flights/international-flights',
    holidays: baseUrl + '/holidays',
    rail: baseUrl + '/rail',
    tours: baseUrl + '/tours',
    cruises: baseUrl + '/cruises',
    careers: baseUrl + '/careers',
    travelInsurance: baseUrl + '/travel-extras/insurance',
    stores: baseUrl + '/stores',
    businessClass: baseUrl + '/flights/class-of-travel/business-class#fndtn-business-class-fares',
    flightsLondon: baseUrl + '/flights/london',
    flightsLondonBusinessClass: baseUrl + '/flights/london/business',
    flightsSydneyToLondonBusinessClass: baseUrl + '/flights/london/sydney/business',
    flightsBrisbaneToSydneyBusinessClass: baseUrl + '/flights/sydney/brisbane/business',
    flightsSydneyBusinessClass: baseUrl + '/flights/sydney/business',
    flightsAuckland: baseUrl + '/flights/auckland',
    flightsSydneyToAuckland: baseUrl + '/flights/auckland/sydney',
    holidaysAuckland: baseUrl + '/holidays/auckland',
    holidayPackageLondon: baseUrl + '/holidays/london/3947503',
    firstClass: baseUrl + '/flights/class-of-travel/first-class',
    mixedClassFlights: baseUrl + '/promotions/mixed-class-flights',
    doubleDipFlights: baseUrl + '/promotions/double-dip-flights',
    tripleDipFlights: baseUrl + '/promotions/triple-dip-flights',
    weddingHoneymoons: baseUrl + '/holidays/wedding-honeymoon',
    cruisesTypes: baseUrl + '/cruises/types-of-cruises',
    beInspired: baseUrl + '/cruises/be-inspired',
    worldCruises: baseUrl + '/cruises/world-cruises',
    oceanCruises: baseUrl + '/cruises/ocean',
    corporateCruises: baseUrl + '/cruises/corporate-cruises',
    cruiseTours: baseUrl + '/cruises/tours',
    cruiseWeddingHoneymoons: baseUrl + '/cruises/wedding-honeymoon',
    cruisePackageAlaska: baseUrl + '/cruises/alaska/3340768',
    singleCruises: baseUrl + '/cruises/singles',
    gayLesbianCruises: baseUrl + '/cruises/gay-lesbian',
    seniorCruises: baseUrl + '/cruises/seniors',
    christmasMarketsCruises: baseUrl + '/cruises/be-inspired/christmas-markets',
    baliFlightsGeneralSearch: baseUrl + '/travel/flights/general-search/bali',
    holidaysBali: baseUrl + '/holidays/bali',
    tourPackageLasAngeles: baseUrl + 'tours/los-angeles/3463101',
    worldOnSale: baseUrl + '/promotions/world-on-sale',
    holidaysSearch: baseUrl + '/holidays/search',
    railSearch: baseUrl + '/rail/search',
    toursSearch: baseUrl + '/tours/search',
    careersSearch: baseUrl + '/careers/search',
    cruisesSearch: baseUrl + '/cruises/search',
    wishlist: baseUrl + '/wishlist',
    enquiryConfirmation: baseUrl + '/contact-us/enquiry-confirmation',

};

  // outBoundFlightsHeader = '#outboundFlights h2';
  // emailCheckbox = '#edit-contacttype-email';
  // phoneCheckbox= '#edit-contacttype-phone';
