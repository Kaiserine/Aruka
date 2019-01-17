const Discord= require('discord.js');
const fs= require('fs');
const robot= new Discord.Client();

fs.readdir('./events', (erreur, liste)=> {
	if(!erreur) {
		for(let a in liste) {
			let event= require(`./events/${liste[a]}`);
			robot.on(event.name, event.run.bind(this, robot));
		}
	}
});

robot.login(process.env.token);
process.on('unhandledRejection', async(erreur)=> {console.log(`Uncaught Promise Rejection:\n${erreur}`);});