document.getElementById("form").addEventListener("submit", async function(event) {
  event.preventDefault();
  const name = document.getElementById("inputName").value;
  const contact = document.getElementById("inputContact").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  const data = { inputName: name, inputContact: contact, inputEmail: email, inputPassword: password };
  const response = await fetch("form.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await response.text();
  console.log(result);
});
