/*

let c= [];
	for(let b in a) {
		c.push(a[b][Math.floor(Math.random()*Math.floor(a[b].length))]);
	}
	c.join(' ');

*/
const run= async(robot, message, commandes, prefixe)=> {
	message.channel.send('En cours de dévellopements...');
};
const name= 'pipotron';
const alias= ['pipo'];
const description= 'Génére une phrase aléatoire!';
const aide= 'hum..';
module.exports= {run, name, alias, description, aide};
