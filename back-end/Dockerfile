FROM node:12.18

# RUN mkdir -p /var/www/html

WORKDIR /var/www/html

COPY package*.json ./

RUN apt-get update && \
  apt-get install -y yarn

COPY . /var/www/html

EXPOSE 3000

CMD [ "node", "server" ]