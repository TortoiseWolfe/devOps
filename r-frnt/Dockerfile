# react frontEnd
# client
# DevLama Social Network
# r-frnt
#
# BASE
FROM node:14.17.6-stretch-slim as base
# EXPOSE 3000
# ENV PORT=3000
# set $PATH to include node_modules/.bin
# ENV PATH /usr/src/node_modules/.bin:$PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
#                                             #
# set working directory
WORKDIR /usr/src/app
#                                             #
# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci --production \
  # RUN npm install --only=production \
  # yes, this should minimize the size of the image
  && npm cache clean --force
RUN npm install react-scripts@4.0.3 -g \
  # && mv node_modules ../ \
  # I hope you know what you're doing?
  # yes, this should minimize the size of the image
  && npm cache clean --force
#                                             #
# add custom code per app
COPY . .
# change permissions to node user             # 
RUN chown -R node /usr/src
# end of base

# BUILD (mid step to production)
FROM base as build
ENV PATH /usr/src/node_modules/.bin:$PATH
WORKDIR /usr/src/app
USER node
RUN npm run build
# end of build

# DEVELOPMENT
FROM base as dev
ENV NODE_ENV=development
ENV PATH /usr/src/node_modules/.bin:$PATH
ENV CI=true
WORKDIR /usr/src/app
# RUN npm install --only=development \
RUN npm ci --development \
  && mv node_modules ../ \
  && npm cache clean --force
USER node
CMD ["npm", "start"]

# # TEST
# FROM dev as test
# ENV NODE_ENV=development
# CMD ["npm", "test"]
# # end of test

# production environment
FROM nginx:1.21.3-alpine as prod
ENV NODE_ENV=production
# EXPOSE 80
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]