<h2 align="center">
<img src="https://github.com/bruno-iskeiti/Amala-API/blob/a4ef57403c275cc4ecaa50aa9e556972a98a1226/public/images/logo.png" alt="project logo"> <br>
A fan-made <i>Shin Megami Tensei</i> REST API!
<br>&nbsp;
</h2>

## Table of Contents

- [What is Amala API?](#what-is-amala-api)
- [More technical details](#more-technical-details)
- [Setup](#setup)
- [Trivia](#trivia)
<!--
- [FAQ](#faq)
-->

## What is Amala API?
<div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;As the title suggests, this project is a REST API that lets you query information about the <i>Shin Megami Tensei</i> games' characters. The goal of this project is to provide SMT fans a resource to do cool things, similar to what Pokémon fans have with <a href="https://pokeapi.co">PokeAPI</a>. This is a simple project written in <b>TypeScript and Express.js</b>, running in the <b>Node.js</b> environment. For security reasons, authentication is required to perform <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> requests; however, you can make as many <code>GET</code> requests as you like!
</div>
<br>

> **BIG DISCLAIMER:** As of writing this, Amala API's database only contains <i>Nocturne</i> data.

## More technical details
<div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;This is indeed a passion project, <b>but</b> also part of my <i>portfolio</i> :D. I think it's a good idea to show how the project was made to potential future employers.
<br>&nbsp;&nbsp;&nbsp;&nbsp;As mentioned above, the technology stack for this project includes <b>Express.js</b> as the backend framework, with most of the code written in <b>TypeScript</b>, running in the <b>Node.js</b> environment. I chose Express.js for its unopinionated nature and simplicity, and TypeScript because it reduces runtime headaches compared to JavaScript. While the DBMS in this repo is SQLite, the live version uses <b>MariaDB</b>, managed solely by the <b>Sequelize</b> ORM (<i>you can configure either</i> &#128521). All of this is served through a <b>Nginx</b> reverse proxy running in a <b>Docker</b> container orchestrated by <b>Docker Compose</b>. In summary:
<br>&nbsp;
</div>
<div align="center">
  <table>
    <tr>
        <td><b><h3>Technology</h3></b></td>
        <td><b><h3>Role</h3></b></td>
    </tr>
    <tr>
        <td>TypeScript</td>
        <td>Language</td>
    </tr>
    <tr>
        <td>Express.js</td>
        <td>Framework</td>
    </tr>
    <tr>
        <td>MariaDB</td>
        <td>DBMS</td>
    </tr>
    <tr>
        <td>Sequelize</td>
        <td>ORM</td>
    </tr>
    <tr>
        <td>Nginx</td>
        <td>Reverse proxy</td>
    </tr>
    <tr>
        <td>Docker</td>
        <td>Container</td>
    </tr>
  </table>
</div>

## Setup ![Static Badge](https://img.shields.io/badge/typescript-ver._5.9.2-blue)
First, make sure Docker is installed! If you don't have it, click <a href="https://docs.docker.com/get-started/get-docker/" target="_blank">here</a> to see how to download it.
- Download the source code directly from GitHub or use: <br>
  `$ git clone https://github.com/bruno-iskeiti/Amala-API.git`<br>
- Inside the 'Amala API' folder, you'll find a file named "Makefile". It contains commands to make installation and configuration easier. To set up the application with a built-in SQLite database, simply run: <br>
`$ makefile setup`<br>
- And <i>voilà</i>! You now have Amala API running in a Docker container. If you want a quick way to run it, just use: <br>
`$ makefile serve`<br>
- The server will run at http://localhost:6585. Try it!<br>
- If you prefer MariaDB, just run:<br>
`$ makefile setup-mariadb`

<!--
## FAQ
> <i>Where does this data come from?</i>

The data is scraped from <a href="#">MegaTen Wiki</a> using a simple scraper (located in the `misc` folder).

> <i>Why does it only contain the Nocturne version?</i>

The reason for the lack of other games' data **(YET)** is simple: I'm a solo developer with a non-tech job. Maintaining a project like this is challenging.

> <i>I like this project! How can I contribute?</i>

Honestly, the SMT community has some amazing developers, far more skilled than me. If you like this project, you can contribute as you would in any open-source project (fork, create branches, submit pull requests, etc.). I don't accept monetary support, but your programming knowledge is **absolutely welcome!**
-->
## Trivia

>1. Did you know that Shoji Meguro was the <i>director</i> of Megami Ibunroku Persona? Weird, I know!
