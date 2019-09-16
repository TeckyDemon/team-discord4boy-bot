const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		if(!args[0]){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do odbanowania.\nUżycie: !unban użytkownik`)
		}
		const user=await client.fetchUser(args[0].match(/<@(\d+)>/)[1])
		message.guild.unban(user).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0x00FF00)
				.setTitle(`Użytkownik **${member.user.tag}** został odbanowany.`)
				.addField('Przez:',message.author.tag)
			)
		}).catch((err)=>{
			message.channel.send(`**${message.author.tag}** nie można odbanować użytkownika **${member.user.tag}**.`)
			console.log(err)
		})
	}
}
