/* -- id จาก form แต่ละอัน -- */
var lgbtn = document.getElementById('login');
var regbtn = document.getElementById('register');
var btn = document.getElementById('btn');

/* -- การทำงานเมื่อกดปุ่ม login -- */
function login(){
    lgbtn.style.left = "50px";
    regbtn.style.left = "450px";
    btn.style.left = "0px";
}


/* -- การทำงานเมื่อกดปุ่ม register 
    form login ขยับไปทางซ้าย 400px
    form register ขยับไปทางซ้าย 50px
-- */
function register(){
    lgbtn.style.left = "-400px";
    regbtn.style.left = "50px";
    btn.style.left = "110px";
}