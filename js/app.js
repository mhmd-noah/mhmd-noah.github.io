function fun_open_qr() {
  y = document.getElementById("qr_message").style.visibility = "visible";
  if (y == "visible") {
    x = document.getElementById("not_found").style.filter = "blur(5px)";
    if (x == "blur(5px)") {
      document.getElementById("qr_message").style.filter = "none(0px)";
    }
  }
}
function fun_close_qr() {
  document.getElementById("qr_message").style.visibility = "hidden";
  if (document.getElementById("qr_message").style.visibility == "hidden") {
    document.getElementById("not_found").style.filter = " blur(0px)";
  }
}
//
