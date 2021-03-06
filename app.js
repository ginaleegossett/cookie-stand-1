//function calls are at bottom of file
//The CookieStand constructor.
//Takes values for the name of the location, minimum customers, max customers,
//cookies per customer, and the tag in the index file we are printing to.

var CookieStand = function (pName, pMin, pMax, pPerCust) {

  this.placeName = pName;
  this.minCust = pMin;
  this.maxCust = pMax;
  this.averagePerCust = pPerCust;
  this.hoursOpen = 8;
  this.totalDayCookies = 0;
  this.cookiesByHour = [null];
  this.elTag = document.getElementById('salesTable');
  //function to total up cookies
  this.randCookieDay = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random()
        * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  }

  this.randCookieDay(); //call the cookie func
}

var NumberOfCookiesTable = function (pCookieStand) {
  this.pCSarray = pCookieStand;
  //get element tag from doc for the table
  this.tableVarTag = document.getElementById('salesTable');
  //get the table header setup
  this.hoursOpen = 8;
  this.hoursText = ['10am ', '11am ', '12pm ', '1pm ', '2pm ',
  '3pm ', '4pm ', '5pm '];
  //make the table head
  this.tableVarTag.appendChild(document.createElement('thead'));
  //I need to get the 'hours of op' text centered before it makes sense, section on hold
  // this.tableVarTag.lastChild.appendChild(document.createElement('tr'));
  // this.tableVarTag.lastChild.lastChild.appendChild(document.createElement('th'));
  // this.tableVarTag.lastChild.lastChild.lastChild.textContent = 'Hours of Operation';
  this.tBPointer = this.tableVarTag.lastChild;
  this.rowPointer = this.tBPointer.appendChild(document.createElement('tr'));
  //make the hours headers
  this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
    this.headerPointer.textContent = ''; //spacer place in table
  for (var i = 0; i < this.hoursText.length; i++) {
    this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
    this.headerPointer.textContent = this.hoursText[i];
  }
  //Add the total count to the header section
  this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
  this.headerPointer.textContent = 'Total Cookies';

  //make the table body
  this.tBPointer = this.tableVarTag.appendChild(document.createElement('tbody'));
  //make the data rows
  for (var j = 0; j < this.pCSarray.length; j++) {
    //start with the name of the location
    this.rowPointer = this.tBPointer.appendChild(document.createElement('tr'));
    this.rowPointer.appendChild(document.createElement('th'));
    this.rowPointer.lastChild.textContent = this.pCSarray[j].placeName;
    //print cookies by hour
    for (var k = 0; k < this.pCSarray[j].cookiesByHour.length; k++) {
      this.rowPointer.appendChild(document.createElement('td'));
      this.rowPointer.lastChild.textContent = this.pCSarray[j].cookiesByHour[k];
    }
    //print total cookies
    this.rowPointer.appendChild(document.createElement('td'));
    this.rowPointer.lastChild.textContent = this.pCSarray[j].totalDayCookies;
  }
}
// make the cookie stands
var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

//print the table to the page
var pageOneTable = new NumberOfCookiesTable([pikePlace, seaTac, southCenter, bellevueSq, alki]);


