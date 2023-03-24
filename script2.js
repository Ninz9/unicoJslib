const thisPageUrl = new URL(document.location.protocol + document.location.host + document.location.pathname);
console.log(thisPageUrl.toString());
const searchParam = new URLSearchParams(document.location.search);

if (searchParam.has('widget')) {
    const path = searchParam.get('widget');
    const url = new URL(path);
    url.searchParams.append('base_url', thisPageUrl.toString());
    document.getElementById('expertsAiWidget').src = url;
} else {
    const url = new URL(document.getElementById('expertsAiWidget').src);
    url.searchParams.append('base_url', thisPageUrl.toString());
    document.getElementById('expertsAiWidget').src = url;
}
console.log("included");

