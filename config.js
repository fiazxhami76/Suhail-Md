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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_08_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwcjJEbUM4cEZsazFNN3czNVJGU3c3SVg5L2I4OFAwY0tsMko3ZUp1SlZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGNF9pTWI0RlM5TzBUUnUwcDAzRFVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1OGQwNGUyLWFhNWUtNDFmZi05NzE4LWU1NGU4YTQyZjQ4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDI0MSxcbiAgICAgIDQ3LFxuICAgICAgMjA0LFxuICAgICAgMjQ0LFxuICAgICAgMjM5LFxuICAgICAgMTk0LFxuICAgICAgNzgsXG4gICAgICA1OSxcbiAgICAgIDkyLFxuICAgICAgMjI3LFxuICAgICAgMTcxLFxuICAgICAgODIsXG4gICAgICAyMzUsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDQ0LFxuICAgICAgMzIsXG4gICAgICAxMjYsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAyNDIsXG4gICAgICA5MCxcbiAgICAgIDQxLFxuICAgICAgMTM1LFxuICAgICAgMjM5LFxuICAgICAgMjYsXG4gICAgICAzOSxcbiAgICAgIDE2NixcbiAgICAgIDYyLFxuICAgICAgMTI4LFxuICAgICAgMTEzLFxuICAgICAgMjUwLFxuICAgICAgMjMzLFxuICAgICAgMTA2LFxuICAgICAgMjIzLFxuICAgICAgMTU4LFxuICAgICAgMTU5LFxuICAgICAgMTc2LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZQQ0cxRzlaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjU5ODg1ODM2Mjk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMDk4Mzk2OTk4ODY5MzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR3A0ZGNDRUtIQ2pMVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlvQnBJekU0VGV6a2FwMTZSTExpVVpVMjN5SG1aQndveFY5WS9GN29HQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiczAxOEd2cjFuQTFGTStETERDRWd6ZEZ5cUNTdUNlNlBrZWM0MFhEU3FONnJQbEZwa01OU1VLV3c1b3RrWDZNeVFJdmhzVVdwOWlKd1I3RWxmY1V2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOVI1WDVHNWx3VDFNbjhGQ2Z4dVhGSTJoWUt4Nk1rMXVaMW9sMWhpczZZZVNseVVPM3drUWxva1poMytKZk92a1VFR3VOSEVldUROYWtZdWFxcU82anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjY1OTg4NTgzNjI5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTY2ODg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDVXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsTDczSGFDL1pMbW1kMHFhTG94bjR5Mm5RR1ZvQ0pDbUc1c0RKa1ZBbFA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyMDkxNzcyOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTkyMzUwNDA5OVwifSIKfQ=="  // PUT your SESSION_ID 


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
