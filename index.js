const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '1oVIOyfzcxIqG8JOxcRsLFaaasmmkQUw1VUGUzv3dsaHZpnlmkM8NB8rSejF59kN',
  APISECRET: '3f1guo8VxpspGty7YvnPoFNAvFqsi7ACZEUmINCmSzl0n52xJWtfPtFq3Kqj8VHS'
}
);
let coinssa = require(`${process.cwd()}/幣種.json`);
const { Client, Intents } = require('discord.js');
const { token } = require('./token.json');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
// inside a command, event listener, etc.
const fs = require('fs');


// 連上線時的事件

client.on('ready' , ()  =>{
  
  

  console.log('Bot esta escuchando');
  client.user.setStatus('online');
 
  console.log('bot status', client.user.presence.status);
 
  client.user.setActivity("正在看智鈞", {
    type: "STREAMING",
    url: "https://www.twitch.tv/lebaby0v0"
  });
 
 });


client.login(token);

sss();
const strs = coinssa.coin


//console.log(strs.split(','))


 ggg=strs.split(',')

 function test(){
  console.log(0);
}

async function sss(){
  
  
 
//當 Bot準備好時
    client.on('ready', () => {
    
        console.log(`Logged in as ${client.user.tag}!`);
        //console.log(`${str.split('')}`)
       
    });

    
    
    // 當 Bot 接收到訊息時的事件
    client.on('messageCreate', async msg => {
      var sym,sym1 
      var popo,popo1,popo2,popo3,popo4,popo5
      
        //if (msg.member.user.bot) return;
       //if (!msg.member.user) return;
        // 如果訊息的內容是 'shian'
        if(msg.toString().startsWith(`shian`)){
          ap(test);
        }
        //這個還在測試階段
        if(msg.toString().startsWith(`debug`)){
          
         privatemessage(msg);

//dUser.send(`${dUser} A moderator from WP Coding Club sent you: ${dMessage}`);

/* msg.author.send(
  `${msg.author} You have sent your message to ${dUser}`
 );*/
      }
      function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return   minutes + "分" + seconds + "秒";
      }
       
      function ap(g){
        
      if(g.interval) {msg.channel.send("請不要重複下指令") 
      
      clearInterval(g.interval)}
      var start = new Date().getTime()
        a = ggg.length
        
        i = -1
         g.interval = setInterval(function(){
         
      
      i++;
      
      if(i==a){
        
        
        
        var end = new Date().getTime()
        var tim = end - start
      
        clearInterval(g.interval);
        interval=null;
        msg.channel.send(`已計算完畢 總耗時${msToTime(tim)}`)
    
      }

      
        binance.candlesticks(ggg[i], "1w", (error, ticks, symbol) => {
          if(error){
              return ;
          }
          //console.info("candlesticks()", ticks);
          let last_tick = ticks[ticks.length - 1];
          let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
          if(error){
            return ;
        }
          //console.info(symbol+" last close: "+close);
          //msg.channel.send("open: "+open+'\n'+"high: "+high+'\n'+"low: "+low+'\n'+"close: "+close+'\n'+"volume: "+volume);
          sym = symbol
          popo =volume    
          popo2 = open
          popo3 = close
        
        }, {endTime: new Date().getTime() - 24 * 60 * 60 * 1000*7});
        console.log[ggg[i]]
        binance.candlesticks(ggg[i], "1w", (error, ticks, symbol) => {
          if(error){
              return ;
          }
          console.log[ticks]
          //console.info("candlesticks()", ticks);
          let last_tick = ticks[ticks.length - 1];
          let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
          if(error){
            return ;
        }
          //console.info(symbol+" last close: "+close);
          //msg.channel.send("open: "+open+'\n'+"high: "+high+'\n'+"low: "+low+'\n'+"close: "+close+'\n'+"volume: "+volume);
        sym1 = symbol
        popo1 = volume
        popo4 = open
          popo5 = close

        
        }, {endTime: new Date().getTime() - 24 * 60 * 60 * 1000*14});
      if(sym==undefined) return;
       
        var calcint = popo1/popo *100 -100
        //console.log(calcint)
        var ok = `${Math.round(calcint)}%`
        console.log(ok)
        console.log(sym,popo2,popo3)
        console.log(sym1,popo4,popo5)
        var closea = (popo3/popo2)*100 -100
        if(parseInt(calcint)>200){
          msg.channel.send(`${sym}可以關注${Math.round(closea)}%`)
        }
         
        },1000);

        
      
      }


        
         
        
    });

//無聊製作的私訊
 async function privatemessage(msg){
      const msgs = msg.toString()
          let args = msgs.slice(9 + ``).split(">@!<");
          let po = msgs.slice(29 + ` `);
client.users.cache.get(`${parseInt(args)}`).send(`123`);
const User = await client.users.fetch(`${parseInt(args)}`, { cache: true });
msg.author.send(
  `${msg.author} 你發給了${User} 私訊 ${po}`
 );

    }

    



}