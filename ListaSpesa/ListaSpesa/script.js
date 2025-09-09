function addItem() {
  let input = document.getElementById("itemInput");
  let value = input.value.trim();

  if (value === "") return;

  let ul = document.getElementById("shoppingList");
  let li = document.createElement("li");

  // testo prodotto
  let span = document.createElement("span");
  span.textContent = value;
  span.onclick = function() {
    li.classList.toggle("done");
  };

  // bottone rimuovi
  let btn = document.createElement("button");
  btn.textContent = "✖";
  btn.onclick = function() {
    ul.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);

  input.value = "";
}
