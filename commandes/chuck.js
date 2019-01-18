const request = require('request');
const run= async(robot, message, commandes, prefixe)=> {
	request('http://chucknorrisfacts.fr/api/get?data=tri:alea;nb:1', (erreur, response, corps)=> {
		if(erreur) {
			console.log(erreur);
			message.channel.send('Hu hu hu, une erreur est survenu ^^');
		} else {
			let fact= JSON.parse(corps)[0];
			message.channel.send({embed: {
				title: "Chuck Norris Facts",
				description: /&#([a-fA-F0-9]+);/gi[Symbol.replace](fact.fact, (a,b)=> {
					return String.fromCharCode(parseInt(b, 16));
				}),
				color: 15143599,
				footer: {text: `id:${fact.id} | vote:${fact.vote} | points:${fact.points}`}
			}});
		}
	});
};
const name= 'chuck';
const alias= ['c', 'noris'];
const description= 'Chuck Noris Facts';
const aide= 'What else ?';
module.exports= {run, name, alias, description, aide};
