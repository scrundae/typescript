var Program = /** @class */ (function () {
    function Program() {
    }
    Program.prototype.Main = function () {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = "This is a paragraph created in TS. TS compiles to JS. Then, a the JS script is added to the html. The browser then reads it. The browser is usually written in something like C, which will then compile to machine code. Then your machine will do many things to read said code. The machine is based off electricity.";
        document.body.appendChild(paragraph);
        var strip = document.createElement("hr");
        document.body.appendChild(strip);
    };
    return Program;
}());
var program = new Program;
program.Main();
var inputElement = document.getElementById("input1");
inputElement.value = "This is a paragraph created in TS. TS compiles to JS. Then, a the JS script is added to the html. The browser then reads it. The browser is usually written in something like C, which will then compile to machine code. Then your machine will do many things to read said code. The machine is based off electricity.";
document.getElementById("button1").addEventListener("click", function () {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = inputElement.value;
    document.body.appendChild(paragraph);
    var strip = document.createElement("hr");
    document.body.appendChild(strip);
});
