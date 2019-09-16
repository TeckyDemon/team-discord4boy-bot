const {readFileSync}=require('fs')

module.exports={
	run:async(message,args)=>{
		if(message.member.id==config.ownerID){
			database=JSON.parse(readFileSync('database.json'))
		}
	}
}
