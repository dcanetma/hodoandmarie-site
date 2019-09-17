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

Hexo is configured to make deployments to the production server.

To deploy:

``` bash
$ npm run deploy
```

It will generate the site and upload to the server via FTP.

Follow the instructions on the 'deploy' section of the HEXO 'config.yml' file.

You'll need to create a 'config.deploy.yml' file with the FTP credentials. Start with the 'config.deploy.sample.yml'
