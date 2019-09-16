const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['KICK_MEMBERS','ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		const member=message.mentions.members.first()
		if(!member){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do ostrzeżenia.\nUżycie: !unwarn użytkownik ilość`)
		}
		let quantity=args[1]&&args[1]<=database['users'][member.id]['warns']?args[1]:database['users'][member.id]['warns']
		database['users'][member.id]['warns']-=quantity
		await member.send(`Cześć, Twoje ostrzeżenia zostały usunięte na **${message.guild.name}**.\nPrzez: **${message.author.tag}**`).catch(()=>{})
		message.channel.send(new RichEmbed()
			.setColor(0x00FF00)
			.setTitle(`Ostrzeżenia użytkownikownika **${member.user.tag}** zostały usunięte.`)
			.addField('Przez:',message.author.tag)
			.addField('Ilość:',quantity)
		)
	}
}
