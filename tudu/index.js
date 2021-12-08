const darklight = document.getElementById("darklight");
darklight.addEventListener("click", (e) => {
  const body = document.body;
  const container = document.querySelector(".container");
  body.classList.toggle("dark");
  container.classList.toggle("dark");
  e.target.innerText === "Dark" ? e.target.innerText = "Light" :  e.target.innerText = "Dark";
});

const add = document.getElementById("add");
add.addEventListener("click", (e) => {
  let inputval = document.getElementById("write");
  let useval = inputval.value;
  if (useval === "") {
    alert("write somthing");
  } else {
    const list = document.querySelector(".list");
    const li = document.createElement("li");
    let liHTML = `  <samp class="ilvalw style="text-transform: uppercase;" capitalize">${useval}</samp>
                      <div class="btns">
                        <button  type="button" class="btn_done libtn"   ">Done
                        </button>
                        <button type="button" class="btn_remove libtn" ">Remove</button>
                      </div>`;
    li.innerHTML += liHTML;
    list.append(li);
    inputval.value = "";
 
  }
});

const list = document.querySelector(".list");
list.addEventListener("click", (e) => {
  if (e.target.classList[0] === "btn_done") {
    e.target.parentNode.previousElementSibling.style.textDecoration =
      "line-through";
    e.target.parentNode.parentNode.style.backgroundColor = "#cececc1f";
  }
  if (e.target.classList[0] === "btn_remove") {
    e.target.parentNode.parentNode.remove();
  }
});
function myFunction(x) {
  x.classList.toggle("change");
  const btngroup = document.querySelector(".btnheadGroup");
  if (btngroup.style.display === "flex") {
    btngroup.style.display = "none";
  } else {
    btngroup.style.display = "flex";
  }
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const subbtn = document.getElementById("subbtn");

subbtn.addEventListener("click", () => {
  const name = document.getElementById("name");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let namevalue = name.value;
  let mobilevalue = mobile.value;
  let emailvalue = email.value;
  let passwordvalue = password.value;
  console.log(namevalue, mobilevalue, emailvalue, passwordvalue);
  namevalue = "";
  mobilevalue = "";
  emailvalue = "";
  passwordvalue = "";
});
