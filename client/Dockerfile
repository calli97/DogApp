FROM node:18
#ENVIROMENT VARIABLES
# ENV PORT=3002
# ENV NODE_USER=admin
# ENV NODE_PASSWORD=postgres

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]