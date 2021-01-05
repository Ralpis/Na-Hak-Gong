# 나.학.공 : 나의 학습 공부 사이트



The Backend of NA-HAK-GONG

개인 역량 강화 프로젝트로 노마드코더 우버이츠 클론 코딩 강의를 듣고 있습니다.

우버이츠 클론 코딩 강의를 마무리 짓고, 

챌린지 코스를 진행하면서 이를 업그레이드하여 나.학.공으로 재탄생시킬 예정입니다.



##### 현재 진행 단계 

Typeorm And Nest - ~2020.12.25

User CRUD - ~2020.12.31

User Authentication - ~2021.01.03 

Backend - Email verification 진행중



------



##### 구동 환경 및 필수 세팅 

- Postgres ( https://www.postgresql.org/download/ ) 
- Postico for mac ( https://eggerapps.at/postico/ )
- VS Code ( https://code.visualstudio.com/ )
- TYPEORM (`npm install --save @nestjs/typeorm typeorm pg`)
- Nest js ( `npm i -g @nestjs/cli` )
- GraphQL 
- React
- Yarn
- ESLint
- Prettier
- Jest 등

###### root에 .env.dev 파일생성 후 Postgres 데이터 베이스 정보 및 PRIVATE_KEY 추가 

PRIVATE_KEY=...
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=...
DB_PASSWORD=...
DB_NAME=na-hak-gong



#### NEST JS 사용한 이유

1. 새로운 트렌드 기술
2. Spring과 비슷하여 수평적 기술 스택 향상
3. Typescript의 편리함 경험
4. express, fastify 를 활용할 수 있다는 점에서 장점



#### POSTGRES 사용한 이유 

1. 새로운 DB툴 사용 



