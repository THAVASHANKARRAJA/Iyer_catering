const phoneNumber = "9500660829";
const message = "Hi there!! I would like to know more about your services.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default whatsappUrl;