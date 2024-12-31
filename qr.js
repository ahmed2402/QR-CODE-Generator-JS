
let qr= document.querySelector(".qr");
let qrimg= document.querySelector(".qrImg");
let qrText = document.querySelector(".qrText");
let btn = document.querySelector(".btn")

const genQr = () => {
    if (qrText.value.trim() === "") {
        alert("Please enter text or a URL to generate a QR code.");
        return;
    }
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    qr.classList.add("showimg")
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    qrText.value = "";
    qrimg.src = "";
    qr.classList.remove("showimg");

});

btn.addEventListener("click", () => {
    genQr();
});

clearBtn.addEventListener("click", clearBtn() );
