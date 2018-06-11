FROM debian

RUN apt-get update
RUN apt-get install -y nginx curl gnupg2

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs && nodejs -v && npm -v

WORKDIR /var/www/html/dashboard

EXPOSE 8080
