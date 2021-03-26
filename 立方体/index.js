(function() {
  // 定义并初始化变量
  var $body = document.body;
  var $app = document.getElementById("app");
  var $app1 = document.getElementById("app1");
  var $imgList = document.querySelectorAll(".app>div>img");
  var $bgImg = document.querySelector("#bg-img img");
  var $menuList = document.querySelectorAll("#menu>ul li");
  
  // 自定义变量
  var imgNameList = "./img/pic0";
  // 方法
  // 使body的宽高占满屏幕
  let init = function() {
    $body.style.width = window.innerWidth + "px";
    $body.style.height = window.innerHeight + "px";
  };
  // 切换背景图片(闭包)
  let switchBGImg = function() {
    let num = 0;
    return function() {
      num++;
      return "./bg-image/background" + (num%3 + 1) + ".png";
    };
  }
  // 暂停/ 播放 动画
  let switchPauseAndRunning = function() {
    if($app && $app.classList.contains("active")) {
      $app.classList.remove("active");
      $app.classList.add("paused");
      $menuList[2].textContent = "播 放";
    } else if($app){
      $app.classList.remove("paused");
      $app.classList.add("active");
      $menuList[2].textContent = "暂 停";
    }
    if($app1 && $app1.classList.contains("active")) {
      $app1.classList.remove("active");
      $app1.classList.add("paused");
      $menuList[2].textContent = "播 放";
    } else if($app1){
      $app1.classList.remove("paused");
      $app1.classList.add("active");
      $menuList[2].textContent = "暂 停";
    }
  };
  let switchAnimation = function() {
    if($app.style.display === "none") {
      $app1.style.display = "none";
      $app.style.display = "block";
    } else if($app1.style.display === "none") {
      $app1.style.display = "block";
      $app.style.display = "none";
    }
  };
  let switchPicSource = function() {
    imgNameList
      = "./img/pic" + (imgNameList[imgNameList.length -1] !== "2" ? (Number(imgNameList[imgNameList.length -1]) +1) : "0");
    console.log(imgNameList);
    for( index in $imgList ) {
      $imgList[index].src = imgNameList + (Number(index) % 6) + ".jpg";
    }
  };
  let bindEvent = function() {
    let bjImg = switchBGImg();
    $menuList[0].addEventListener("click", () => {
      $bgImg.src = bjImg();
    });
    $menuList[1].addEventListener("click", () => {
      switchPicSource();
    });
    $menuList[2].addEventListener("click", () => {
      switchPauseAndRunning();
    });
    $menuList[3].addEventListener("click", () => {
      switchAnimation();
    })
  };

  let initController = function() {
    init();
    bindEvent();
  }
  initController();
})()