---
date: '2022-02-11'
title: '[React] 다른 색깔 찾기 게임 제작 챌린지'
summary: 'numble에서 진행한 상태관리 라이브러리를 사용하지 않고 구현한 다른 색깔 찾기 게임 챌린지'
categories: ['React']
thumbnail: './image/numble.png'
type: 'Blog'
---

# 💎 결과물

> [배포 링크](https://numble-challenge-six.vercel.app/) <br /> > [프로젝트 저장소](https://github.com/seongjunme/numble-challenge)

---

# 🏅 Numble-Challenge

> [챌린지 바로가기](https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7?fbclid=IwAR0SSpuIgY6jsrrDDkS327GS81uMtTIpMYKY0XBVJpUJ2SizvHnzGB_zlm8_aem_ASgeZPycnHtfst22zVLQZWnG3S_aGlAuktYloa9sZMYerAB5psRNPnpiQQNV-R3RKQDBmQU2RJ2bxk7PrY3m_rd4dh-qigKADasbXPeN08QCGX67bsGsCJQ-nawwkmrQF0c)

## 📝 요구 사항

![](https://images.velog.io/images/jun_/post/a1378a60-6bf6-4b66-b618-dc2347d65d77/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.20.32.png)

## 📝 상세 스펙

![](https://images.velog.io/images/jun_/post/17d1b6ba-171e-4524-be34-dfe745e24011/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.20.17.png)

---

# 🛠 사용 기술

- React (hooks)
- TypeScript
- Styled-components
- CRA
- Vercel (deloy)

---

# 👨🏻‍💻 주요 코드

## 상태 관리

<br />

```javascript
function App() {
  const [state, dispatch] = useReducer(reducer, {
    isPlaying: true,
    stage: 1,
    time: TIME_PER_STAGE,
    score: 0,
    isClear: false,
  });

  const { isPlaying, stage, time, score, isClear } = state;
}
```

<br />

기본적으로 최상단 컴포넌트인 App에서 stage, time, score 등 주요 상태를 정의한다.
time 같은 경우는 커스텀 훅이나 컴포넌트로 분리할까 했지만, score 증가 로직에 time 값이 영향을 주기 때문에 항상 time이 최신값으로 유지되어야 해서 dependency가 발생했다. 그래서 최상단에서 time 상태를 정의하게 되었다. 이 문제는 바로 아래에서 더 자세히 설명한다.

<br />

```jsx
function App() {
  ...

  const goNextStage = useCallback(() => {
    dispatch({ type: 'STAGE_UP' });
  }, []);

  const decreaseTime = useCallback(() => {
    dispatch({ type: 'WRONG_ANSWER' });
  }, []);

  return (
      <>
        <header>스테이지: {stage}, 남은 시간: {time}, 점수: {score}</header>
        <Board stage={stage} handleAnswer={goNextStage} handleWrongAnswer={decreaseTime} />
      </>
  )
}
```

<br />

App에서 렌더링하는 Board 컴포넌트의 경우 useMemo를 이용하여 Props가 변경되지 않으면 리렌더링이 되지 않도록 하였다. goNextStage 메소드에서 발생시키는 dispatch는 stage 증가와, 남은 time 값에 따른 score 증가를 수행한다. 이때 stage와 time 값의 변경은 비동기처리를 고려하여 콜백 인자 값으로 최신 상태가 전달된다. 하지만 time을 외부 값(Time을 담당하는 하위 컴포넌트 또는 커스텀 훅)으로 받게되면 goNextStage에 time dependency가 발생하게 되어 time이 실시간으로 변경될 때마다 goNextStage함수가 재 선언되고, 이로 인해 Board 컴포넌트가 리렌더링되어 색깔이 매 초마다 변경되는 현상이 발생되었다.

하지만 time을 분리시켜도 위 문제를 해결할 수 있는 방법이 있을 것이 분명하니 좀 더 고민이 필요해보인다.

<br />

## 타이머

<br />

```javascript
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    const countDown = () => {
      if (isPlaying) {
        dispatch({ type: 'COUNT_DOWN' });
      }
      if (!(isPlaying || isClear)) {
        alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
        dispatch({ type: 'RESTART' });
      }
    };

    timer.current = setInterval(countDown, 1000);

    return () => {
      clearTimeout(timer.current as NodeJS.Timeout);
    };
  }, [isPlaying, score, stage, isClear]);

  useEffect(() => {
    if (time > 0) return;
    clearTimeout(timer.current as NodeJS.Timeout);
    dispatch({ type: 'GAME_OVER' });
  }, [time]);
```

<br />

렌더링 초기에 타이머를 등록한다.
time 값이 변경될 때마다 time 값이 0이하인지 체크하게 되고, 0이하면 타이머를 종료시키고 GAME OVER 이벤트를 발생시킨다.
GAME OVER는 isPlaying 상태를 false로 변경하게 된다.

isPlaying이 false가 되면 alert로 종료 메시지를 보내고 사용자의 응답을 받으면 RESTART를 발생한다.

<br />

## 블록 렌더링

<br />

```jsx
const Board = ({ stage, handleAnswer, handleWrongAnswer }: Props) => {
  const renderBlock = () => {
    const blocks = [];
    const blockCount = Math.pow(Math.round((stage + 0 / 5) / 2) + 1, 2);
    const blockSize = BOARD_SIZE / Math.sqrt(blockCount);
    const blockColor = {
      r: getRandom(MAX_STAGE, 255),
      g: getRandom(MAX_STAGE, 255),
      b: getRandom(MAX_STAGE, 255),
    };
    const diffTarget = getRandom(0, blockCount - 1);

    for (let i = 0; i < blockCount; i++) {
      if (i === diffTarget) {
        const diffColor = {
          r: blockColor.r - (MAX_STAGE - stage),
          g: blockColor.g - (MAX_STAGE - stage),
          b: blockColor.b - (MAX_STAGE - stage),
        };

        blocks.push(<Block key={i} blockSize={blockSize} rgb={diffColor} onClickHandler={handleAnswer} />);
      } else {
        blocks.push(<Block key={i} blockSize={blockSize} rgb={blockColor} onClickHandler={handleWrongAnswer} />);
      }
    }
    return blocks;
  };

  return <Layout>{renderBlock()}</Layout>;
};
```

<br />

앞선 코드에서 보았듯이 App에서 Board 컴포넌트에게 Props로 stage를 준다.
Board 컴포넌트는 전달받은 stage에 따라 Block들을 렌더링한다.
블럭 중 정답 색상은 스테이지가 올라갈수록 차이를 감소시키기 위해 rgb 값에 각각
`최대 스테이지 - 현재 스테이지` 의 차이를 주었다.
그리고 rgb 값이 음수로 떨어지지 않게 하기위해 blockColor(기본)는 최대 스테이지 값 부터 랜덤으로 선택하게 했다.

그리고 정답 블록을 랜덤으로 선택하여 rgb값과 onClickHandler값을 다르게 전달했다.

<br />

```jsx
const Block = ({ blockSize, rgb, onClickHandler }: Props) => {
  return <Layout blockSize={blockSize} rgb={rgb} onClick={onClickHandler} />;
};
```

<br />

그리고 각 Block을 클릭하면 등록된 handler가 실행된다.
