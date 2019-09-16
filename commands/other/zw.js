module.exports={
	run:async(message,args)=>{
		await message.member.addRole(config.afkRoleID)
		message.channel.send(`**${message.author.tag}** zaraz wróci.`)
	}
}
