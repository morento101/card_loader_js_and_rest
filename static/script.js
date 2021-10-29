const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const button = document.getElementById('refresh');

const docDate = document.getElementById("date");

const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
const array = [span1, span2, span3];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

function addAnimatedBg() {
    animated_bgs.forEach(bg => bg.classList.add('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.add('animated-bg-text'));
}

function removeAnimatedBg() {
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

let count = 0;

function fulfillContent(data, count) {
    let jsonData = data.responseJSON;
    let img = document.createElement('img');
    img.alt = "Card's photo";
    header.innerHTML = '';
    header.appendChild(img);
    profile_img.innerHTML = '';
    removeAnimatedBg();

    if (count >= jsonData.length) {
        img.src = '/media/angry-reactions-with-empty-space-background_79603-1025.jpg';
        title.innerHTML = 'There are no more cards';
        excerpt.innerHTML = 'You have watched all cards for today';
        name.innerHTML = '';
        docDate.innerHTML = '';
        button.removeAttribute("onclick");
    }
    else {
        img.src = jsonData[count].image;

        title.innerHTML = jsonData[count].title;
        excerpt.innerHTML = jsonData[count].body;

        let img2 = document.createElement('img');
        img2.src = jsonData[count].author.image;
        img2.alt = "Card's photo";
        profile_img.appendChild(img2);

        name.innerHTML = jsonData[count].author.name;

        let date = new Date(jsonData[count].date);
        let day = date.getDate();
        let month = '0' + date.getMonth();
        let year = date.getFullYear();

        docDate.innerHTML = '' + day + '.' + month+ '.' + year;
    }
}

function getData() {
    return $.get("http://" + window.location.host + "/api/cards/", function(data) {
        console.log(data);
        return data.data
    });
}

function container() {
    fulfillContent(response, count)
    count++
}

function newData() {
    addAnimatedBg();

    header.innerHTML = '';
    title.innerHTML = '';
    excerpt.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        array[i].className = 'animated-bg animated-bg-text';
        excerpt.appendChild(array[i])
    }

    profile_img.innerHTML = '';
    name.innerHTML = '';
    docDate.innerHTML = '';

    setTimeout(container, 2500);
}

let response = getData();

setTimeout(container, 2500);
