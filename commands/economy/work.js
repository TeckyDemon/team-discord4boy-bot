module.exports={
	run:async(message,args)=>{
		const channel=message.guild.channels.find(ch=>ch.id===config.workChannelID)
		if(!channel)return
		let difference=Math.abs(database['users'][message.member.id]['nextWork']-Date.now())/1000
		if(difference>config.workWaitTime){
			database['users'][message.member.id]['nextWork']=Date.now()+config.workWaitTime
			let random=Math.random()
			let chance=0
			for(let ore of Object.keys(config.ores)){
				chance+=config.ores[ore].chance
				if(random<=chance){
					database['users'][message.member.id]['money']+=config.ores[ore].value
					channel.send(`**${message.author.tag}** wykopałeś rudę ${ore} wartą ${config.ores[ore].value}${config.currencySymbol}`)
					break
				}
			}
		}else{
			channel.send(`**${message.author.tag}** możesz pracować raz na godzinę.`)
		}
	}
}
