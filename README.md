# Live Dev Server
Live server for developing web software. 
Built using *node.js*.

## Why?
Live Dev Server is developed with the aim of it being a server for web development.
It reloads the webpage everytime any change occurs in the directory.  
It provides a command line tool named `live`.

## Installation
Using CLI:
- Run this command
```sh
git clone https://github.com/LeknoSoftware/Live-Dev-Server.git
```
- Navigate to the project directory
```sh
cd Live-Dev-Server
```
- Install `Live Dev Server` globally
```sh
npm install -g
```
## Usage
Live Dev Server provides a command line tool named `live`.   

Navigate to your project directory.  
To run a file `path/to/index.html`, just run the command:
```sh
live path/to/index.html
```
By default port *3000* is used.  

To use any other port, say *5000* for the file `path/to/index.html`, just run:
```sh
live path/to/index.html 5000
```
For help, run:
```sh
live --help
```
#### Accessing the webpage
Open the specified port in your browser.  
For example, if the port is *3000*, then type in your browser:
```
localhost: 3000
```
That's it! All your changes will get reflected without manual reloading.

## LICENSE
This project is MIT licensed. See, the [LICENSE](LICENSE) file. 
