const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Mushroom = require("../models").mushroom;
const Observation = require("../models").observation;
// const Bid = require("../models").bid;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const mushrooms = await Mushroom.findAll();
    res.send(mushrooms);
    console.log("mushrooms?", mushrooms);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/mushroom/:id", async (req, res) => {
  try {
    const mushroomId = parseFloat(req.params.id);
    const mushroomDetails = await Mushroom.findByPk(mushroomId);
    res.send(mushroomDetails);
    console.log("details?", mushroomDetails);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/observations", async (req, res) => {
  try {
    const observations = await Observation.findAll({ include: [Mushroom] });
    res.send(observations);
    console.log("observations?", observations);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/observations", async (req, res, next) => {
  console.log("got to the body", req.body);
  const {
    title,
    observationTime,
    url,
    latitude,
    longitude,
    mushroomId,
    userId,
  } = req.body;
  if (!title || !url || !latitude) {
    return res
      .status(400)
      .send("Please provide a title, image and a map location");
  }
  try {
    const newObservation = await Observation.create({
      title,
      observationTime,
      image: url,
      latitude,
      longitude,
      mushroomId,
      userId,
    });
    res.send(newObservation);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const artworkId = parseFloat(req.params.id);
//     const artworkDetails = await Artwork.findByPk(artworkId, {
//       include: [Bid],
//     });
//     res.send(artworkDetails);
//   } catch (e) {
//     console.log(e.message);
//   }
// });

// router.post("/bids", authMiddleware, async (req, res, next) => {
//   try {
//     const { amount, email, artworkId } = req.body;
//     console.log("req body", req.body);
//     if (!amount) {
//       return res.status(400).send("no amount entered");
//     }
//     // else if (amount < highest amount bid already on that artwork){
//     //   return
//     // }
//     else {
//       const newBid = await Bid.create({
//         amount,
//         email,
//         artworkId,
//       });
//       res.send(newBid);
//     }
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

// router.post("/auction", authMiddleware, async (req, res, next) => {
//   const { title, imgUrl, minimumBid, hearts, userId } = req.body;
//   if (!title || !imgUrl || !minimumBid) {
//     return res
//       .status(400)
//       .send("Please provide a title, image url and a minimum bid");
//   }
//   try {
//     const newArtwork = await Artwork.create({
//       title,
//       imgUrl,
//       minimumBid,
//       hearts,
//       userId,
//     });
//     res.send(newArtwork);
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

// router.patch("/:id", async (req, res, next) => {
//   try {
//     const artworkId = parseFloat(req.params.id);
//     console.log("artworkId", artworkId);
//     const artworkDetails = await Artwork.findByPk(artworkId, {
//       include: [Bid],
//     });
//     const hearts = req.body;
//     await artworkDetails.update(hearts);
//     res.send(artworkDetails);
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

module.exports = router;
