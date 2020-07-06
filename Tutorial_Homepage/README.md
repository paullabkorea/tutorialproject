# Coding Convention

## HTML Convention
HTML 코드를 작성할때 다음과 같은 기본 규칙을 준수한다.
<br>

### HTML 코드 작성 규칙

#### 1. W3C Validation
- HTML은 해당 DTD 명세에 맞게 작성하며, W3C validation을 통과해야 한다.
_단, HTML5 DTD 선언 시 다음 오류 내용은 허용한다_
<iframe>의 frameborder, marginwidth, marginheight, scrolling attribute

#### 2. HTML 문서는 반드시 DTD를 선언한다.
새로운 HTML 문서를 작성할 때 'HTML5'를 사용한다.
```html
<!DOCTYPE html>
```
#### 3. 인코딩 선언
신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.
```html
<meta charset="utf-8">
```
#### 4. 들여쓰기
- 마크업의 중첩이 깊어질 때마다 자식 요소는 1탭 들여 쓰고, 탭 1개의 크기는 공백 2칸으로 설정한다.
- 문서 내에서 반드시 탭을 이용하여 들여쓰기를 하며, 탭을 대신하여 공백으로 띄어 들여쓰지 않는다.

_다음의 경우 들여쓰지 않는다_
HTML Element의 자식 Element인 head, body

#### 5. 주석
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
```

**_너무 많은 주석은 유령문자 버그를 생성하므로 되도록 자제 한다._**
```html
<! -- comments -- > (X) 시작하는 구분자("<!")와 주석을 시작하는 구분자("--") 사이에는 공백 문자(white space)가 올 수 없다.
<!--- comments ---> (X) 코멘트 내용에서 두개 이상의 하이픈('-')을 연속해서 사용하면 안된다.
<!-- comments -->   (O)
```

#### 6. Character entity references (문자 엔티티 참조)를 사용
특수 기호는 문자 엔티티 참조를 사용하여 코드로 변환한다.
HTML 5의 Character references : https://dev.w3.org/html5/html-author/charref
```html
<h4>Q&A</h4> (X)
<h4>Q&ampA</h4>(O)
```

#### 7. 빈 줄
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

#### 8. 영문 소문자 사용
DTD를 제외한 모든 요소와 attribute는 소문자로 작성한다.
```html
<DIV Class="wrap">wrap</DIV> (X)
<div class="wrap">wrap</div> (O)
```

#### 9. Attribute 우선순위
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
<br>

### HTML 요소 작성 규칙

#### 1. < html >
다음과 같이 lang attribute를 선언하며 class attribute는 선언하지 않는다.
```html
<html lang="ko">
```

#### 2. < head >
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

##### <link>
rel, type , href attribute를 선언한다.
```html
<head>
  <link rel="shortcut icon" type=”image/x-icon” href="favicon.ico" />
</head>
```

#### 3.




## CSS Convention

#### 1. css 연결 방법
- 기본적으로 외부 스타일 시트를 적용하는 것을 원칙으로 하며, rel, type, href 순으로 작성한다.
- <head> 태그 사이에 선언한다.
```html
  <link rel="stylesheet" type="text/css" href="css/style.css" />
```

## Javascript Convention

#### 1. javascript 연결 방법
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





#### BEM : Block Element Modifier

#### .block__element--modifier

#### block: 전체를 감싸고 있는 블록요소

#### element : 내부요소

#### modifier : 기능
