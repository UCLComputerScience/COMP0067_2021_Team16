function displayResults(data) {
  console.log(data);
  let $tbody = $('tbody');
  $tbody.empty();
  for (let i = 0; i < data.length; i++) {
    let $tr = $("<tr>");
    $tr.append('<td>' + data[i].slideshow_id + '</td>');
    $tr.append('<td>' + data[i].slideshow_name + '</td>');
    $tr.append('<td>' + data[i].slideshow_images + '</td>');
    $tbody.append($tr);
  }
}

$.getJSON("/all", function (data) {
  displayResults(data);
});
