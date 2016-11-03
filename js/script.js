var url="https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Qoqj3eYvB0ORuGakXNkAG75owZsuT4l8LP4KPMHN"

$.ajax({
  url: url,
  success: function(results) {
    $("#count").html(results.element_count);
  // Below does the exact same thig, but more longer / unginly
  // document.getElementById("count").innerHTML = results.element_count;

  var asteroids = results.near_earth_objects["2015-09-08"];
  }
})
