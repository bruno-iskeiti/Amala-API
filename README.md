<h2 align="center">
<img src="https://github.com/bruno-iskeiti/Amala-API/blob/a4ef57403c275cc4ecaa50aa9e556972a98a1226/public/images/logo.png" alt="project logo"> <br>
A fan-made <i>Shin Megami Tensei</i> REST API!
<br>&nbsp;
</h2>

## Table of Contents

- [What is Amala API?](#what-is-amala-api)
- [More technical details](#more-technical-details)
- [Setup](https://github.com/bruno-iskeiti/Amala-API/tree/main?tab=readme-ov-file#setup-)
- [FAQ](#faq)
- [Trivia](#trivia)

## What is Amala API?
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;As the title may suggest, this project is a REST API for you to query information about the <i>Shin Megami Tensei</i> games'  characters. The idea of this project is to bring to SMT fans a resource to do cool stuff, just like pokémon fans with <a href="https://pokeapi.co">PokeAPI</a>. This is a very simple project written in <b>Typescript and Express.js</b>, running in the <b>Node.js</b> environment. For security reasons, authentication is needed to do http <code>POST</code>, <code>PUT</code> and <code>DELETE</code> request; buuut, you can make as many <code>GET</code> requests as you like it!
  </div>
<br>

> **BIG DISCLAIMER: as of I'm writing this, Amala API's Database only contains <i>Nocturne</i> data.**

## More technical details
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;This is indeed a passion project, <b>but</b>, at the same time, one for my <i>portfolio</i> too :D. So... yeah, I think that it is a really good idea to show a little how the project was done to my (maybe) future employers.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;As stated in the last section, the technology stack used for this project is: <b>Express.js</b> as the backend framework, with the majority of the code written in <b>Typecript</b>, and, of course, running in the <b>Node.js</b> environment. I chose Express.js as the framework for its unopinionated nature and simplicity; and Typescript as the language because it gives way less headache than Javascript in runtime. While the DBMS in this repo is SQLite, the one running in the live version of this project is <b>MariaDB</b>, manipulated solely by the <b>Sequelize</b> ORM (<i>you can configure either tho</i> &#128521). All of this is being mediated by a <b>Nginx</b> server working as a reverse proxy; both in a <b>Docker</b> container orchestrated by <b>Docker Compose</b>. So, in summary:
  <br>&nbsp;
  </div>
  <div align="center">
      <table>
        <tr>
            <td><b><h3>Technology</h3></b></td>
            <td><b><h3>Role</h3></b></td>
        </tr>
        <tr>
            <td>Typescript</td>
            <td>Language</td>
        </tr>
        <tr>
            <td>Express.js</td>
            <td>Framework</td>
        </tr>
        <tr>
            <td>MariaDB</td>
            <td>DBMS</td>
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
First, be sure to have Docker installed! If you don't, click <a href="https://docs.docker.com/get-started/get-docker/" target="_blank">here</a> to see how to download it.
- Download the source code, direct on github or using: <br>
  `$ git clone https://github.com/bruno-iskeiti/Amala-API.git`<br>
- Inside the 'Amala API' folder, you'll find a file named "Makefile". It has commands to make it easier to install and configure the application! To setup the application with a built-in SQLite db, just use: <br>
`$ makefile setup`<br>
- And <i>voilà</i>! You have Amala API in a docker container! If you want a fast way to run it. Just do: <br>
`$ makefile serve`<br>
- It will run serve at http://localhost:6585. Try it!<br>
- Otherwise, if you want MariaDB, just use:<br>
`$ makefile setup-mariadb`

## FAQ
> <i>Where does this data come from?</i>

Scraping from <a href="#">MegaTen Wiki</a>, using a simple python scrapper (it's in the misc folder).

> <i>Why does it has just the Nocturne version of the information?</i>

The reason for the lack of other games information **(YET)** is simple: I'm a solo dev with a non-tech job. It is hard to maintain a project like this.