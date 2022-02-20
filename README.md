# Hodo&Marie website

This project contains the source code, contents and publications scripts for Hodo&Marie Studio website, built with [Hexo](https://hexo.io/).

- Url: https://hodoandmarie.com
- Updated by: feb/2022

**Table of contents:**
- [Before you begin](#before-you-begin)
- [Downloading the project](#downloading-the-project)
- [Managing the website on your computer](#managing-the-website-on-your-computer)
    - [Managing data files: navigation links](#managing-data-files-navigation-links)
    - [Managing data files: Social links](#managing-data-files-social-links)
    - [Create a new project entries](#create-a-new-project-entries)
- [Download and Uploading changes to GitHub using git](#download-and-uploading-changes-to-github-using-git)
- [Publish the website to the hosting provider](#publish-the-website-to-the-hosting-provider)
    - [Automatic publishing method](#automatic-publishing-method)
    - [Manual publishing method](#manual-publishing-method)
    - [Setting up FTP credentials](#setting-up-ftp-credentials)

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
2. Execute these next commands:

```bash

# 1. Install Hexo.io
npm install -g hexo-cli

# 2. Download the source code from GitHub
$ git clone https://github.com/dcanetma/hodoandmarie-site

# 3. Go to the project's folder
$ cd hodoandmarie-site
```
The content of the project is now downloaded on your computer.

## Managing the website on your computer

Once you have donwloaded the project, you are ready to start managing the site contents.

First, you will need to run the website with the contents on your computer.

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

### Managing data files: navigation links

1. Open the `source/_data/menu.yml`.
2. Add/Edit/delete entries.
3. Check that the website is working fine.

> More information: [Hexo documentation on data files](https://hexo.io/docs/data-files#content-inner).

### Managing data files: Social links

1. Open the `source/_data/social.yml`.
2. Add/Edit/delete entries.
3. Check that the website is working fine.

### Create a new project entries

**Method 1: paste from a draft**

1. Make a copy of the file `Video-sample.md` drom the `source/_drafts` folder to the `source/_posts` folder.
2. Rename the file with the URL you will want to use. Ex: `project-title-for-client-name.md`.
3. Edit the file with your favourite IDE.
4. Check that the new page works fine.

**Method 2: use the hexo command**

1. Open a new Terminal window

```bash
# First, go to this projet's folder:
cd hodoandmarie-site
# Run the 'new post' command from Hexo:
hexo new post 'Name of the project'
```

2. Edit the new file the `source/_posts` folder with your favourite IDE.
3. Check that the new page works fine.

## Download and Uploading changes to GitHub using git

You will need to upload changes from your computer to GitHub, so they can be shared with other contributors.

This project uses two branches to manage the code on Github: `master` and `deploy`.

    // TODO

## Publish the website to the hosting provider

This project uses [GitHub Actions](https://github.com/features/actions) to publish the website to the internet.

The logic of the publishing procedure to the hosting server is store on this [GitHub Actions workflow file](.github/workflows/cy.yml).

Whenever you want to publish the website to your hosting provider, there are two methods available: 

1. [Automatic publishing method](#automatic-publishing-method)
2. [Manual publishing method](#manual-publishing-method)

Both methods use the [FTP credentials stored on the secrets project settings](https://github.com/dcanetma/hodoandmarie-site/settings/secrets/actions) at GitHub.

### Automatic publishing method

1. Merge changes from master to deploy:

    ```sh
    npm run publish
    ```
2. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml).
3. Wait for the ["Build and publish..." job](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml) job to finish.
4. Visit the website at [www.hodoandmarie.com](http://www.hodoandmarie.com).

### Manual publishing method

1. Go to [Actions tab on the GitHub's project](https://github.com/dcanetma/hodoandmarie-site/actions).
2. Select the ["Build and publish..." job](https://github.com/dcanetma/hodoandmarie-site/actions/workflows/cy.yml). 
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