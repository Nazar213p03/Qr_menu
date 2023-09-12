function showItemDetails(photoUrl, name, description, price) {
  var newItemWindow = window.open("", "_blank", "width=400,height=400");
  newItemWindow.document.write(
    "<html><head><title>Деталі позиції</title>" +
      "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>" +
      "</head><body>" +
      "<div class='card' style='width: 18rem;'>" +
      "<img src='" +
      photoUrl +
      "' class='card-img-top' alt='" +
      name +
      "'>" +
      "<div class='card-body'>" +
      "<h5 class='card-title'>" +
      name +
      "</h5>" +
      "<p class='card-text'>" +
      description +
      "</p>" +
      "<p class='card-text'>Ціна: " +
      price +
      "</p>" +
      "</div></div>" +
      "</body></html>"
  );
  newItemWindow.document.close();
}

function scrollToPosition(position) {
  try {
    var menuItems = document.getElementsByClassName("menu-item");
    var menuItem = menuItems[position];
    menuItem.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.log("Помилка: " + error.message);
  }
}
