FROM mhart/alpine-node:13
WORKDIR /home
ENV JAVA_HOME /home/java
COPY . .
RUN yarn
EXPOSE 4000
CMD yarn start

