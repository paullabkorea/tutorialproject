const notionInfo =[
  {
    "name" : "wiki",
    "image" : "",
    "link" : "http://paullabedu.synology.me/dokuwiki/"
  },
  {
    "name" : "Python Bootcamp 얕은물",
    "image" : "./images/notions/python_bootcamp.png",
    "link" : "https://www.notion.so/shallowpython/6e5d012e159d4e3fa3fe6ca8566d9e22?v=b73c91efc98c46e49158156a5927a4fd"
  },{
    "name" : "눈떠보니 코딩테스트 전날",
    "image" : "./images/notions/coding_test.jpg",
    "link" : "https://www.notion.so/a5a0fafe306e4cb78ec4476a272d156d?v=e116f6cdc6e34075bf8e4c0e56429a26"
  },{
    "name" : "30분 데이터분석 무료 요약 강좌 시즌2",
    "image" : "./images/notions/30minute.jpg",
    "link" : "https://www.notion.so/30-f20d59b2401c4404b6cd1ee3a31556d1"
  },{
    "name" : "제주 하간디이신 데이터들 Python으로 몬딱 분석해불게",
    "image" : "./images/notions/jeju_python.jpg",
    "link" : "https://www.notion.so/1-1-4018be0e04d44e31905edab67627e7e9",
    "link2" : "https://www.notion.so/1-2-cb4e62f6f62b4c11b052fa16638c484c"
  },{
    "name" : "직접 만드는 노션 템플릿 BEST 7선",
    "image" : "",
    "link" : "https://www.notion.so/notiontemplatesample/Notion-Template-Sample-Best-7-part-1-15e07741a6144905b4d27c09a739c979",
  },{
    "name" : "메모 혁신 : Notion 활용 가이드",
    "image" : "./images/notions/notion_guide.png",
    "link" : "https://www.notion.so/bootcampisland/Bootcamp-Island-Home-7ada10f07c384f78b4cf5402246b96e4"
  },{
    "name" : "Web Animation With 냥이집사",
    "image" : "./images/notions/web_animation.jpg",
    "link" : "https://www.notion.so/cssanimation/Web-Animation-1-css-Animation-ac27d0e7a8af46268275bca9a5165844",
    "link2" : "https://www.notion.so/jsanimation/Web-Animation-2-js-Animation-b464d8596c9a4a229fe2bb3014fa7b4e"
  },{
    "name" : "Python 100제",
    "image" : "./images/notions/code_festival_python.png",
    "link" : "https://www.notion.so/pythonworkbook/Python-100-6ee1860ce29a41bc8eb6b9cfa7d7f06c"
  },{
    "name" : "Javasciprt 100제",
    "image" : "./images/notions/code_festival_javascript.png",
    "link" : "https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d"
  },{
    "name" : "인공지능을 활용한 업무자동화 With Google Developers Group JEJU",
    "image" : "./images/notions/ai.jpg",
    "link" : "https://www.notion.so/with-GDG-Jeju-dc090288728d4ed581dfeac08dc62b5a"
  },
];


//Local JSON 파일 불러오기
let notionContents="";
let notionDetail="";
const notionStr = JSON.stringify(notionInfo);
const notionData = JSON.parse(notionStr);

const notion__container = document.querySelector('.notion__container');
const waves = document.querySelector(".waves");
const focus__notion = document.querySelector(".focus__notion");
const body = document.querySelector("body");

//notion data html에 뿌리기
function notionSetting(){
for(var i=0; i<notionData.length;i++){
		var notion = notionData[i];
    notionContents = notionContents + `<div class="notion"><div class="notion__info"><img src='${notion.image}' alt='${notion.name}' />
    </div></div>`;
	}
  notion__container.innerHTML = notionContents;
}

function notionSelect(num){
    	var notionAbout = notionData[num];
      notionDetail="";
      notionDetail = notionDetail + `<div class="notion__detail"><div class="notion__front"><img src='${notionAbout.image}' alt='${notionAbout.name}' /></div>
      <div class="notion__back"><h1>${notionAbout.name}</h1><a href='${notionAbout.link}' target="_blank">
      <button>자료 보기</button></a></div></div>`;
      focus__notion.innerHTML = notionDetail;
      waves.classList.remove("waves--default");
      waves.classList.add("waves--up");
      focus__notion.style.top = "0px";
      var notion__detail = document.querySelector(".notion__detail");
      body.addEventListener('click', clickBodyEvent);
      notion__detail.addEventListener('click', spreadClick);
    };

function getElementIndex(element, range) {
  // 추가
  if (!!range) return [].indexOf.call(element, range);
  return [].indexOf.call(element.parentNode.children, element);
}


function spreadClick(){
var notion__img = document.querySelector(".notion__front img");
var notion__front = document.querySelector(".notion__front");
  notion__img.classList.toggle("spread__img");
  notion__front.classList.toggle("spread");
}

function reset(){
  waves.classList.remove("waves--down");
  waves.classList.add("waves--default");
}

function clickBodyEvent(event) {
var notion__detail = document.querySelector(".notion__detail");
  var target = event.target;
  // notion 영역 이면 pass
  if(target == focus__notion ){
    if(target == notion__detail)
      return ;
    else{
        waves.classList.remove("waves--up");
        waves.classList.add("waves--down");
        setTimeout(reset,2000);
        focus__notion.style.top = "100%";
    }
  }
};

notionSetting();
[].forEach.call(document.querySelectorAll('.notion__container .notion'), function(el) {
	el.addEventListener('click', function() {
		var num = getElementIndex(document.querySelectorAll('.notion'), el);
    notionSelect(num);
  });
});
