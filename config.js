const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Dhaka";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/✨";
global.website=process.env.GURL || "https://whatsapp.com/channel/✨" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "A Y A N" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8801631486512";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_28_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYTg5eTU5TjJvbUhTWHhkbXo4c0d0dGpSV0tBREloK3RGSDhkWXJuYlhOND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI4ODAxODkyMzkzNDg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNjRCMjIzNjExMjIxMERCMDVFMTRCQzhBRDNDN0FBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5MjI0ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI4ODAxODkyMzkzNDg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NEQxOTg5RjI4RDM5MEUxRTVGRDcyN0VEODg1NzdDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5MjI0ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWJ3UGlpYlBUNGFhVElFLVZpYzBBUVwiLFxuICBcInBob25lSWRcIjogXCJjNzQ2OWVjOC1iODgyLTQ4MWUtOWFjNC0xYjZkYjhjMDBjYTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxMjEsXG4gICAgICAxMjEsXG4gICAgICAxNDAsXG4gICAgICAyNDksXG4gICAgICAxMTcsXG4gICAgICAyMDAsXG4gICAgICAxMjMsXG4gICAgICA3NixcbiAgICAgIDEyNixcbiAgICAgIDE5NSxcbiAgICAgIDIxOCxcbiAgICAgIDE4MSxcbiAgICAgIDQ0LFxuICAgICAgMTc3LFxuICAgICAgNzQsXG4gICAgICAxNzMsXG4gICAgICAxMzMsXG4gICAgICAyNyxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAxMTksXG4gICAgICAxOTcsXG4gICAgICAxMzUsXG4gICAgICAxNjAsXG4gICAgICA0NCxcbiAgICAgIDE2MCxcbiAgICAgIDgzLFxuICAgICAgMTE3LFxuICAgICAgMjExLFxuICAgICAgMTExLFxuICAgICAgMTI0LFxuICAgICAgNTksXG4gICAgICAxOTAsXG4gICAgICAyMjcsXG4gICAgICA3MSxcbiAgICAgIDE3NSxcbiAgICAgIDIwNixcbiAgICAgIDIyMyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlZYSjc3QkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjg4MDE4OTIzOTM0ODc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MjAxNjU5MjU4MDY1MDoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBeWFuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdENE1VQkVLK0MrTGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxaFhuMnE3NDVvZEExREhFL2V4RkV0MjNIV2RxYXROU082c0twanUvV0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdJQjA3UkIvMXpZZXJKZEJ5Z2x0d0FkRkQzb290Q1A1Sm9qUFJScjFiNzRCV2ZWdXZCSXVmb1lxMS95d1BSSmc0UDlNUDYxclYvQlFqYk1JcUdmREN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNqbS9wb0dIdkQyQVdVMUNSWFFzSUs4eUlPbDhQcXZrTEtRczI5NFZwaEVPZElxYnp1OVV1SUs0a04vUmpvZlZ2eW5wNGFHeTl2SWRsR1psWFJId0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjg4MDE4OTIzOTM0ODc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MjI0ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIbGpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhsai5qc29uIjogIntcImtleURhdGFcIjpcInBzWVZ4Nk1jWXVFYW5hYWJQalZjdDRIZnl2enNOUG1kMTRjUkx2QVJ2dVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE0NzEyMjQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc5MjI0ODQ5NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "A Y A N",
  ownername:process.env.OWNER_NAME|| "Ayan Alvi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
