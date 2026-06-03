function WhatsAppButton() {
  const phoneNumber = "923315758299";
  const message =
    "Hello Sohaib, I visited your portfolio and would like to contact you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsappButton"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsappIcon">☎</span>
      <span className="whatsappText">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;