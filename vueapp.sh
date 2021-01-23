docker run \
-p 3000:80 \
-d --name vuenginxnew \
--mount type=bind,source=/c/workplace/vue/vue-micro-frontends-demo/nginx,target=/etc/nginx/conf.d \
--mount type=bind,source=/c/workplace/vue/vue-micro-frontends-demo/dist,target=/usr/share/nginx/html \
nginx
