<h2 align="center">
<img src="https://github.com/bruno-iskeiti/Amala-API/blob/050577deca60b4a524f4bfb612cf9c1abed7e529/public/images/logo.png" alt="project logo"> <br>
A fan-made <i>Shin Megami Tensei</i> REST API!
<br>&nbsp;
</h2>

## Table of Contents

- **What is Amala API?**
- **More technical details**
- **API Local Setup**
  - **Just serving with Node.js**
  - **Using nginx as reverse proxy**
- **DB Local Setup**
  - **MariaDB/MySQL setup (recommended)**
  - **SQLite (if you just want to mess with it without much tinkering!)**

<h2 size="300px">What is Amala API?</h2>
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;As the title may suggest, this project is a REST API for you to query information about the <i>Shin Megami Tensei</i> games'  characters. The idea of this project is to bring to SMT fans a resource to do cool stuff, just like pokémon fans with <a href="https://pokeapi.co">PokeAPI</a>. This is a very simple project written in <b>Typescript and Express.js</b>, running in the <b>Node.js</b> environment. For security reasons, authentication is needed to do http <code>POST</code>, <code>PUT</code> and <code>DELETE</code> request; buuut, you can make as many <code>GET</code> requests as you like it!</div>

<h2>More technical details</h2>
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;This is indeed a passion project, <b>but</b>, at the same time, one for my <i>portfolio</i> too :D. So... yeah, I think that it is a really good idea to show a little how the project was done to my (maybe) future employers.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;As stated in the last section, the technology stack used for this project is: <b>Express.js</b> as the backend framework, with the majority of the code written in <b>Typecript</b>, and, of course, running in the <b>Node.js</b> environment. I chose Express.js as the framework for its unopinionated nature and simplicity; and Typescript as the language because it gives way less headache than Javascript in runtime. The database running in the live version of this project is <b>MariaDB</b>, manipulated solely by the <b>Sequelize</b> ORM (<i>object relational mapper</i> &#128521). All of this is being mediated by a <b>Nginx</b> server working as a reverse proxy; both in a <b>Docker</b> container orchestrated by <b>Docker Compose</b>. So, in summary:
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
            <td>Database</td>
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

## Setup &nbsp;<img alt="Static Badge" src="https://img.shields.io/badge/typescript-ver._5.9.2-blue">

- First, be sure that you have Node.js! If not, click <a href="https://nodejs.org/en/download" target="_blank">here</a>
- Download the source code, direct on github or using: <br>
  `git clone https://github.com/bruno-iskeiti/Amala-API.git`
- Inside the newly downloaded 'Amala API' folder, you'll find a file named "Makefile"
