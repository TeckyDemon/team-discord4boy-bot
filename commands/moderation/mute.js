const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['MUTE_MEMBERS','ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		const member=message.mentions.members.first()
		if(!member){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do wyciszenia.\nUżycie: !mute użytkownik powód`)
		}
		const reason=args.slice(1).join(' ')||'Brak'
		await member.send(`Cześć, zostałeś wyciszony na **${message.guild.name}**.\nPrzez: **${message.author.tag}**\nPowód: **${reason}**.`).catch(()=>{})
		member.setMute(true,reason).then(()=>{
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik **${member.user.tag}** został wyciszony.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}).catch((err)=>{
			message.channel.send(`**${message.author.tag}** nie można wyciszyć użytkownika **${member.user.tag}**.`)
			console.log(err)
		})
	}
}
