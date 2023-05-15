function submitForm() {
  let x = "";
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let email = document.getElementById("emailadd").value;
  let cont = document.getElementById("reason").value;
  if (first != x && last != x && email != x && cont != x) {
    alert("Form Submitted Succesfully");
  }
}
