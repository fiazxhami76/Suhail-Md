const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923481668009" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923481668009";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_20_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHZnA4NjErc0dCLzlwdGVxMUtlQVVOTXJ2V3pqbmg1UnpXQzhrTjhwa1A0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4MTY2ODAwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREIyNDc2MDQ1Mjk4MkVCQUE1OTY4QTY0QUE3RDEzNjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTY3NjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDgxNjY4MDA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NzM4NjgxMTI4QjczMUNBOEIyRUY4RjY2OTgyNzMyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5Njc2NTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG0zRURCSEdUb3VYcVM4R2pfUVhod1wiLFxuICBcInBob25lSWRcIjogXCJlZmVkMTE4NS05MjAzLTQ1NzgtOTBiZi02OWQ0ZjFlNjZlZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTAxLFxuICAgICAgMjQ3LFxuICAgICAgMTE0LFxuICAgICAgMjQ2LFxuICAgICAgMTE2LFxuICAgICAgMjEwLFxuICAgICAgMTIyLFxuICAgICAgMjQsXG4gICAgICAxNjksXG4gICAgICAyNDMsXG4gICAgICA1NixcbiAgICAgIDY4LFxuICAgICAgMjU0LFxuICAgICAgMjI5LFxuICAgICAgMjIsXG4gICAgICAxMDIsXG4gICAgICA2OCxcbiAgICAgIDI0NyxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDEyNixcbiAgICAgIDExMixcbiAgICAgIDE5OSxcbiAgICAgIDc0LFxuICAgICAgMTY4LFxuICAgICAgNjUsXG4gICAgICAxMDEsXG4gICAgICAxNTAsXG4gICAgICA5MixcbiAgICAgIDI0MCxcbiAgICAgIDI1MSxcbiAgICAgIDEzLFxuICAgICAgMTksXG4gICAgICAxMDksXG4gICAgICAxMDcsXG4gICAgICAxNjcsXG4gICAgICAxNTcsXG4gICAgICA2OSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5NRVNFMlY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODE2NjgwMDk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMyMzE1NDI2NTg2ODUwOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pmh77iO8J2XmfCdl7bwnZeu8J2YhyDwnZerIPCdl5XwnZeu8J2Xr/Cdl67wnZe/4pmh77iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3J5NTI0UW9NaU10UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmSCtSUXRUUmRQOEVNQUxFeGlSZ2thT2s4Ty91VnhQZFZydlNyS3B6U0hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV6QWxDcEcxMU5XY3pwVUlZclRPK2F1S0ZpQ1JtZS9peTlSZWxFVUIrdk9abm5obmpJT3lRZndOeU4yOGFBRUZhaUREN2gvQy94NDUyZmJobmVaT0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFmaWZ6Z3dWSjdqR3pKTnpiMjFaQ3NZSEx4Wmk2RWNSd3N1WnBlT0dzdCt0dHo5S3J5dVlZM0plQUJhbCtibStSOU9TczEvdUpxc0srQXVncHlMVGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4MTY2ODAwOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTY3NjUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnBrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3eWJRNnBTYzZFbnJ3OG40MXpYY2ExSkJhcTBoOU83amtzcVdyS3l6aHVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMjM4ODk3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTY3NjUzNTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Fiaz X Babar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
