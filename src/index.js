const addEl = document.querySelector("#add");
const clearEl = document.querySelector("#clear");
const tBodyEl = document.querySelector("tbody");
const tHeadEl = document.querySelector("thead");
const thEl = document.querySelector("th");
const nameEl = document.querySelector("#name");
const profileEl = document.querySelector("#profilePicture");
const countryEl = document.querySelector("#country");
const cityEl = document.querySelector("#city");
const phoneEl = document.querySelector("#phone");
const urlEl = document.querySelector("#linkedin");
const skillEl = document.querySelector("#skillsDropdown");
const resEl = document.querySelector("#skillsSearch");
const formEl = document.querySelector("#resumeForm");
const inputEl = document.querySelectorAll("input");
const clearAllData = document.querySelector("#clearAllData");

// const actionsEl=document.querySelector("")
// console.log(nameEl.value);
addEl.addEventListener("click", () => {
  let tableRow = document.createElement("tr");
  let tdata = document.createElement("td");
  let picdata = document.createElement("td");
  let countrydata = document.createElement("td");
  let citydata = document.createElement("td");
  let phonedata = document.createElement("td");
  let urldata = document.createElement("td");
  let skilldata = document.createElement("td");
  let resdata = document.createElement("td");
  let actiondata = document.createElement("button");

  picdata.innerText = "";
  tdata.innerText = nameEl.value;
  countrydata.innerText = countryEl.value;
  citydata.innerText = cityEl.value;
  phonedata.innerText = phoneEl.value;
  urldata.innerText = urlEl.value;
  skilldata.innerText = skillEl.value;
  actiondata.innerText = "Delete";

  tableRow.appendChild(picdata);
  tableRow.appendChild(tdata);
  tableRow.appendChild(countrydata);
  tableRow.appendChild(citydata);
  tableRow.appendChild(phonedata);
  tableRow.appendChild(urldata);
  tableRow.appendChild(skilldata);
  tableRow.appendChild(resdata);
  resdata.appendChild(actiondata);
  tBodyEl.appendChild(tableRow);
  actiondata.addEventListener("click", () => {
    tableRow.remove();
  });
});
// function searchSkills() {
//   const skillsEl = document.getElementById("skillsList");
//   skillsArray.forEach((skill) => {
//     const div = document.createElement("div");
//     div.innerText = skill;
//     div.onclick = function () {
//       checkSkill(div, skill);
//     };
//     skillsEl.appendChild(div);
//   });
// }

// function checkSkill(div, skill) {
//   if (selectedSkills.includes(skill)) {
//     selectedSkills.splice(selectedSkills.indexOf(skill, 1));
//     div.style.backgroundColor = "";
//   } else {
//     selectedSkills.push(skill);
//     div.style.backgroundColor = "grey";
//   }
//   document.getElementById("skillsSearch").value = selectedSkills.join(", ");
// }
// console.log(searchSkills());
// clearEl.addEventListener("click", () => {
//   formEl.reset();
// });
// clearAllData.addEventListener("click", () => {
//   tBodyEl.remove();
// });
// skillSearch.addEventListener("click", () => {});
// const skillsArray = [
//   "JavaScript",
//   "Python",
//   "Java",
//   "CSS",
//   "HTML",
//   "React",
//   "Node.js",
//   "SQL",
// ];
// const selectedSkills = [];

// function populateSkillsDropdown() {
//   const skillsList = document.getElementById("skillsList");

//   skillsArray.forEach((skill) => {
//     const div = document.createElement("div");
//     div.innerText = skill;
//     div.onclick = function () {
//       toggleSkillSelection(div, skill);
//     };
//     skillsList.appendChild(div);
//   });
// }

// function toggleSkillSelection(div, skill) {
//   if (selectedSkills.includes(skill)) {
//     selectedSkills.splice(selectedSkills.indexOf(skill), 1);
//     div.style.backgroundColor = "";
//   } else {
//     selectedSkills.push(skill);
//     div.style.backgroundColor = "#e0e0e0";
//   }
//   document.getElementById("skillsSearch").value = selectedSkills.join(", ");
// }

// function filterSkills() {
//   const filter = document.getElementById("skillsSearch").value.toLowerCase();
//   const divs = document.getElementById("skillsList").childNodes;
//   divs.forEach((div) => {
//     if (div.innerText.toLowerCase().includes(filter)) {
//       div.style.display = "";
//     } else {
//       div.style.display = "none";
//     }
//   });
// }

// document.getElementById("skillsSearch").onfocus = function () {
//   document.getElementById("skillsList").style.display = "block";
// };

// document.body.onclick = function (e) {
//   if (e.target.id !== "skillsSearch" && e.target.id !== "skillsList") {
//     document.getElementById("skillsList").style.display = "none";
//   }
// };

// const skillsSearchInput = document.getElementById("skillsSearch");
// skillsSearchInput.addEventListener("input", filterSkills);

// populateSkillsDropdown();

// const searchEl = document.getElementById("skillsSearch");
const skillsArray = ["JavaScript", "C++", "Python", "SQL", "HTML", "CSS"];
const selectedSkills = [];
function createDiv() {
  const listEl = document.getElementById("skillsList");
  skillsArray.forEach((skill) => {
    const div = document.createElement("div");
    div.innerText = skill;
    div.onclick = function () {
      checkSkill(div, skill);
    };
    listEl.appendChild(div);
  });
}
function checkSkill(div, skill) {
  if (selectedSkills.includes(skill)) {
    selectedSkills.splice(selectedSkills.indexOf(skill), 1);
    div.style.backgroundColor = "";
  } else {
    selectedSkills.push(skill);
    div.style.backgroundColor = "grey";
  }
  document.getElementById("skillsSearch").value = selectedSkills.join(" , ");
}
createDiv();

//1.. getElement
//2..div create
//3..innerText
//4..run on these all divs function on click
//5.. another function (div,skill)
//6..append and join lists

//----------------

//1..filter skills function
//2..will con
function checkCase() {
  const searchEl = document.getElementById("skillsSearch");
  const lowerCase = searchEl.value.toLowerCase();
  const skillListEl = document.getElementById("skillsList").childNodes;
  skillListEl.forEach((div) => {
    let tolCase = div.innerText.toLowerCase();
    if (tolCase.includes(lowerCase)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

document.getElementById("skillsSearch").onfocus = function () {
  document.getElementById("skillsList").style.display = "block";
};
const bodyEl = document.querySelector("body");
bodyEl.onclick = function (click) {
  if (click.target.id !== "skillsSearch" && click.target.id !== "skillsList") {
    document.getElementById("skillsList").style.display = "none";
  }
};
document.getElementById("skillsSearch").addEventListener("input", checkCase);
createDiv();
