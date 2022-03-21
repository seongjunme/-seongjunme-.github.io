---
date: '2021-08-04'
title: 'setTimeOut 동작 방식'
categories: ['JavaScript']
summary: 'setTimeOut의 동작 방식, 주기에 대해 알아보자.'
thumbnail: './image/js.png'
type: 'Blog'
---

### SetTimeout 내부 동작

```jsx
console.log('Hi');

setTimeout(function cb() {
  console.log('there');
}, 5000);
console.log('JS');
```

위의 코드를 실행하면서 setTimeout 내부동작에 대해 알아보자

- 우선 맨 처음 hi를 출력할 때 스택과 콘솔은 다음과 같다.

<img src="https://user-images.githubusercontent.com/72444675/159237480-b1c99b28-8182-45f7-94ae-5ec1eb870df6.png" width="700px">

- hi를 출력하고 setTimeout을 실행한 뒤 스택 변화는 다음과 같다.
  - 당연히 hi 출력문 다음인 setTimeout이 스택에 들어간다.

<img src="https://user-images.githubusercontent.com/72444675/159237601-b8c4061c-6eda-4cae-9dfa-752b4d11f7ba.png" width="700px">

- 그리고 setTimeout을 실행하면 5000ms 동안 webapis에서 대기한다.

![스크린샷_2021-08-02_오후_11 24 32](https://user-images.githubusercontent.com/72444675/159237653-e26a807f-829d-4f62-8b71-db171774daf7.png)

console.log('there')은 timer가 종료된 후 실행될 것이다.

다음 마지막 출력문을 실행하면 스택과 출력문은 다음과 같다.

<img src="https://user-images.githubusercontent.com/72444675/159237692-24ae541c-83cd-4ab3-a7dd-fceae2770d36.png" width="700px">

그 후 스택이 모두 비워지게 되고, timer가 종료되면 이제 task queue에 들어가 실행 대기를 한다.

<img src="https://user-images.githubusercontent.com/72444675/159237754-aa72b64c-61b7-4ed5-9696-d3c23eae2c50.png" width="700px">

<br />

<img src="https://user-images.githubusercontent.com/72444675/159237854-1536842e-c451-45e7-af29-85908d24be4b.png" width="700px">

<br />

그리고 이제 큐에서 스택으로 올라가 실행하게 된다.

<br />

<img src="https://user-images.githubusercontent.com/72444675/159237950-9388819d-eff4-4686-9d57-9ac90846daf6.png" width="700px">

<br />

#### 그렇다면 setTimeout을 0ms로 설정하면 대기하지 않고 바로 실행이 될까??

```jsx
console.log('Hi');

setTimeout(function cb() {
  console.log('there');
}, 0);
console.log('JS');
```

- 정답은 '그렇지 않다.' 이다

  - setTimeout이 스택에 올라가면, cb함수는 timer가 실행되고, 0ms초 후에 바로 task queue에 들어간다.
  - 그리고 이 task queue의 값들은 스택이 모두 비워진 다음에 들어갈 수 있다.
  - 즉, console.log( 'JS' ); 까지 완료 되어야, cb함수가 실행된다.
    <img src="https://user-images.githubusercontent.com/72444675/159238029-3e88b691-9d7c-478a-9467-4598f24fcaa8.png" width="700px">

    <img src="https://user-images.githubusercontent.com/72444675/159238159-fe5ca6b7-70a7-427e-9976-28c85366751d.png" width="700px">
