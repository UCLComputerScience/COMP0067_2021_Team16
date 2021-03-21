$(document).ready(function () {

  $.get("/mailinglist/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table><tr><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Date Registered</th><th>Actions</th></tr>");
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        let tempDate = data[i].email_date_registered.split(/[T - :]/);
        row.append("<td>" + data[i].email_first_name + "</td>");
        row.append("<td>" + data[i].email_last_name + "</td>");
        row.append("<td>" + data[i].email_address + "</td>");
        row.append("<td>" + tempDate[0] + " at " + tempDate[1] + ":" + tempDate[2] + "</td>");
        row.append("<td><button class='delete' value='" + data[i].email_id + "'>Remove</button></td>");
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
            let table = $("<table><tr><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Date Registered</th><th>Actions</th></tr>");
            for (let i = 0; i < data.length; i++) {
              let row = $("<tr>");
              let tempDate = data[i].email_date_registered.split(/[T - :]/);
    
              row.append("<td>" + data[i].email_first_name + "</td>");
              row.append("<td>" + data[i].email_last_name + "</td>");
              row.append("<td>" + data[i].email_address + "</td>");
              row.append("<td>" + tempDate[0] + " at " + tempDate[1] + ":" + tempDate[2] + "</td>");
              row.append("<td><button class='delete' value='" + data[i].email_id + "'>Remove</button></td>");
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