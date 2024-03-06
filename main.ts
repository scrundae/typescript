function Main(insertText: string) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = insertText;
    document.body.appendChild(paragraph);
    let strip = document.createElement("hr");
    document.body.appendChild(strip);
}
Main("This is a paragraph created in TS. TS compiles to JS. Then, a the JS script is added to the html. The browser then reads it. The browser is usually written in something like C, which will then compile to machine code. Then your machine will do many things to read said code. The machine is based off electricity.");
let inputElement = document.getElementById("input1") as HTMLInputElement;
inputElement.value = "This is a paragraph created in TS. TS compiles to JS. Then, a the JS script is added to the html. The browser then reads it. The browser is usually written in something like C, which will then compile to machine code. Then your machine will do many things to read said code. The machine is based off electricity.";
document.getElementById("button1").addEventListener("click", function() {
    Main(inputElement.value);
});

