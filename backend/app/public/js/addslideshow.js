$(document).ready(function () {
  // localStorage.clear()
  // let data = ["asteroblastusstellatus.png", "porpitaprunella.png", "poliopogonamadou.png", "botryllusschlosseri.png", "cassiopeaandromeda.png", "hemipholiscordifera.png", "centrostephanuslongispinus.png", "nautiluspompilius.png", "haeckelianaporcellana.png", "cannorrhizaconnexa.png", "nausithoechallengeri.png", "solmaris.png"]
  // for (let i = 0; i < data.length; i++) {
  //   localStorage.setItem(data[i], "/images/" + data[i]);
  // }
  $.get("/images/all", function (data) {
    if (data.length !== 0) {
      let checkboxes = $("<div id='checkboxes'>")
      for (let i = 0; i < data.length; i++) {
        checkboxes.append("<span><input type='checkbox' id='" + data[i].id + "' name='" + data[i].name + "' value='" + data[i].name + "'>")
        checkboxes.append("<span><label for='" + data[i].id + "'>" + data[i].name + "</label>");
        checkboxes.append("<span><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img>");
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
        row.append("<td>" + slideshows[i + 1] + "</td>");
        let images = $("<td>");
        for (let j = 0; j < data.length; j++) {
          if (slideshows[i + 1] == data[j].slideshow_name) {
            images.append("<span>" + data[j].image);
            images.append("<img class='tableimg' src='" + localStorage.getItem(data[j].png) + "'</img>");
          }
          images.append("</td>");
          row.append(images);
        }
        console.log(Object.keys(slideshows)[i]);
        row.append("<td><button class='delete' id='" + Object.keys(slideshows)[i] + "'>Delete</button></td>");
        table.append(row);
      }
      table.append("</table>")
      $("#slideshow-area").prepend(table)
    }
  });

  // $(document).on('click', '.delete', function () {
  //   localStorage.removeItem(this.name);
  //   $.ajax({
  //     url: "/images/delete/" + this.value,
  //     type: 'DELETE',
  //     success: function (result) {
  //       $("#image-area").empty()
  //       $.get("/images/all", function (data) {
  //         if (data.length !== 0) {
  //           let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
  //           for (let i = 0; i < data.length; i++) {
  //             let row = $("<tr>");
  //             row.append("<td>" + data[i].id + "</td>");
  //             row.append("<td>" + data[i].name + "</td>");
  //             row.append("<td>" + data[i].text + "</td>");
  //             row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img></td>");
  //             row.append("<td>" + data[i].default_mp3 + "</td>");
  //             row.append("<td><button class='delete' value='" + data[i].id + "'>Delete</button></td>");
  //             row.append("</tr>");
  //             table.append(row);
  //           }
  //           table.append("</table>")
  //           $("#image-area").prepend(table)
  //         }
  //       })
  //     }
  //   })
  // })
});