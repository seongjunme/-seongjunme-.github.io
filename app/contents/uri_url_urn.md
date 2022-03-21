---
date: '2021-08-10'
title: 'URI vs URL vs URN'
categories: ['Web']
summary: 'URI vs URL vs URN 각각의 특징과 차이점을 알아보자.'
thumbnail: './image/browser.png'
type: 'Blog'
---

# 1. URI vs URL vs URN

---

## 1.1 URI

> 통합 자원 식별자는 인터넷에 있는 자원을 나타내는 유일한 주소입니다. URI의 존재는 인터넷에서 요구되는 기본 조건으로서 인터넷 프로토콜에 항상 붙어 다닙니다. URI의 하위 개념으로 URL, URN이 있습니다.

즉, URI는 URL과 URN을 아우르는 말로 볼 수 있다.

<img src="https://user-images.githubusercontent.com/72444675/159243009-82c7aa0c-71c7-4caa-901c-481d94409e67.png" width="700px">

[https://itbellstone.tistory.com/86](https://itbellstone.tistory.com/86)

## 1.2 URL

> URL은 네트워크상에서 자원이 어디 있는지를 알려주기 위한 규약이다. 흔히 웹 사이트 주소로 알고 있지만, URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크 상의 자원을 모두 나타낼 수 있다.

- URL은 네트워크 상에서 자원이 어디 있는지를 알려주기 위한 표준이다.
- URL은 다음과 같은 구조를 같는다.

```jsx
scheme://user:password@domain:port/path?query#fragment
```

### Protocol (Scheme)

- http, https, ftp와 같은 통신 프로토콜을 가리킨다.
- URL의 첫 요소이며, 서버와 클라이언트 간에 어떤 방법으로 통신할지 알려준다.

### User & Password

- 몇몇 scheme들은 유저와 비밀번호를 요청하는 경우가 있다.
- 자원을 요청하기 위해 필요한 userId와 password를 전달한다.

### Domain

- Domain은 URL에서 웹서버의 위치를 지정한다.
- Domain을 통해 DNS에서 매핑된 IP로 자원을 요청한다.

### Port

- 웹 서버에서 자원을 접근하기 위해 사용하는 관문
- 네트워크 서비스나 특정 프로세스를 식별하는 논리적 단위
- 네트워크 상에서는 여러 자원과 통신할텐데 같은 ip에 모든 통신이 들어오면 과부하가 발생한다.
  - 따라서 port로 논리적 단위를 나누어 서버를 구분짓는다.
- http의 경우 80번을 기본 포트로 사용하고, https의 경우는 443을 기본으로 사용한다.

### Path

- 웹 서버에서 자원이 어디에 위치 하는지 경로를 나타낸다.
- 초기의 웹은 실제 서버에서 자원의 물리적 위치를 나타냈지만, 현대에는 웹 서버에서 추상화 하여 보여준다.

### Query

- 클라이언트가 자원을 GET 방식으로 요청할 때, 필요한 데이터를 함께 넘겨 줄 목적으로 사용한다.

### Fragment

- HTML에는 각각의 태그에 id를 부여할 수 있는데, URL에 프래그먼트를 전달하면 페이지가 해당 id가 있는 태그의 위치로 스크롤이 이동한다.
- 예를 들어 지금 노션 사이트에서 상단에 목차들을 클릭하면 해당 헤더로 이동하는데, 이 때 프래그먼트가 사용된다.

## 1.3 URN

> URN은 urn:scheme를 사용하는 URI를 위한 역사적인 이름이다. URN은 영속적이고, 위치에 독립적인 자원을 위한 지시자로 사용 RFC 2141 문서에서 정의되었다.

- URN은 리소스가 더 이상 존재하지 않거나 사용할 수 없게 되어도, urn:scheme을 사용하는 URI는 독립적으로 유지할 수 있다.
- 따라서 URL에서는 파일의 위치에 따라서 path가 바뀌지만, URN은 어느 위치에 파일이 있어도 URI의 문자열이 바뀌지 않는 특징이 있다.

- 아래와 같은 형식이 URN이다.

```jsx
urn:namespace:the:id:for:file
```

# 2. URL Encoding

---

URL로 사용할 수 없는 문자(특수 문자, 예약 문자 등)을 사용하 수 있도록 인코딩 해준다.

인코딩된 문자는 triplet(트리플렛, 세개가 한묶음)들로 인코딩되며 인코딩된 문자는 '%'로 시작하고 그 뒤의 두 숫자는 16진수로 표현된다.

### 예약 문자

[RFC3986](https://tools.ietf.org/html/rfc3986)에 따르면 URI에서 문법적으로 사용되는 예약 문자가 있다.

![스크린샷_2018-03-18_18 00 07 (1)](https://user-images.githubusercontent.com/72444675/159243168-7bae7f51-8aab-440a-9b3f-62cc360f2c49.png)

[https://ko.wikipedia.org/wiki/퍼센트\_인코딩](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%84%BC%ED%8A%B8_%EC%9D%B8%EC%BD%94%EB%94%A9)

또한 비 예약 문자도 있는데, 이들은 인코딩을 하지 않는 것을 권장한다.

![스크린샷_2018-03-18_18 08 03 (1)](https://user-images.githubusercontent.com/72444675/159243196-4367af65-2cfb-42c6-bea5-9802031cdd0f.png)
