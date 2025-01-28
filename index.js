class Button {
    constructor(site) {
        this.site = site;
    }

    clicked() {
        window.location.href = this.site;
    }
}

let https = "https://";

let btn1 = new Button(https + "github.com");
let btn2 = new Button(https + "youtube.com");
let btn3 = new Button(https + "figma.com");
let btn4 = new Button(https + "web.whatsapp.com");

// Search button event listener
document.querySelector(".searchBtn").addEventListener("click", () => {
    let textInput = document.querySelector(".inputArea").value;
    window.location.href = `https://duckduckgo.com/?q=${textInput}`;
});

// Button event listeners
document.querySelector(".btn1").addEventListener("click", () => {
    btn1.clicked();
})

document.querySelector(".btn2").addEventListener("click", () => {
    btn2.clicked();
})

document.querySelector(".btn3").addEventListener("click", () => {
    btn3.clicked();
})

document.querySelector(".btn4").addEventListener("click", () => {
    btn4.clicked();
})
// Enter key event listener
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.querySelector(".searchBtn").click();
    }
});
