const run= async(robot, message, commandes, prefixe)=> {
	let mots= message.content.toLowerCase().split(' ');
	let nombre= (mots[2])?parseInt(mots[2]):NaN;
	if(!mots[2]||isNaN(nombre)) {
		return false;
	} else {
		if(nombre<1||nombre>99) {
			return false;
		} else {
			if(!message.member) {
				//MP
				return false;
			} else {
				if(message.member.hasPermission('MANAGE_MESSAGES')) {
					message.channel.fetchMessages({limit: nombre}).then((messageList)=> {
						message.channel.send(`${nombre} message supprimer!`);
						messageList.forEach((unmessage)=> {
							unmessage.delete();
						});
					});
				} else {
					return false;
				}
			}
		}
	}
};
const name= 'delete';
const alias= ['del', 'suppr'];
const description= 'Supprime des messages';
const aide= 'delete <nombre>, permet de supprimer <nombre> message';
module.exports= {run, name, alias, description, aide};
