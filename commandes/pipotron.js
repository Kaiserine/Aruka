const variantes= {
	"nolove": [
		["Je te trouve mignon", "T'es pas moche", "On s'entend bien", "On est très bons amis", "T'es quelqu'un d'intelligent", "On a vécu beaucoup de choses ensemble"],
		["mais ça s'arrete là", "mais t'as mauvaise haleine", "mais ton frère est un peu mieux que toi", "mais je me tappe ton père depuis deux mois", "mais je suis lesbienne", "mais je suis juive", "mais t'as une petite bite", "mais je vois rien d'autre"],
		["donc", "alors", "et comme la situation ne va pas changer", "et comme j'ai quelques penchants zoophiles", "et comme ma Télé est en panne", "et comme en plus je fais le tappin pour arondir mes fins de mois"],
		["c'est mieux que je me mastubre", "mes doigts resteront avec mon vibromasseur mon partenaire sexuel", "tu vas devoir continuer à te branler en pensant à moi", "tu devrais commencer à m'oublier", "tu devrais te contenter de te remémorer les bons moments qu'on a eu ensemble", "il va falloir qu'on arrete de se parler"],
		["sinon je vais me voir dans l'obligation de massacrer ta famille", "puisque tu commence à me saouler", "vu que voir ta tronche me provoque des relants", "comme de tte façon on a rien à se dire", "vu que le seul motif qui me rapprochait de toi était le frique", "sinon je te castre avec les dents"],
		["et comme tu serais capable d'aimer ça", "et pour bien te dégouter", "et pour en finir avec ta misérable personne", "et comme j'ai envie de me défouler", "et de tte façon", "puisque de tte façon"],
		["je t'annonce que je suis lesbienne", "je t'informe que je t'ai tjs detesté", "il faut que je te dise que j'ai toujours eu le sentiment que t'étais un être inutile", "je vais tout de même t'exterminer toi et tte ta famille", "je t'annonce que je sors ac ton meilleur pote", "j'ai oublié de te dire que je suis un travlo"]
	],
	"atomique": [
		["Intrinsèquement,", "Conceptuellement,", "Inversement,", "Dans le cadre d'un vision purement quantique du phénomène", "En partant des relations d'incertitude d'Heinsenberg on constate que", "Si on considère cette manifestation comme découlant de la fonction d'onde", "Comme prévu par la relativité générale", "Conformément aux prédictions de Louis de Broglie", "Dans une perspective relativiste", "Afin de parvenir à une mesure plus précise des constantes", "Tout en étant en superposition d'état,", "De par les règles probabilistes", "Dans un espace temps à 11 dimensions dont 7 repliées,"],
		["les photons", "les gravitons de masse nulle et de spin-2", "les protons du noyau", "les électrons, de spin 1 ou 0,", "les ondes électromagnétiques", "les atomes d'hydrogènes", "les bosons W", "les ondes gravitationelles", "les atomes radioactifs", "les neutrinos et antineutrinos", "les gluons", "les neutrons hors du noyau", "les ions négatifs", "les cations"],
		["interfèrent avec", "se désintègrent en", "échangent de l'énergie avec", "se combinent avec", "intéragissent avec", "assimilent", "émettent", "capturent", "fusionnent avec", "peuvent être confondus avec", "ne doivent pas être confondus avec", "sont attirés par", "sont repoussés par"],
		["une particule de charge contraire", "leur antiparticule", "les électrons des couches extérieures", "les protons H+", "un électron et un antineutrino", "les ondes gamma", "les ondes alpha", "les ondes beta", "les ondes électromagnétiques", "l'énergie des ondes lumineuses", "les ondes gravitationnelles"],
		["dans un état défini", "dans un état superposé", "de spin 0 ou 1", "de charge inconnue", "de masse nulle", "de masse très faible", "très lourde", "d'une énergie élevée", "à durée de vie de l'ordre de la microseconde", "en accélération", "en mouvement périodique", "de vitesse élevée", "qui remonte le temps", "qui se diffuse dans l'espace", "encore de l'ordre de la théorie"],
		["en interférant avec", "en absorbant", "en fusionnant avec", "en modifiant la trajectoire", "en servant de catalyseur pour", "en émettant", "en absorbant le potentiel", "afin de donner", "ce qui entraine la formation", "en direction de", "ce qui cause la disparition"],
		["des ondes de moindre énergie", "d'autres particules proches", "des champs électromagnétiques", "des ondes lumineuses", "des photons incidents", "des électrons les plus proches", "des masses les plus proches", "des fonctionnements cycliques"],
		["et de type encore inconnu.", "et plus énergétiques.", "et satellites.", "et de masse plus élevée.", "et mesurables.", "et conformes au prévisions.", "et indentifiables.", "et dont la répartition est aléatoire"]
	]
};

const run= async(robot, message, commandes, prefixe)=> {
	let mots= message.content.toLowerCase().split(' ');
	if(mots[2]) {
		if(variantes.hasOwnProperty(mots[2])) {
			let phrases= [];
			for(let a in variantes[mots[2]]) {
				let miphrases= variantes[mots[2]][a];
				phrases.push(miphrases[Math.floor(Math.random()*Math.floor(miphrases.length))]);
			}
			message.channel.send(phrases.join(' '));
		} else {
			return false;
		}
	} else {
		let themes= [];
		for(let a in variantes) {
			themes.push(a);
		}
		let variante= themes[Math.floor(Math.random()*Math.floor(themes.length))];
		let phrases= [];
		for(let a in variantes[variante]) {
			let miphrases= variantes[variante][a];
			phrases.push(miphrases[Math.floor(Math.random()*Math.floor(miphrases.length))]);
		}
		message.channel.send(phrases.join(' '));
	}
};
const name= 'pipotron';
const alias= ['pipo'];
const description= 'Génére une phrase aléatoire!';
const aide= 'hum..';
module.exports= {run, name, alias, description, aide};
