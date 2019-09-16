const {glob}=require('glob')
const cron=require('node-cron')
const {readFileSync,writeFile}=require('fs')
const {basename}=require('path')
const {Client}=require('discord.js')
global.client=new Client()
global.config=require('./config.json')
global.database=JSON.parse(readFileSync('database.json'))
let commands=[]
glob('commands/**/*.js',(err,files)=>{
	if(err)console.log(err)
	else files.map(x=>commands[basename(x,'.js')]=require(`./${x}`))
})

cron.schedule('0 * * * *',()=>{
	writeFile('database.json',JSON.stringify(database,null,4),function(){})
})
client.on('channelCreate',async channel=>{
	if(channel.type=='text'){
		database['messages'][channel.id]={}
	}
})
client.on('guildMemberAdd',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.entryChannelID)
	if(!channel)return
	channel.send(`**${member.user.tag}** Wbił na Nasz Discord Cieszymy się!`)
	if(!member.user.bot&&!database['users'][member.id]){
		database['users'][member.id]={
			'warns'    : 0,
			'money'    : 500,
			'nextWork' : 0
		}
	}
})
client.on('guildMemberRemove',async member=>{
	const channel=member.guild.channels.find(ch=>ch.id===config.exitChannelID)
	if(!channel)return
	channel.send(`**${member.user.tag}** Wyszedł z naszego serwera przykro nam :frowning:`)
})
client.on('message',async message=>{
	if(!message.guild)return
	if(!message.author.bot){
		database['messages'][message.channel.id][message.id]={
			'timestamp' : message.createdTimestamp,
			'author'    : message.author.id,
			'content'   : message.content
		}
	}
	if(message.content[0]===config.commandPrefix){
		const content=message.content.slice(1).split(' ')
		const command=content[0]
		const args=content.slice(1)
		if(command in commands){
			message.delete()
			commands[command].run(message,args)
		}
	}
})
client.on('messageReactionAdd',async (reaction,user)=>{
	if(user.id==config.ownerID)return
	if(reaction.message.channel.id!=config.autoRolesChannelID)return
	const member=reaction.message.guild.member(user)
	const roleGroup=config.autoRoles.find(g=>reaction._emoji.name in g)
	await reaction.message.reactions.filter(r=>r!=reaction&&r._emoji.name in roleGroup).map(r=>r.remove(user))
	await member.removeRoles(Object.values(roleGroup))
	await member.addRole(roleGroup[reaction._emoji.name])
})
client.on('messageReactionRemove',async (reaction,user)=>{
	if(user.id==config.ownerID)return
	if(reaction.message.channel.id!=config.autoRolesChannelID)return
	const member=reaction.message.guild.member(user)
	await member.removeRole(config.autoRoles.find(g=>reaction._emoji.name in g)[reaction._emoji.name])
})
client.on('raw',packet=>{
	if(!['MESSAGE_REACTION_ADD','MESSAGE_REACTION_REMOVE'].includes(packet.t))return
	const channel=client.channels.get(packet.d.channel_id)
	if(channel.messages.has(packet.d.message_id))return
	channel.fetchMessage(packet.d.message_id).then(message=>{
		const emoji=packet.d.emoji.id?`${packet.d.emoji.name}:${packet.d.emoji.id}`:packet.d.emoji.name
		const reaction=message.reactions.get(emoji)
		if(reaction)reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id))
		switch(packet.t){
			case 'MESSAGE_REACTION_ADD':
				client.emit('messageReactionAdd',reaction,client.users.get(packet.d.user_id))
				break
			case 'MESSAGE_REACTION_REMOVE':
				client.emit('messageReactionRemove',reaction,client.users.get(packet.d.user_id))
				break
		}
    })
})

client.login(config.clientToken)
