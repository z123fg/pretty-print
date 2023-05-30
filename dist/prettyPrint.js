import "../index.css";
function syntaxHighlight(json) {
    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = "key";
            }
            else {
                cls = "string";
            }
        }
        else if (/true|false/.test(match)) {
            cls = "boolean";
        }
        else if (/null/.test(match)) {
            cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
    });
}
var prettyPrint = function (inspectEl) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    //const inspectEl = document.querySelector("#inspect");
    inspectEl = inspectEl !== null && inspectEl !== void 0 ? inspectEl : document.querySelector("#inspect");
    inspectEl && (inspectEl.innerHTML = "");
    objs.forEach(function (obj) {
        var ele = document.createElement("pre");
        var prettyJSON = syntaxHighlight(JSON.stringify(obj, null, 4));
        ele.innerHTML = prettyJSON;
        inspectEl === null || inspectEl === void 0 ? void 0 : inspectEl.appendChild(ele);
    });
    /*  const prettyJSON = syntaxHighlight(JSON.stringify(obj, null, 4)) ;
    console.log("pretty",prettyJSON)
    inspetEl.innerHTML=`${prettyJSON}`; */
};
export default prettyPrint;
