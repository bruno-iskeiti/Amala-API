<h2 align="center">
![project logo] (https://github.com/bruno-iskeiti/Amala-API/blob/main/public/images/logo.png?raw=true)
A fan-made *Shin Megami Tensei* REST API!
<br>&nbsp;
</h2>
<h2>Table of Contents :D</h2>

* **What is Amala API?**
* **More technical details**
* **API Local Setup**
	* **Just serving with Node.js**
    * **Using nginx as reverse proxy**
* **DB Local Setup**
	* **MariaDB/MySQL setup (recommended)**
    * **SQLite (if you just want to mess with it without much tinkering!)**


<h3 size="300px">What is Amala API?</h3>
  <div align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As the title may suggest, this project is a REST API for you to query information about the _Shin Megami Tensei_ games'  characters. The idea of this project is to bring to SMT fans a resource to do cool stuff, just like pokémon fans with ![PokeAPI](https://pokeapi.co/). This is a very simple project written in Typescript and Express.js, running in the Node.js environment. As mentioned earlier, this is a simple REST API, so you can do lots of http requests with it! For security reasons, authentication is needed to do `POST`, `PUT` and `DELETE` request; buuut, you can make as many `GET` requests as you like it!</div>