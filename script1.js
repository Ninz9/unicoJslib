window.addEventListener('message', function (e) {
    if (e.origin != "https://experts.ai") return;
    document.getElementById('expertsAiWidget').style.height = e.data + 'px';
}, false);

window.addEventListener('message', function (e) {
    if (e.origin !== "https://experts.ai") return;
    var data = e.data;
    if (typeof (window[data.function]) == "function") {
        window[data.function].call();
    }
}, false);

function scrollUp() {
    var scrollDiv = document.getElementById("expertsWidget").offsetTop; // you may need to subtract header's offsetTop
    window.scrollTo({top: scrollDiv, behavior: 'smooth'});
}

console.log("included1");
