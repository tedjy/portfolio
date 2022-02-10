// ecouteeur d'evenement
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
// contenur de ma side
const SideContent = document.querySelector(".img");
// mon title
const SideTitle = document.querySelector(".sidebar-header h1");
// contenu de l'image
const img = document.querySelector(".img img");
// mon nom et prenom
const Name = document.querySelector(".name");
//  mes bouttons
const contentBtn = document.querySelector(".btn");
// monfooter et mes icons
const footer = document.querySelector(".icon");
// mon slide

const slideProject = document.querySelector(".slider-container");
// ecouteeur d'evenement

toggleBtn.addEventListener("click", function () {
  if (slideProject.classList.toggle("slider-contains")) {
    slideProject.style.display = "none";
  } else {
    slideProject.style.display = "block";
  }

  sidebar.classList.toggle("show-sidebar");
  sidebar.style.position = "fixed";
  sidebar.style.backgroundColor = "#fcf5c7";

  // contenur de ma side

  SideContent.style.display = "flex";
  SideContent.style.flexDirection = "column";
  SideContent.style.textAlign = "center";

  // mon title

  SideTitle.style.backgroundColor = "#1b512d";
  SideTitle.style.textAlign = "center";
  SideTitle.style.width = "90%";
  SideTitle.style.color = "white";

  // nom et prenom
  Name.style.fontWeight = "700";
  Name.style.fontSize = "x-large";

  //   mes bouttons

  contentBtn.style.display = "10px";
  contentBtn.style.fontSize = "large";

  //   mon footer
  footer.style.display = "flex";
  footer.style.justifyContent = "space-around";
  footer.style.padding = "5px";
  footer.style.margin = "10px";
  footer.style.backgroundColor = "#1b512d";
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  slideProject.classList.remove("slider-contains");
  slideProject.style.display = "block";
});
