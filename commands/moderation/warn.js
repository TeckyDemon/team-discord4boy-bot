const {RichEmbed}=require("discord.js")

module.exports={
	run:async(message,args)=>{
		if(!message.member.hasPermission(['KICK_MEMBERS','ADMINISTRATOR'])){
			return message.channel.send(`**${message.author.tag}** nie możesz użyć tej komendy.`)
		}
		const member=message.mentions.members.first()
		if(!member){
			return message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika do ostrzeżenia.\nUżycie: !warn użytkownik powód`)
		}
		const reason=args.slice(1).join(' ')||'Brak'
		database['users'][member.id]['warns']++
		if(database['users'][member.id]['warns']==config.maxWarnings){
			await member.send(`Cześć, zostałeś wyrzucony z **${message.guild.name}**.\nPrzez: **${message.author.tag}**\nPowód: **${reason}**.`).catch(()=>{})
			member.kick(reason).then(()=>{
				message.channel.send(new RichEmbed()
					.setColor(0xFFFF00)
					.setTitle(`Użytkownik **${member.user.tag}** został wyrzucony.`)
					.addField('Przez:',message.author.tag)
					.addField('Powód:',reason)
				)
			})
			database['users'][member.id]['warns']=0
		}else{
			await member.send(`Cześć, zostałeś ostrzeżony na **${message.guild.name}** po raz ${database['users'][member.id]['warns']}.\nPrzez: **${message.author.tag}**\nPowód: **${reason}**.`).catch(()=>{})
			message.channel.send(new RichEmbed()
				.setColor(0xFFFF00)
				.setTitle(`Użytkownik **${member.user.tag}** został ostrzeżony po raz ${database['users'][member.id]['warns']}.`)
				.addField('Przez:',message.author.tag)
				.addField('Powód:',reason)
			)
		}
	}
}
