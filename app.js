const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
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

app.get("/", (req, res) => {
    res.send("Hello I am Root Path");
});

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
////////////////    INDEX ROUTE     //////////////////////
app.get("/listings", async (req, res) => {
    let allListing = await Listing.find({})
    res.render("./listings/index.ejs", { allListing });

});

///////////////////////       NEW ROUTE   //////////////////////
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

////////////////// SHOW ROUTE ////////////////////////
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs", { listing });
}));



app.post("/listings", async (req, res) => {

    let result = listingSchema.validate(req.body);
    console.log(result);
    console.log(req.body.listing);
    if (result.error) {
        throw new ExpressError(400, result.error);
    }

    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");

});

/////////////////////   EDIT ROUTE      /////////////////
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

//////////////   UPDATE ROUTE         ////////////////////
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    //console.log(...req.body.listing);
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});

/////////////////////         DELETE ROUTE    ////////////////////
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

///////////////   Reviews Route    ///////////////
app.post("/listings/:id/review", validateReview, wrapAsync(async (req, res) => {
    let listings = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listings.reviews.push(newReview);
    await newReview.save();
    await listings.save();
    console.log("New Review Saved");
    res.redirect(`/listings/${listings._id}`);
}));
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