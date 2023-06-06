FROM ubuntu:20.04

ENV TZ=Asia/Kolkata
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y npm git sudo yarn curl nodejs wget
RUN git clone https://github.com/Ajayos/MI_LIBRO  /root/MI_LIBRO/
WORKDIR /root/MI_LIBRO/
CMD ["npm", "install", "-f", "&&" , "npm", "start"]