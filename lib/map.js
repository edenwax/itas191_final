var map;
      	function initMap() {
        	map = new google.maps.Map(document.getElementById('map'), {
        	zoom: 19,
        	center: new google.maps.LatLng(49.15793401041242, -123.96427631378175),
        	mapTypeId: 'roadmap'
        });
		    // Define the LatLng coordinates for the polygon.

        console.log("The first part loaded");
		var iconBase = 'img/';
		var icons = {
			viu: {
		    	icon: iconBase + '../img/pin.png'
		    }
      	};
      	console.log("The icons loaded");
        var features = [
          {
            position: new google.maps.LatLng(49.15793401041242, -123.96427631378175),
            type: 'viu'
          }
        ];
        console.log("The coordinates loaded");


        features.forEach(function(feature) {
        	var marker = new google.maps.Marker({
        		position: feature.position,
            	icon: icons[feature.type].icon,
            	map: map
        	});
        });
      }

      var easter_egg = new Konami(function() { window.location.href = "http://www.nyan.cat/"; });

    