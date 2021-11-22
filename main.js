

window.addEventListener("DOMContentLoaded", init);

function init() {
    window.onerror = function(msg) {
        console.log(`An error was caught!`);
    }
    const buttons = document.querySelectorAll("button");
    buttons.forEach(element => {
        element.addEventListener('click', errorButtons);
    });
}

function errorButtons(e) {
    //console.log(e.srcElement.innerText);
    switch(e.srcElement.innerText) {
        case "Console Log":
            console.log("You've logged a statement");
            break;
        case "Console Count":
            console.count();
            break;
        case "Console Warn":
            console.warn('warn');
            break;
        case "Console Assert":
            const x = 10;
            const y = 15;
            const explain = 'x is less than y';
            console.assert(x < y, {x, y, explain});
            break;
        case "Console Clear":
            console.clear();
            break;
        case "Console Dir":
            console.dir(document.head);
            break;
        case "Console dirxml":
            console.dirxml(document);
            break;
        case "Console Group Start":
            console.group("Elements of this document");
            break;
        case "Console Group End":
            console.groupEnd("Elements of this document");
            break;
        case "Console Table":
            console.table(
                {
                  first: 'Serina',
                  last: 'Khanna'
                });
            break;
        case "Start Timer":
            console.time();
            break;
        case "End Timer":
            console.timeEnd();
            break;
        case "Console Trace":
            console.trace();
            break;
        case "Trigger a Global Error":
            TrackJS.track('Testing TrackJS!');
            break;
        case "Console Error":
            console.error("Error!");
        case "Calculate":
            try {
                const one = parseFloat(document.getElementById("first-num").innerText);
                const two = parseFloat(document.getElementById("second-num").innerText);

                let output = document.querySelector("output");

                console.log(document.getElementById("operator").value);
                switch(document.getElementById("operator").value) {
                    case("+"):
                        //console.log("no error yet");
                        output.innerText = one + two;
                        //console.log(" error yet");
                        break;
                    case("*"):
                        output.innerText = one * two;
                        break;
                    case("-"):
                        output.innerText = one - two;
                        break;
                    case("/"):
                        output.innerText = one / two;
                        break;
                }
            } catch(e) {
                console.log("Incorrect input");
            } finally {
                if (output.innerText == 0)
                    throw new customError("Why 0 smh");
            }
            break;
        default:
            console.log(null);
    }
}

class customError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "throwing custom error!"; // (2)
    }
}
  