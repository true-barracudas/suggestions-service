FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3003

CMD npm run dev-react && npm run docker
