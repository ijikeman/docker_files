FROM scratch
# exec sh
COPY libc.so.6 /lib/x86_64-linux-gnu/libc.so.6
COPY ld-linux-x86-64.so.2 /lib64/ld-linux-x86-64.so.2
COPY sh /bin/sh

# exec ls
COPY libselinux.so.1 /lib/x86_64-linux-gnu/libselinux.so.1
COPY libpcre.so.3 /lib/x86_64-linux-gnu/libpcre.so.3 
COPY libdl.so.2 /lib/x86_64-linux-gnu/libdl.so.2
COPY ld-linux-x86-64.so.2 /lib64/ld-linux-x86-64.so.2
COPY libpthread.so.0 /lib/x86_64-linux-gnu/libpthread.so.0
COPY ls /bin/ls
