---
date: '2021-07-26'
title: 'LRU'
categories: ['CS']
summary: '캐시가 무엇이고, LRU란 무엇인지 알아보자.'
thumbnail: './image/cs.jpeg'
type: 'Blog'
---

# LRU

---

LRU 알고리즘이란 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법이다.

캐시 교체 알고리즘에 많이 사용된다.

### 3.1 캐시란?

---

캐시란 자주 사용하는 데이터를 미리 복사 담아두는 임시 장소를 의미한다.

예를들어 캐시는 메모리와 레지스터 사이에 존재하는 하나의 메모리로 사용된다.

메모리의 용량이 커질 수록 CPU에서 메모리를 탐색하는 시간 또한 길어진다.

때문에 CPU 처리 속도와 메모리 탐색 시간 사이의 격차가 발생하게 된다.

따라서 이 격차를 해소하기 위해 캐시 메모리를 사용할 수 있다.

**즉, 자주 사용하는 특정 값을 캐시에 올려 CPU가 더욱 빨리 접근할 수 있도록 도와준다!**

### 3.2 캐시의 동작

---

CPU가 메모리에 접근하기 전에 먼저 캐시 메모리에서 원하는 데이터가 있는지 확인한다.

1. 만약 있다면 **적중(hit)**
2. 없는 경우엔 **실패(miss)**라고 한다.

이 때 데이터를 캐시에서 찾을 확률을 적중률(hit ratio)라고 한다.

캐시 메모리의 성능을 이 적중률에 의해 결정된다.

### 3.3 캐시 교체 정책

---

캐시 교체 알고리즘의 예로 3가지를 살펴본다.

- FIFO : 캐시에 적재된 시간을 기준으로 교체할 캐시를 선정한다.
  단점: 오래 있었다는 이유로 독점될 가능성이 있음, 오래 있었지만 추후에 사용 안 할 수도 있다.
- LFU : 가장 적은 횟수를 참조하는 캐시를 교체
  단점: 추후에 자주 사용될 수 있지만 참조 수가 적다는 이유로 교체될 수 있다.
- LRU: 가장 오랫동안 참조되지 않은 페이지를 교체

### 3.4 LRU 알고리즘

---

Map 객체를 이용하여 간단하게 구현할 수 있다.

```jsx
constructor(cacheSize) {
        this.cacheSize = cacheSize;
        this.cache = new Map();
    }
```

```jsx
set(key, data) {
        if (this.cache.size === this.cacheSize) {
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(keyword, sliced_data);
    }
```

- set 함수는 데이터 값을 캐시에 등록하는 함수 이다.
- 우선 현재 캐시 사이즈가 꽉 차있는지 확인한다.
  - 만약 캐시 사이즈가 초과된다면 캐시 값중 가장 맨 첫번째(가장 오래된)값을 삭제시킨다.
- Map 객체는 순서를 보장하기 때문에 가능하다!

```jsx
get(key) {
        let data;
        if (this.cache.has(key)) {
            data = this.cache.get(key);

            data.hitCount++;
            this.cache.delete(key);
            this.cache.set(key, data);
        } else {
            data = null;
        }

        return data;
    }
```

- get함수는 캐시 값을 가져오는 함수이다.
- 우선 찾고자 하는 데이터가 있는지 확인한다.
  - 만약 있다면 캐시 값을 그대로 가져오고 삭제 후 다시 넣어준다. (최신으로 갱신)
  - 만약 없다면 데이터에 널을 넣어 반환한다.

### 3.5 LRU 캐시와 HashMap의 차이

---

일반적인 HashMap이라면 순서를 보장하지 않을 수 있다.

순서를 보장하지 않는다면 위의 방식은 적합하지 않다.

### ⁉️ 그럼 순서를 보장하려면 어떻게 구현해야 할까??

- Doubly Linked List(이중 연결 리스트)를 이용하여 구현할 수 있다.
- head를 정하고 head에 가까울 수록 최근 사용한 노드이고 tail에 가까우면 가장 오래 사용하지 않은 데이터로 구현할 수 있다.

#### ‼️Doubly linked list란 무엇일까??

- **양방향** 연결리스트이다.
- 일반 linked list는 단방향, 즉 next node만 가리키는 구조이다.
- 반면에 doubly linked list란 previous, next 모두를 가리킨다!

<br />

<img width="636" alt="_2021-07-21__11 16 56" src="https://user-images.githubusercontent.com/72444675/157589154-28fa4d87-86a3-4017-8605-6bdff311a538.png">

[출처: 생활코딩](https://opentutorials.org/module/1335/8940)

<br />

#### ⁉️ 그래서 doubly linked list로 LRU를 어떻게 구현할 수 있는가?

- 위에서 만약 20에 다시 접근 했다면
  - 20의 prev에 해당하는 노드와 20의 next에 해당하는 노드를 연결시켜준다.
  - (10 < - > 30 < - > 40)
  - 20의 prev와 next를 각각 null, head를 가리키도록 한다.
    (20 < - > 10 < - > 30 < - > 40)
  - head가 20을 가리키도록 바꿔준다.
- 이렇게 구현한다면 head 에 가까울 수록 최신이고 tail에 가까울 수록 오래된 상태가 된다!
