window.addEventListener("DOMContentLoaded", () => {
  maptilersdk.config.apiKey = mapToken;
  const map = new maptilersdk.Map({
    container: "map",
    style: maptilersdk.MapStyle.BASIC,
    center: coordinates || [77.4126, 28.6692],
    zoom: 12
  });
  // 🔥 Now add marker
  new maptilersdk.Marker({ color: "#ff0000" })
    .setLngLat(coordinates || [77.4126, 28.6692])
    .addTo(map);
});
