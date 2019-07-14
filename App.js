const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Yatra, Yatra!");
});

var prefix= config.prefix;

client.on("message", (message)=>{
  if (message.content.startsWith(prefix + "Go")){
    message.channel.send("Yatra, Yatra!");
  }
});

client.on("message",(message)=>{
  if (message.content.startsWith(prefix + "arbol")){
  let user = message.mentions.users.first()
    || client.users.get(args[0])
    || client.users.find(x => {
          if(args){
            return x.tag === args.join(" ")
          }
        })
    || message.author

  const embed = new Discord.RichEmbed()
    .setImage(user.avatarURL)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${user.tag}`);

  message.channel.send({embed: embed});
}
});

client.on("message",(message)=>{
  if (message.content.startsWith(prefix + "stats")){

    const moment = require("moment");
    require('moment-duration-format');

    const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


    const embed = new Discord.RichEmbed()
    .setColor(0x66ff66)

    .setAuthor(`Bot info`, client.user.avatarURL)
    .addField(`Dueño`, `Corti#1901`, true)
    .addField(`Version`, `1.0.0`, true)
    .addField(`Libreria`, `Discord ^11.2.1 (Js)`, true)

    .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`Uptime`, `${actividad}`, true)
    .addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)

    .addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
    .addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
    .addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

    message.channel.send(embed);
    }
});

client.on("message",(message)=>{
  if (message.content.startsWith(prefix + "user")){

let color = {
      "online": "#00c903",
      "idle": "#ff9a00",
      "dnd": "#ff0000",
      "offline": "#d8d8d8"
};
let estados = {
      "online": "En Línea",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline": "Desconectado/invisible"
};

let user = message.mentions.users.first();
if(!user) return message.reply(`¡Mencione a un usuario!`);

const embed = new Discord.RichEmbed()
    .setColor(color[user.presence.status])
    .addField(`Estado de ${user.username}`, `${estados[user.presence.status]}`)

message.channel.send(embed);
}
});


client.on("message",(message)=>{
  if(message.content.startsWith(prefix +"select")){
    let args = message.content.slice(prefix.length+6).trim().split(' ');

    let captura = args[Math.floor(args.length * Math.random())];

    message.channel.send(captura);
  }
});


client.login(config.token);
