# 나.학.공 : 나의 학습 공부 사이트



The Backend of NA-HAK-GONG

개인 역량 강화 프로젝트로 노마드코더 우버이츠 클론 코딩 강의를 듣고 있습니다.

우버이츠 클론 코딩 강의를 마무리 짓고, 

챌린지 코스를 진행하면서 이를 업그레이드하여 나.학.공으로 재탄생시킬 예정입니다.



##### 현재 진행 단계 

- [x] Typeorm And Nest - ~ 2020.12.25


- [x] User CRUD - ~ 2020.12.31


- [x] User Authentication - ~ 2021.01.03 


- [x] Backend - Email verification - ~ 2021.01.06 (Mailgun permanently Banned )

- [x] Unit Testing The User Service - ~2021.01.27

- [x] Unit Testing JWT And Mail - ~2021.01.28

- [x] User Module E2E - ~2021.02.01

- [ ] Restaurant CRUD - ing 

- [ ] Dish And Order CRUD

- [ ] Order Subscriptions

- [ ] Payments

- [ ] Frontend Setup

- [ ] Authentication

- [ ] User Pages

- [ ] Restaurants

- [ ] Testing React Components 

- [ ] E2E React Testing

- [ ] Owner Dashboard

- [ ] Payments

- [ ] Making An Order

- [ ] Deploy To Production

- [ ] ------------------------------------------------------------

- [ ] Change Na-Hak-Gong And Functions Renewal 

------



##### 구동 환경 및 필수 세팅 

1. 구동 환경
   - Macpro 2017 Touchbar Bigsur OS 
     - VS Code, Postgres, Postico
   - Windows 10 OS
     - VS Code, Postgres 
2. 필수 세팅 

- Postgres ( https://www.postgresql.org/download/ ) 
- Postico for mac ( https://eggerapps.at/postico/ )
- VS Code ( https://code.visualstudio.com/ )
- npm (http://www.nodejs.org)
- TYPEORM (`npm install --save @nestjs/typeorm typeorm pg`)
- Nest js ( `npm i -g @nestjs/cli` )
- .env.dev 파일 생성 ( Postgres 데이터 베이스 정보 및 PRIVATE_KEY 추가 )
- GraphQL 
- React
- Yarn
- ESLint
- Prettier
- Mailgun ( 임시적으로 사용 중단 )
- Jest 등



#### NEST JS 사용한 이유

1. 새로운 트렌드 기술
2. Spring과 비슷하여 수평적 기술 스택 향상
3. Typescript의 편리함 경험
4. express, fastify 를 활용할 수 있다는 점에서 장점



#### POSTGRESQL 사용한 이유 

1. 새로운 DB툴 사용 (기존 My SQL과 크게 달라지는 점은 없지만 개인적으로 기술 사용 스택을 늘리기 위하여)
2. 오픈 소스 DB로 엔터프라이즈로 전환을 하였을 때, 라이센스 비용이 들지 않기때문에
3. PostgreSQL도 어느정도 자료 서칭이 가능한 시점이 되었고, 지속해서 버전업을 하기때문에 

MySQL과 비교하여 레퍼런스적이나 지원에 있어 아쉬운 부분은 있지만, 나름 괜찮은 데이터베이스로 커스터마이징도 가능하기에 실력이 디벨롭되고 나면 새로운 방식 적용 예정 

#### Mailgun 문제

mailgun을 이용할 때, 하나의 IP에서만 작업을 해야하며 순간적으로 여러개의 메일을 같은 메일함으로 지속적으로 보냈을 때 영구정지 처리를 당할 수 있다. 그렇기 때문에 Nest JS 에서 제공하는 mail 라이브러리를 사용하는 것으로 교체하거나 다른 메일 라이브러리나 시스템을 찾아봐야할 것 같다. 

#### Jest Test coverage Error 

- [x] JEST UNIT TEST COVERAGE ERROR CLEAR

Jest unit test를 진행할 때, coverage를 확인하는 부분에서 필드값이 출력되지 않는 오류가 발생했다. 초기 spec 파일을 완전히 지워버려서 테스트가 안되는 것인지, 아니면 spec 파일 설정을 잘못한 것인지 테스트할 예정



#### Jest Test Coverage 0% 

Jest가 TS를 지원하지 않는 버젼이 있어서 다운그레이드를 하여 해결하였다. 하지만 다운그레이드 이후 몇몇 파일을 출력하지 못하는 에러가 발생해 가장 최근 버젼으로 버젼 업을 하여 해결
추가 문제 발견 - 스펙파일존재시 에러발생


#### 전체적인 구조 

(구조이미지)

(기능별 구조)

(기능)

#### START 
NPM RUN START:DEV or NPM START --WATCH
