FROM KTBwhitedevil:latest

RUN git clone https://github.com/Sandun-Mihiranga2/Queen-Elina /root/whitedevil
WORKDIR /root/whitedevil/ 
ENV KL=Kerala/India
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Sandun-Mihiranga2/media

CMD ["node","white", "bot.js"]
