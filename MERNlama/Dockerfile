FROM node:14.17.6-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../ && npm cache clean --force
COPY . .
# EXPOSE 8800
RUN chown -R node /usr/src/app
USER node
# dev
# CMD ["nodemon", "index.js"]
# production
CMD ["node", "index.js"]
