docker run \
	--env-file /root/amptone/env.list \
	-v /root/amptone:/src \
	-p 8000:3000 \
	-d ampnode
