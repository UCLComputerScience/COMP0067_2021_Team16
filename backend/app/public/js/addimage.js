$(document).ready(function () {

  document.querySelector("#filetag").addEventListener("change", function () {
    const reader = new FileReader();
    document.getElementById('form').addEventListener("submit", () => {
      // localStorage.setItem(this.files[0].name, reader.result);
    })
    reader.readAsDataURL(this.files[0]);
  })

  $.get("/images/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + (i+1) + "</td>");
        row.append("<td>" + data[i].image_name + "</td>");
        row.append("<td>" + data[i].image_text + "</td>");
        if (data[i].image_url == "Local Storage") {
          row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].image_file_name) + "'</img></td>");
        } else {
          row.append("<td><img class='tableimg' src='" + data[i].image_url + "'</img></td>");
        }
        row.append("<td>" + data[i].image_audio_file_name + "</td>");
        row.append("<td><button class='delete' value='" + data[i].image_id + "' name='" + data[i].image_file_name + "'>Delete</button></td>");
        row.append("</tr>");
        table.append(row);
      }
      table.append("</table>")
      $("#image-area").prepend(table)
    }
  });

  $(document).on('click', '.delete', function () {
    localStorage.removeItem(this.name);
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
              row.append("<td>" + (i+1) + "</td>");
              row.append("<td>" + data[i].image_name + "</td>");
              row.append("<td>" + data[i].image_text + "</td>");
              if (data[i].image_url == "Local Storage") {
                row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].image_file_name) + "'</img></td>");
              } else {
                row.append("<td><img class='tableimg' src='" + data[i].image_url + "'</img></td>");
              }
              row.append("<td>" + data[i].image_audio_file_name + "</td>");
              row.append("<td><button class='delete' value='" + data[i].image_id + "'>Delete</button></td>");
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