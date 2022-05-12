# pull the official base image
FROM nginx

# set working direction
WORKDIR /usr/share/react

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

# install application dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . .

RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a build/. /usr/share/nginx/html
