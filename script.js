var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var blogCard = [];
var place = /** @class */ (function () {
    function place(date, name, address, zip, city, teaser) {
        this.date = "";
        this.name = "";
        this.address = "";
        this.zip = "";
        this.city = "";
        this.teaser = "";
        this.date = date,
            this.name = name;
        this.address = address;
        this.zip = zip;
        this.city = city;
        this.teaser = teaser;
        blogCard.push(this);
    }
    place.prototype.display = function () {
        return "<div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card bg-light\">\n          <div class=\"box d-none d-md-block relative\">\n            <img class=\"card-img-top\" src=\"" + this.teaser + "\" alt=\"" + this.name + "\">\n             <div class=\"bottom-left em small\">" + this.date + "</div>\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.name + "</h5>\n            <p class=\"card-text small\"><b>" + this.address + ", " + this.zip + ", " + this.city + "</b></p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    return place;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(date, name, address, zip, city, teaser, tel, cuisine, web) {
        var _this = _super.call(this, date, name, address, zip, city, teaser) || this;
        _this.tel = "";
        _this.cuisine = "";
        _this.web = "";
        _this.tel = tel;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
    }
    restaurant.prototype.display = function () {
        return "<div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card bg-light\">\n          <div class=\"box d-none d-md-block relative\">\n            <img class=\"card-img-top\" src=\"" + this.teaser + "\" alt=\"" + this.name + "\">\n               <div class=\"bottom-left em small\">" + this.date + "</div>\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.name + "</h5>\n            <p> " + this.cuisine + " food</p>\n            <p class=\"card-text small\"><b>" + this.address + ", " + this.zip + ", " + this.city + "</b><br>" + this.tel + "<br><" + this.web + "</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    return restaurant;
}(place));
var fun = /** @class */ (function (_super) {
    __extends(fun, _super);
    function fun(date, name, address, zip, city, teaser, eventDate, eventTime, price) {
        var _this = _super.call(this, date, name, address, zip, city, teaser) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.price = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    fun.prototype.display = function () {
        return "<div class=\"col-lg-3 col-md-6 mb-4\">\n        <div class=\"card bg-light\">\n          <div class=\"box d-none d-md-block relative \">\n            <img class=\"card-img-top\" src=\"" + this.teaser + "\" alt=\"" + this.name + "\">\n            <div class=\"bottom-left em small\">" + this.date + "</div>\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.name + "</h5>\n            <p class=\"card-text small\"> date: " + this.eventDate + " <br> hour: " + this.eventTime + " <p>\n            <p class=\"card-text small\"><b>" + this.address + ", " + this.zip + ", " + this.city + "</b><br>" + this.price + " euro</p>\n          </div>\n        </div>\n      </div>\n    ";
    };
    return fun;
}(place));
var loc1 = new place("11/12/2019", "St.Charles Church", "Karlsplatz 1", 1010, "Wien", "img/loc1.jpg");
var loc2 = new place("12/08/2018", "Schönbrunn Park", "Maxingstraße 13b", 1130, "Wien", "img/loc2.jpg");
var rest1 = new restaurant("16/12/2019", "ON Restaurant", "Wehrgasse 8", 1050, "Wien", "img/loc3.jpg", "+43(1)5854900", "chinese", "http://www.restaurant-on.at/");
var rest2 = new restaurant("17/10/2018", "BioFrische", "Stutterheimstraße 6", 1150, "Wien", "img/loc4.jpg", "+43(1) 9529215", "indian", "biofrische.wien");
var eve1 = new fun("16/12/2020", "Cats the musical", "Ronacher-Seilerstätte 9", 1010, "Wien", "img/loc5.jpg", "Friday 15.12.2020", "20:00", 120);
var eve2 = new fun("10/06/2020", "Guns ‘n Roses", "Ernst-Happel Stadion, Meiereistraße 7", 1020, "Wien", "img/loc6.jpg", "Saturday 09.06.2020", "19:30", 95);
function generateBlogCard() {
    var blogText = "";
    for (var i = 0; i < blogCard.length; i++) {
        blogText += blogCard[i].display();
    }
    document.getElementById("gallery").innerHTML += blogText;
}
;
function asceOrd() {
    var blogsorted = blogCard.sort(function (a, b) { return b.date - a.date; }).display();
    document.getElementById("gallery").innerHTML += blogsorted;
}
;
//   var sortedBlogCard = 
//   for (let i = 0; i < blogCard.length; i++) {
//    sortedBlogCard += blogCard[i].display();
//    document.getElementById("gallery").innerHTML += sortedBlogCard;
// }
