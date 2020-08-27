  //별이 쏟아지는 것 같은 애니메이션
  const canvas = document.getElementById("canvas");
  var flr = Math.floor;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // Canvas 크기, 스피드, depth 설정
  var halfw = canvas.width / 2,
    halfh = canvas.height / 2,
    step = 2,
    warpZ = 12,
    speed = 0.075;

  var ctx = canvas.getContext("2d");

  //canvas 배경 만들기
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  function rnd(num1, num2) {
    return flr(Math.random() * num2 * 2) + num1;
  }

  function getColor() {
    return "hsla(200,100%, " + rnd(50, 100) + "%, 1)";
  }

  var star = function () {
    var v = vec3.fromValues(
      rnd(0 - halfw, halfw),
      rnd(0 - halfh, halfh),
      rnd(1, warpZ)
    );

    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    this.color = getColor();

    this.reset = function () {
      v = vec3.fromValues(
        rnd(0 - halfw, halfw),
        rnd(0 - halfh, halfh),
        rnd(1, warpZ)
      );

      this.x = v[0];
      this.y = v[1];
      this.color = getColor();
      vel = this.calcVel();
    };

    this.calcVel = function () {
      return vec3.fromValues(0, 0, 0 - speed);
    };

    var vel = this.calcVel();

    this.draw = function () {
      vel = this.calcVel();
      v = vec3.add(vec3.create(), v, vel);
      var x = v[0] / v[2];
      var y = v[1] / v[2];
      var x2 = v[0] / (v[2] + speed * 0.5);
      var y2 = v[1] / (v[2] + speed * 0.5);

      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      if (x < 0 - halfw || x > halfw || y < 0 - halfh || y > halfh) {
        this.reset();
      }
    };
  };

  var starfield = function () {
    var numOfStars = 100;
    var stars = [];
    function _init() {
      for (var i = 0, len = numOfStars; i < len; i++) {
        stars.push(new star());
      }
    }

    _init();

    this.draw = function () {
      ctx.translate(halfw, halfh);

      for (var i = 0, len = stars.length; i < len; i++) {
        var currentStar = stars[i];

        currentStar.draw();
      }
    };
  };

  var mStarField = new starfield();

  function draw() {
    var millSeconds = 1000 * 10;
    speed = 0.025;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    mStarField.draw();
    window.requestAnimationFrame(draw);
  }
  draw();
  //페이지 사이즈가 변경되면 width,height 다시 설정
  window.onresize = function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    halfw = canvas.width / 2;
    halfh = canvas.height / 2;
  };

  const endingCredit = document.querySelector('.ending_credit');
  const placeBack = document.querySelector('.place__face--back');
  const placeTop = document.querySelector('.place__face--top');
  const body = document.querySelector('body');
  const curtain = document.querySelector('.curtain');
  const curtainLeft = document.querySelector('.curtain__left');
  const curtainRight = document.querySelector('.curtain__right');
  const light = document.querySelectorAll('.light');
  const title = document.querySelector('.title');
  const exitDoor = document.querySelectorAll('.exit_door');
  const exitLeft = document.querySelector('.exit_door--left');
  const exitRight = document.querySelector('.exit_door--right');
  const thanksGreetings = document.querySelector('.thanks__greetings');
  const thanksWrapper = document.querySelector('.thanks__wrapper');
  const thanksList = document.querySelector('.thanks__list');
  const wrapper = document.querySelectorAll('.wrapper');
  let openState = false;

  function reset(){
    thanksWrapper.classList.remove('thanks__list--starting');
    thanksGreetings.classList.remove('thanks__greetings--starting');
      for(var i=0; i<light.length; i++){
        light[i].classList.remove('light--stopped');
      }
    title.classList.remove('title--starting');
  }

  function thanksListAnimation(){
    thanksWrapper.classList.add('thanks__list--starting');
  }

  function thanksGreetingsAnimation(){
    thanksGreetings.classList.add('thanks__greetings--starting');
    thanksGreetings.addEventListener("animationend", thanksListAnimation );
  }
  function lightAnimation(){
    for(var i=0; i<light.length; i++){
      light[i].classList.add('light--stopped');
    }
    placeTop.classList.add('darkening');
  }
  function titleAnimation(){
    title.classList.add('title--starting');
    title.addEventListener("animationend", thanksGreetingsAnimation );
  }
  function curtainOpenning() {
    lightAnimation();
    curtainLeft.classList.add('curtain__left--openning');
    curtainRight.classList.add('curtain__right--openning');
    placeBack.style.cursor ="auto";
    for(var i =0; i<wrapper.length; i++){
      wrapper[i].style.opacity ='0.7';
    }
    titleAnimation();
    openState = true;
  }
  function screenZoomIn() {
    if(openState){
      placeBack.classList.add('openning');
      endingCredit.style.cursor ="auto";
    }
  }
  function exitHoverAnimation(){
    exitLeft.classList.add('exit_animation--left');
    exitRight.classList.add('exit_animation--right');
  }
  function exitLeaveAnimation(){
    exitLeft.classList.remove('exit_animation--left');
    exitRight.classList.remove('exit_animation--right');
  }

  placeBack.addEventListener('click', curtainOpenning);
  endingCredit.addEventListener('click', screenZoomIn);

  for(var i=0; i<2; i++){
    exitDoor[i].addEventListener('mouseover',exitHoverAnimation);
    exitDoor[i].addEventListener('mouseleave',exitLeaveAnimation)
  }
