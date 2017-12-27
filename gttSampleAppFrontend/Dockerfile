FROM node:carbon

# Create app directory
WORKDIR /usr/src/app-frontend

COPY package*.json ./

# RUN npm install webpack -g

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . .

# RUN npm install -g sails
# RUN sails lift

EXPOSE 8080

CMD [ "npm", "start" ]