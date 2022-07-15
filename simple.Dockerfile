FROM node:14-alpine as builder

WORKDIR /code

ADD package.json yarn.lock /code/

RUN yarn

ADD . /code

RUN npm run build

FROM nginx:alpine
COPY --from=builder /code/dist /usr/share/nginx/html
