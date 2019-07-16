FROM gitlab/gitlab-ce:12.0.3-ce.0

RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
RUN apt-get update
RUN apt-get install git-lfs -y
