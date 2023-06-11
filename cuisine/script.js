var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// const trangChuLink = document.getElementById('article');
// const wrappers = document.querySelectorAll('.ggmap');

// // Hàm xử lý khi click vào chữ "Trang chủ"
// function handleClick(event) {
//   // Ngăn chặn hành vi mặc định của liên kết
//   event.preventDefault();

//   // Ẩn tất cả các wrapper
//   wrappers.forEach(wrapper => {
//     wrapper.style.display = 'none';
//   });

//   // Hiển thị wrapper chứa nội dung của Trang chủ
//   wrappers[0].style.display = 'block';
// }

// // Thêm sự kiện click vào chữ "Trang chủ"
// trangChuLink.addEventListener('click', handleClick);
