const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['MANAGE_MESSAGES','ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		message.channel.bulkDelete(args[0]||100).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0x00FF00)
				.setTitle(`Wiadomości zostały usunięte.`)
				.addField('Przez:',message.author.tag)
			)
		}).catch(err=>console.log(err))
	}
}
