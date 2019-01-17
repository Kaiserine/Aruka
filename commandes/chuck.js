/*
http://chucknorrisfacts.fr/api/get?data=tri:alea;nb:1
{
  embed: {
    title: "Chuck Norris Facts",
    description: fact.fact,
    color: 15143599,
    footer: {text: `id:${fact.id} | vote:${fact.vote} | points:${fact.points}`}
  }
}
*/
const run= async(robot, message, commandes, prefixe)=> {
	message.channel.send('En cours de dévellopements...');
};
const name= 'chuck';
const alias= ['c', 'noris'];
const description= 'Chuck Noris Facts';
const aide= 'What else ?';
module.exports= {run, name, alias, description, aide};