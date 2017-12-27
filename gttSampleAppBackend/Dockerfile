FROM node:carbon

# Create app directory
WORKDIR /usr/src/app-backend

COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install -g sails
RUN npm install sails sails-disk waterline-sqlite3
RUN npm install

# Bundle app source
COPY . .

# RUN npm install -g sails
# RUN sails lift

EXPOSE 1337

CMD [ "sails", "lift" ]