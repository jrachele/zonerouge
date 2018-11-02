$(window).on("load", function() {
  var map = L.map("map", {
    center: [49.162, 5.3876],
    zoom: 7
  });

  function showInfo(location) {
    var url =
      typeof location !== "undefined"
        ? "/information?location=" + location
        : "/information";
    $.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      success: function(response) {
        $("#information").html(response);
      }
    });
    UIkit.offcanvas($("#information-bar")).show();
  }

  showInfo();
  map.on("click", function(e) {
    showInfo();
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([49.2592, 5.4083], {
    title: "Beaumont-en-Verdunois"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2375, 5.4683], {
    title: "Bezonvaux"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2333, 5.2817], {
    title: "Cumières-le-Mort-Homme"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2208, 5.4322], {
    title: "Douaumont"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1956, 5.4353], {
    title: "Fleury-devant-Douaumont"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2736, 5.3533], {
    title: "Haumont-près-Samogneux"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2383, 5.3989], {
    title: "Louvemont-Côte-du-Poivre"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.2536, 5.4725], {
    title: "Ornes"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.185833, 4.702778], {
    title: "Beauséjour"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1561, 4.6445], {
    title: "Hurlus"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1269, 4.6555], {
    title: "Mesnil-lès-Hurlus"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1287, 4.6225], {
    title: "Perthes-lès-Hurlus"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1736, 4.7021], {
    title: "Ripont"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1646, 4.6472], {
    title: "Tahure"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1898, 4.3286], {
    title: "Moronvilliers"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1862, 4.2654], {
    title: "Nauroy"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.4195, 3.6996], {
    title: "Ailles"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.3779, 3.642], {
    title: "Beaulne-et-Chivy"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.4047, 3.6502], {
    title: "Courtecon"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.4172, 3.631], {
    title: "Crandelain-et-Malval"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.3672, 3.6282], {
    title: "Moussy-sur-Aisne"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.4011, 3.7463], {
    title: "Vauclerc-et-la-Vallée-Foulon"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.3904, 3.7875], {
    title: "Craonne"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.3922, 3.6694], {
    title: "Cerny-en-Laonnois"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.4101, 3.4538], {
    title: "Allemant"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([48.8584, 5.9285], {
    title: "Regniéville"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([48.8512, 5.9065], {
    title: "Remenauville"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([48.853, 5.9615], {
    title: "Fey-en-Haye"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([48.824, 5.8461], {
    title: "Flirey"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1611, 5.4726], {
    title: "Vaux-devant-Damloup"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.1521, 5.0716], {
    title: "Vauquois"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([50.6904, 2.7315], {
    title: "Bailleul"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([50.4846, 2.8056], {
    title: "La Bassée"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.9998, 3.6021], {
    title: "Mazinghien"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  L.marker([49.8353, 2.8084], {
    title: "Fey"
  })
    .addTo(map)
    .on("click", function(e) {
      showInfo(e.target.options.title);
    });

  var topleft = L.latLng(51.211842, 2.3217557),
    topright = L.latLng(50.3952956, 7.8338167),
    bottomleft = L.latLng(48.9558751, 1.4976877);

  var overlay = L.imageOverlay
    .rotated(
      "static/img/redzone_notannotated.svg",
      topleft,
      topright,
      bottomleft,
      {
        opacity: 0.5
      }
    )
    .addTo(map);

  var legend = L.control({ position: "bottomleft" });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend"),
      grades = [
        "Sans Dommages",
        "Moindrement Touché",
        "Dommages importants",
        "Complètement Dévastée"
      ],
      colors = ["#525BE9", "#73E085", "#EDEE00", "#EA3B1C"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + colors[i] + '"></i> ' + grades[i] + "</br>";
    }
    return div;
  };

  legend.addTo(map);
});
