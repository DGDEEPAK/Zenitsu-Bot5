const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoReading = true //auto recording (true to on, false to off)
global.autoTyping = true //auto tying (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ownernomer = "2348160208114" //ur owner number2
global.ownername = "𝙇𝞢𝙇𝞗𝞠" //ur owner name
global.ytname = "YT: Clintonlelop" //ur yt chanel name
global.socialm = "GitHub: Clintonlelop" //ur github or insta name
global.location = "Nigeria, Enugu, Enugu" //ur location

//new
global.botname = "𝘾𝙇𝞘𝞜𝙏𝞗𝞜 𝞑𝞗𝙏"
global.ownernumber = '2348160208114'
global.ownername = '𝙇𝞢𝙇𝞗𝞠'
global.ownerNumber = ["2348160208114@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@Clintonlelop"
global.websitex = "https://youtube.com/@Clintonlelop"
global.wagc = "https://chat.whatsapp.com/KguOo9XsRTW2iESYuHzVX1"
global.themeemoji = '🗿'
global.wm = "𝘾𝙇𝞘𝞜𝙏𝞗𝞜 𝞑𝞗𝙏"
global.botscript = 'https://chat.whatsapp.com/FDlFIJG8b3E8MzLHyuqqS8' //script link
global.packname = "𝘾𝙇𝞘𝞜𝙏𝞗𝞜"
global.author = "𝞑𝞗𝙏"
global.creator = "2348160208114@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur error pic
global.thumb = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
