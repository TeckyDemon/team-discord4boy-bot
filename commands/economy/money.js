module.exports={
	run:async(message,args)=>{
		message.channel.send(`**${message.author.tag}** masz ${database['users'][message.member.id]['money']}${config.currencySymbol}`)
	}
}
