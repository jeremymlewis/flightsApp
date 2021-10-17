document.getElementById("dateSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loaded").innerHTML = "<div id=\"loaded\"></div>";
    let placeArray = [
      "ATL","ANC","AUS","BWI","BOS","CLT","ORD","CLE","DFW","DEN"
      // ,"DTW","FLL","HNL","HOU","IND","MCI","LAS",
      // "LAX","MEM","MIA","MSP","BNA","MSY","JFK","OAK",
      // "MCO","PHL","PHX","PIT","PDX","RDU","SMF","SLC",
      // "SAT","SAN","SEA","STL","TPA","DCA","END"
    ]

    let placeMap = new Map();
    placeMap.set("ATL", "Atlanta, GA");
    placeMap.set("ANC", "Anchorage, AK");
    placeMap.set("AUS", "Austin, TX");
    placeMap.set("BWI", "Baltimore, MD");
    placeMap.set("BOS", "Boston, MA");
    placeMap.set("CLT", "Charlotte, NC");
    placeMap.set("ORD", "Chicago, IL");
    placeMap.set("CLE", "Cleveland, OH");
    placeMap.set("DFW", "Dallas, TX");
    placeMap.set("DEN", "Denver, CO");
    // placeMap.set("DTW", "Detroit, MI");
    // placeMap.set("FLL", "Fort Lauderdale, FL");
    // placeMap.set("HNL", "Honolulu, HI");
    // placeMap.set("HOU", "Houston, TX");
    // placeMap.set("IND", "Indianapolis, IN");
    // placeMap.set("MCI", "Kansas City, MO");
    // placeMap.set("LAS", "Las Vegas, NV");
    // placeMap.set("LAX", "Los Angeles, CA");
    // placeMap.set("MEM", "Memphis, TN");
    // placeMap.set("MIA", "Miami, FL");
    // placeMap.set("MSP", "St. Paul, MN");
    // placeMap.set("BNA", "Nashville, TN");
    // placeMap.set("MSY", "New Orleans, LA");
    // placeMap.set("JFK", "New York, NY");
    // placeMap.set("OAK", "Oakland, CA");
    // placeMap.set("MCO", "Orlando, FL");
    // placeMap.set("PHL", "Philadelphia, PA");
    // placeMap.set("PHX", "Phoenix, AZ");
    // placeMap.set("PIT", "Pittsburg, PA");
    // placeMap.set("PDX", "Portland, OR");
    // placeMap.set("RDU", "Raleigh, NC");
    // placeMap.set("SMF", "Sacramento, CA");
    // placeMap.set("SLC", "Salt Lake, UT");
    // placeMap.set("SAT", "San Antonio, TX");
    // placeMap.set("SAN", "San Diego, CA");
    // placeMap.set("SEA", "Seattle, WA");
    // placeMap.set("STL", "St. Louis, MO");
    // placeMap.set("TPA", "Tampa, FL");
    // placeMap.set("DCA", "Washington DC");

    let loaded = "";
    const startCity = document.getElementById("fromSelect").value;

    date = document.getElementById("dateInput").value

    let dateDisplay = "<h2>On " + date + ":"
    document.getElementById("loading").innerHTML = dateDisplay;

    document.getElementById("loaded").innerHTML = loaded;

  placeArray.forEach(element => {
    //temp ^^ that needs to be turned back on... but for now, use below
    //element = "JFK";

    let logo = "";


    console.log(element)
    //console.log(cityName)
    getUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + startCity + "-sky/" + element + "-sky/" + date
    console.log(getUrl)
    fetch(getUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "77a649e6b3msh22ccee48545a695p103cf7jsn7044e45eb9e2"
      }
    })
    .then(response => {
      return response.json();
    }).then(function(json2) {
      console.log(json2)
      if (json2.Quotes[0]) {
        if (json2.Carriers[0].CarrierId == 870) {
          logo = "<img class=\"icon\" src=\"images/jetblue.png\">"
        }
        if (json2.Carriers[0].CarrierId == 1065) {
          logo = "<img class=\"icon\" src=\"images/frontier.png\">"
        }
        if (json2.Carriers[0].CarrierId == 1467) {
          logo = "<img class=\"icon\" src=\"images/spirit.png\">"
        }
        if (json2.Carriers[0].CarrierId == 851) {
          logo = "<img class=\"icon\" src=\"images/alaska.png\">"
        }
        if (json2.Carriers[0].CarrierId == 1793) {
          logo = "<img class=\"icon\" src=\"images/united.png\">"
        }
      let cityName = placeMap.get(element)
      loaded += "<div class=\"placeBox\">" + logo + " You can fly to " + element + " airport in " + cityName + " for $" + json2.Quotes[0].MinPrice + "</div>"
      document.getElementById("loaded").innerHTML = loaded;
      }
    })
    .catch(err => {
      console.error(err);
    });
  });
});

    

