# [devOps](https://github.com/TurtleWolfe/devOps 'Mongo Express React Node: Docker TypeScript Ubuntu')

<!-- ## [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->

## [Bash](https://www.google.com 'Docker Captain & David Herron')

1. ~~previous bash script~~
1. ~~[Getting started with OpenSSH](https://subscription.packtpub.com/book/networking-and-servers/9781788997560/4/ch04lvl1sec47/getting-started-with-openssh "OpenSSH is quite possibly the most useful tool in existence for managing Linux servers. Of all the countless utilities available, this is the one I recommend that everyone starts practicing as soon as they can. Technically, I could probably better fit a section for setting up OpenSSH in Chapter 7, Setting Up Network Services, but this utility is very handy, and we should start using it as soon as possible. In this section, I'll give you some information on OpenSSH and how to install it, and then I'll finish up the section with a few examples of actually using it.")~~
1. ~~Fail2Ban~~
1. ~~Uncomplicated FireWall~~
1. escape `SED`
1. jail.local.conf
1. add Docker to previous Bash Script
1. git clone repo

## [Docker](https://www.google.com 'Docker Captain & David Herron')

1. NGINX
1. FrontEnd React TypeScript
1. BackEnd express, Next, Nuxt or Nest TypeScript Backend
1. git clone repo
1. docker-compose UP

## [Cloud](https://www.google.com 'I')

1. [Digital Ocean](https://www.google.com '40 day demo left')  
   60 day demo  
   40 days left on 60 day demo
1. [Google Cloud PlatForm](https://www.google.com 'free forever sever')  
   free Forever server  
   Node lighter weight on Server than PHP
1. [Amazon Web Service](https://www.google.com 'lease $5 monthly')  
   lease $5 monthly

## [Social Network API](https://www.google.com 'II')

1. [DevLama](https://youtube.com/playlist?list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy 'Social NetWork API & React playlist')  
   Social NetWork API & React playlist
1. [Traversy Media](https://www.google.com 'API Mastery Class')  
   API Master Class
1. [David Herron](https://subscription.packtpub.com/book/web_development/9781838987572/9 "Node.js is the leading choice of server-side web development platform, enabling developers to use the same tools and paradigms for both server-side and client-side software. This updated fifth edition of Node.js Web Development focuses on the new features of Node.js 14, Express 4.x, and ECMAScript, taking you through modern concepts, techniques, and best practices for using Node.js.  
The book starts by helping you get to grips with the concepts of building server-side web apps with Node.js. You’ll learn how to develop a complete Node.js web app, with a backend database tier to help you explore several databases. You'll deploy the app to real web servers, including a cloud hosting platform built on AWS EC2 using Terraform and Docker Swarm, while integrating other tools such as Redis and NGINX. As you advance, you'll learn about unit and functional testing, along with deploying test infrastructure using Docker. Finally, you'll discover how to harden Node.js app security, use Let's Encrypt to provision the HTTPS service, and implement several forms of app security with the help of expert practices. With each chapter, the book will help you put your knowledge into practice throughout the entire life cycle of developing a web app.  
By the end of this Node.js book, you’ll have gained practical Node.js web development knowledge and be able to build and deploy your own apps on a public web hosting solution.")  
    By the end of this Node.js book, you’ll have gained practical Node.js web development knowledge and be able to build and deploy your own apps on a public web hosting solution.
1. [Academind](https://www.google.com 'also place holder')  
   placeholder

## [Shopify](https://www.google.com 'III')

1. YouTube, Udemy & Packt

## [ReactNative:](https://www.google.com 'IV (under nda)')

1. MoshOne

1. Nav Auth

1. Academind Git Hub

1. code splitting

1. .DSP XD imports

<!-- ### [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->

### [https://www.nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1/](https://www.nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1/ 'https://www.nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1/')

### [https://github.com/TurtleWolfe/docker-run-it-ubuntu-bin-bash](https://github.com/TurtleWolfe/docker-run-it-ubuntu-bin-bash 'https://github.com/TurtleWolfe/docker-run-it-ubuntu-bin-bash')

### [https://github.com/TurtleWolfe/TurtleWolf-AWSfreeTeir/blob/master/0Web003.sh](https://github.com/TurtleWolfe/TurtleWolf-AWSfreeTeir/blob/master/0Web003.sh 'https://github.com/TurtleWolfe/TurtleWolf-AWSfreeTeir/blob/master/0Web003.sh')

### [https://github.com/TurtleWolfe/Docker-on-Ubuntu](https://github.com/TurtleWolfe/Docker-on-Ubuntu 'https://github.com/TurtleWolfe/Docker-on-Ubuntu')

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

## [ChatSocketIO Draggable Dice DockerFile React AWS](http://ec2-52-87-220-90.compute-1.amazonaws.com/ 'NGINX Docker AWS')

### [Docker + ReactJS tutorial: Development to Production workflow + multi-stage builds + docker compose](https://youtu.be/3xDAU5cvi5E "In this video I will walk you through how to setup a react app in a docker container. I'll go over some of the challenges that you may face, and we'll take a look at how we can setup both a development and a production environment to host react apps in docker containers. In the video i forgot to point out that when you're running react in docker containers you will may to add the '-it' flag during the docker run command. This seems to vary based on what version of CRA you are running. As an example: docker run -it d --name react-app -p 3000:3000 react-image")

## Install Docker on Ubuntu 18.04

```bash
# update apt-get libraries
sudo apt-get update

# install required packages
sudo apt-get install \
   apt-transport-https \
   ca-certificates \
   curl \
   software-properties-common

# get the GPG key for docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
   sudo apt-key add -

# validating the docker GPG key is installed
sudo apt-key fingerprint 0EBFCD88

# adding the docker repository
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# update apt-get libraries again
sudo apt-get update

# install docker
sudo apt-get install docker-ce

# validate install with version command
docker --version

# validating functionality by running a container
sudo docker run hello-world

# add the current user to the docker group
sudo usermod -aG docker $USER

# validate that sudo is no longer needed
docker run hello-world

# install docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

```bash
   39  docker system info
   40  docker system info | grep Swarm
   41  docker swarm init
   42  docker system info | grep Swarm
   43  docker swarm --help
   44  docker swarm ca --help
   45  docker swarm ca
   46  docker swarm join-token
   47  docker swarm join-token --help
   48  docker swarm join-token -q
   49  docker swarm join-token manager
   50  docker swarm join-token worker
   51  docker swarm unlock-key
   52  docker swarm init
   56  docker service create --help
   64  docker container ls -a
   65  docker container rm -f $(docker container ls -aq)
   66  docker container ls -a
   67  docker container run --detach --name web-server003 --publish 80:80 nginx
   68  docker container ls -a
   70  docker container logs --follow --timestamps web-server003
   72  docker container top web-server003
   74  docker container inspect web-server003
   76  sudo apt  install jq
   77  docker container inspect --format '{{json .State}}' web-server003 | jq
   ## 78
   79  docker container stats
   81  docker container stats
   82  docker network ls
   83  docker network prune
   84  docker network ls
   85  docker network prune
   86  docker network ls
   87  docker network inspect specifics-over --format '{{json .IPAM.Config}}' | jq
   88  docker network inspect bridge --format '{{json .IPAM.Config}}' | jq
   89  docker version
   90  docker search --limit 5 alpine
   91  docker search --help
   98  docker
   99  docker info
  100  docker search --limit 5 alpine
  101  docker network inspect bridge --format '{{json .IPAM.Config}}' | jq
  102  docker network ls
  103  docker container stats
  104  docker container inspect --format '{{json .State}}' web-server003 | jq
  105  docker container top web-server003
  106  docker container run --detach --name web-server003 --publish 80:80 nginx
  107  docker info
  108  docker container ls -a
  109  docker container nginx start
  110  docker container start nginx
  111  docker container ls -a
  112  docker container start 2abfac
  113  history
  114  clear
  115  docker system info
  116  docker system info | grep Swarm
  117  docker swarm ca
  118  docker container inspect --format '{{json .State}}' web-server003 | jq
  119  clear
  120  docker container stats
  121  docker network inspect specifics-over --format '{{json .IPAM.Config}}' | jq
  122  docker network inspect bridge --format '{{json .IPAM.Config}}' | jq
  123  docker container stats
  124  docker network inspect specifics-over --format '{{json .IPAM.Config}}' | jq
  125  docker container stats
  126  docker system info | grep Swarm
  127  docker container start 2abfac
  128  docker container ls -a
  129  docker info
  130  docker container top web-server003
  131  docker search --limit 5 alpine
  132  docker info
  133  docker
  134  docker container ls -a
  135  docker images ls -a
  136  docker images
  137  docker version
  138  docker info
  139  docker container run --detach --name web-server003 --publish 80:80 nginx
  140  docker container ls
  141  docker images ls -a
  142  docker container ls -a
  143  docker network inspect web-server003 --format '{{json .IPAM.Config}}' | jq
  144  docker container inspect --format '{{json .State}}' web-server003 | jq
  145  docker container top web-server003
  146  docker container ls
  147  docker container ps
  148  docker container ps -a
  149  docker ps
  150  docker container exec -it web-server0003 bash
  151  docker container exec -it web-server003 bash
  152  ls
  153  docker container exec -it web-server003 bash
  154  history
  155  code .
  156  sudo snap install code
  157  sudo snap install code --classic
  158  sudo apt update
  159  docker container exec -it web-server0003 bash
  160  docker container exec -it web-server003 bash
  161  docker container run --detach --name web-server003 --publish 80:80 nginx
  162  ocker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  163  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  164  ls
  165  cd /
  166  ls
  167  cd /usr/share/
  168  ls
  169  cd
  170  ls
  171  cd /usr/share/
  172  ls
  173  cds ..
  174  ls
  175  cd
  176  ls
  177  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  178  git status
  179  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  180  docker image build -t btrav/nginx-website .
  181  docker images
  182  docker container ls
  183  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  192  sudo rm -r ChatSocketIO -f
  193  ls
  194  git clone git@github.com:TurtleWolf/ChatSocketIO.git
  195  git clone https://github.com/TurtleWolf/ChatSocketIO.git
  203  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  204  docker container start 2abfac
  205  exit
  206  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  207  docker container run --restart=always -d -i -t 2abfac /bin/bash
  208  docker container
  209  docker container ls
  210  docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  211  docker container rm -f $(docker container ls -aq)
  212  docker container ls
  213  docker images ls
  214  docker image ls
  215  docker container run --restart=always -d -i -t nginx /bin/bash
  216  docker image ls
  217  docker container ls
  218  docker container rm -f $(docker container ls -aq)
  219  docker container run --detach --name web-server003 --restart=always --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  220  docker container ls
  221  docker container rm -f $(docker container ls -aq)
  222  sudo docker container run --detach --name web-server003 --restart=always --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
  223  docker container rm -f $(docker container ls -aq)
  224  ls
  225  docker container run --restart=always -d -i -t ubuntu /bin/bash
  226  docker container ls
  227  docker container rm -f $(docker container ls -aq)
  228  docker container run --restart=always -d -i -t nginx /bin/bash
  229  docker container rm -f $(docker container ls -aq)
  230  docker container run --restart=always -d -i -t --publish 80:80 nginx /bin/bash
  231  docker container ls
  232  docker container rm -f $(docker container ls -aq)
  233  docker container ls
  234  docker container run --detach --name web-server003 --publish 80:80 nginx
  235  docker container run --detach --name web-server003 --publish 80:80 --restart=always nginx
  236  docker container rm -f $(docker container ls -aq)
  237  docker container run --detach --name web-server003 --publish 80:80 --restart=always nginx
  238  docker container ls
  239  docker container info
  240  docker container stats
  241  docker container ls
  242  docker container ls -a
  243  docker container ls info
  244  docker container inspect --format '{{json .State}}' web-server003 | jq
  245  docker network inspect web-server003 --format '{{json .IPAM.Config}}' | jq
  246  sudo apt update
  247  sudo apt upgrade
  248  sudo reboot
  249  docker container ls info
  250  docker network inspect web-server003 --format '{{json .IPAM.Config}}' | jq
  251  docker container inspect --format '{{json .State}}' web-server003 | jq
  252  docker container run --help
  253  docker container --restart string
  254  docker container --restart help
  255  docker container run --help
  256  docker container ls
  257  docker container inspect web-server003
  258  docker container inspect \     --format='{{.NetworkSettings.IPAddress}}'  $ID172.17.0.2
  259  docker container ls
  260  docker container inspect \     --format='{{.NetworkSettings.IPAddress}}'  $IDweb-server003
  261  docker container inspect --help
  262  docker container inspect web-server003
  263  docker container inspect web-server003 | grep RestartPolicy
  264  docker container inspect web-server003 | grep "RestartPolicy": {
  265  docker container inspect web-server003 | grep RestartPolicy
  266  docker container inspect --help
  267  docker container inspect web-server003 -f RestartPolicy
  268  docker container inspect web-server003
  269  docker container inspect web-server003 "RestartPolicy": {
  270  docker container inspect web-server003 RestartPolicy
  271  docker container inspect web-server003
  272  docker image ls
  273  docker container ls
  274  docker container inspect web-server003 | jq "."
  275  docker container inspect --format '{{json. .Config.Labels))' web-server003 | jq "."
  276  docker container inspect --format '{{json. .Config.Labels))' web-server003 | jq "."
  277  docker container inspect --format `{{json. .Config.Labels))` web-server003 | jq "."
  278  docker container inspect --format '{{json. .Config.Labels))' web-server003 | jq "."
  279  docker container inspect --format '{{json. .Config.Labels))' web-server003 | jq
  280  docker info
  281  docker images
  282  docker-machine

docker container exec -it web-server0003 bash
docker container run --detach --name web-server003 --publish 80:80 --restart=always nginx
#  cd usr/share/nginx/html

docker container start 2abfac
docker container run --restart=always -d -i -t 2abfac /bin/bash
# docker remove all
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx


# docker REACT
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html react

# docker DRUPAL
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html drupal

# docker WORD PRESS
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html wordpress

# docker DRAGGABLE DICE
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html draggable dice

# docker Free Code Camp Template
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html freecodecampTEMPLATE

# ChatSocketIO.git
git clone https://github.com/TurtleWolf/ChatSocketIO.git

# docker-node-mongo
git clone https://github.com/TurtleWolf/docker-node-mongo

# dockerLAMP
git clone git@github.com:TurtleWolf/dockerLAMP.git
```

[![alt text](Images/DockerCookBook2ndEditon.png 'Docker CookBook 2nd Edition')](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example 'https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example')

[![alt text](Images/Docker10halfHOuRS.png 'https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example')](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example)

## [Traversy Media; Exploring Docker Commands, Help & Tips](https://www.youtube.com/playlist?list=PLETG2T1KvniqIEU_xkadLpugT8nhmNxSR 'Traversy Media Exploring Docker Commands, Help & Tips')

## [Traversy Media; Wordpress & Docker](https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42 'Traversy Media Wordpress & Docker')

```bash
# Show commands & management commands
docker
```

```bash
# Docker version info
docker version
```

```bash
# Show info like number of containers, etc
docker info
```

## WORKING WITH CONTAINERS

```bash
# Create & run a container in foreground
docker container run -it -p 80:80 nginx
```

```bash
# Create an run a container in background
docker container run -d -p 80:80 nginx
```

```bash
# Shorthand
docker container run -d -p 80:80 nginx
```

```bash
# Naming Containers
docker container run -d -p 80:80 --name nginx-server nginx
```

### TIP: WHAT RUN DID

- Looked for image called nginx in image cache
- If not found in cache, it looks to the default image repo on Dockerhub
- Pulled it down (latest version), stored in the image cache
- Started it in a new container
- We specified to take port 80- on the host and forward to port 80 on the container
- We could do "$ docker container run --publish 8000:80 --detach nginx" to use port 8000
- We can specify versions like "nginx:1.09"

```bash
# List running containers
docker container ls
```

OR

```bash
# List running containers
docker ps
```

```bash
# List all containers (Even if not running)
docker container ls -a
```

```bash
# Stop container
docker container stop [ID]
```

```bash
# Stop all running containers
docker stop $(docker ps -aq)
```

```bash
# Remove container (Can not remove running containers, must stop first)
docker container rm [ID]
```

```bash
# To remove a running container use force(-f)
docker container rm -f [ID]
```

```bash
# Remove multiple containers
docker container rm [ID] [ID] [ID]
```

```bash
# Remove all containers
docker rm $(docker ps -aq)
```

```bash
# Get logs (Use name or ID)
docker container logs [NAME]
```

```bash
# List processes running in container
docker container top [NAME]
```

#### TIP: ABOUT CONTAINERS

Docker containers are often compared to virtual machines but they are actually just processes running on your host os. In Windows/Mac, Docker runs in a mini-VM so to see the processes youll need to connect directly to that. On Linux however you can run "ps aux" and see the processes directly

## IMAGE COMMANDS

```bash
# List the images we have pulled
docker image ls
```

```bash
# We can also just pull down images
docker pull [IMAGE]
```

```bash
# Remove image
docker image rm [IMAGE]
```

```bash
# Remove all images
docker rmi $(docker images -a -q)
```

### TIP: ABOUT IMAGES

- Images are app bianaries and dependencies with meta data about the image data and how to run the image
- Images are no a complete OS. No kernel, kernel modules (drivers)
- Host provides the kernel, big difference between VM

```bash
# Some sample container creation
# NGINX:
docker container run -d -p 80:80 --name nginx nginx (-p 80:80 is optional as it runs on 80 by default)
```

```bash
# APACHE:
docker container run -d -p 8080:80 --name apache httpd
```

```bash
# MONGODB:
docker container run -d -p 27017:27017 --name mongo mongo
```

```bash
# MYSQL:
docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql
```

```bash
# CONTAINER INFO
# View info on container
docker container inspect [NAME]
```

```bash
# Specific property (--format)
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' [NAME]
```

```bash
# Performance stats (cpu, mem, network, disk, etc)
docker container stats [NAME]
```

## ACCESSING CONTAINERS

```bash
# Create new nginx container and bash into
docker container run -it --name [NAME] nginx bash
```

- i = interactive Keep STDIN open if not attached
- t = tty - Open prompt

### **For Git Bash, use "winpty"**

```bash
winpty docker container run -it --name [NAME] nginx bash
```

```bash
# Run/Create Ubuntu container
docker container run -it --name ubuntu ubuntu
```

### **(no bash because ubuntu uses bash by default)**

```bash
# You can also make it so when you exit the container does not stay by using the -rm flag
docker container run --rm -it --name [NAME] ubuntu
```

```bash
# Access an already created container, start with -ai
docker container start -ai ubuntu
```

```bash
# Use exec to edit config, etc
docker container exec -it mysql bash
```

```bash
# Alpine is a very small Linux distro good for docker
docker container run -it alpine sh
```

(use sh because it does not include bash)
(alpine uses apk for its package manager - can install bash if you want)

## NETWORKING

### "bridge" or "docker0" is the default network

```bash
# Get port
docker container port [NAME]
```

```bash
# List networks
docker network ls
```

```bash
# Inspect network
docker network inspect [NETWORK_NAME]
("bridge" is default)
```

```bash
# Create network
docker network create [NETWORK_NAME]
```

```bash
# Create container on network
docker container run -d --name [NAME] --network [NETWORK_NAME] nginx
```

```bash
# Connect existing container to network
docker network connect [NETWORK_NAME] [CONTAINER_NAME]
```

```bash
# Disconnect container from network
docker network disconnect [NETWORK_NAME] [CONTAINER_NAME]
```

```bash
# Detach network from container
docker network disconnect
```

## IMAGE TAGGING & PUSHING TO DOCKERHUB

```bash
# tags are labels that point ot an image ID
docker image ls
```

Youll see that each image has a tag

```bash
# Retag existing image
docker image tag nginx btraversy/nginx
```

```bash
# Upload to dockerhub
docker image push bradtraversy/nginx
```

```bash
# If denied, do
docker login
```

```bash
# Add tag to new image
docker image tag bradtraversy/nginx bradtraversy/nginx:testing
```

## DOCKERFILE PARTS

- FROM - The os used. Common is alpine, debian, ubuntu

- COPY # Copies files from host to container
- ADD # Copies files from host to container

- ENV - Environment variables
- ARG - Environment variables

- CMD - Final command run when you launch a new container from image
- ENTRYPOINT - Final command run when you launch a new container from image

- RUN - Run commands/shell scripts, etc
- EXPOSE - Ports to expose
- WORKDIR - Sets working directory (also could use 'RUN cd /some/path')

### Build image from dockerfile (reponame can be whatever)

```bash
# From the same directory as Dockerfile
docker image build -t [REPONAME] .
```

#### TIP: CACHE & ORDER

- If you re-run the build, it will be quick because everythging is cached.
- If you change one line and re-run, that line and everything after will not be cached
- Keep things that change the most toward the bottom of the Dockerfile

## EXTENDING DOCKERFILE

```bash
# Custom Dockerfile for html paqge with nginx
FROM nginx:latest # Extends nginx so everything included in that image is included here
WORKDIR /usr/share/nginx/html
COPY index.html index.html
```

```bash
# Build image from Dockerfile
docker image build -t nginx-website
```

```bash
# Running it
docker container run -p 80:80 --rm nginx-website
```

```bash
# Tag and push to Dockerhub
docker image tag nginx-website:latest btraversy/nginx-website:latest
```

```bash
docker image push bradtraversy/nginx-website
```

## VOLUMES

### Volume - Makes special location outside of container UFS. Used for databases

### Bind Mount -Link container path to host path

```bash
# Check volumes
docker volume ls
```

```bash
# Cleanup unused volumes
docker volume prune
```

```bash
# Pull down mysql image to test
docker pull mysql
```

```bash
# Inspect and see volume
docker image inspect mysql
```

```bash
# Run container
docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql
```

```bash
# Inspect and see volume in container
docker container inspect mysql
```

### TIP: Mounts

- You will also see the volume under mounts
- Container gets its own uniqe location on the host to store that data
- Source: xxx is where it lives on the host

```bash
# Check volumes
docker volume ls
```

### **There is no way to tell volumes apart for instance with 2 mysql containers, so we used named volumes**

```bash
# Named volumes (Add -v command)(the name here is mysql-db which could be anything)
docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql
```

```bash
# Inspect new named volume
docker volume inspect mysql-db
```

## BIND MOUNTS

- Can not use in Dockerfile, specified at run time (uses -v as well)
- ... run -v /Users/brad/stuff:/path/container (mac/linux)
- ... run -v //c/Users/brad/stuff:/path/container (windows)

### **TIP: Instead of typing out local path, for working directory use $(pwd):/path/container - On windows may not work unless you are in your users folder**

```bash
# Run and be able to edit index.html file (local dir should have the Dockerfile and the index.html)
docker container run  -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
docker container run --detach --name web-server003 --publish 80:80 -v $(pwd):/usr/share/nginx/html nginx
```

```bash
# Go into the container and check
docker container exec -it nginx bash
cd /usr/share/nginx/html
ls -al
```

```bash
# You could create a file in the container and it will exist on the host as well
touch test.txt
```

## DOCKER COMPOSE

- Configure relationships between containers
- Save our docker container run settings in easy to read file
- 2 Parts: YAML File (docker.compose.yml) + CLI tool (docker-compose)

### 1. docker.compose.yml - Describes solutions for

- containers
- networks
- volumes

### 2. docker-compose CLI - used for local dev/test automation with YAML files

### Sample compose file (From Bret Fishers course)

```bash
version: '2'

# same as
# docker run -p 80:4000 -v $(pwd):/site bretfisher/jekyll-serve

services:
  jekyll:
    image: bretfisher/jekyll-serve
    volumes:
      - .:/site
    ports:
      - '80:4000'
```

```bash
# To run
docker-compose up
```

```bash
# You can run in background with
docker-compose up -d
```

```bash
# To cleanup
docker-compose down
```

### Sample compose file (From Drupal)

```bash
# Drupal with PostgreSQL
#
# Access via "http://localhost:8080"
#   (or "http://$(docker-machine ip):8080" if using docker-machine)
#
# During initial Drupal setup,
# Database type: PostgreSQL
# Database name: postgres
# Database username: postgres
# Database password: example
# ADVANCED OPTIONS; Database host: postgres

version: '3.1'

services:

  drupal:
    image: drupal:8-apache-alpine
    ports:
      - 8080:80
    volumes:
      - /var/www/html/modules
      - /var/www/html/profiles
      - /var/www/html/themes
      # this takes advantage of the feature in Docker that a new anonymous
      # volume (which is what we're creating here) will be initialized with the
      # existing content of the image at the same location
      - /var/www/html/sites
    restart: always

  postgres:
    image: postgres:10
    environment:
      POSTGRES_PASSWORD: example
    restart: always
```

README.md
package-lock.js
Dockerfile
DockerIgnore
DockerCompose.yml
DockerCompose-Production.yml

[![alt text](Images/DockerQuickStartQuide.png 'DockerQuickStartQuide')](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example 'https://subscription.packtpub.com/book/virtualization_and_cloud/9781788626866/3/ch03lvl1sec48/building-an-apache-image-a-dockerfile-example')

[![alt text](Images/Fundamental18Docker.png 'Fundamental18Docker')](https://subscription.packtpub.com/book/networking_and_servers/9781788997027/3/ch03lvl1sec36/exec-into-a-running-container)

[![alt text](Images/MasteringDockerThirdEdition.png 'Mastering Docker Third Edition')](https://subscription.packtpub.com/book/virtualization_and_cloud/9781789616606/13/ch13lvl1sec116/what-does-production-look-like)

## [How to create a docker-based LAMP stack using docker-compose on Ubuntu 18.04 Bionic Beaver Linux](https://linuxconfig.org/how-to-create-a-docker-based-lamp-stack-using-docker-compose-on-ubuntu-18-04-bionic-beaver-linux 'How to create a docker-based LAMP stack using docker-compose on Ubuntu 18.04 Bionic Beaver Linux ')

```bash
 1727  sudo apt purge nodejs
 1729  sudo apt remove nodejs
 1741  sudo npm uninstall -g create-react-app
```

```bash
 1739  sudo apt install nodejs
       sudo npm install -g create-react-app@3.0.1
```

## [Docker Mastery for Node.js Projects From a Docker Captain](https://www.bretfisher.com/docker-mastery-for-nodejs 'This repo is for use in my Udemy Course Feel free to create issues or PRs if you find a problem with the repo. Please use the Udemy course for Q&A and course support.')

1. docker-compose Alpine dependencies (8)
1. pip install docker-compose
1. 2 spaces, no tabs in YAML
1. : (key:value pairs)
1. - (lists)
1. `WORKDIR`, not `cd` or `mkdir` (unless... ?)
1. `docker-compose up -d --build` to force rebuild
1. `docker-compose down -v` to delete volumes

### Service Options

1. `build`
1. `stop`
1. `ps`
1. `push`
1. `logs`
1. `exec`

## Section 3: Node Dockerfile Best Practice Basics

### [# 14. Dockerfile Best Practice Basics](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12624326#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`COPY` over `ADD`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12624326#content '0:30 ADD can load and untar, but usually want COPY')
1. [`npm cache clean --force`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12624326#content '2:25')
1. [`CMD node` not npm](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12624326#content '4:28')
1. [`WORKDIR` covers `cd` & `mkdir` unless you need `chown` then `RUN mkdir`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12624326#content '4:28')

### [# 15. FROM Base Image Guidelines](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12928654#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`LTS` : even](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12928654#content '0:55')

### [# 16? When To Use Alpine, Debian, or CentOS Images](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545430#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`Alpine`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545430#content '14 2:26')
1. [not `slim` or `latest`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545430#content '14 2:26')
1. [`Stretch` more current than `Jessie`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545430#content '14 2:26')

### [# 18. Assignment Answers: Making a CentOS Node Image](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545438#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`ENV` node version](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545438#content '2:12')
1. [`Stretch` more current than `Jessie`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545438#content '3:21')
1. [`USER node` before `CMD` to enable non-root user](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545438#content '8:31')
1. [each `RUN` creates a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13545438#content '12:10 (actually each line is a new layer)')

### [# 19. Running Non-root Container Users](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970558#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`USER node`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970558#content '3:50')
1. [`RUN mkdir app && chown -R node:node`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970558#content '4:20')
1. [`docker-compse exec -u root`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970558#content '5:20')

### [# 20. Working With The Node User Limits](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14274050#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`USER node`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14274050#content '2:30 Run, Entry Point, & CMD')
1. [`RUN mkdir app && chown -R node:node .`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14274050#content '5:20')
1. [`COPY --chown=node:node . .`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14274050#content '6:45 may also add this for package*.json')
1. [`docker-compse exec -u root`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14274050#content '7:10')

### [# 21. Making Images Efficiently](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [each line is a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '1:40')
1. [`EXPOSE` higher in ordering because it changes less often](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '5:20')
1. [`COPY package.json package-lock.json* ./`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '4:49 COPY, RUN, COPY asteriks means optional if it happens to be there')
1. [`RUN npm` install && `npm` cache clean --force](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '4:49 COPY, RUN, COPY')
1. [`COPY . .`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '4:49 COPY, RUN, COPY')
1. [`RUN apt-get` once and early](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/12900260#content '5:30 cache busting may give you an outdated package')

## Section 4: Controlling The Node Process In Containers

### [# 23. Node Process Management](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295460#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [no need for nodemon, forever or pm2](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295460#content '0:50')

### [# 24. The Truth About the PID 1 Problem](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13299110#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`SIGINT` (cntrl C), `SIGTERM` (docker container stop or update), & ~~SIGKILL~~](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13299110#content '3:35 avoid SIGKILL, its unhealthy')
1. [most likely won't need `tini`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13299110#content '6:25')

### [# 25. Proper Node Shutdown Options](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295466#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [init](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295466#content '0:00')
1. [tini](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295466#content '3:39')
1. [./sample-graceful-shutdown/sample.js](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295466#content '5:03')

### [# 27. Assignment Answers: Writing Node Dockerfiles](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [COPY, if doing more than one file the .`/` is required](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content '8:45 forward slash required for multiple files')
1. [`&&` must run both](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content '9:45')
1. [`docker build -t assignment1 .`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content '10:45')
1. [docker build `--no-cache` -t assignment1 .](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content 'to force rebuild')
1. [`docker run -p 80:3000 assignment1`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13295798#content '11:05')

### [# 29. Assignment Answers: Testing Graceful Shutdowns](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13358912#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [docker run `init` -d assignment1:notini](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13358912#content '7:00')

## Section 5: Advanced Dockerfiles with Multi-stage and BuildKit

### [# 31. Multi-stage Docker Builds](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13236624#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`FROM node as prod`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13236624#content '3:30')
1. [`FROM prod as dev`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13236624#content '3:30')

### [# 34](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13236854#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`FROM node as prod`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13236854#content '3:30')

## Section 6: Node Apps in Cloud Native Docker

### [# 39. Cloud Native App Guidelines](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`ENV` configuration](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')
1. [log `stdout/stderr`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')
1. [.dockerignore](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')
1. [pin all versions](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')
1. [Graceful exit `SIGTERM/INIT`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')
1. [12 factor](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796026#content '1:40')

### [# 40. Twelve Factor Apps - Config](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796030#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [CMD or ENTRYPOINT script with `envsubst` (enviroment substitue)](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796030#content '2:35 to pass env vars into config files')

### [# 41. Twelve Factor Apps - Logs](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796032#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [Winston, Morgan, Bunyan or BugSnag `stdout` or `stderr`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796032#content '3:00 only use the console transport')

### [# 42. The `.dockerignore` File](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [exclude](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`.git/`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`node_modules/`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`npm-debug`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`docker-compose*.yml`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [good to include](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`Dockerfile`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')
1. [`README.md`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796038#content '4:00 only use the console transport')

### [# 43. Assignment Migrating Traditional Apps](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796042#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`ln` SymLinks](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796042#content '6:30 check official NGINX')
1. [`bind-mount` in & out dirs](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13796042#content '6:45')

## Section 7: Compose for Awesome Local Development

### [# 46. Compose Project Tips](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970458#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`version: 2` for local developement](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970458#content '1:40')
1. [`depends_on` not in version 3](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970458#content '4:00 can be used for health checks')

### [# 47. Bind-Mounting Code, Optimizing for Performance](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [left side of `bind mount` should always just be a dot](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '1:23 or at least relative to the one you are in ../')
1. [don't bind mount databases](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '3:00 it may seem like a good idea at first')
1. [don't copy in local code](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '3:00')
1. [`DDforWin` drive permissions](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '3:00')
1. [`Perms:` Linus != Windows](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '3:00')
1. [`:delegated`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '9:00 do not bind mount databases anyway')
1. [`docker-bg-sync`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970470#content '11:42 or Windows SubSystem for Linux')

### [# 48. Node Modules In Images](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970472#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`cp` .gitignore .dockerignore](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970472#content '3:21 node-gyp')

### [# 49. Node Modules In Bind-Mounts](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`WORKDIR` /node](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '6:30 move node modules up one directory')
1. [`WORKDIR` /node/app](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '6:30 move node modules up one directory')
1. [`volumes:` - . : /node/app](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '8:08 move node modules up one directory')
1. [`volumes:` - /node/app/node_modules](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '8:51 hide it with an empty directory')

### [# 50. NPM, Yarn and Other Tools in Compose](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`docker-compose run`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '1:17 starts a new container and shell')
1. [`docker-compose exec`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '1:17 existing container already running after docker-compose up')
1. [`docker-compose run api` npm i](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '3:40')
1. [`docker-compose exec api` strapi --help](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '5:00 -it not required')
1. [`docker-compose exec api` bash](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970476#content '5:00 -it not required')

### [# 51. File Monitoring and Node Auto Restarts](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061155#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`command:` /app/node_modules/.bin/nodemon ./bin/www](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061155#content '5:30')
1. [`ENV` PATH /app/node_modules/.bin/:$PATH](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061155#content '6:38')

### [# 52. Startup Order and Dependencies](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061157#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`depends_on`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061157#content '1:30 changes from v2 & v3 heatth checks')

### [# 53. Healthchecks for depends_on](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061161#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`mongo: test:` echo ..](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061161#content '4:30')

### [# 54. Shrinking Compose Files and DRY YAML](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061181#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`GHOST_VERSION=2` docker-compose up](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061181#content '${GHOST_VERSION:-2}')
1. [Templating](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061181#content '0:00')
1. [Control your Compose Command Scope](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061181#content '0:00')

### [# 55. Making Microservices Easier with Compose](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970482#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`nginx-proxy` enviroment: `-VIRTUAL_HOST`=](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970482#content '8:15')
1. [`traefik-proxy` labels: `traefic.frontend.rule=Host:nginx.localhost`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970482#content '10:00 reverse proxy')

### [# 56. VS Code, Debugging and TypeScript](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [RUN `tsc`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content '4:00 run typeScript for production only')
1. [target: `dev`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content '5:05')
1. ["outDir" : `"dist"`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content '6:50')
1. [nodemond.json `watch` , `ignore` & `"exec"` "node --inpsect=0.0.0.0:9229 -r ts-node/register ./src/app.ts"](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content '7:10 watch & ignore')
1. [vscode `debugger`](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13970502#content '11:00')

### [# 57. Assignment: Building a Sweet Compose File](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061163#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`mongo: test:` echo ..](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061163#content '0:00')

### [# 58. Assignment Answers: Building a Sweet Compose File](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061165#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [`mongo: test:` echo ..](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/14061165#content '0:00')

## Section 8: Making Container Images Production Ready

### [# 59. Section Intro: Controlling The Node Process](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [each line is a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content '1:40')

## Section 9: Running Production Node.js Containers

### [# 69. Section Intro: Controlling The Node Process](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [each line is a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content '1:40')

## Section 10: Running Node.js on ARM with Docker

### [# 76. Section Intro: Controlling The Node Process](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [each line is a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content '1:40')

## Section 11: Extras

### [# 80. Section Intro: Controlling The Node Process](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert')

1. [each line is a new layer](https://www.udemy.com/course/docker-mastery-for-nodejs/learn/lecture/13629152#content '1:40')
