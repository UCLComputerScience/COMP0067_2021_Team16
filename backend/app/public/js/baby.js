$(document).ready(function () {
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
        row.append("<td><button class='delete' value='" + data[i].id + "'>Delete</button></td>");
        row.append("</tr>");
        table.append(row);
      }
      table.append("</table>")
      $("#image-area").prepend(table)
    }

  });

  $(document).on('click', '.delete', function () {
    $.ajax({
      url: "/images/delete/" + this.value,
      type: 'DELETE',
      success: function (result) {
        $("#image-area").empty()
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
              row.append("<td><button class='delete' value='" + data[i].id + "'>Delete</button></td>");
              row.append("</tr>");
              table.append(row);
            }
            table.append("</table>")
            $("#image-area").prepend(table)
          }

        })
      }
    })

  })

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
        $("#image-area").empty()
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
              row.append("<td><button class='delete' value='" + data[i].id + "'>Delete</button></td>");
              row.append("</tr>");
              table.append(row);
            }
            table.append("</table>")
            $("#image-area").prepend(table)
          }

        })
      });

    $("#name").val("");
  });

  let fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");

  fileTag.addEventListener("change", function () {
    changeImage(this);
  });

  function changeImage(input) {
    let reader;

    if (input.files && input.files[0]) {
      reader = new FileReader();

      reader.onload = function (e) {
        preview.setAttribute('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
});