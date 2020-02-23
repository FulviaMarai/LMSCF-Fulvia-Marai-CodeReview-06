let blogCard = [];

class place {
   created = ""; 
   name = ""; 
   address = "";  
   zip = "";  
   city = "";  
   teaser = "";
   

constructor(created, name, address, zip, city, teaser) { 
       this.created = created,
       this.name = name; 
       this.address = address;
       this.zip = zip;
       this.city = city;
       this.teaser = teaser;
       blogCard.push(this);
   }

display() { 
       return `<div class="col-lg-3 col-md-6 mb-4">
        <div class="card bg-light">
          <div class="box d-none d-md-block relative">
            <img class="card-img-top" src="${this.teaser}" alt="${this.name}">
             <div class="bottom-left em small">${this.created}</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text small"><b>${this.address}, ${this.zip}, ${this.city}</b></p>
          </div>
        </div>
      </div>
    `;}
}


class restaurant  extends place {
  tel = "";
  cuisine = "";
  web = "";


 constructor(created, name, address, zip, city, teaser, tel, cuisine, web) {
    super(created, name, address, zip, city, teaser,);
    this.tel = tel;
    this.cuisine = cuisine;
    this.web = web;
  }

   display() { 
        return `<div class="col-lg-3 col-md-6 mb-4">
        <div class="card bg-light">
          <div class="box d-none d-md-block relative">
            <img class="card-img-top" src="${this.teaser}" alt="${this.name}">
               <div class="bottom-left em small">${this.created}</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p> ${this.cuisine} food</p>
            <p class="card-text small"><b>${this.address}, ${this.zip}, ${this.city}</b><br>${this.tel}<br><${this.web}</p>
          </div>
        </div>
      </div>
    `;}
   }


class fun extends place {
  eventDate = "";
  eventTime = "";
  price = "";


 constructor(created, name, address, zip, city, teaser, eventDate, eventTime, price) {
    super(created, name, address, zip, city, teaser,);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;

  }

  display() { 
        return `<div class="col-lg-3 col-md-6 mb-4">
        <div class="card bg-light">
          <div class="box d-none d-md-block relative ">
            <img class="card-img-top" src="${this.teaser}" alt="${this.name}">
            <div class="bottom-left em small">${this.created}</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text small"> date: ${this.eventDate} <br> hour: ${this.eventTime} <p>
            <p class="card-text small"><b>${this.address}, ${this.zip}, ${this.city}</b><br>${this.price} euro</p>
          </div>
        </div>
      </div>
    `;}
  }

let loc1 = new place ("2020-02-20","St.Charles Church","Karlsplatz 1", 1010,"Wien","img/loc1.jpg");
let loc2 = new place ("2019-03-22","Schönbrunn Park","Maxingstraße 13b", 1130,"Wien","img/loc2.jpg");
let rest1 = new restaurant ("2020-04-21","ON Restaurant","Wehrgasse 8", 1050,"Wien","img/loc3.jpg","+43(1)5854900","chinese","http://www.restaurant-on.at/");
let rest2 = new restaurant ("2017-05-20","BioFrische","Stutterheimstraße 6", 1150,"Wien","img/loc4.jpg","+43(1) 9529215","indian","www.biofrische.wien");
let eve1 = new fun ("2020-12-16","Cats the musical","Ronacher-Seilerstätte 9", 1010, "Wien","img/loc5.jpg","Friday 15.12.2020","20:00",120);
let eve2 = new fun ("2020-06-10","Guns ‘n Roses","Ernst-Happel Stadion, Meiereistraße 7", 1020,"Wien","img/loc6.jpg","Saturday 09.06.2020","19:30",95); 
let loc3 = new place ("2017-08-17","Schloss Belvedere","Prinz Eugen-Straße 27", 1030,"Wien","img/loc7.jpg");
let rest3 = new restaurant ("2020-02-23","Max & Benito","Mariahilfer Str. 4", 1020,"Wien","img/loc8.jpg","0660/372 22 18","californian burrito","www.http://maxbenito.at//");





function generateBlogCard() {

var blogText = "";

for (let i = 0; i < blogCard.length; i++) {
   blogText += blogCard[i].display();
}
 
document.getElementById("gallery").innerHTML += blogText;

};



function generateDesBlogCard() {

blogCard.sort((a, b) => (a.created < b.created) ? 1 : -1);

var blogText = "";

for (let i = 0; i < blogCard.length; i++) {
   blogText += blogCard[i].display();
}
 
document.getElementById("gallery").innerHTML += blogText;

};


function generateAscBlogCard() {

blogCard.sort((a, b) => (a.created > b.created) ? 1 : -1);

var blogText = "";

for (let i = 0; i < blogCard.length; i++) {
   blogText += blogCard[i].display();
}
 
document.getElementById("gallery").innerHTML += blogText;

};

