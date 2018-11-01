$(window).on("load", function() {
  var map = L.map("map", {
    center: [49.162, 5.3876],
    zoom: 7
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([49.2592, 5.4083], {
    title: "Beaumont-en-Verdunois"
  }).addTo(map);

  L.marker([49.2375, 5.4683], {
    title: "Bezonvaux"
  }).addTo(map);

  L.marker([49.2333, 5.2817], {
    title: "Cumières-le-Mort-Homme"
  }).addTo(map);

  L.marker([49.2208, 5.4322], {
    title: "Douaumont"
  }).addTo(map);

  L.marker([49.1956, 5.4353], {
    title: "Fleury-devant-Douaumont"
  }).addTo(map);

  L.marker([49.2736, 5.3533], {
    title: "Haumont-près-Samogneux"
  }).addTo(map);

  L.marker([49.2383, 5.3989], {
    title: "Louvemont-Côte-du-Poivre"
  }).addTo(map);

  L.marker([49.2536, 5.4725], {
    title: "Ornes"
  }).addTo(map);

  L.marker([49.185833, 4.702778], {
    title: "Beauséjour, Marne"
  }).addTo(map);

  //   var imageUrl = "static/img/redzone.svg",
  //     imageBounds = [[51.1960705, 2.3605007], [48.113611, 6.9538551]];

  //   L.imageOverlay(imageUrl, imageBounds, {
  //     opacity: 0.5
  //   }).addTo(map);

  var topleft = L.latLng(51.211842, 2.3217557),
    topright = L.latLng(50.3952956, 7.8338167),
    bottomleft = L.latLng(48.9558751, 1.4976877);

  var overlay = L.imageOverlay
    .rotated("static/img/redzone.svg", topleft, topright, bottomleft, {
      opacity: 0.5
    })
    .addTo(map);

  //   var geojsonFeature = new L.GeoJSON.AJAX("static/json/nose.geojson");
  //   L.geoJSON(geojsonFeature).addTo(map);
  //   L.marker([51.5, -0.09])
  //     .addTo(map)
  //     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  //     .openPopup();

  // create a red polygon from an array of LatLng points
  //   var latlngs = [
  //     [
  //       // first polygon
  //       [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]], // outer ring
  //       [[37.29, -108.58], [40.71, -108.58], [40.71, -102.5], [37.29, -102.5]] // hole
  //     ],
  //     [
  //       // second polygon
  //       [[41, -111.03], [45, -111.04], [45, -104.05], [41, -104.05]]
  //     ]
  //   ];
  //   var polygon = L.polygon(latlngs, { color: "red" }).addTo(map);
});
