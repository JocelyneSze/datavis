var width = 900;
var height = 700;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

var mapProjection = d3.geo.albers()
    .center([0,58])
    .rotate([0,0])
    .scale(3200);

var geoPath = d3.geo.path()
    .projection(mapProjection);

//console.log(mapProjection([0.1275, 51.520738])[1])

d3.json("data/europe.json", loadData);

function loadData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
		drawData(dataset);
	}
}

function drawData(dataset) {
    //console.log(dataset);
	//var countries = topojson.feature(dataset, dataset.objects.countries).features;

    var subunits = topojson.feature(dataset,dataset.objects.subunits)
        .features;
    var ukSubunits = subunits.filter(function(subunit) {
        return subunit.properties.part_of=="GBR"
    });


    var color = d3.scale.category20b()
        //.domain(["GBR", "DEU", "FRA"])
        //.range(["#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]);
        .range(["#7b4173", "#a55194", "#ce6dbd", "#de9ed6"]);

    graphics.selectAll("path")
        .data(ukSubunits)
        .enter()
        .append("path")
        //.attr("class",function(data) { console.log(data); })
        .attr("d",geoPath)
        .style("fill", function(subunit) {
            return color(subunit.id);
        })


}

d3.json("data/usersGraph.json", loadUserData);

function loadUserData(error, dataset) {
    if (error) {
        console.log(error);
    }
    else {
        drawUserData(dataset);
    }
}

function getLongitude (tweets) {
    return tweets.geo.coordinates[1];
}

function getLatitude (tweets) {
    return tweets.geo.coordinates[0];
}

function drawUserData(dataset) {
    console.log(dataset);


    graphics.append("circle")
        .attr("r",10)
        .attr("cx", mapProjection([0.1275, 51.520738])[0])
        .attr("cy", mapProjection([0.1275, 51.520738])[1])
        .style("fill", "#ffff00")
        .attr("transform","translate("+mapProjection([0.1275,51.5072])+")");

    graphics.selectAll(".tweet")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("class","tweet")
        .attr("r",2.5)
        .style("fill","#800014")
        .attr("transform",function(user) {
            var longitude = user.tweets[0].geo.coordinates[1];
            var latitude  = user.tweets[0].geo.coordinates[0];
            var coordinate = [longitude,latitude];

            return "translate("+mapProjection(coordinate)+")";
        })
        .style("opacity", 0.3);


    for (var i=0; i < dataset.nodes.length; i++) {
        var user = dataset.nodes[i];
        var coordinates = [d3.mean(user.tweets, getLongitude), d3.mean(user.tweets, getLatitude)];
        user.geo = coordinates;
    }

    graphics.selectAll(".link")
        .data(dataset.links)
        .enter()
        .append("line")
        .style("stroke", "#999")
        .style("opacity", 0.2)
        .attr("x1", function(link){
            return mapProjection(dataset.nodes[link.source].geo)[0];
        })
        .attr("y1", function(link){
            return mapProjection(dataset.nodes[link.source].geo)[1];
        })
        .attr("x2", function(link){
            return mapProjection(dataset.nodes[link.target].geo)[0];
        })
        .attr("y2", function(link){
            return mapProjection(dataset.nodes[link.target].geo)[1];
        });
        //.attr("stroke","#000000")
        //.attr("stroke-width",2);


}