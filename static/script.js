const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");

const docDate = document.getElementById("date");

const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
const array = [span1, span2, span3];

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");


// function fulfillContent(data, count= 0) {
//
//     if (count > data.length) {
//         alert('alert');
//     }
//
//     let img = document.createElement('img');
//     img.src = data[count].image;
//     img.alt = "Card's photo";
//     header.innerHTML = '';
//     header.appendChild(img);
//
//     title.innerHTML = data[count].title;
//     excerpt.innerHTML = data[count].body;
//
//     let img2 = document.createElement('img');
//     img2.src = data[count].author.image;
//     img2.alt = "Card's photo";
//     profile_img.innerHTML = '';
//     profile_img.appendChild(img2);
//
//     name.innerHTML = data[count].author.name;
//
//     let date = new Date(data[count].date);
//     let day = date.getDate();
//     let month = '0' + date.getMonth();
//     let year = date.getFullYear();
//
//     docDate.innerHTML = '' + day + '.' + month+ '.' + year;
//
//     count++
// }


function getData() {
    $.get("http://127.0.0.1:8000/api/cards/", function(data) {
        console.log(data);

        // fulfillContent(data);

        let img = document.createElement('img');
        img.src = data[0].image;
        img.alt = "Card's photo";
        header.innerHTML = '';
        header.appendChild(img);

        title.innerHTML = data[0].title;
        excerpt.innerHTML = data[0].body;

        let img2 = document.createElement('img');
        img2.src = data[0].author.image;
        img2.alt = "Card's photo";
        profile_img.innerHTML = '';
        profile_img.appendChild(img2);

        name.innerHTML = data[0].author.name;

        let date = new Date(data[0].date);
        let day = date.getDate();
        let month = '0' + date.getMonth();
        let year = date.getFullYear();

        docDate.innerHTML = '' + day + '.' + month+ '.' + year;
    });

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}



function newData() {
    animated_bgs.forEach(bg => bg.classList.add('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.add('animated-bg-text'));

    header.innerHTML = '';
    title.innerHTML = '';
    excerpt.innerHTML = '';

    for (var i = 0; i < array.length; i++) {
        array[i].className = 'animated-bg animated-bg-text';
        excerpt.appendChild(array[i])
    }

    profile_img.innerHTML = '';
    name.innerHTML = '';
    docDate.innerHTML = '';

    setTimeout(getData, 2500);
}

setTimeout(getData, 2500);
