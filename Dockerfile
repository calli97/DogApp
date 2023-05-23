FROM node:18

WORKDIR /app

COPY api/package*.json ./

RUN npm install

COPY ./api .

EXPOSE 3001

CMD ["npm" , "start"]