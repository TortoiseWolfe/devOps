# react frontEnd
# client
# DevLama Social Network
# r-frnt

# PRODUCTION
# pull official base image
FROM node:14.17.6-stretch-slim as prod
# FROM node:14.17.6-alpine
ENV NODE_ENV=production
# EXPOSE 3000

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production \
  && mv node_modules ../ \
  && npm cache clean --force
RUN npm install react-scripts@4.0.3 -g

# add app
COPY . .
RUN chown -R node /usr/src/app
USER node
# production
# CMD ["node", "index.js"]
CMD ["npm", "start"]
# end of prod

# DEVELOPMENT
FROM prod as dev
ENV NODE_ENV=development
RUN npm install --only=development \
  && mv node_modules ../ \
  && npm cache clean --force
CMD ["npm", "start"]

# # TEST
# FROM dev as test
# ENV NODE_ENV=development
# CMD ["npm", "test"]
