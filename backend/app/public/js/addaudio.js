$(document).ready(function () {

    $.get("/images/all", function (data) {
        if (data.length !== 0) {
            let radios = $("<div id='radios'>")
            for (let i = 0; i < data.length; i++) {
                radios.append("<span><input type='radio' id='" + data[i].image_id + "' name='answer' value='" + data[i].image_id + "' required>")
                radios.append("<span><label class='dark-label' for='" + data[i].image_id + "'>" + data[i].image_name + "</label>");
                radios.append("<span><img class='tableimg' src='" + data[i].image_url + "'</img>");
            }
            radios.append("</div>")
            $("#top-image-area").prepend(radios)
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
                row.append("<td>" + (i + 1) + "</td>");
                row.append("<td>" + data[i].image_name + "</td>");
                row.append("<td>" + data[i].image_text + "</td>");
                row.append("<td><img class='tableimg' src='" + data[i].image_url + "'</img></td>");
                row.append("<td>" + data[i].image_audio_file_name + "<br><br><audio controls><source src='" + data[i].image_audio_url + "'/></audio></td>");
                row.append("<td><button class='delete' value='" + data[i].image_id + "' name='" + data[i].image_audio_file_name + "'>Delete Audio</button></td>");
                row.append("</tr>");
                table.append(row);
            }
            table.append("</table>")
            $("#images-area2").prepend(table)
        }
    });

    $(document).on('click', '.delete', function () {
        localStorage.removeItem(this.name);
        $.ajax({
            url: "/audios/delete/" + this.value,
            type: 'PUT',
            success: function (result) {
                $("#images-area2").empty()
                $.get("/images/all", function (data) {
                    if (data.length !== 0) {
                        let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
                        for (let i = 0; i < data.length; i++) {
                            let row = $("<tr>");
                            row.append("<td>" + (i + 1) + "</td>");
                            row.append("<td>" + data[i].image_name + "</td>");
                            row.append("<td>" + data[i].image_text + "</td>");
                            row.append("<td><img class='tableimg' src='" + data[i].image_url + "'</img></td>");
                            row.append("<td>" + data[i].image_audio_file_name + "<br><br><audio controls><source src='" + data[i].image_audio_url + "'/></audio></td>");
                            row.append("<td><button class='delete' value='" + data[i].image_id + "' name='" + data[i].image_audio_file_name + "'>Delete Audio</button></td>");
                            row.append("</tr>");
                            table.append(row);
                        }
                        table.append("</table>")
                        $("#images-area2").prepend(table)
                    }
                });
            }
        })
    })

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