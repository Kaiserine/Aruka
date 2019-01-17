const leet= require("leet");

const run= async(robot, message, commandes, prefixe)=> {
	let mots= message.content.toLowerCase().split(' ');
    if(mots.length>2) {
        message.channel.send(leet.convert(mots.slice(2).join(' ')));
    } else {
        return false;
    }
};

const name= 'leet';
const alias= ['1337'];
const description= '1337 powa';
const aide= '`lett <texte>`\n convertit un texte normal en 1337';
module.exports= {run, name, alias, description, aide};