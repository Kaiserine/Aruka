function reverseHtmleEntities(texte) {
    texte = texte.replace(/&egrave;/g, 'è');
    texte = texte.replace(/&eacute;/g, 'é');
    texte = texte.replace(/&ecirc;/g, 'ê');
    texte = texte.replace(/&euml;/g, 'ë');
    texte = texte.replace(/&agrave;/g, 'à');
    texte = texte.replace(/&acirc;/g, 'ä');
    texte = texte.replace(/&auml;/g, 'â');
    texte = texte.replace(/&ograve;/g, 'ò');
    texte = texte.replace(/&ocirc;/g, 'ô');
    texte = texte.replace(/&ouml;/g, 'ö');
    texte = texte.replace(/&igrave;/g, 'ì');
    texte = texte.replace(/&icirc;/g, 'î');
    texte = texte.replace(/&iuml;/g, 'ï');
    texte = texte.replace(/&ugrave;/g, 'ù');
    texte = texte.replace(/&uuml;/g, 'ü');
    texte = texte.replace(/&ucirc;/g, 'û');
    return texte ;
};

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
				description: reverseHtmleEntities(/&#([a-fA-F0-9]+);/gi[Symbol.replace](fact.fact, (a,b)=> {
					return String.fromCharCode(parseInt(b, 10));
				})),
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
