# HodoAndMarie Official Website

> url: https://hodoandmarie.com

The website for Hodo&Marie Studio.

## Dependencies

You will need:

1. to install node and git on your computer.
2. a valid GitHub user with access to this repository: https://github.com/dcanetma/hodoandmarie-site/

## Getting started

```bash

# Installing the Hexo CLI
npm install -g hexo-cli

# Clone repo
$ git clone https://github.com/dcanetma/hodoandmarie-site
$ cd site

# install dependencies
npm install
```

Once installed you can:

1. Start the local server:

```bash
$ npm start
```

Visit http://localhost:4000/ to watch the site.

2. Create posts like this:

```bash
$ hexo new post 'Name of the project'
```

## How to deploy

There are two methods: automatic or manual.

Both of them, use the GitHub actions pipeline.

### Automatic method

1. Merge changes from master to deploy

### Manual method

1. Go to GitHub actions and Select the ["Build and publish..." job](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml) 
2. Run workflow on the desired branch. 
