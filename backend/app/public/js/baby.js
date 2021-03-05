
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (let i = 0; i < data.length; i++) {

      let row = $("<div>");
      row.addClass("image");

      row.append("<p>" + data[i].name + "</p>");
      row.append("<img class='tableimg' src='/images/" + data[i].png + "'</img>");

      $("#image-area").prepend(row);

    }

  }

});

$("#image-submit").on("click", function(event) {
  event.preventDefault();

  let newImage = {
    type: "default",
    name: $("#name").val().trim().toUpperCase(),
    png: $("#name").val().trim().replace(/[^A-Z\d\s]/gi, '').replace(/\s/g,'').toLowerCase() + ".png"
  };

  console.log(newImage);

  $.post("/api/new", newImage)
    .then(function() {
      let row = $("<div>");
      row.addClass("image");

      row.append("<p>" + newImage.name + "</p>");
      row.append("<img src='/images/" + newImage.png + "'</img>");

      $("#image-area").prepend(row);

    });

  $("#name").val("");
});
