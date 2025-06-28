const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

////////////////    INDEX ROUTE     //////////////////////
router.get("/", async (req, res) => {
    let allListing = await Listing.find({})
    res.render("./listings/index.ejs", { allListing });

});

///////////////////////       NEW ROUTE   //////////////////////
router.get("/new", isLoggedIn, (req, res) => {
    res.render("./listings/new.ejs");
});

////////////////// SHOW ROUTE ////////////////////////
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
        req.flash("error", "The Listing You Requested for does not exist !");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs", { listing });
}));



router.post("/", validateListing, wrapAsync(async (req, res) => {

    //let result = listingSchema.validate(req.body);
    // console.log(result);
    // console.log(req.body.listing);

    let newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    await newlisting.save();
    req.flash("success", "New Listing Added");
    res.redirect("/listings");

}));

/////////////////////   EDIT ROUTE      /////////////////
router.get("/:id/edit", isLoggedIn, isOwner, async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "The Listing You Requested for does not exist !");
        return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing });
});

//////////////   UPDATE ROUTE         ////////////////////
router.put("/:id", isLoggedIn, isOwner, async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated !");
    res.redirect(`/listings/${id}`);
});

/////////////////////         DELETE ROUTE    ////////////////////
router.delete("/:id", isLoggedIn, isOwner, async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted !");
    res.redirect("/listings");
});

module.exports = router;