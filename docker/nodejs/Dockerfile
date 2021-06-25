FROM node

WORKDIR /app

#RUN apt-get update &&\
#    apt-get upgrade -y &&\
#    apt-get install -y bash git

CMD npm install && ./node_modules/.bin/encore dev--watch

EXPOSE 3000