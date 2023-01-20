blog_url = "https://comradeos.github.io/?page=1";
// blog_url = "file:///C:/Software/OpenServer/domains/comradeos.github.io/index.html?page=1";

params = new URLSearchParams(window.location.search)
page = params.get('page') ? params.get('page') : 1;

if (page == 1) {
    begin = 1; 
} else if (page > 1) {
    begin = (parseInt(page) - 1) * 10 + 1;
} else if (page < 1) {
    window.location.replace(blog_url);
}

end = begin + 9;

GOOGLE_SHEET_DATA = `https://sheets.googleapis.com/v4/spreadsheets/14kAxmAOnmcKzVrMXvDOj5UH9wotudkLg5BgBJZS2vIs/values/A${begin}:B${end}?alt=json&key=AIzaSyAGGbFDiCtylTz0CJuF0gmbtscp_LOsyYI`;

function file_get_contents(url) {
    let request = null;
    try { request = new XMLHttpRequest(); } catch (e) { }
    request.open("GET", url, false);
    request.send(null);
    return JSON.parse(request.responseText).values;
}

posts = file_get_contents(GOOGLE_SHEET_DATA);

try {
    for (let i = 0; i <= posts.length; i++) {    
        let item = posts[i];
        for (let key in item) {
            let value = item[key];
            document.write(value); 
        }
    }
} catch (error) {
    alert("Це все...")
    window.location.replace(blog_url);
}

document.write("<hr><div class=\"posts\">");
document.write(`<a href="?page=${parseInt(page) - 1}">Сюди</a>`);
document.write(`<a href="?page=1">Останнє</a>`);
document.write(`<a href="?page=${parseInt(page) + 1}">Туди</a>`);
document.write("</div>");
