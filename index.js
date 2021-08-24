const Binance = require('node-binance-api');
//const logfilestream = require('logfilestream');
const binance = new Binance().options({
  APIKEY: '1oVIOyfzcxIqG8JOxcRsLFaaasmmkQUw1VUGUzv3dsaHZpnlmkM8NB8rSejF59kN',
  APISECRET: '3f1guo8VxpspGty7YvnPoFNAvFqsi7ACZEUmINCmSzl0n52xJWtfPtFq3Kqj8VHS'
}
);

// Authenticated client, can make signed calls

let coinssa = require(`${process.cwd()}/幣種.json`);
const { Client, Intents } = require('discord.js');
const { token } = require('./token.json');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

// inside a command, event listener, etc.
const fs = require('fs');

// 連上線時的事件

var abc =[]
client.on('ready' , () =>{
  console.log('Bot esta escuchando');
  client.user.setStatus('online');
 
  console.log('bot status', client.user.presence.status);

  client.user.setActivity("正在看智鈞", {
    type: "STREAMING",
    url: "https://www.twitch.tv/lebaby0v0"
  });





 
 
 });


/*var writestreamA = logfilestream({
  logdir: './log',
  nameformat: '幣圈[.txt]',
});*/
client.login(token);

sss();
const strs = coinssa.coin
//console.log(strs.split(','))
var a = 0;

 ggg=strs.split(',')

async function sss(){
  const strs = coinssa.coin
    client.on('ready', () => {
    
        console.log(`Logged in as ${client.user.tag}!`);
        //console.log(`${str.split('')}`)
       
    });

    
    
    // 當 Bot 接收到訊息時的事件
    client.on('messageCreate', msg => {
      a = ggg.length
      var sym,sym1 
      var popo,popo1,popo2,popo3,popo4,popo5
        
        if (msg.member.user.bot) return;
        // 如果訊息的內容是 'ping'

        if(msg.toString().startsWith(`shian`)){

          i = -1
          var interval = setInterval(function(){
        
        i++;
        
        if(i==a){
          clearInterval(interval);
          interval=null;
          msg.channel.send("已計算完畢")
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
           
          },500);
        
       




        }
        if(msg.toString().startsWith(`debug`)){
          i = -1
          var interval = setInterval(function(){
        
        i++;
        
        if(i==654){
          clearInterval(interval);
          interval=null;
        }

        
          binance.candlesticks(ggg[i], "1w", (error, ticks, symbol) => {
            if(error){
                return ;
            }
            //console.info("candlesticks()", ticks);
            let last_tick = ticks[ticks.length - 1];
            let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
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
            //console.info(symbol+" last close: "+close);
            //msg.channel.send("open: "+open+'\n'+"high: "+high+'\n'+"low: "+low+'\n'+"close: "+close+'\n'+"volume: "+volume);
          sym1 = symbol
          popo1 = volume
          popo4 = open
            popo5 = close

          
          }, {endTime: new Date().getTime() - 24 * 60 * 60 * 1000*14});
        
         
          var calcint = popo1/popo *100 -100
          //console.log(calcint)
          var ok = `${Math.round(calcint)}%`
          console.log(ok)
          console.log(sym,popo2,popo3)
          console.log(sym1,popo4,popo5)

          if(popo2==popo4&&popo3==popo5){
            //msg.channel.send(`${sym}這個幣可能有問題 開:${popo2}} \n 關:${popo3} \n 開:${popo4} \n 關:${popo5}`)
            writestreamA.write(`${sym}這個幣可能有問題 \n`)
          }
        },500)
      }

       
      

        
         
        
    });

    



}