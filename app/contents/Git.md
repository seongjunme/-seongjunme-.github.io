---
date: '2021-08-02'
title: 'Git의 내부 구조'
categories: ['Git']
summary: 'Git의 내부 구조와 동작 원리를 이해해보자.'
thumbnail: './image/git.png'
type: 'Blog'
---

## 1. DVCS 란?

---

DVCS (Distributed Version Control Systems ) 즉, 분산 버전 관리 입니다.

중앙 서버에 있는 코드를 개발자 각각의 로컬 컴퓨터에 복사한 후, 복사된 프로젝트를 가지고 작업하며 서버에 업로드를 할 수 있습니다.

즉, DVCS에서 흔하게 사용되는 것이 바로 Git입니다.

## 2. Git을 사용하는 이유

---

- 복잡한 프로젝트의 워크플로(workflow)를 간단하게 하기위해
- 즉 git은 로컬 저장소를 이용한 빠른 퍼포먼스와 브랜치를 통한 효율적인 협업을 도와준다.

## 3. 실제 Git 구조

### 3.1 Git의 객체들

---

- Commit
  - Git에서 가장 중요한 객체
  - 부모 커밋에 대한 참조가 들어있다. (자식 커밋에 대한 참조는 없음)
  - 커밋 메시지
  - 트리(Tree)
- Tree
  - 커밋당 하나 이상의 트리를 포함함
  - 파일 시스템의 디렉토리와 유사
  - 트리는 서브 트리 또는 BLOB 객체를 포함 (자식)
- BLOB
  - Binary Large Object
  - 파일 객체
  - 일종의 불변 객체
  - SHA1 체크섬을 이용해서 파일 내용을 식별 가능
- (TAG)
- 그 외 나머지는 객체가 아님

### 3.2 git의 상황별 주요 명령어

---

- 작업장 (working area)을 만들고 싶다
  - init : 새로운 로컬 저장소를 만든다.
  - clone : 중앙 서버의 저장소를 복사해온다.
- 파일을 생성했는데, 이 파일에 대해 버전관리하고 싶다.
  - add: untracked file을 tracked하고 Working Area로 보낸다.
  - add를 하지 않으면 새로 추가한 파일은 git이 무시한다. (버전관리 안 함)
- 버전을 만들어서 저장하고 싶다.

  - commit: 현재 상태(버전)를 .git파일에 저장한다.
  - 버전으로 저장할 때 마다 새로운 파일을 생성하여 저장한다.

- 저장소의 상태 (untracked file이 있는지 등)을 보고 싶다.
  - status: 저장소에서 일어나는 다양한 변화를 감시한다.
  - 브랜치, 커밋 상태 등 변화된 내용을 볼 수 있다.
- commit 히스토리를 조회한다.

  - log: 저장소의 커밋 기록을 시간순으로 보여준다.
  - 각 커밋의 SHA-1 체크섬, 저자 이름, 저자 이메일, 커밋한 날짜, 커밋 메시지를 보여준다.

- 브랜치를 생성하여 작업하고 싶다.

  - branch

- 생성한 로컬 브랜치를 삭제하고 싶다.
  - branch -D
- 브랜치 이름을 변경하고 싶다.

  - branch -m

- 브랜치를 이동하고 싶다.
  - checkout

### 3.3 Commit 과정 ( 상태 변화 )

---

![image_(3)](https://user-images.githubusercontent.com/72444675/159236011-066647e0-4a33-42b3-94d7-91fed84146a1.png)

- **Local Repository**
  - Working Directory, Staging Area, .git directory로 구분된다.

<br />

![image_(2)](https://user-images.githubusercontent.com/72444675/159236054-a5dfea58-beb4-4ee4-9788-cbb6a8f64e11.png)

<br />

- **Working Directory**
  - untracked: 아직 tracking이 되지 않은 파일 (git이 모르는 파일)
    - 기존에 존재하던 프로젝트에서 git을 초기화하거나
    - 파일을 새로 만들면(또는 처음 저장소를 init&clone하면) untracked 상태이다.
  - tracked: git이 알고 있는 파일
    - unmodified/modified로 나눌 수 있다.
    - 처음 저장소를 Clone 하면 모든 파일은 Tracked이면서 Unmodified 상태이다. (커밋된 상태)
    - 마지막 커밋 이후 아직 아무것도 수정하지 않은 상태에서 어떤 파일을 수정하면 Git은 그 파일을 Modified 상태로 인식한다.
    - modified된 파일만 staging area로 옮겨갈 수 있다.
    - unmodified는 수정되지 않았기 때문에 이동 불가
  - **Modified 상태의 파일을 Stage 하기**
    - 수정한 파일이 Tracked 상태이지만 아직 Staged 상태는 아니다.
    - 따라서 Staged 상태로 만들려면 git add 명령을 수행해야 한다.
    - 즉, git add 파일을 새로 추적 (untracked → tracked)할 때도 사용하고, 이미 추적됐지만 수정한 파일을 Staged상태로 만들 때도 사용한다.
  - **Staging Area**
    - tracked & staged 상태
    - git rm --cached를 이용하면 unstage(Staging Area-> Working Directory)가 가능하다.
  - **Git Directory**
    - commit 명령어를 실행하면 Staging Area에 있는 파일들이 하나의 버전으로서 git directory에 저장된다.
    - commit 후에는 파일 상태가 staged에서 unmodified로 변경된다.
  - **Remote 저장소**
    - push 명령어를 실행하면 로컬저장소의 내용이 원격 저장소로 올라간다.
