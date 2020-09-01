<p align="center">
  <img src="git_content/logo-colors.svg" alt="Logo" width="300" height="80">

  <h3 align="center">Skrap-it.com</h3>

  <p align="center">
    All information about Intel processors, and soon AMD.
    <br />
    <a href="#"><strong>Start with the free offer »</strong></a>
    <br />
    <br />
    <a href="#">View Website</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Check Changelogs</a>
  </p>
</p>

# Table of Contents

- [About The Project](#about-the-project)
- [What is Skrap-it ?](#what-is-skrap-it)
- [Stack used](#stack-used)
- [Scraping script](#scraping-script)
- [Block diagram](#block-diagram)
- [API routes](#api-routes)
- [Some examples](#some-examples)
- [Roadmap](#roadmap)

# About The Project

## What is Skrap-it ?

We provide you with an API for all Intel branded processors.
Retrieve this information in JSON format.

We have 3 main offers, one of which is completely free.

Soon we will also add all AMD brand processors.

Our API is kept up to date constantly, and automatically updates itself according to new additions.

# Stack used

We found it logical to use Python for our scrapping script, as well as Laravel as an API engine.

* Python
* Laravel
* Vue.js
* Docker
* Docker-compose
* Bootstrap
* MySQL
* Fontawesome

# Scraping script

Here is a preview of our scraping script.
It is not available in this git directory.

<img src="git_content/scraping_script.gif" alt="Logo" width="580" height="300">

# Block diagram

Here is the current architecture, which will evolve as the structure evolves.

<img src="git_content/blockdiagram.svg" alt="Logo" width="650" height="550">

# API routes

List of currently available API routes. 

This schema will be updated for each change.

<img src="git_content/api_routes.svg" alt="Logo" width="900" height="485">

# Some examples

Preview of the dashboard, accessible when you created your account

<img src="git_content/dashboard.gif" alt="Logo" width="780" height="384">

Preview of the homepage, we serve to promote our api

<img src="git_content/landing.gif" alt="Logo" width="780" height="384">

# Roadmap

  Soon a trello will be available.

- [x] Scraping script
- [x] Front-end (only design)
- [x] Docker config (docker-compose)
- [x] Import Front-end
- [ ] API routes
- [ ] Back-end (laravel)
- [ ] Deployment on the production server