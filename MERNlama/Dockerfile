# express api
# server
# DevLama Social Network
# MERNlama

# PRODUCTION
# pull official base image
FROM node:14.17.6-stretch-slim as prod
# FROM node:14.17.6-alpine
ENV NODE_ENV=production
# EXPOSE 8800

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production \
  && mv node_modules ../ \ 
  && npm cache clean --force

# add app
COPY . .
RUN chown -R node /usr/src/app
USER node
# production
CMD ["node", "index.js"]
# end of prod

# DEVELOPMENT
FROM prod as dev
ENV NODE_ENV=development
# RUN npm install --only=development \
RUN npm install \
  && mv node_modules ../ \
  && npm cache clean --force
# CMD ["npm", "start"]
# FIXED this should not have a ../ in it. The app and node_modules are in the same dir
CMD ["nodemon",  "index.js"]

# # TEST
# FROM dev as test
# ENV NODE_ENV=development
# CMD ["npm", "test"]