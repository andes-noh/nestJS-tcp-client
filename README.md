# NestJs-tcp-client Project

- yarn upgrade ts-node-dev@latest ts-node@latest 버전 업그레이드
- tcp-client standalone application
- auto reconnecting
- .env file(host, port)
- default host: localhost, default port: 8080

# NestJs-http-server Project(v0.3)


## Runtime
- [Node JS](https://nodejs.org/ko/)

## Framework
- [NestJs](https://nestjs.com/)

## 실행
- npm install or yarn
- package.json -> debug
```
"ts-node-dev --respawn --prefer-ts-exts lib/"
```
- ts-node-dev(ts 파일을 미리 컴파일하지 않고 바로 실행 시키는 엔진)

## 빌드
- package.json -> build
```
tsc --build --force
```
- tsc --build(*.ts -> *.js)

## 추가 라이브러리 및 프레임워크
- fastify 
- swagger
- typeorm

## swagger

- `localhost:3000/swagger`
- ./index.ts로 주소 변경 가능

## api

- get, post 구현
- delete, patch 구현 완료

## CI/CD pipeline 구축 (with argocd)

- docker file 작성
- Link: [Argo CD][argocd]

[argocd]: https://argo-cd.readthedocs.io/en/stable/ 'Go Argo'

