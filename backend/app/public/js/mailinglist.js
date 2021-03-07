$(document).ready(function () {

  $.get("/mailinglist/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table><tr><th>Email</th><th>Actions</th></tr>");
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + data[i].email + "</td>");
        row.append("<td><button class='delete' value='" + data[i].id + "'>Remove from mailing list</button></td>");
        table.append(row);
      }
      table.append("</table>")
      $("#email-area").prepend(table)
    }
  });

  $(document).on('click', '.delete', function () {
    $.ajax({
      url: "/mailinglist/delete/" + this.value,
      type: 'DELETE',
      success: function (result) {
        $("#email-area").empty()
        $.get("/mailinglist/all", function (data) {
          if (data.length !== 0) {
            let table = $("<table><tr><th>Email</th><th>Actions</th></tr>");
            for (let i = 0; i < data.length; i++) {
              let row = $("<tr>");
              row.append("<td>" + data[i].email + "</td>");
              row.append("<td><button class='delete' value='" + data[i].id + "'>Remove from mailing list</button></td>");
              table.append(row);
            }
            table.append("</table>")
            $("#email-area").prepend(table)
          }
        });
      }
    })
  })

  $("#excel").on('click', function () {
    $.get("/mailinglist/excel", function (data) {
      console.log(data)
    })
    window.open("MailingList.xlsx");
  })
});