const sidebar = document.getElementById("sidebar");
const section = document.getElementById("section");
const closeBtn = document.getElementById("closeBtn");
const textSidebarHome = document.getElementById("textSidebarHome");
const textSidebarInbox = document.getElementById("textSidebarInbox");
const arrowIcon = document.getElementById("arrowIcon");
const btnText = document.getElementById("btnText");

closeBtn.addEventListener("click", function () {
  //Jika sidebar tidak ditampilkan
  if (sidebar.style.display !== "none") {
    sidebar.style.display = "none";
    btnText.textContent = "Buka";
    sidebar.style.width = "80px";
    section.style.marginLeft = "80px";
    textSidebarHome.style.display = "none";
    textSidebarInbox.style.display = "none";
    arrowIcon.className = "bi bi-arrow-right";
  } else {
    //Lain jika sidebar ditampilkan
    sidebar.style.display = "block";
    btnText.textContent = "Tutup";
    sidebar.style.width = "180px";
    section.style.marginLeft = "180px";
    textSidebarHome.style.display = "block";
    textSidebarInbox.style.display = "block";
    arrowIcon.className = "bi bi-arrow-left";
  }
});
