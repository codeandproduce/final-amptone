FROM mhart/alpine-node:7

WORKDIR /src
ADD . /src

EXPOSE 8000

ENTRYPOINT ["npm", "start"]
