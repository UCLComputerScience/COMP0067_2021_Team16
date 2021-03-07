$(document).ready(function () {

    document.querySelector("#audiotag").addEventListener("change", function () {
        const reader = new FileReader();
        document.getElementById('form').addEventListener("submit", () => {
          localStorage.setItem(this.files[0].name, reader.result);
        })
        reader.readAsDataURL(this.files[0]);
      })

    $.get("/images/all", function (data) {
        if (data.length !== 0) {
            let radios = $("<div id='radios'>")
            for (let i = 0; i < data.length; i++) {
                radios.append("<span><input type='radio' id='" + data[i].id + "' name='image-answer' value='" + data[i].id + "' required>")
                radios.append("<span><label for='" + data[i].id + "'>" + data[i].name + "</label>");
                radios.append("<span><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img>");
            }
            radios.append("</div>")
            $("#image-area").prepend(radios)
        }
    });

    document.querySelector("#audiotag").addEventListener("change", function () {
        const reader = new FileReader();
        document.getElementById('form').addEventListener("submit", () => {
            localStorage.setItem(this.files[0].name, reader.result);
        })
        reader.readAsDataURL(this.files[0]);
    })
    $.get("/images/all", function (data) {
        if (data.length !== 0) {
            let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
            for (let i = 0; i < data.length; i++) {
                let row = $("<tr>");
                row.append("<td>" + data[i].id + "</td>");
                row.append("<td>" + data[i].name + "</td>");
                row.append("<td>" + data[i].text + "</td>");
                row.append("<td><img class='tableimg' src='" + localStorage.getItem(data[i].png) + "'</img></td>");
                row.append("<td>" + data[i].default_mp3 + "<br><br><audio controls><source src='" + localStorage.getItem(data[i].default_mp3) + "'/></audio></td>");
                row.append("<td><button class='delete' value='" + data[i].id + "' name='" + data[i].png + "'>Delete Audio</button></td>");
                row.append("</tr>");
                table.append(row);
            }
            table.append("</table>")
            $("#images-area2").prepend(table)
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

    function handleFiles(event) {
        var files = event.target.files;
        $("#src").attr("src", URL.createObjectURL(files[0]));
        document.getElementById("preview").load();
    }

    document.getElementById("audiotag").addEventListener("change", handleFiles, false);
    document.getElementById("audiotag").addEventListener("change", function () {
        document.getElementById("hide-audio").style.display = "block";
    })
});