const {writeFile}=require('fs')

module.exports={
	run:async(message,args)=>{
		if(message.member.id==config.ownerID){
			writeFile('database.json',JSON.stringify(database,null,4),function(){})
		}
	}
}
