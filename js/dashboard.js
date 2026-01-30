let btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", function () {
  sessionStorage.removeItem("isLoggedIn");
  //   alert("La lên nè");
  window.location.href = "../index.html";
});

// Khi truyền 1 cái hàm như là 1 đối số của hàm khác thì hàm đó được
// gọi là call back function (Gọi lại hàm)

/**
 * Function (hàm)
 *
 * Cách 1: Cách truyền thống
 * Function tinhTong(0 hoặc có tham số a, b){
 *      Phần thân hàm
 *      tinhTong(1, 2);
 * };
 *
 * Cách 2: Expression function (Biểu thức hàm)
 * let tinhTong = function (a, b){
 *      Phần thân hàm
 *      tinhTong(1, 2);
 * };
 *
 * Cách 3: Arrow function (Hàm mũi tên):
 * let tinhTong = (a, b) => {
 *      Phần thân hàm
 * };
 *
 * Anonymous function (hàm vô danh)
 * () => { };
 *
 * let tinhHieu = (a, b) => {
    return a - b;
 * };
 *
 *    
 */
