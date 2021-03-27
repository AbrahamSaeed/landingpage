/*---------------------
1-creation of section 4
----------------------*/

//A- headtitle text
const h2Txt = document.createTextNode("section 4");
//B- the 1st and 2nd paragragh text
const p1Txt = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
);
const p2Txt = document.createTextNode(
  "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
);
//C- creation of the elemnts of section 4
const h2Elmnt = document.createElement("h2");
const p1Elmnt = document.createElement("p");
const p2Elmnt = document.createElement("p");
//D- appending elements to the texts related to it
h2Elmnt.appendChild(h2Txt);
p1Elmnt.appendChild(p1Txt);
p2Elmnt.appendChild(p2Txt);
//E- creation of the container
const divElmnt = document.createElement("div");
divElmnt.setAttribute("class", "landingContainer");
//F- appending the elements that been created above to the container
divElmnt.appendChild(h2Elmnt);
divElmnt.appendChild(p1Elmnt);
divElmnt.appendChild(p2Elmnt);
//G- creation of the section 4
const sectionElmnt = document.createElement("section");
sectionElmnt.setAttribute("id", "Section4");
sectionElmnt.setAttribute("data-nav", "Section 4");
//H- appending the container to section 4
sectionElmnt.appendChild(divElmnt);
//I- main element representer
const mainElmnt = document.querySelector("main");
//J- appending section 4 to the main element
mainElmnt.appendChild(sectionElmnt);

/*-------------
end of creation
-------------*/

/*-------------------------
2- creation of nav-bar menu
--------------------------*/

//A- All sections representers
const sectionElmnts = document.querySelectorAll("section");
//B- fragment document
const fragmentDoc1 = document.createDocumentFragment();
//C- unorderd list represnter
const ulElmnt = document.querySelector("ul");
//D- creation of the lists items and its anchore
sectionElmnts.forEach(function (elmnt) {
  let aElmnt = document.createElement("a");
  let liElmnt = document.createElement("li");
  let aId = elmnt.getAttribute("id");
  aElmnt.innerHTML = elmnt.getAttribute("data-nav");
  aElmnt.setAttribute("href", `#${aId}`);

  //E- appending anchores to the list items
  liElmnt.appendChild(aElmnt);
  //F- appending the list items to the fragment document
  fragmentDoc1.appendChild(liElmnt);
});
//G- appending the list items to the unordered list
ulElmnt.appendChild(fragmentDoc1);

/*-------------
end of creation
-------------*/

/*-------------------------------
3- helper function of making sure 
that the section is in viewport
--------------------------------*/

function inViewPort(elem) {
  sectionPosition = elem.getBoundingClientRect();
  return sectionPosition.top >= 0, sectionPosition.top <= 200;
}

/*-----------------------------------------
4- dynamic adding and removing 
"yourActiveClass"to the section in viewport
------------------------------------------*/
function sectionIsActive() {
  for (sec of sectionElmnts) {
    if (inViewPort(sec)) {
      if (!sec.classList.contains("yourActiveClass")) {
        sec.classList.add("yourActiveClass");
      } else {
        sec.classList.remove("youeActiveClass");
      }
    }
  }
}
/*---------------------------------------
5- dynamic adding and removing 
"menuLink"to the the nav-bar menu
----------------------------------------*/
let liElmnts = document.querySelectorAll("li");
function navBarIsActive() {
  for (li of liElmnts) {
    if (inViewPort(sec)) {
      if (!li.classList.contains("menuLink")) {
        li.classList.add("menuLink");
      } else {
        li.classList.remove("menuLink");
      }
    }
  }
}
/*----
events
-----*/

window.onload = navBarIsActive();
onscroll = sectionIsActive();
