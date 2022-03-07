FROM node:16.14.0 as current_node
WORKDIR /app
COPY ./ /app/
RUN yarn install 
RUN yarn run build --prod

FROM nginx:alpine
COPY --from=current_node /app/dist/cass-angular /usr/share/nginx/html

