$(document).ready(function () {

  // localStorage.clear()
  // let data = ["asteroblastusstellatus.png", "porpitaprunella.png", "poliopogonamadou.png", "botryllusschlosseri.png", "cassiopeaandromeda.png", "hemipholiscordifera.png", "centrostephanuslongispinus.png", "nautiluspompilius.png", "haeckelianaporcellana.png", "cannorrhizaconnexa.png", "nausithoechallengeri.png", "solmaris.png"]
  // for (let i = 0; i < data.length; i++) {
  //   localStorage.setItem(data[i], "/images/" + data[i]);
  // }

  document.querySelector("#filetag").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem(this.files[0].name, reader.result);
    })
    reader.readAsDataURL(this.files[0]);
  })

  $.get("/images/all", function (data) {

    if (data.length !== 0) {
      let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
      let arr = []
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].png)
        let row = $("<tr>");
        row.append("<td>" + data[i].id + "</td>");
        row.append("<td>" + data[i].name + "</td>");
        row.append("<td>" + data[i].text + "</td>");
        row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img></td>");
        row.append("<td>" + data[i].default_mp3 + "</td>");
        row.append("<td><button class='delete' value='" + data[i].id + "' name='" + data[i].png + "'>Delete</button></td>");
        row.append("</tr>");
        table.append(row);
      }
      table.append("</table>")
      console.log(arr)
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
              row.append("<td>" + data[i].id + "</td>");
              row.append("<td>" + data[i].name + "</td>");
              row.append("<td>" + data[i].text + "</td>");
              row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img></td>");
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