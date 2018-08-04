FROM mhart/alpine-node:10
# We store all our files in /usr/src to perform the build
WORKDIR /usr/src
# We first add only the files required for installing deps
# If package.json or package-lock.json don't change, no need to re-install later
COPY package.json package-lock.json ./
# We install our deps
RUN npm install --only=production
# We copy all source files
COPY . .
#run
EXPOSE 4000
CMD [ "npm", "start" ]