// //* Block scope
// const btnOpenCloseSidebar = function () {
//   const sidebar = document.getElementById("sidebar");
//   const section = document.getElementById("section");
//   const closeBtn = document.getElementById("closeBtn");
//   const textSidebarHome = document.getElementById("textSidebarHome");
//   const textSidebarInbox = document.getElementById("textSidebarInbox");
//   const arrowIcon = document.getElementById("arrowIcon");
//   const btnText = document.getElementById("btnText");
//   const openBtn = document.getElementById("openBtn");

//   // Arrow function expression di event listener/callback function untuk Sidebar
//   closeBtn.addEventListener("click", () => {
//     //Jika sidebar tidak ditampilkan
//     if (sidebar.style.display !== "none") {
//       sidebar.style.display = "none";
//       // btnText.textContent = "Buka";
//       sidebar.style.width = "0";
//       section.style.marginLeft = "0";
//       textSidebarHome.style.display = "none";
//       textSidebarInbox.style.display = "none";
//       // arrowIcon.src = "images/right-arrow-dx-white.svg";
//       openBtn.style.display = "block";
//     } else {
//       //Lain jika sidebar ditampilkan
//       sidebar.style.display = "block";
//       btnText.textContent = "Tutup";
//       sidebar.style.width = "180px";
//       section.style.marginLeft = "180px";
//       textSidebarHome.style.display = "block";
//       textSidebarInbox.style.display = "block";
//       arrowIcon.src = "images/left-arrow-dx-white.svg";
//       // openBtn.style.visibility = "none";
//     }
//   });
// };
// // Panggil fungsi setelah didefinisikan
// // const btnOCReady = new btnOpenCloseSidebar();
// btnOpenCloseSidebar();

const toggleSidebarWithClasses = function () {
  // Ambil elemen berdasarkan kelas atau ID unik
  const sidebar = document.querySelector(".sidebar");
  const section = document.querySelector(".section");
  const closeBtn = document.getElementById("closeBtn");
  const openBtn = document.getElementById("openBtn");

  // Nama kelas yang akan digunakan untuk status 'tertutup'
  const CLOSED_CLASS = "sidebar--closed";

  // Fungsi untuk BUKA Sidebar (Hapus kelas tertutup)
  const openSidebar = () => {
    sidebar.classList.remove(CLOSED_CLASS);
    section.classList.remove(CLOSED_CLASS);
    openBtn.style.display = "none"; // Sembunyikan tombol buka
  };

  // Fungsi untuk TUTUP Sidebar (Tambahkan kelas tertutup)
  const closeSidebar = () => {
    sidebar.classList.add(CLOSED_CLASS);
    section.classList.add(CLOSED_CLASS);
    openBtn.style.display = "block"; // Tampilkan tombol buka
  };

  // Event Listener untuk Tombol Tutup (di dalam Sidebar)
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  // Event Listener untuk Tombol Buka (di Section/Konten)
  if (openBtn) {
    openBtn.addEventListener("click", openSidebar);
  }

  // Inisialisasi: Pastikan tombol buka tersembunyi jika sidebar tidak memiliki kelas CLOSED_CLASS
  if (sidebar && !sidebar.classList.contains(CLOSED_CLASS)) {
    openBtn.style.display = "none";
  }
};

// Panggil fungsi
toggleSidebarWithClasses();
