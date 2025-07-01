const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
    let listings = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    //console.log(newReview);
    listings.reviews.push(newReview);
    await newReview.save();
    await listings.save();
    req.flash("success", "New Review Added");
    res.redirect(`/listings/${listings._id}`);
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    //console.log(req.params);
    // reviewId from Listing review array and dletet kardega pull operator
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted !");
    res.redirect(`/listings/${id}`);
};