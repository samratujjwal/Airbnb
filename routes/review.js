const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { validateReview } = require("../middleware.js");

///////////////   Reviews Route    ///////////////
router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listings = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listings.reviews.push(newReview);
    await newReview.save();
    await listings.save();
    req.flash("success", "New Review Added");
    res.redirect(`/listings/${listings._id}`);
}));

///////////////      DElete Reviews Route  ////////////////
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    //console.log(req.params);
    // reviewId from Listing review array and dletet kardega pull operator
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted !");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;