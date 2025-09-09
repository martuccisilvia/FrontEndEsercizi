function calcola() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

  let somma = n1 + n2;
  document.getElementById("risultato").textContent = "Risultato: " + somma;
}
