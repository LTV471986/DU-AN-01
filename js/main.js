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
//Get cái gì thì return về cái đó.
let getUserList = function () {
  //Lấy được danh sách tài khoản nằm ở trên local storage
  //(phía trình duyệt của người dùng
  //Nếu không lấy được userList (tức nó bằng null) thì gán
  //mảng rỗng cho biến userList
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  return userList;
};

let isEmailExisted = function (email) {
  let userList = getUserList();
  let length = userList.length; //độ dài của mảng
  for (let i = 0; i < length; i++) {
    if (userList[i].email === email) {
      return true;
    }
  }
  return false;
};

//document.getel bấm Enter
let btnLogin = document.getElementById("btnLogin");

// console.log(btnLogin);
btnLogin.addEventListener("click", function () {
  // Viết code ở đây
  //   alert("La lên nè");
  // Lấy email và password người dùng cái đã
  let txtEmail = document.getElementById("txtEmail");
  //   console.log("txtUsername");

  let txtPassword = document.getElementById("txtPassword");
  //   console.log("txtPassword");

  let userList = getUserList();
  let isLoginSuccess = false; //bien co (flag)
  for (let i = 0; i < userList.length; i++) {
    let user = userList[i];
    let email = user.email;
    let password = user.password;

    if (
      txtEmail.value.trim.toLowerCase() === email &&
      txtPassword.value === password
    ) {
      //Đăng nhập thành công
      isLoginSuccess = true;
    }
  }
  if (isLoginSuccess) {
    //Tạo ra 1 biến isLogin và set giá trị là true và lưu xuống
    // localStorage
    localStorage.setItem("isLogin", true);
    alert("Dang nhap thanh cong");
    window.location.href = "admin/dashboard.html";
  } else {
    //Alert("Dang nhap that bai. Vui long kiem tra lai. ")
    let errorElements = document.getElementsByClassName("error");
    errorElements[0].classList.remove("hidden");
  }
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

document.addEventListener("DOMContentLoaded", function () {
  let isLogin = Boolean(localStorage.getItem("isLogin"));
  if (isLogin === "true") window.location.href = "./admin/dashboard.html";
});
