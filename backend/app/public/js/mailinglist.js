$(document).ready(function () {

  $.get("/mailinglist/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table id='table_id'><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Date Registered</th><th>Actions</th></tr></thead><tbody>");
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + (i + 1) + "</td>");
        row.append("<td>" + data[i].email_first_name + "</td>");
        row.append("<td>" + data[i].email_last_name + "</td>");
        row.append("<td>" + data[i].email_address + "</td>");
        if (data[i].email_date_registered != null) {
          row.append("<td>" + data[i].email_date_registered + "</td>");
        } else {
          row.append("<td></td>");
        }
        row.append("<td><button class='delete' value='" + data[i].email_id + "'>Remove</button></td>");
        table.append(row);
      }
      table.append("</tbody></table>")
      $("#email-area").prepend(table);
      $("#table_id").DataTable();
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
            let table = $("<table id='table_id'><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Date Registered</th><th>Actions</th></tr></thead><tbody>");
            for (let i = 0; i < data.length; i++) {
              let row = $("<tr>");
              row.append("<td>" + (i + 1) + "</td>");
              row.append("<td>" + data[i].email_first_name + "</td>");
              row.append("<td>" + data[i].email_last_name + "</td>");
              row.append("<td>" + data[i].email_address + "</td>");
              if (data[i].email_date_registered != null) {
                row.append("<td>" + data[i].email_date_registered + "</td>");
              } else {
                row.append("<td></td>");
              }
              row.append("<td><button class='delete' value='" + data[i].email_id + "'>Remove</button></td>");
              table.append(row);
            }
            table.append("</tbody></table>")
            $("#email-area").prepend(table)
            $("#table_id").DataTable();
          }
        });
      }
    })
  })

  $("#excel").on('click', function () {
    $.get("/mailinglist/excel", function (data) {
      console.log(data)
    })
    window.open("MailingList.xls");
  })
});