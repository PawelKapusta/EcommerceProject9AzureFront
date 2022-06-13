FROM node:latest

WORKDIR /app
ADD . / /app/

RUN npm install
RUN npm config set scripts-prepend-node-path auto

WORKDIR /app
EXPOSE 80
ENV PORT=80
ENV REACT_APP_BACKEND_URL="https://ecommerceproject9back.azurewebsites.net"
CMD ["npm",  "start"]