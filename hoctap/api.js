const btnSubmit = document.forms["form-input"]["btn-submit"];
const txtName = document.forms["form-input"]["name"];
const txtDes = document.forms["form-input"]["description"];
const txtArtist = document.forms["form-input"]["artist"];
const txtAuthor = document.forms["form-input"]["author"];
const txtThumb = document.forms["form-input"]["thumbnail"];
const txtLink = document.forms["form-input"]["link"];


btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    const name = txtName.value;
    const description = txtDes.value;
    const artist = txtArtist.value;
    const author = txtAuthor.value;
    const thumbnail = txtThumb.value;
    const link = txtLink.value;
    const song = {
        name: name,
        description: description,
        artist: artist,
        author: author,
        thumbnail: thumbnail,
        link: link,
    };
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 201) {
            console.log("Create song success!");
        }
    };
    xhr.open(
        "POST", "https://music-i-like.herokuapp.com/api/v1/songs"
    );
    xhr.setRequestHeader("Access-Control-Allow-Origin", "application/json");
    xhr.send(JSON.stringify(song));
    return false;
});
