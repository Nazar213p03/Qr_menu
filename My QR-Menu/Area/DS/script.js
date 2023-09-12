function showItemDetails(photoUrl, name, description, price) {
  var newItemWindow = window.open("", "_blank", "width=400,height=400");
  newItemWindow.document.write(
    "<html><head><title>Деталі позиції</title></head><body>"
  );
  newItemWindow.document.write(
    "<img src='" + photoUrl + "' alt='" + name + "'><br>"
  );
  newItemWindow.document.write("<h2>" + name + "</h2>");
  newItemWindow.document.write("<p>" + description + "</p>");
  newItemWindow.document.write("<p>Ціна: " + price + "</p>");
  newItemWindow.document.write("</body></html>");
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
