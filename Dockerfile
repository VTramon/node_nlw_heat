

FROM node

ENV GITHUB_CLIENT_ID_WEB=
ENV GITHUB_CLIENT_SECRET_WEB=
ENV GITHUB_CLIENT_ID_MOBILE=
ENV GITHUB_CLIENT_SECRET_MOBILE=
ENV JWT_SECRET=

WORKDIR /code
COPY package.json /code/package.json
COPY . /code
EXPOSE 3000 4000
RUN npm install -g typescript
RUN npm install -g ts-node-dev
RUN npm install
CMD [ "npm", "run", "dev" ]
