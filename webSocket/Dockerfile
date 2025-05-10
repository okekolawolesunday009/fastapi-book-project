FROM node:16-alpine

WORKDIR /app

COPY . .

# Install curl
RUN apk add --no-cache curl



RUN npm cache clean --force \
  && npm install -g nodemon \
  && npm install --legacy-peer-deps


EXPOSE 6789

CMD ["nodemon", "ws.js"]

