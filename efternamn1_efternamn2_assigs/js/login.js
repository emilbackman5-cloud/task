// Giltigt lösenord: minst 8 tecken, minst 2 versaler, minst 1 siffra, minst 1 specialtecken
function validatePassword(pw) {
  const problems = [];
  if (pw.length < 8) problems.push("minst 8 tecken");
  if ((pw.match(/[A-ZÅÄÖ]/g) || []).length < 2) problems.push("minst 2 stora bokstäver");
  if (!/[0-9]/.test(pw)) problems.push("minst 1 siffra");
  if (!/[^A-Za-z0-9ÅÄÖåäö\s]/.test(pw)) problems.push("minst 1 specialtecken");
  return problems;
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pw = document.getElementById("password").value;
  const msg = document.getElementById("message");
  if (!user) {
    msg.className = "error";
    msg.textContent = "Ange ett användarnamn.";
    return;
  }
  const problems = validatePassword(pw);
  if (problems.length === 0) {
    msg.className = "ok";
    msg.textContent = "Lösenordet är giltigt.";
  } else {
    msg.className = "error";
    msg.textContent = "Lösenordet saknar: " + problems.join(", ") + ".";
  }
});
