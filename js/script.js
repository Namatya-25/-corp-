
// ハンバーガーメニュー

const menuButton = document.getElementById("menuButton");
let isMenuOpened = false;

function toggleMenu() {
  isMenuOpened = !isMenuOpened;
  if (isMenuOpened) {
    // メニューを開いた時の処理
    menuButton.classList.add("is-opened");
  } else {
    // メニューを閉じた時の処理
    menuButton.classList.remove("is-opened");
  }
}

menuButton.addEventListener("click", toggleMenu);






//スライドメニュー
const menuBtn = document.querySelector(".menu-button");
const openBg = document.querySelector(".open-bg");
const body = document.body;



menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  openBg.classList.toggle("active");
  body.classList.toggle("bodyover");
  body.classList.toggle("bodybg");
});



// スワイパー

const swiper = new Swiper(".mySwiper", {
  // 基本設定
  initialSlide: 0,   // 必ず1枚目(CASE 1)から開始
  loop: true,        // CASE 3の次にCASE 1に戻る
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  // スマホ・タブレット用 (デフォルト)
  slidesPerView: 1,      // 1枚をきっちり表示（1.2だとCASE 2が少し見えます）
  centeredSlides: false, // 左端から表示
  
  // PC用レスポンシブ設定
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false, 
      centeredSlides: false,
      loop: false, // PCで3枚並ぶ場合はループ不要
    },
  },
});