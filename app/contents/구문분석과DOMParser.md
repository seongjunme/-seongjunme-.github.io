---
date: '2021-07-27'
title: '구문 분석과 DOM Parser'
categories: ['Node.js', '크롤링']
summary: '컴파일러 이론에 나오는 구문 분석과 DOM Parser를 연관지어 알아보자'
thumbnail: './image/cs.jpeg'
type: 'Blog'
---

# 1. 구문 분석

---

컴파일러 이론에서 구문 북석을 하기 위해 사용하는 Tokenizer, Lexer, Parser를 알아보자.

### 1.1 Tokenizer

---

Tokenizer란 어떤 구문에서 의미있을 법한 요소들을 token으로 쪼개어 나누는 역할을 한다.

아래의 경우는 배열을 , 단위로 토큰을 나눈 것이다.

```jsx
const arr = ['1', '[2, [3]]', 'seong', jun'];

console.log(Tokenizer(arr));

//result
['1', '[2, [3]]', 'seong', jun']
```

### 1.2 Lexer

---

Lexer란 쪼갠 토큰을 이용하여 어휘를 분석한다.

아래의 경우 a, p, p, l, e 문자를 따로 읽으면 특별한 의미가 없지만, 붙여서 읽으면 apple이라는 어휘가 된다.

```jsx
const arr = ['a', 'p', 'p', 'l', 'e'];
console.log(Lexer(arr));

//result
apple;
```

그리고 위에서 토큰화 된 배열을 Lexer에 넣으면 아래와 같이 각각의 토큰을 분석해준다.

```jsx
const arr = ['1', '[2, [3]]', 'seong', 'jun'];

console.log(Lexer(Tokenizer(arr)));

//result
[
	{ type: number, value = 1 },
	{ type: array, value = [2, [3]] },
	{ type: string, value = seong },
	{ type: string, value = jun },
]
```

### 1.3 Parser

---

그리고 Parser는 분석한 Lexer의 결과를 이용해 하나의 AST(Abstract Syntax Tree) 구조로 변환해준다.

[400px-Abstract_syntax_tree_for_Euclidean_algorithm svg](https://user-images.githubusercontent.com/72444675/157590806-9f87e37d-92ac-4ecb-87d0-4557b7682047.png)

출처: [https://ko.wikipedia.org/wiki/추상*구문*트리](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EA%B5%AC%EB%AC%B8_%ED%8A%B8%EB%A6%AC)

HTML로 변환 예를 들면 다음과 같은 결과가 나온다.

```jsx
{
  element: 'HTML',
  attributes: [ { name: 'lang', value: '"ko"' } ],
  children: [
    {
      element: 'BODY',
      children: [
        {
          element: 'P',
          text: 'BOOST',
          children: [
            {
              element: 'IMG',
              attributes: [ { name: 'SRC', value: '"codesquad.kr"' } ]
            },
            { element: 'BR' }
          ]
        }
      ]
    }
  ]
}
```

# 2. DOM Parser

---

## 2.1 DOM 이란?

---

> 문서 객체 모델(Document Object Model)은 HTML, XML 문서의 프로그래밍 interface이다. DOM은 문서의 구조화된 표현을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.

### 2.2 웹킷 동작 구조

---

![스크린샷_2021-07-26_오후_11 16 10](https://user-images.githubusercontent.com/72444675/157590845-6f165ab8-a7be-4e8a-b9e0-171f11e20766.png)

출처: [https://kim6394.tistory.com/217](https://kim6394.tistory.com/217)

어태치먼트: 웹킷이 렌더 트리를 생성하기 위해 DOM 노드와 스타일 정보를 연결하는 과정이다.

### 2.3 파싱(Parsing)

---

HTML에서 파싱이란 브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것이다.

- Parser - Lexical analyze (파서-어휘분석기)
  앞서 말했듯이 파싱은 어휘 분석과 구문 분석이라는 두 가지로 구분할 수 있다.

  - 어휘분석은 토큰분해, 즉 인간으로 정의하자면 사전에 등장하는 모든 단어이다.
  - 구문분석은 언어의 구문 규칙을 적용하는 과정이다.
    <br />
    <br />
    ![스크린샷_2021-07-26_오후_11 22 58](https://user-images.githubusercontent.com/72444675/157590875-e378c13c-b63b-46b0-8e84-0f071f991392.png)

  <br />

### 파서는 두 가지 일을 한다.

- 자료를 유효한 토큰으로 분해하는 어휘 분석기
- 언어 구문 규칙에 따라 문서를 구조적으로 분석해 파싱 트리를 생성
  파서는 보통 어휘 분석기로부터 새 토큰을 받아서 구문 규칙과 일치하는지 확인한다. 규칙에 맞으면 토큰에 해당하는 노드가 파싱트리에 추가되고, 파서는 또 다른 토큰을 요구한다.

### 2.4 DOM 파싱 예시

---

파싱 트리는 DOM 요소와 속성 노드의 트리로서 출력 트리가 된다.

DOM은 마크업과 1대1 관계를 맺는다.

```jsx
<html>
  <body>
    <p>Hello World</p>
    <div>
      <img src="#" />
    </div>
  </body>
</html>
```

예를 들어 위의 마크업의 경우 아래와 같은 트리로 변환될 수 있다.

![스크린샷_2021-07-26_오후_11 26 55](https://user-images.githubusercontent.com/72444675/157590923-a3752b08-80e6-4291-90c7-20ad38e73856.png)

# 3. XPath

---

### 3.1 XPath 란?

---

XPath는 W3C의 표준으로 XML문서의 구조를 통해 경로위에 지정한 구문을 사용하여 항목을 배치하고 처리하는 방법을 기술하는 언어이다.

XPath는 XML 문서의 노드를 정의하기 위하여 경로식을 사용하며, 수학 함수와 기타 확장 가능한 표현들이 있다.

즉 html, xml상의 요소의 위치 값이다.

예를 들어 아래와 같은 DOM 트리가 있다고 할때, h1의 xpath는 html/body/h1이 된다.

![스크린샷_2021-07-26_오후_11 40 58](https://user-images.githubusercontent.com/72444675/157590969-a6cd7221-4a33-4558-a509-66db06eac513.png)

### 3.2 크롬 개발자 도구에서 XPath 가져오기

---

1. f12키로 개발자 도구를 연다.
2. 사이트에서 찾아보고 싶은 element를 선택한다.
3. 우측 html문서에서 검색된 element에 대한 태그가 나타나면
   - 우클릭 → copy → copy xpath 를 선택한다.

![스크린샷_2021-07-26_오후_11 35 58](https://user-images.githubusercontent.com/72444675/157591017-44cd19b1-6077-4ab4-8162-2998965007a0.png)

![스크린샷_2021-07-26_오후_11 35 46](https://user-images.githubusercontent.com/72444675/157591038-1c599a47-54bf-43fb-b824-9ca4dce2c8df.png)

1. 복사한 XPath를 붙여넣기 해보면 아래와 같다.
   - //는 중간 path를 생략하는 것을 나타낸다
   - @는 id와 class같이 요소를 결부하는 속성을 나타낸다.

```jsx
//*[@id="input"]
```

‼️ 단 XPath는 요소의 위치를 기반으로 하는 값 이기 때문에 , UI가 변경되면 값이 변할 수 있다.
