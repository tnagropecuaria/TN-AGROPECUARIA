const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const interest = String(data.get("interest") || "").trim();
  const message = String(data.get("message") || "").trim();

  const text = encodeURIComponent([
    "Olá, vim pelo site da TN AGROPECUÁRIA.",
    name ? `Meu nome: ${name}.` : "",
    interest ? `Interesse: ${interest}.` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n"));

  window.location.href = `https://wa.me/5522992718590?text=${text}`;
});
