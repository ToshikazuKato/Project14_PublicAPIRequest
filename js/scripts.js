//create Form html structure
function createForm(){
  //<form action="#" method="get"></form>
  const form = document.createElement('form');
  form.setAttribute('action','#');
  form.setAttribute('method','get');

  //<input type="search" id="search-input" class="search-input" placeholder="Search...">
  const input1 = document.createElement('input');
  input1.id = 'search-input';
  input1.classList.add('search-input');
  input1.setAttribute('type', 'search');
  input1.setAttribute('placeholder', 'Search...');

  //<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
  const input2 = document.createElement('input');
  input2.id = 'search-submit';
  input2.classList.add('search-submit');
  input2.setAttribute('type', 'submit');
  input2.setAttribute('value', '🔍');

  form.appendChild(input1);
  form.appendChild(input2);
  document.getElementsByClassName('search-container')[0].appendChild(form);

}

//create Gallery html structure
function createGallery(){
  //append card div to gallery div
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  document.getElementById('gallery').appendChild(cardDiv);

  // <div class="card-img-container">
  //     <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
  // </div>
  const cardImgContainerDiv = document.createElement('div');
  cardImgContainerDiv.classList.add('card-img-container');

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.setAttribute('alt', 'profile picture');
  img.setAttribute('src', 'https://placehold.it/90x90');

  cardImgContainerDiv.appendChild(img);
  cardDiv.appendChild(cardImgContainerDiv);

  // <div class="card-info-container">
  //     <h3 id="name" class="card-name cap">first last</h3>
  //     <p class="card-text">email</p>
  //     <p class="card-text cap">city, state</p>
  // </div>
  const cardInfoContainerDiv = document.createElement('div');
  cardInfoContainerDiv.classList.add('card-info-container');

  const h3 = document.createElement('h3');
  h3.id = 'name';
  h3.classList.add('card-name');
  h3.classList.add('cap');
  h3.innerHTML += 'first last';

  const pEmail = document.createElement('p');
  pEmail.classList.add('card-text');
  pEmail.innerHTML += 'email';

  const pCity = document.createElement('p');
  pCity.classList.add('card-text');
  pCity.innerHTML += 'city, state';

  cardInfoContainerDiv.appendChild(h3);
  cardInfoContainerDiv.appendChild(pEmail);
  cardInfoContainerDiv.appendChild(pCity);
  cardDiv.appendChild(cardInfoContainerDiv);

}

//connecting to API
const connectToAPI = () => {
  fetch('https://randomuser.me/api/')
  .then( res => res.json())
  .then( data => {
    console.log(data);
    getData(data.results);
  })
};

//fetch data and add it into appropreate elements
function getData(data){
  //img part, get img
  const img = document.getElementsByClassName('card-img')[0];
  img.setAttribute('src', data[0].picture.large);
  console.log(data[0].picture.thumbnail);
}

createForm();
createGallery();
connectToAPI();
