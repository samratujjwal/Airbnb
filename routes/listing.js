const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema.js");
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}
////////////////    INDEX ROUTE     //////////////////////
router.get("/", async (req, res) => {
    let allListing = await Listing.find({})
    res.render("./listings/index.ejs", { allListing });

});

///////////////////////       NEW ROUTE   //////////////////////
router.get("/new", (req, res) => {
    res.render("./listings/new.ejs");
});

////////////////// SHOW ROUTE ////////////////////////
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        req.flash("error", "The Listing You Requested for does not exist !");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
}));



router.post("/", validateListing, wrapAsync(async (req, res) => {

    //let result = listingSchema.validate(req.body);
    // console.log(result);
    // console.log(req.body.listing);

    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    req.flash("success", "New Listing Added");
    res.redirect("/listings");

}));

/////////////////////   EDIT ROUTE      /////////////////
router.get("/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "The Listing You Requested for does not exist !");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing });
});

//////////////   UPDATE ROUTE         ////////////////////
router.put("/:id", async (req, res) => {
    let { id } = req.params;
    //console.log(...req.body.listing);
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated !");
    res.redirect(`/listings/${id}`);
});

/////////////////////         DELETE ROUTE    ////////////////////
router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted !");
    res.redirect("/listings");
});

module.exports = router;