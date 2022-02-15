# ![HodoAndMarie logo](http://hodoandmarie.com/media/theme/logo.gif) Official Website

The source code for Hodo&Marie Studio website built with [Hexo](https://hexo.io/).

- Url: https://hodoandmarie.com
- Updated by: feb/2022

## Before you begin

This project requires that you install these next dependencies on your computer:

1. [install git](https://github.com/git-guides/install-git) on your computer.
2. [install node](https://nodejs.org/en/) on your computer.
3. have [a valid GitHub user](https://github.com/) with access to the project repository: [github.com/dcanetma/hodoandmarie-site/](https://github.com/dcanetma/hodoandmarie-site/).
4. [Connect your computer with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to GitHub.
5. if you don't have a prefered IDE, we recommend you to install [Visual Studio Code](https://code.visualstudio.com/).

## Downloading the project

First step, will be to download the code of the project on your computer. 

1. Open a Terminal window.
2. Execute these next commands below:

```bash

# 1. Install Hexo.io
npm install -g hexo-cli

# 2. Download the source code from GitHub
$ git clone https://github.com/dcanetma/hodoandmarie-site

# 3. Go to the project's folder
$ cd hodoandmarie-site
```

> **Important**: You only need to execute the above commands once.

## Managing the website on your computer

Once you have donwloaded the project, you are ready to start managing the website contents.

1. Open a Terminal window.
2. Execute these next commands below:

```bash
# 1. Go to the project's folder
$ cd hodoandmarie-site

# 2. Install/update project dependencies (plugins and stuff)
npm install

# 3. Run the website on your computer
npm start
```

3. Visit http://localhost:4000/ to watch the site.

### Create a new project entries

**Method 1: paste from a draft**

1. Make a copy of the file `Video-sample.md` drom the `source/_drafts` folder to the `source/_posts` folder.
2. Rename the file with the URL you will want to use. Ex: `project-title-for-client-name.md`.
3. Edit the file with your favourite IDE.

**Method 2: use the hexo command**

1. Open a new Terminal window

```bash
# First, go to this projet's folder:
cd hodoandmarie-site
# Run the 'new post' command from Hexo:
hexo new post 'Name of the project'
```

2. Edit the new file the `source/_posts` folder with your favourite IDE.

## Publish the website to the hosting provider

This project uses [GitHub Actions](https://github.com/features/actions) to publish the website to the internet.

The logic of the publishing procedure to the hosting server is store on this [GitHub Actions workflow file](.github/workflows/cy.yml).

Whenever you want to publish the website to your hosting provider, there are two methods available: 
- [Automatic publishing method](#automatic-publishing-method)
- [Manual publishing method](#manual-publishing-method)

Both methods use the [FTP credentials stored on the secrets project settings](https://github.com/dcanetma/hodoandmarie-site/settings/secrets/actions) at GitHub.

### Automatic publishing method

1. Merge changes from master to deploy
2. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml).
3. Wait for the "Build and publish ..." job to finish.
4. Visit the website at [www.hodoandmarie.com](http://www.hodoandmarie.com).

### Manual publishing method

1. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/hodoandmarie-site/actions).
2. Select the ["Build and publish..." job](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml) 
3. Run workflow on the desired branch. 
4. Wait for the "Build and publish ..." job to finish.
5. Visit the website at [www.hodoandmarie.com](http://www.hodoandmarie.com).

### Setting up FTP credentials

**Important**: You will need to update these settings whenever you need to change the hosting provider or the FTP user and password.

You can manage the the [FTP credentials stored on the secrets project settings](https://github.com/dcanetma/hodoandmarie-site/settings/secrets/actions) at GitHub Actions.

The FTP configuration store at secrets is defined by these next settings:

* `FTP_SERVER`: URL to publish the website to.
* `FTP_USERNAME`: FTP username.
* `FTP_PASSWORD`: FTP password.
* `FTP_REMOTE`: Remote folder to publish to.

> **Note**: If you are using CDmon as hosting provider, take into account that the FTP service is disabled after 30 days without use. 