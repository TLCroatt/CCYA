const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/ccya"
);


const teamSeed = [
    {
        division: "Girls Traveling Softball",
        name: "CCYA Girls 10U",
        schedule: [{
            date: "12/10/2020",
            game: "Cherry Creek",
            location: "Commerce City",
        }, {

            date: "12/15/2020",
            game: "Colorado Springs",
            location: "Commerce City",
        }, {

            date: "12/28/2020",
            game: "Boulder",
            location: "Boulder",
        }],
        roster: [{
            name: "Arianna Duffy",
            dob: "01/05/2010",
            address: "42 Wallaby Way Denver",
            phone: "555-555-5555",
        }, {

            name: "Bridget Conroy",
            dob: "06/05/2010",
            address: "123 Acorn Avenue Denver",
            phone: "557-575-5555",
        }, {
            name: "Lauren Williams",
            dob: "03/06/2010",
            address: "187 Winter Way Denver",
            phone: "555-545-5455",
        }, {

            name: "Summer Johnson",
            dob: "04/01/2010",
            address: "333 Mountain Dr Denver",
            phone: "555-155-5155",
        }, {

            name: "Ayesha Dillon",
            dob: "01/010/2010",
            address: "88 Eighty rd Denver",
            phone: "555-535-5555",
        }, {

            name: "Alexis Rose",
            dob: "08/05/2010",
            address: "122 Christmas Tree Way Denver",
            phone: "555-335-5555",
        }],

    },
    {
        division: "Girls Traveling Softball",
        name: "CCYA Girls 12U",
        schedule: [{
            date: "12/13/2020",
            game: "Lakewood",
            location: "Commerce City",
        }, {

            date: "12/16/2020",
            game: "Denver Metro",
            location: "Coors Field",
        }, {

            date: "12/15/2020",
            game: "Colorado Springs",
            location: "Commerce City",
        }],
        roster: [{
            name: "Lashawna Toll",
            dob: "07/23/2008",
            address: "331 Bright dr Denver",
            phone: "556-156-0316",
        }, {

            name: "Missy Elliot",
            dob: "07/04/2008",
            address: "112 Holly st Denver",
            phone: "556-156-3016",
        }, {

            name: "Billie Eilish",
            dob: "02/24/2008",
            address: "881 Frontal st Denver",
            phone: "556-000-0026",
        }, {

            name: "Taylor Swift",
            dob: "04/19/2008",
            address: "7761 Dinner Dr Denver",
            phone: "556-156-0916",
        }, {

            name: "Cardi B",
            dob: "07/07/2008",
            address: "7734 Lemony Pl Denver",
            phone: "556-156-1316",
        }, {

            name: "Meg Myers",
            dob: "05/23/2008",
            address: "8173 Toothy st Denver",
            phone: "556-156-0046",
        }]
    },
    {
        division: "Girls Traveling Softball",
        name: "CCYA Girls 14U",
        schedule: [{
            date: "12/12/2020",
            game: "Colorado Springs",
            location: "Commerce City",
        }, {

            date: "12/18/2020",
            game: "Boulder",
            location: "Boulder",
        }, {

            date: "12/29/2020",
            game: "Lakewood",
            location: "Commerce City",
        }],
        roster: [{
            name: "Jordan Haslan",
            dob: "04/08/2006",
            address: "4274 Lowlands Ln Denver",
            phone: "556-526-5556",
        }, {

            name: "Jordi Preece",
            dob: "02/08/2006",
            address: "1880 Billings Dr Denver",
            phone: "556-516-5556",
        }, {

            name: "Jordi Preece",
            dob: "09/19/2006",
            address: "188 Edge Dr Denver",
            phone: "556-596-5556",
        }, {

            name: "Ashley Born",
            dob: "06/08/2006",
            address: "474 Water Pl Denver",
            phone: "556-550-5556",
        }, {

            name: "Jassey Hilot",
            dob: "02/06/2006",
            address: "4274 Street st Denver",
            phone: "556-056-5556",
        }]
    },
    {
        division: "Girls Traveling Softball",
        name: "CCYA Girls 8U",
        schedule: [{
            date: "12/17/2020",
            game: "Lakewood",
            location: "Lakewood",
        }, {

            date: "12/21/2020",
            game: "Colorado Springs",
            location: "Commerce City",
        }, {

            date: "12/29/2020",
            game: "Boulder",
            location: "Commerce City",
        }],
        roster: [{
            name: "Lacey Hitts",
            dob: "09/22/2012",
            address: "44 Simon st Denver",
            phone: "556-156-5556",
        }, {

            name: "Ariel Listers",
            dob: "05/16/2012",
            address: "274 Privet Dr Denver",
            phone: "556-056-5556",
        }, {

            name: "Lisa Johnson",
            dob: "07/26/2012",
            address: "111 Wally st Denver",
            phone: "556-056-2256",
        }, {

            name: "Jenny Betts",
            dob: "08/18/2012",
            address: "112 Slytherin st Denver",
            phone: "556-056-3336",
        }, {

            name: "Lyndsay Ghost",
            dob: "07/23/2012",
            address: "998 Grim st Denver",
            phone: "556-056-0016",
        }]
    },
];

 db.Team.insertMany(teamSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });