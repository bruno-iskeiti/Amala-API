<h2 align="center">
<img src="https://github.com/bruno-iskeiti/Amala-API/blob/050577deca60b4a524f4bfb612cf9c1abed7e529/public/images/logo.png" alt="project logo"> <br>
A fan-made <i>Shin Megami Tensei</i> REST API!
<br>
</h2>

<h2>Table of Contents :D</h2>

* **What is Amala API?**
* **Project Roadmap**
* **More technical details**
* **API Local Setup**
	* **Just serving with Node.js**
    * **Using nginx as reverse proxy**
* **DB Local Setup**
	* **MariaDB/MySQL setup (recommended)**
    * **SQLite (if you just want to mess with it without much tinkering!)**


<h3 size="300px">What is Amala API?</h3>
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As the title may suggest, this project is a REST API for you to query information about the <i>Shin Megami Tensei</i> games'  characters. The idea of this project is to bring to SMT fans a resource to do cool stuff, just like pokémon fans with <a href="https://pokeapi.co">PokeAPI</a>. This is a very simple project written in <b>Typescript and Express.js</b>, running in the <b>Node.js</b> environment. For security reasons, authentication is needed to do http <code>POST</code>, <code>PUT</code> and <code>DELETE</code> request; buuut, you can make as many <code>GET</code> requests as you like it!</div>