module.exports={
	run:async(message,args)=>{
		await message.member.removeRole(config.afkRoleID)
		message.channel.send(`**${message.author.tag}** wrócił.`)
	}
}
