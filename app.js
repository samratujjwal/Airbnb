const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().then((res) => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "./public")));
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.get("/", (req, res) => {
    res.send("Hello I am Root Path");
});

// app.get("/testlisting", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My home",
//         description: "By the village near gonda",
//         price: 12000,
//         location: "Gonda , Uttar Pradesh",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("Sample Saved");
//     res.send("Successfulll")
// });

// app.use((err, req, res, next) => {
//     res.send("Something Went Wrong!");
// });



// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found"));
// });
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong" } = err;
    res.render("error.ejs", { err });
    //res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("App listening on port 8080:");
});

////////////////  METHOD 1  /////////////////////////
// let { title, description, url, price, location, country } = req.body;
// let newlisting = {
//     title: title,
//     description: description,
//     image: {
//         filename: "listingimage",
//         url: url
//     },
//     price: price,
//     location: location,
//     country: country,
// }
// await Listing.insertOne(newlisting);
/////////////////////  METHOD 2  ///////////////////
// ham new.ejs me name ko hi java object bana denge aur saare name aur value usi me store