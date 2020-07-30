import m from "mithril";
import jquery from 'jquery'
window.$ = jquery
window.jQuery = jquery
import "md-time-picker/mdtimepicker.min.css"

require("md-time-picker/mdtimepicker");

var test = {
    oninit: () => {

    },
    oncreate:() => {
        $('#picker1').mdtimepicker({ format: 'hh:mm' }).data('mdtimepicker');
    },
    view: () => {
        return m("div", [
            m("input", {id: "picker1", type: "text", value: "00:00"}, ""),
        ])
    }
}

m.route(document.getElementById("app"), "", {
    "/": test,
});
