# copy sh
cp -pf /bin/sh .
cp -pf /lib/x86_64-linux-gnu/libc.so.6 .
cp -pf /lib64/ld-linux-x86-64.so.2 .

# copy ls
cp -pf /bin/ls .
cp -pf /lib/x86_64-linux-gnu/libselinux.so.1 .
cp -pf /lib/x86_64-linux-gnu/libpcre.so.3 .
cp -pf /lib/x86_64-linux-gnu/libdl.so.2 .
cp -pf /lib64/ld-linux-x86-64.so.2 .
cp -pf /lib/x86_64-linux-gnu/libpthread.so.0 .
docker build -t scratch_base .
docker run -itd --rm --name scratch_base scratch_base sh
docker exec -it scratch_base sh
