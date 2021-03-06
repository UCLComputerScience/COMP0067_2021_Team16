
$.get("/images/all", function (data) {

  if (data.length !== 0) {
    let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
    for (let i = 0; i < data.length; i++) {
      let row = $("<tr>");
      row.append("<td>" + data[i].id + "</td>");
      row.append("<td>" + data[i].name + "</td>");
      row.append("<td>" + data[i].text + "</td>");
      row.append("<td><img class='tableimg' src='/images/" + data[i].png + "'</img></td>");
      row.append("<td>" + data[i].default_mp3 + "</td>");
      row.append("<td><button id='" + data[i].id + "'>Edit</button><button id='" + data[i].id + "'>Delete</button></td>");
      row.append("</tr>");
      table.append(row);
    }
    table.append("</table>")
    $("#image-area").prepend(table)
  }

});

$("#image-submit").on("click", function (event) {
  event.preventDefault();

  let newImage = {
    type: "default",
    name: $("#name").val().trim().toUpperCase(),
    png: $("#name").val().trim().replace(/[^A-Z\d\s]/gi, '').replace(/\s/g, '').toLowerCase() + ".png"
  };

  console.log(newImage);

  $.post("/images/new", newImage)
    .then(function () {
      let row = $("<div>");
      row.append("<tr>");
      row.append("<td>" + newImage.id + "</td>");
      row.append("<td>" + newImage.name + "</td>");
      row.append("<td>" + newImage.text + "</td>");
      row.append("<td><img class='tableimg' src='/images/" + newImage.png + "'</img></td>");
      row.append("<td>" + newImage.default_mp3 + "</td>");
      row.append("<td><button id='" + newImage.id + "'>Edit</button><button id='" + newImage.id + "'>Delete</button></td>");
      row.append("</tr>");
      $("#image-area").prepend(row);

    });

  $("#name").val("");
});
