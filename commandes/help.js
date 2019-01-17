const run= async(robot, message, commandes, prefixe)=> {
	let mots= message.content.toLowerCase().split(' ');
	if(mots[2]) {
		for(let a in commandes) {
			if(a===mots[2]||commandes[a].alias.indexOf(mots[2])>-1) {
				let reponse= [
					`Nom de la commande: ${commandes[a].name}`,
					`Liste des alias: ${commandes[a].alias.join(' ')}`,
					commandes[a].aide
				];
				message.channel.send(reponse.join('\n'));
				return true;
			}
		} return false;
	} else {
		let reponse= [`Liste des préfixe: ${prefixe.join(' ')}\nPréfixe utiliser ci-dessous: ${prefixe[0]}\n`];
		for(let a in commandes) {
			let commande= commandes[a];
			reponse.push(`${prefixe[0]} ${a} :: ${commande.description}`);
		} message.channel.send(`\u0060\u0060\u0060asciidoc\n${reponse.join('\n')}\u0060\u0060\u0060`);
	}
};
const name= 'help';
const alias= ['?'];
const description= 'Affiche l\u0027aide.';
const aide= '\u0060help \u003Ccommande\u003E\u0060 permet d\u0027afficher quelques précisions au sujet d\u0027une commande\n\u0060help\u0060 permet d\u0027afficher la liste des commandes.';
module.exports= {run, name, alias, description, aide};