$(document).ready(function () {
  $.get("/images/all", function (data) {
    if (data.length !== 0) {
      let checkboxes = $("<div id='checkboxes'>")
      for (let i = 0; i < data.length; i++) {
        checkboxes.append("<span><input type='checkbox' id='" + data[i].id + "' name='" + data[i].name + "' value='" + data[i].id + "'>")
        checkboxes.append("<span><label for='" + data[i].id + "'>" + data[i].name + "</label>");
        checkboxes.append("<span><img class='tableimg' src='" + data[i].png_URL + "'</img>");
      }
      checkboxes.append("</div>")
      $("#image-area").prepend(checkboxes)
    }
  });

  $.get("/slideshows/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table><tr><th>Slideshow Name</th><th>Images</th><th>Actions</th></tr>");
      let slideshows = {};
      for (let i = 0; i < data.length; i++) {
        slideshows[data[i].slideshow_id] = data[i].slideshow_name;
      }
      for (let i = 0; i < Object.keys(slideshows).length; i++) {
        let row = $("<tr>");
        row.append("<td>" + slideshows[Object.keys(slideshows)[i]] + "</td>");
        let images = $("<td>");
        for (let j = 0; j < data.length; j++) {
          if (slideshows[Object.keys(slideshows)[i]] == data[j].slideshow_name) {
            images.append("<span>" + data[j].image);
            images.append("<img class='tableimg' src='" + data[j].png_URL + "'</img>");
          }
          images.append("</td>");
          row.append(images);
        }
        row.append("<td><button class='delete' value='" + Object.keys(slideshows)[i] + "'>Delete</button></td>");
        table.append(row);
      }
      table.append("</table>")
      $("#slideshow-area").prepend(table)
    }
  });

  $(document).on('click', '.delete', function () {
    $.ajax({
      url: "/slideshows/delete/" + this.value,
      type: 'DELETE',
      success: function (result) {
        $("#slideshow-area").empty()
        $.get("/slideshows/all", function (data) {
          if (data.length !== 0) {
            let table = $("<table><tr><th>Slideshow Name</th><th>Images</th><th>Actions</th></tr>");
            let slideshows = {};
            for (let i = 0; i < data.length; i++) {
              slideshows[data[i].slideshow_id] = data[i].slideshow_name;
            }
            for (let i = 0; i < Object.keys(slideshows).length; i++) {
              let row = $("<tr>");
              row.append("<td>" + slideshows[Object.keys(slideshows)[i]] + "</td>");
              let images = $("<td>");
              for (let j = 0; j < data.length; j++) {
                if (slideshows[Object.keys(slideshows)[i]] == data[j].slideshow_name) {
                  images.append("<span>" + data[j].image);
                  images.append("<img class='tableimg' src='" + data[j].png_URL + "'</img>");
                }
                images.append("</td>");
                row.append(images);
              }
              row.append("<td><button class='delete' value='" + Object.keys(slideshows)[i] + "'>Delete</button></td>");
              table.append(row);
            }
            table.append("</table>")
            $("#slideshow-area").prepend(table)
          }
        });
      }
    })
  })
});