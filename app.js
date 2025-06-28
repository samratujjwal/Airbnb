const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
//Router
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

main().then((res) => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
app.get("/", (req, res) => {
    res.send("Hello I am Root Path");
});

const sessionOptions = {
    secret: "SupersecretcodeofmymajorProject",
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    },
};
// Route wale se pehle use karna hota hai kyoki ise ham route ki help se hi use karne wale h
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for flash 
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
// Demo User
// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "Ujjwal45",
//     });

//     let registeredUser = await User.register(fakeUser, "password");
//     res.send(registeredUser);
// });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "./public")));

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

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