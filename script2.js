function calculate() {
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  if (quantity <= 0) {
    document.getElementById("quantityError").innerHTML =
      "Quantity must be at least 1";
    document.getElementById("bill").value = 0;
    document.getElementById("button").style.display = "none";
  } else {
    document.getElementById("quantityError").innerHTML = "";
    document.getElementById("bill").value = price * quantity;
    document.getElementById("button").style.display = "inline";
  }

  return false;
}

function checkBill() {
  alert("Product added to cart!");
  return false;
}