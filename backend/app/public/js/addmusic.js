$(document).ready(function () {
    document.querySelector("#audiotag").addEventListener("change", function () {
        const reader = new FileReader();
        document.getElementById('form').addEventListener("submit", () => {
            localStorage.setItem(this.files[0].name, reader.result);
        })
        reader.readAsDataURL(this.files[0]);
    })

    $.get("/music/all", function (data) {
        if (data.length !== 0) {
            let table = $("<table><tr><th>ID</th><th>Music</th><th>Actions</th></tr>");
            for (let i = 0; i < data.length; i++) {
                let row = $("<tr>");
                row.append("<td>" + (i+1) + "</td>");
                if (data[i].music_url == "Local Storage") {
                    row.append("<td>" + data[i].music_name + "<br><br><audio controls><source src='" + localStorage.getItem(data[i].music_name) + "'/></audio></td>");
                } else {
                    row.append("<td>" + data[i].music_name + "<br><br><audio controls><source src='" + data[i].music_url + "'/></audio></td>");
                }
                row.append("<td><button class='delete' value='" + data[i].music_id + "' name='" + data[i].music_name + "'>Delete Music</button></td>");
                row.append("</tr>");
                table.append(row);
            }
            table.append("</table>")
            $("#music-area").prepend(table)
        }
    });

    $(document).on('click', '.delete', function () {
        localStorage.removeItem(this.name);
        $.ajax({
            url: "/music/delete/" + this.value,
            type: 'DELETE',
            success: function (result) {
                $("#music-area").empty()
                $.get("/music/all", function (data) {
                    if (data.length !== 0) {
                        let table = $("<table><tr><th>ID</th><th>Music</th><th>Actions</th></tr>");
                        for (let i = 0; i < data.length; i++) {
                            let row = $("<tr>");
                            row.append("<td>" + (i+1) + "</td>");
                            if (data[i].music_url == "Local Storage") {
                                row.append("<td>" + data[i].music_name + "<br><br><audio controls><source src='" + localStorage.getItem(data[i].music_name) + "'/></audio></td>");
                            } else {
                                row.append("<td>" + data[i].music_name + "<br><br><audio controls><source src='" + data[i].music_url + "'/></audio></td>");
                            }
                            row.append("<td><button class='delete' value='" + data[i].music_id + "' name='" + data[i].music_name + "'>Delete Music</button></td>");
                            row.append("</tr>");
                            table.append(row);
                        }
                        table.append("</table>")
                        $("#music-area").prepend(table)
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