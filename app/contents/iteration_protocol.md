---
date: '2021-09-20'
title: '[ES6+] iteration protocol'
categories: ['JavaScript']
summary: 'ES6에서 달라진 리스트 순회에 대해 알아보자.'
thumbnail: './image/js.png'
type: 'Blog'
---

# ES5에서의 리스트 순회

ES6의 달라진 리스트 순회 방법을 알아보기 앞서 기존의 방식을 먼저 소개해본다.

<br />

```
var arr = [1, 2, 3, 4]

for (var i=0; i<arr.length; i++) {
	console.log(arr[i])
}
```

<br />

기존 ES5에서는 C와 유사하게 리스트의 index(key) 값을 이용하여 접근하는 방식이었다.

# ES6 에서 달라진 리스트 순회

<br />

```
const arr = [1, 2, 3, 4]

for (const a of arr) {
	console.log(a)
}
```

<br />

상당히 직관적으로 바뀐 모습을 볼 수 있다.
그렇다면 바뀐 순회 방법이 내부적으로는 ES5 방식을 따르고 추상화한 것일까?

다음 코드를 보면 아니라는 것을 알 수 있다.

<br />

```
const map = new Map(['a', 1'], ['b', 2], ['c', 3])

for (const m of map) {
	console.log(m)
}

console.log()

for (let i=0; i<map.length; i++) {
	console.log(map[i])
}


['a', 1]
['b', 2]
['c', 3]

undefined
undefined
undefined
```

<br />

기존 순회 방법(ES5)으로 순회되지 않는 Map 객체가 새로운 순회 방법(ES6)으로는 순회되는 것을 볼 수 있다. 이러한 사실을 봤을 때, ES6 순회 방식이 기존 ES5 방식을 따르지 않는다는 것을 알 수 있다.

그렇다면 ES6는 어떠한 방식으로 순회하는 것일까?

# Symbol.iterator

ES6 iterable은 모두 Symbol.iterator를 가지고 있다.
즉, Symbol.iterator 프로퍼티를 가진 객체를 이터러블이라고 한다.

<br />

```
const arr = [1, 2, 3, 4]
console.log(arr[Symbol.iterator])

// ƒ values() { [native code] }
```

<br />

기존의 순회 가능한 데이터 컬렉션들은 통일된 규약 없이 각자의 방식대로 순회할 수 있었다.
따라서 ES6에서는 데이터 컬렉션들을 순회하는 방법을 통일 시켰다고 볼 수 있다.

그래서 이 Symbol.iterator를 갖는 데이터 컬렉션의 순회 방법은 무엇인가?

우선 이 Symbol.iterator를 할당받아 실행시켜보자.

<br />

```
const arr = [1, 2, 3, 4]
const iterable = arr[Symbol.iterator]()
console.log(iterable)

// Array Iterator {}
```

<br />

어떠한 array iterator 라는 객체가 반환되었다.
그리고 이 객체에는 다음과 같은 메소드를 가지고 있었다.

<br />

```
const arr = [1, 2, 3, 4]
const iterable = arr[Symbol.iterator]()
iterable.next()

// {value: 1, done: false}
```

<br />

value가 arr의 첫 번째 값을 의미하고 있었다.
즉 또 다시 iterable.next()를 호출하면

<br />

```
iterable.next()

// {value: 2, done: false}
```

<br />

다음 값인 2가 호출되고, 계속 반복한다면

<br />

```
iterable.next()
// {value: 3, done: false}

iterable.next()
// {value: 4, done: false}

iterable.next()
// {value: undefined, done: true}
```

<br />

arr의 끝까지 순회하게 되고, 더 이상 순회할 값이 없으면 done이 true가 된다.

즉 ES6의 iterable은 이러한 방식으로 순회를 한다.

또 한가지 신기한 사실은 next()를 호출한뒤 for of문을 사용하게 되면, next() 이후의 값이 순회된다.

<br />

```
const arr = [1, 2, 3, 4]
const iterable = arr[Symbol.iterator]()
iterable.next()

for (const a of iterable) {
	console.log(a)
}

2
3
4

```

<br />

# 사용자 정의 iterableå

ES6의 내장 iterable (arr, set, map 등등)이외에 일반 객체도 iteration protocol을 준수하도록 구현하려면 어떻게 해야할까?

<br />

```
const iterable = {
	[Symbol.iterator]() {
    	let i=3
        return {
        	next() {
            	return i==0 ? {done: true} : {value: i--, done:false}
            }
        }
    }
}

const iterator = iterable[Symbol.iterator]()
iterator.next()

for (const a of iterable) {
	console.log(a)
}

3
2
1
```

<br />

iterable 안에는 Symbol.iterator가 구현되어 있기 때문에, for (const a of iterable) 구문을 사용할 수 있게된다.

그리고 한가지 더 구현되야 하는데, iterable\[Symbol.iterator\]() 가 반환하는 객체에는 next메소드 이외에 자기 자신을 반환하는 Symbol.iterator 프로퍼티가 있어야한다.

즉, iterable의 Symbol.iterator 프로퍼티 또한 iteration protocol을 따르는 객체를 반환하기 때문에 Symbol.iterator가 있어야 한다.

따라서 위의 코드를 다시 작성해보자면 다음과 같다.

<br />

```
const iterable = {
	[Symbol.iterator]() {
    	let i=3
        return {
        	next() {
            	return i==0 ? {done: true} : {value: i--, done:false}
            },

            [Symbol.iterator]() { return this }
        }
    }
}

const iterator = iterable[Symbol.iterator]()
iterator.next()

for (const a of iterable) {
	console.log(a)
}

console.log(iterator === iterator[Symbol.iterator]())

3
2
1
true
```

<br />
