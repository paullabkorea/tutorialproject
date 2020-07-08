<h1>Coding Convention</h1>
<br>

# HTML Convention
HTML 코드를 작성할때 다음과 같은 기본 규칙을 준수한다.
<br>
<br>
## HTML 코드 작성 규칙

### 1. 기본 규칙

#### 1) W3C Validation
- HTML은 해당 DTD 명세에 맞게 작성하며, W3C validation을 통과해야 한다.

_단, HTML5 DTD 선언 시 다음 오류 내용은 허용한다_
- <iframe>의 frameborder, marginwidth, marginheight, scrolling attribute
  
#### 2) 영문 소문자 사용
DTD를 제외한 모든 요소와 attribute는 소문자로 작성한다.
```html
<DIV Class="wrap">wrap</DIV> (X)
<div class="wrap">wrap</div> (O)
```

#### 3) 모든 HTML 요소 닫기
모든 HTML 요소를 닫는다.
```html
<section>
  <p>This is a paragraph.      (X)
  <p>This is a paragraph.</p>  (O)
</section>
```

#### 4) Attribute값 표기
- Attribute 값은 큰 따옴표("")로 묶는다.
- Attribute 우선순위

| 순서 | 속성 |
|---|---:|
| 1 | rel |
| 2 | type |
| 3 | href, src |
| 4 | width, height |
| 5 | target |
| 6 | id |
| 7 | name |
| 8 | class |
| 9 | style |
| 10 | title, alt |
| 11 | 기타 attribute |

```html
<a href="#" target="_blank" id="linkId" class="link" style="display:block;" title="링크가기">링크</a>
```

#### 5) Character entity references (문자 엔티티 참조)를 사용
특수 기호는 문자 엔티티 참조를 사용하여 코드로 변환한다.
HTML 5의 Character references : https://dev.w3.org/html5/html-author/charref
```html
<h4>Q&A</h4> (X)
<h4>Q&ampA</h4>(O)
```

#### 6) 빈 줄
- 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다. 
- 빈 줄의 간격은 1줄을 초과하지 않는다.
```html
<head>
  내용
</head>
# 빈 줄
<body>
</body>
```

### 2. DTD 및 인코딩

#### 1) HTML 문서는 반드시 DTD를 선언한다.
새로운 HTML 문서를 작성할 때 'HTML5'를 사용한다.
```html
<!DOCTYPE html>
```

#### 2) 인코딩 선언
신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.
```html
<meta charset="utf-8">
```

### 3. 뷰포트 설정
뷰포트는 웹페이지 사용자가 볼 수 있는 영역으로 모든 웹페이지에 다음과 같은 뷰포트 요소를 포함한다.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 4. IE 호환모드 설정
인터넷 익스플로러가 항상 최신 버전의 레이아웃 엔진을 사용하여 문서를 렌더링하도록 지정한다.
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```
### 5. 들여쓰기 
- 마크업의 중첩이 깊어질 때마다 자식 요소는 1탭을 들여 쓰고, 탭 1개의 크기는 공백 2칸으로 설정한다.
- 문서 내에서 반드시 탭을 이용하여 들여쓰기를 하며, 탭을 대신하여 공백으로 띄어 들여쓰지 않는다.

_다음의 경우 들여쓰지 않는다_
- HTML Element의 자식 Element인 head, body

### 6. 주석 
- HTML 코드의 주석은 코드 그룹을 구분하거나, 참고해야 하는 사항을 기술한다. 
- HTML 주석의 시작과 종료는 아래와 같이 표기, 기본 형식에 맞게 작성한다.
```html
<!-- 주석내용 -->
<div>
  <span class="message">
    <h1>hi</h1>
  </span>
</div>
<!-- //주석내용 -->

<!-- 주석내용 -->
<link rel="shortcut icon" type=”image/x-icon” href="favicon.ico" />

<!-- 
  두줄 이상에 걸쳐 있는 주석은 이와 같이 작성한다.
  두줄 이상에 걸쳐 있는 주석은 이와 같이 작성한다.
-->
```

**_너무 많은 주석은 유령문자 버그를 생성하므로 되도록 자제 한다._**
```html
<! -- comments -- > (X) 시작하는 구분자("<!")와 주석을 시작하는 구분자("--") 사이에는 공백 문자(white space)가 올 수 없다.
<!--- comments ---> (X) 코멘트 내용에서 두개 이상의 하이픈('-')을 연속해서 사용하면 안된다.
<!-- comments -->   (O) 
```

<br>
<br>

## HTML 요소 작성 규칙

### 1. `<html>`
다음과 같이 lang attribute를 선언한다.
```html
<html lang="ko">
```

### 2. `<head>`
meta, link, title, script, style 순서로 요소를 선언한다.
```html
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="css/default.css" />
  <script type="text/javascript" src="js/default.js"></script>
  <style>
  …
  </style>
  <title>default</title>
</head>
```

#### `<link>`
rel, type , href attribute를 선언한다.
```html
<head>
  <link rel="shortcut icon" type=”image/x-icon” href="favicon.ico" />
</head>
```

<br>
<br>

# Naming Convention

## Naming 공통 규칙
- Naming에 영어, 숫자, 하이픈(`-`), 언더스코어(`_`)만 사용한다
- Naming의 첫 시작은 영문 소문자로만 시작한다.

## CSS 네이밍 규칙 
CSS 언어는 기본적으로 소문자 + 하이픈(`-`)을 사용해 표현하는 구문의 언어이다.

### 하이픈(-) 기호를 구분자로 사용한다.
```css
#main-contents {
  position: absolute;
  top: 40px;
}
```
### BEM 네이밍 규칙을 사용한다.
**BEM : Block Element Modifier**
#### ex) .block__element--modifier

#### block : 전체를 감싸고 있는 블록요소 (Header, Nav, Footer)
#### element : 내부요소
#### modifier : 기능

```css
.stick-man__head--small { 

} 
.stick-man__head--big { 

}
```

## 파일 및 폴더 네이밍 규칙
- 영문 소문자, 숫자, 언더스코어(`_`)만 사용한다
- 형태_의미_순서_상태를 기본 순서로 사용한다.
- 한자리 정수는 사용하지 않으며 01, 02와 같이 사용한다.

ex)
#### bg_sea_nosns.png
#### bg_sea_withsns.png
#### bg_jeju.png
#### bg_jeju_nomountain.png
#### frame_bird_01.png
#### frame_bird_02.png

| 분류 | 예제 | 설명 |
|---|---|---|
| HTML | weniv.html | '페이지영문이름.html'로 사용
| CSS | weniv.css | '서비스영문이름.css'로 사용
| Folder | images, css, js | 'image, css, javascript 폴더 사용'
<br>
<br>

# CSS Convention
CSS 코드를 작성할때 다음과 같은 기본 규칙을 준수한다.
<br>
<br>
## CSS 적용 방법
- 기본적으로 외부 스타일 시트를 적용하는 것을 원칙으로 하며, rel, type, href 순으로 작성한다.
- <head> 태그 사이에 선언한다.
```html
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
```

## CSS 코드 작성 규칙

### 1. 기본 규칙 

#### 1) W3C Validation 
CSS는 CSS3 속성을 제외하고 W3C validation을 통과해야 한다. 

#### 2) 영문 소문자 사용
모든 속성은 영문 소문자로만 작성한다.

#### 3) 따옴표 사용
한글폰트의 선언, filter, content에 작은 따옴표('')를 사용한다. 그 외의 경우는 사용하지 않는다.
@charset 선언 시에는 속성 값을 큰따옴표(" ")로 감싼다.

```css
@charset "utf-8";

.list {background:url("/image/box_news.gif") no-repeat} (x)
.list {background:url('/image/box_news.gif') no-repeat} (x)
.list {background:url(/image/box_news.gif) no-repeat} (o)
.lists {font-family: '돋움', Dotum, Arial} (o)

```



### 2. CSS 가이드
- 문서 첫줄에 인코딩을 선언하며 인코딩은 HTML과 동일한 인코딩을 지정한다.
- 가독성을 위해 CSS 스타일 속성 간 개행하며, 선택자(클래스명, 아이디명, 태그)를 선언한 뒤 한칸의 공백을 두고 중괄호를 작성한다.
- 속성과 속성값 사이의 한칸의 공백을 둔다.
- CSS 코드 작성시 들여쓰기는 1탭을 들여 쓰고, 탭 1개의 크기는 공백 2칸으로 설정한다.
- 다중 선택자 사용시 선택자간 개행하여 사용한다.

```css
@charset "utf-8";

#main-contents {
  position: absolute;
  top: 40px;
}

.menu__youtube,
.menu__qna,
.menu__wiki,
.menu__curriculum {
  width: 105px;
  height: auto;
}

```


### 3. 주석 
- CSS의 주석은 코드 그룹을 구분하거나, 참고해야 하는 사항을 기술한다. 
- CSS 주석의 시작은 아래와 같이 표기, 종료는 작성하지 않으며 기본 형식에 맞게 작성한다.
- CSS 주석 기호(`/*`, `*/`)와 내용 사이에는 반드시 공백 한칸이 있어야 한다.
```css
/* maon-contents 영역 */
#main-contents {
  position: absolute;
  top: 40px;
}
```
-



- css 스타일 속성간 

# Javascript Convention
Javascript 코드를 작성할때 다음과 같은 기본 규칙을 준수한다.
<br>
<br>
## javascript 연결 방법
- 기본적으로 외부 자바스크립트 파일을 사용하는 것을 원칙으로 하며, type, src 순으로 작성한다.
- 코드의 양이 많지 않은 경우 내부 스크립트 코드로 작성한다.
```html
  <script type="text/javascript" src="script/script.js"></script>
  </body>
```
- <body> 태그 최하단 선언을 우선시하지만 특수한 경우 <head> 태그 사이에 선언한다.
  
```html
<!--구글 Analytics 태그 : head 태그 사이에 스크립트 사용 권장-->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72047520-1"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-72047520-1");
  </script>
```



  
