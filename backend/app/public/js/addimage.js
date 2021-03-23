$(document).ready(function () {
  document.querySelector("#filetag").addEventListener("change", function () {
    const reader = new FileReader();
    document.getElementById('form').addEventListener("submit", () => {
      // localStorage.setItem(this.files[0].name, reader.result);
      uploadFiles(this.files[0]);
    })
    reader.readAsDataURL(this.files[0]);
  })
  const accountName = "babyobjectstorage";
  const sasString = "?sv=2020-02-10&ss=b&srt=c&sp=rwdlacx&se=2021-05-02T03:25:31Z&st=2021-03-22T19:25:31Z&spr=https&sig=jeNHwuQ0LeJ162CZS6KehGaGbhci8Rni5hUUv6uHp0M%3D";
  const containerName = "babyblob";
  const containerURL = new azblob.ContainerURL(
    `https://${accountName}.blob.core.windows.net/${containerName}?${sasString}`,
    azblob.StorageURL.newPipeline(new azblob.AnonymousCredential));

  const listFiles = async () => {
    fileList.size = 0;
    fileList.innerHTML = "";
    try {
      reportStatus("Retrieving file list…");
      let marker = undefined;
      do {
        const listBlobsResponse = await containerURL.listBlobFlatSegment(
          azblob.Aborter.none, marker);
        marker = listBlobsResponse.nextMarker;
        const items = listBlobsResponse.segment.blobItems;
        for (const blob of items) {
          fileList.size += 1;
          fileList.innerHTML += `<option>${blob.name}</option>`;
        }
      } while (marker);
      if (fileList.size > 0) {
        reportStatus("Done.");
      } else {
        reportStatus("The container does not contain any files.");
      }
    } catch (error) {
      reportStatus(error.body.message);
    }
  };

  const uploadFiles = async (file) => {
    try {
      reportStatus("Uploading files…");
      const promises = [];
      // for (const file of fileInput.files) {
      console.log('file url', `https://${accountName}.blob.core.windows.net/${containerName}/${file.name}${sasString}`)
      console.log('file', file)
      const blockBlobURL = azblob.BlockBlobURL.fromContainerURL(
        containerURL,
        file.name
      );
      promises.push(
        azblob.uploadBrowserDataToBlockBlob(
          azblob.Aborter.none,
          file,
          blockBlobURL
        )
      );
      // }
      await Promise.all(promises);
      reportStatus(res => {
        console.log('res', res)
      })
      reportStatus("Done.");
      listFiles();
    } catch (error) {
      reportStatus(error.body.message);
    }
  };
  // selectButton.addEventListener("click", () => fileInput.click());
  // fileInput.addEventListener("change", uploadFiles);

  $.get("/images/all", function (data) {
    if (data.length !== 0) {
      let table = $("<table><tr><th>ID</th><th>Name</th><th>Narration</th><th>Image</th><th>Audio</th><th>Actions</th></tr>");
      for (let i = 0; i < data.length; i++) {
        let row = $("<tr>");
        row.append("<td>" + data[i].image_id + "</td>");
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
              row.append("<td>" + data[i].image_id + "</td>");
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