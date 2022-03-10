---
date: '2021-07-24'
title: '[Node.js] 표준 입출력'
categories: ['Node.js']
summary: 'Node.js로 사용자 입력을 받는 방법을 알아보자.'
thumbnail: './image/nodejs.jpeg'
type: 'Blog'
---

# Node.js 표준 입출력

---

자바스크립트는 다른 언어와는 다르게 표준 입력이 까다로운 편인 것 같다.

- 우선 readline 모듈을 이용하여 표준 입력을 구현할 수 있다.
- readline 모듈은 한 번에 한 줄씩 readable 스트림에서 데이터를 읽기위한 인터페이스를 제공한다.

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('입력하세요.', input => {
  console.log(`입력 결과입니다.: ${input}`);
  rl.close();
});
```

- 위의 코드는 한 줄만 읽어오고 입력이 종료된다.
- 만약 반복적으로 입력을 읽어오고 싶다면 on 메소드를 이용할 수 있다.
- 5번 반복으로 한 줄 씩 읽고 싶다면 아래의 코드를 사용하여 해결할 수 있다.

```jsx
rl.on('line', (input) => {
	console.log(`입력 결과입니다.: ${input}`);
	count += 1;
	if (count === 5) {
	  rl.close();
	}
}
```
