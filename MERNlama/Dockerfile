# express BackEnd
# server
# DevLama Social Network
# mernlama:8800
#
# BASE
FROM node:14.17.6-stretch-slim as base
# EXPOSE 8800
ENV NODE_ENV=production
# ENV PORT=8800
# set $PATH to include node_modules/.bin
# ENV PATH /usr/src/node_modules/.bin:$PATH
#                                             #
# set working directory
WORKDIR /usr/src/app
#                                             #
# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --only=production \
RUN npm ci --production \
  # && mv node_modules ../ \
  # I hope you know what you're doing?
  # yes, this should minimize the size of the image
  && npm cache clean --force
#                                             #
# add custom code per app
COPY . .
# change permissions to node user             # 
RUN chown -R node /usr/src
USER node
# end of base

# PRODUCTION
FROM base as prod
ENV NODE_ENV=production
# ENV PORT=8800
CMD ["node",  "index.js"]
# end of prod

# DEVELOPMENT
FROM base as dev
ENV NODE_ENV=development
ENV PATH /usr/src/node_modules/.bin:$PATH
# RUN npm install --only=development \
RUN npm ci --development \
  && mv node_modules ../ \
  && npm cache clean --force
CMD ["nodemon",  "index.js"]
# end of dev

# # TEST
# FROM dev as test
# ENV NODE_ENV=development
# CMD ["npm", "test"]
# # end of test

# CMD ["nodemon",  "index.js"]
