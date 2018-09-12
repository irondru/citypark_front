ARG APP_ROOT=/app

FROM node:10 AS build
ARG APP_ROOT
WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
RUN yarn global add react-scripts@1.1.4
COPY package*.json yarn.lock ./
RUN yarn
COPY public ./public
COPY src ./src
COPY .env* ./
RUN yarn build

# production environment
FROM nginx:alpine
ARG APP_ROOT
ENV APP_DIR=$APP_ROOT
RUN rm -rf /etc/nginx/conf.d
RUN mkdir /usr/share/nginx/files
COPY nginx/default.conf.template /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/start.sh ./
COPY --from=build ${APP_ROOT}/build /usr/share/nginx/html/
EXPOSE 80 443
ENTRYPOINT [ "./start.sh" ]