#Multi-stage build 

#Build stage
FROM node:14.17-alpine3.10 as builder 

COPY . /app
WORKDIR /app
RUN npm install 
#RUN npm test || exit 1
RUN npm run build
EXPOSE 8080


#Deployment stage 
FROM node:14.17-alpine3.10

COPY --from=builder /app/dist/ /opt/app/
COPY package.json package-lock /opt/app/
RUN cd /opt/app && npm install --production

ENTRYPOINT cd /opt/app/ && node server.js --env=$NODE_ENV

