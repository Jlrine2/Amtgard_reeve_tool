# STEP 1 build Angular app
FROM node:alpine as build
RUN apk update && apk add --no-cache make git

WORKDIR /app

COPY package.json package-lock.json  /app/

RUN cd /app && npm set progress=false && npm install

COPY .  /app

RUN cd /app && npm run build


# STEP 2 build a small nginx image with static website
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

## From 'build' copy website to default nginx public folder
COPY --from=build /app/dist/Amtgard-reeve-tool /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
