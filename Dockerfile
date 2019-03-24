from nginx
label maintainer "lingzi"
copy ./build/ /usr/share/nginx/html/ice-blog/
copy ./nginx.conf /etc/nginx/conf.d/default.conf
expose 83 