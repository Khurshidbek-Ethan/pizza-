
26:31

console.log("Signup frontend javascript file");

  $(function () {});

function validateSignupForm() {
//  console.log("EXCUTED validateSignupForm");
 const memberNick = $(".member-nick").val();
 const memberPhone = $(".member-phone").val();
 const memberPassword = $(".member-password").val();
 const confirmPassword = $(".confirm-password").val();
//  console.log("memberNick:",memberNick);
 if(
  memberNick === "" ||
  memberPhone === " " ||
  memberPassword ===" " ||
  confirmPassword === " "
){
    alert("Please insert all required inputs");
     return false;
}
    return false;
}