params = new URLSearchParams(window.location.search);

GOOGLE_SHEET_DATA = `https://sheets.googleapis.com/v4/spreadsheets/14kAxmAOnmcKzVrMXvDOj5UH9wotudkLg5BgBJZS2vIs/values/quotes?alt=json&key=AIzaSyAGGbFDiCtylTz0CJuF0gmbtscp_LOsyYI`;

function get_quotes(url) {
    let request = null;
    try { request = new XMLHttpRequest(); } catch (e) { }
    request.open("GET", url, false);
    request.send(null);
    return JSON.parse(request.responseText).values;
}

posts = get_quotes(GOOGLE_SHEET_DATA);

row = Math.floor(Math.random() * posts.length-1) + 1;

item = posts[row];
quote = item[0]; // цитата
author = item[1]; // автор
document.write('..."');
document.write(quote);
document.write('"...<p><p class="author">');
document.write(author);
document.write('</p>');