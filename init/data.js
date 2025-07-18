const sampleListings = [
  {
    title: "Desert Dome Escape",
    description: "Sleep under the stars in a geodesic dome with desert views.",
    image: {
      filename: "camping1.jpg",
      url: "https://images.unsplash.com/photo-1606788075761-6e4c1f1b6c5b"
    },
    price: 90,
    location: "Jaisalmer",
    country: "India",
    geometry: { type: "Point", coordinates: [70.9128, 26.9157] },
    category: "Camping"
  },
  {
    title: "Himalayan Heights",
    description: "Breathtaking views from your mountain cabin.",
    image: {
      filename: "mountain1.jpg",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    price: 150,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1887, 32.2396] },
    category: "Mountain"
  },
  {
    title: "Goan Beach Shack",
    description: "Relax in a cozy shack right on the Goan beach.",
    image: {
      filename: "beach1.jpg",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    price: 120,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] },
    category: "Beach"
  },
  {
    title: "Royal Heritage Palace",
    description: "Live like royalty in this 18th century palace.",
    image: {
      filename: "palace1.jpg",
      url: "https://images.unsplash.com/photo-1582631243894-5d4b44fbcf47"
    },
    price: 300,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
    category: "Historical"
  },
  {
    title: "Backwater Bliss",
    description: "Houseboat stay in tranquil Kerala backwaters.",
    image: {
      filename: "backwater1.jpg",
      url: "https://images.unsplash.com/photo-1587982332403-e04fcba26541"
    },
    price: 180,
    location: "Alleppey",
    country: "India",
    geometry: { type: "Point", coordinates: [76.3375, 9.4981] },
    category: "Luxury"
  },
  {
    title: "Pink City Haveli",
    description: "Experience royal hospitality in Jaipur's old city.",
    image: {
      filename: "haveli1.jpg",
      url: "https://images.unsplash.com/photo-1589191311055-4c4b47d6fdf9"
    },
    price: 160,
    location: "Jaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
    category: "Historical"
  },
  {
    title: "Tea Estate Stay",
    description: "Scenic views from a cottage on a tea plantation.",
    image: {
      filename: "teaestate1.jpg",
      url: "https://images.unsplash.com/photo-1582719478250-d62b03a1d811"
    },
    price: 110,
    location: "Munnar",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] },
    category: "Village"
  },
  {
    title: "Lake View Villa",
    description: "Peaceful lake views from your private villa.",
    image: {
      filename: "lakevilla1.jpg",
      url: "https://images.unsplash.com/photo-1571653975903-0f91cfb22f46"
    },
    price: 220,
    location: "Nainital",
    country: "India",
    geometry: { type: "Point", coordinates: [79.4591, 29.3919] },
    category: "Luxury"
  },
  {
    title: "Urban Loft Retreat",
    description: "Modern comfort in the heart of the city.",
    image: {
      filename: "cityloft1.jpg",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    price: 130,
    location: "Bangalore",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
    category: "City"
  },
  {
    title: "Forest Bamboo Hut",
    description: "Eco-living in a bamboo hut nestled in the woods.",
    image: {
      filename: "foresthut1.jpg",
      url: "https://images.unsplash.com/photo-1618220179428-d7b4d3c5fbc1"
    },
    price: 100,
    location: "Coorg",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] },
    category: "Farm"
  },
  {
    title: "Sunset Dunes Camp",
    description: "Unwind in desert dunes at sunset camp.",
    image: { filename: "desert2.jpg", url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
    price: 95, location: "Jaisalmer", country: "India",
    geometry: { type: "Point", coordinates: [70.9167, 26.9157] }, category: "Camping"
  },
  {
    title: "Mist Valley Lodge",
    description: "Foggy mornings in a mountain lodge retreat.",
    image: { filename: "mistvalley.jpg", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    price: 140, location: "Shimla", country: "India",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }, category: "Mountain"
  },
  {
    title: "Coastal Serenity Villa",
    description: "Seafront views in a coastal villa.",
    image: { filename: "coastalvilla.jpg", url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791" },
    price: 195, location: "Goa", country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }, category: "Beach"
  },
  {
    title: "Temple City Apartment",
    description: "Modern apartment near historic temples.",
    image: { filename: "templeapt.jpg", url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" },
    price: 125, location: "Delhi", country: "India",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }, category: "City"
  },
  {
    title: "Royal Fort Stay",
    description: "Stay adjacent to majestic desert forts.",
    image: { filename: "fortstay.jpg", url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
    price: 260, location: "Jodhpur", country: "India",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] }, category: "Historical"
  },
  {
    title: "Taj View Retreat",
    description: "Watch Taj Mahal at dawn from your balcony.",
    image: { filename: "tajview.jpg", url: "https://images.unsplash.com/photo-1564748355502-16b4cdbf45d0" },
    price: 210, location: "Agra", country: "India",
    geometry: { type: "Point", coordinates: [78.0081, 27.1767] }, category: "Iconic Cities"
  },
  {
    title: "Riverbank Camp",
    description: "Tent camping next to the holy river.",
    image: { filename: "rivercamp.jpg", url: "https://images.unsplash.com/photo-1504537375609-81b7a14cb07c" },
    price: 85, location: "Rishikesh", country: "India",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }, category: "Camping"
  },
  {
    title: "Village Heritage Home",
    description: "Traditional village home experience.",
    image: { filename: "villagehome.jpg", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    price: 80, location: "Punjab", country: "India",
    geometry: { type: "Point", coordinates: [75.8573, 30.9005] }, category: "Village"
  },
  {
    title: "Mountain Meadows Resort",
    description: "Resort nestled in lush mountain meadows.",
    image: { filename: "meadowresort.jpg", url: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
    price: 170, location: "Kumaon", country: "India",
    geometry: { type: "Point", coordinates: [79.6561, 29.5942] }, category: "Luxury"
  },
  {
    title: "Green Farm Cottage",
    description: "Organic farm stay surrounded by greenery.",
    image: { filename: "farmcottage.jpg", url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    price: 95, location: "Coorg", country: "India",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] }, category: "Farm"
  },
  {
    title: "Castle View Homestead",
    description: "Stay overlooking a historic castle.",
    image: { filename: "castleview.jpg", url: "https://images.unsplash.com/photo-1562158070-5af1e8f8b6b2" },
    price: 275, location: "Mysore", country: "India",
    geometry: { type: "Point", coordinates: [76.6394, 12.2958] }, category: "Castles"
  },
  {
    title: "Heritage Room Stay",
    description: "Cozy room in a historic building.",
    image: { filename: "heritageroom.jpg", url: "https://images.unsplash.com/photo-1590490354444-92f48f0ca347" },
    price: 105, location: "Old Delhi", country: "India",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }, category: "Rooms"
  },
  {
    title: "Sunlit Hill Cabin",
    description: "Rustic cabin on sun-kissed hilltop.",
    image: { filename: "hillcabin.jpg", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
    price: 145, location: "Almora", country: "India",
    geometry: { type: "Point", coordinates: [79.6561, 29.5942] }, category: "Mountain"
  },
  {
    title: "Budget City Room",
    description: "Affordable room in the city center.",
    image: { filename: "budgetroom.jpg", url: "https://images.unsplash.com/photo-1576675783541-ec7be1e44f7d" },
    price: 55, location: "Nagpur", country: "India",
    geometry: { type: "Point", coordinates: [79.0882, 21.1458] }, category: "Budget"
  },
  {
    title: "Lakeside Campsite",
    description: "Camp by the pristine lakeside at dusk.",
    image: { filename: "lakesidecamp.jpg", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    price: 140, location: "Nainital", country: "India",
    geometry: { type: "Point", coordinates: [79.4591, 29.3919] }, category: "Camping"
  },
  {
    title: "Modern City Loft",
    description: "Chic loft in a bustling city district.",
    image: { filename: "modernloft.jpg", url: "https://images.unsplash.com/photo-1534850336045-c69f2a0eed0e" },
    price: 190, location: "Mumbai", country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }, category: "City"
  },
  {
    title: "Riverside Farmhouse",
    description: "Farmhouse with a serene river backdrop.",
    image: { filename: "riverfarm.jpg", url: "https://images.unsplash.com/photo-1525097487452-6278ff080c31" },
    price: 130, location: "Punjab", country: "India",
    geometry: { type: "Point", coordinates: [75.8573, 30.9005] }, category: "Farm"
  },
  {
    title: "Old Heritage Castle",
    description: "Restored castle stay with antique interiors.",
    image: { filename: "oldcastle.jpg", url: "https://images.unsplash.com/photo-1546510048-61e8e5b0c2c6" },
    price: 320, location: "Jodhpur", country: "India",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] }, category: "Castles"
  },
  {
    title: "Heritage Palace Suite",
    description: "Elegant suite inside a royal palace.",
    image: { filename: "palacesuite.jpg", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    price: 450, location: "Udaipur", country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }, category: "Luxury"
  },
  {
    title: "Cozy Village Cottage",
    description: "Peaceful cottage in a rural setting.",
    image: { filename: "villagecottage.jpg", url: "https://images.unsplash.com/photo-1560184897-ab8c2567d6b3" },
    price: 75, location: "Ludhiana", country: "India",
    geometry: { type: "Point", coordinates: [75.8573, 30.9005] }, category: "Village"
  },
  {
    title: "Forest Retreat Cabin",
    description: "Secluded cabin within lush forests.",
    image: { filename: "forestcabin.jpg", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4" },
    price: 165, location: "Coorg", country: "India",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] }, category: "Camping"
  },
  {
    title: "Luxury Rooftop Townhouse",
    description: "Stylish townhouse with rooftop lounge.",
    image: { filename: "townhouse.jpg", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e8" },
    price: 275, location: "Mumbai", country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }, category: "Iconic Cities"
  },
];

module.exports = { data: sampleListings };