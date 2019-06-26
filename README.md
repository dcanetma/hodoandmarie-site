# HodoAndMarie Official Website

> url: https://hodoandmarie.com

The website for Hodo&Marie Studio.

## Getting started

``` bash

# Installing the Hexo CLI
npm install -g hexo-cli

# Clone repo
$ git clone https://XXXX.git
$ cd site

# install dependencies
npm install
```

Once installed you can:


1. Run server:

``` bash
$ hexo server
```

Visit http://localhost:4000/ to watch the site.

2. Create posts like this:

``` bash
$ hexo new post 'Name of the project'
```

## How to deploy

Push to the 'deploy' branch of this project. 

The process is run by Bitbucket Pipelines. See 'bitbucket-pipelines.yml' for more details.

``` bash
$ git push origin deploy
```
