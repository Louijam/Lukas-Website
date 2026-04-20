document.addEventListener("DOMContentLoaded", function () {

    const phoneNumber = "4917656093991";
    const message = encodeURIComponent("Hallo, ich habe eine Anfrage zu eurem Autoservice.");

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    new QRCode(document.getElementById("qrcode"), {
        text: whatsappURL,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

});