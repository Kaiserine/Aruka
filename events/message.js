const fs= require('fs');
const prefix= ["aruka", "aruka,", "a!"];
const commandes= (()=> {
	let liste= fs.readdirSync('./commandes');
	let objet= {};
	for(let a in liste) {
		let extension= liste[a].split('.').reverse();
		if(extension[0]==='js') {
			let commande= require(`../commandes/${liste[a]}`);
			objet[commande.name]= commande;
		}
	} return objet;
})();

const run= async(robot, message)=> {
	let mots= message.content.toLowerCase().split(' ');
	if(prefix.indexOf(mots[0])<0) {
		return false;
	} else if(mots[1]) {
		if(commandes.hasOwnProperty(mots[1])) {
			commandes[mots[1]].run(robot, message, commandes, prefix);
		} else {
			for(let a in commandes) {
				if(commandes[a].alias.indexOf(mots[1])>-1) {
					commandes[a].run(robot, message, commandes, prefix);
				}
			} return false;
		}
	} else {
		return false;
	}
};
const name= 'message';
module.exports= {run, name};