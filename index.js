(function () {window.addEventListener('message', function (e) {
    if (e.origin != "https://experts.ai") return;
    document.getElementById('expertsAiWidget').style.height = e.data + 'px';
}, false);

    window.addEventListener('message', function (e) {
        if (e.origin !== "https://experts.ai") return;
        var data = e.data;
        if (typeof(window[data.function]) == "function") {
            window[data.function].call();
        }
    }, false);
    function scrollUp() {
        var scrollDiv = document.getElementById("expertsWidget").offsetTop; // you may need to subtract header's offsetTop
        window.scrollTo({top: scrollDiv, behavior: 'smooth'});
    }

    const thisPageUrl = new URL( document.location.host + document.location.pathname);

    const searchParam = new URLSearchParams( document.location.search);

    if (searchParam.has('widget')) {
        const path = searchParam.get('widget');
        const url = new URL(path);
        url.searchParams.append('base_url', thisPageUrl.toString());
        document.getElementById('expertsAiWidget').src = url;
    } else {
        const url = new URL(document.getElementById('expertsAiWidget').src);
        url.searchParams.append('base_url', thisPageUrl.toString());
        document.getElementById('expertsAiWidget').src =  url;
    }
    console.log("included");
}());
