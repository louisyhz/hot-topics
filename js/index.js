// GET THE REFERENCES
let dc = document.querySelector('.dynamic-content');
let links = document.querySelectorAll(".navclick");
let url = './partials/article.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL const loadContent ...
/*loadContent RUNS EVERY TIME A LINK IS CLICKED. loadContent REQUIRES THE INPUT. THIS INPUT IS
THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK. EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
THE UPDATED PATH TO THE REQUESTED CONTENT.
*/

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL const loadContent ...
function loadContent(url) {
// RUN THE fetch(urlFeed).then().then().catch()
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.text();
            }

            //create the eventual error message
            else {
                throw new Error(response.statusText);
            }
        })
        .then(function (html) {
            dc.innerHTML = html;
            
        })
        .catch(function (err) {
            console.log(err.message);
        });
}
// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL: const selectContent ...
function selectContent(ev) {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    ev.preventDefault();
    let clickedLink = ev.target;
    // CALL THE FUNCTION loadContent PROVIDING THE href
    let url = clickedLink.getAttribute('href');
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    // console.log(url);
    loadContent(url);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i++) {
    links[i].onclick = selectContent;
}
