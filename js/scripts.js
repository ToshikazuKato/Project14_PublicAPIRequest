//the number of list for users
const listNum = 12;
let dataArr = [];
//connecting to API
const connectToAPI = (i) => {
  fetch('https://randomuser.me/api/')
  .then( res => res.json())
  .then( data => {
      dataArr.push(data.results);
      userDataForGallery(dataArr, i);
  })
};

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
  pEmail.classList.add('email');
  pEmail.innerHTML += 'email';

  const pCity = document.createElement('p');
  pCity.classList.add('card-text');
  pCity.classList.add('cap');
  pCity.innerHTML += 'city, state';

  cardInfoContainerDiv.appendChild(h3);
  cardInfoContainerDiv.appendChild(pEmail);
  cardInfoContainerDiv.appendChild(pCity);
  cardDiv.appendChild(cardInfoContainerDiv);

}

//fetch data and add it into appropreate elements
function userDataForGallery(data, i){

  //img part, get img
  const img = document.getElementsByClassName('card-img')[i];
  img.setAttribute('src',data[i][0].picture.large);


  //name
  const name = document.querySelectorAll('div.card-info-container h3#name')[i];
  const nameFromData = data[i][0].name["first"] + " " + data[i][0].name["last"];
  name.innerHTML = nameFromData;

  //email
  const email = document.querySelectorAll('div.card-info-container p.email')[i];
  const emailData = data[i][0].email;
  email.innerHTML = emailData;

  //city,state
  const city = document.querySelectorAll('div.card-info-container p.cap')[i];
  const cityData = data[i][0].location["city"];
  const stateData = data[i][0].location["state"];
  city.innerHTML = cityData + ", " + stateData;

}

//create modal html
function createModal() {
  const divModalContainer = document.createElement("div");
  divModalContainer.classList.add("modal-container");

  const divModal = document.createElement("div");
  divModal.classList.add("modal");

  const btnModal = document.createElement("button");
  btnModal.id = "modal-close-btn";
  btnModal.classList.add("modal-close-btn");
  btnModal.setAttribute("type", "button");

  const strong = document.createElement("strong");
  strong.innerHTML = "X";
  btnModal.appendChild(strong);

  const divModalInfoContainer = document.createElement("div");
  divModalInfoContainer.classList.add("modal-info-container");

  const img = document.createElement("img");
  img.classList.add("modal-img");
  img.setAttribute("alt", "Profile Picture");

  const h3 = document.createElement("h3");
  h3.innerHTML = "name";
  h3.id = "name";
  h3.classList.add('modal-name');
  h3.classList.add('cap');

  const pEmail = document.createElement("p");
  pEmail.classList.add('modal-text');
  pEmail.classList.add('email');

  const pCity = document.createElement("p");
  pCity.classList.add('modal-text');
  pCity.classList.add("city");

  const pTel = document.createElement("p");
  pTel.classList.add('modal-text');
  pTel.classList.add('tel');

  const pAddress = document.createElement("p");
  pAddress.classList.add('modal-text');
  pAddress.classList.add('address');

  const pBirthDate = document.createElement("p");
  pBirthDate.classList.add('modal-text');
  pBirthDate.classList.add('birthdate');

  const hr = document.createElement("ht");

  divModalInfoContainer.appendChild(img);
  divModalInfoContainer.appendChild(h3);
  divModalInfoContainer.appendChild(pEmail);
  divModalInfoContainer.appendChild(pCity);
  divModalInfoContainer.appendChild(hr);
  divModalInfoContainer.appendChild(pTel);
  divModalInfoContainer.appendChild(pAddress);
  divModalInfoContainer.appendChild(pBirthDate);

  divModal.appendChild(btnModal);
  divModal.appendChild(divModalInfoContainer);

  const divModalBtnContainer = document.createElement("div");
  divModalBtnContainer.classList.add("modal-btn-container");

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "Prev";
  prevBtn.id = "modal-prev";
  prevBtn.classList.add('modal-prev');
  prevBtn.classList.add('btn');
  prevBtn.setAttribute("type", "button");

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next";
  nextBtn.id = "modal-next";
  nextBtn.classList.add('modal-next');
  nextBtn.classList.add('btn');
  nextBtn.setAttribute("type", "button")

  divModalBtnContainer.appendChild(prevBtn);
  divModalBtnContainer.appendChild(nextBtn);

  divModalContainer.appendChild(divModal);
  divModalContainer.appendChild(divModalBtnContainer);

  document.querySelector('body').appendChild(divModalContainer);

}

//add modal function for buttons and click event
function modalFunc(){

  const modalContainer = document.querySelector("div.modal-container");
  modalContainer.style.display = "none";

  //display modal when user card is clicked
  const users = Array.from(document.querySelectorAll("div.card"));
  users.map((user, index) => {
    // console.log(users[index]);
    // console.log(user);
    users[index].addEventListener('click', e => {
      //display modal
      const modalContainer = document.querySelector("div.modal-container");
      modalContainer.style.display = "block";

      //get user data and display them in modal
      const imgModal = document.querySelector("img.modal-img");
      imgModal.setAttribute("src",dataArr[index][0].picture.large);

      const name = document.querySelector("div.modal-info-container h3#name");
      name.innerHTML = dataArr[index][0].name.first + " " + dataArr[index][0].name.last;

      const email = document.querySelector("div.modal-info-container p.email");
      email.innerHTML = dataArr[index][0].email;

      const city = document.querySelector("div.modal-info-container p.city");
      city.innerHTML = "City : " + dataArr[index][0].location.city.substr(0,1).toUpperCase()+dataArr[index][0].location.city.substr(1);

      const tel = document.querySelector("div.modal-info-container p.tel");
      tel.innerHTML = "Tel : " + dataArr[index][0].cell;

      const address = document.querySelector("div.modal-info-container p.address");
      address.innerHTML = dataArr[index][0].location.street + ", "
                        + dataArr[index][0].location.state + ", "
                        + dataArr[index][0].location.postcode;

      const birthdate = document.querySelector("div.modal-info-container p.birthdate");
      birthdate.innerHTML = "Birthdate : " + dataArr[index][0].dob.date.substr(0,10);

    });
  })

  //hide modal when close btn is clicked
  const closeBtn = document.getElementById("modal-close-btn");
  closeBtn.addEventListener('click', e => {
     const modalContainer = document.querySelector("div.modal-container");
     modalContainer.style.display = "none";
  });


}

//make run functions
createForm();

for (let i = 0; i < listNum; i++) {
  createGallery();
  connectToAPI(i);
}

createModal();
modalFunc();

console.log(dataArr);
