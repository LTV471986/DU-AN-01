/**
 * Ý tưởng:
 *
 * Làm 1 trang đăng nhập, bao gồm:
 * + h1 chứa tiêu đề trang
 * + 1 ô input để nhập username
 * + 1 ô input để nhập mật khẩu
 * + 1 button để bấm vào đăng nhập
 *
 * Yêu cầu:
 *
 * 1. Username là "admin" và password là "123" thì thông báo
 * đăng nhập thành công. Ngược lại thì thông báo đăng nhập thất bại.
 *  Vui lòng kiểm tra lại.
 *
 * Trong javascript, hành động click thì được gọi là 1 sự kiện
 * (event) click chuột.
 *
 * Vậy để trình duyệt biết được khi nào người dùng click
 * vào thứ gì đó trên trang thì phải nhờ 1 thằng Event Listener (thằng
 * lắng nghe sự kiện)
 *
 * => Phải gắn event listener cho cái nút button đăng nhập
 *
 * Bước 1: tác động được cái button bằng cách gọi nó ra bằng ID.
 * Bước 2: gắn event listener
 *
 *
 */

//document.getel bấm Enter
let btnLogin = document.getElementById("btnLogin");

// console.log(btnLogin);
btnLogin.addEventListener("click", function () {
  // Viết code ở đây
  //   alert("La lên nè");
  // Lấy username và password người dùng cái đã
  let txtUsername = document.getElementById("txtUsername");
  //   console.log("txtUsername");

  let txtPassword = document.getElementById("txtPassword");
  //   console.log("txtPassword");

  // Kiểm tra username và mật khẩu:
  if (
    txtUsername.value.trim().toLowerCase() === "admin" &&
    txtPassword.value === "123"
  ) {
    sessionStorage.setItem("isLoggedIn", "true");
    alert("Đăng nhập thành công");
    // Chuyển hướng đến trang dashboard
    window.location.href = "./admin/dashboard.html";
  } else {
    // alert("Đăng nhập thất bại. Vui lòng kiểm tra lại");
    let errorElements = document.getElementsByClassName("error");
    // console.log(errorElements);
    // console.log(errorElements[0]);

    //classList: lấy ra danh sách class của 1 phần tử html.
    //remove: xóa class của phần tử html.
    errorElements[0].classList.remove("hidden");
  }
});
