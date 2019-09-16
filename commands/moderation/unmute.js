const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['MUTE_MEMBERS','ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		const member=message.mentions.members.first()
		if(!member){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do odciszenia.\nUżycie: !unmute użytkownik`)
		}
		const reason=args.slice(1).join(' ')||'Brak'
		await member.send(`Cześć, zostałeś odciszony na **${message.guild.name}**.\nPrzez: **${message.author.tag}**`).catch(()=>{})
		member.setMute(false,reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0x00FF00)
				.setTitle(`Użytkownik **${message.author.tag}** został odciszony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send(`**${message.author.tag}** nie można odciszyć użytkownika **${member.user.tag}**.`)
			console.log(err)
		})
	}
}
