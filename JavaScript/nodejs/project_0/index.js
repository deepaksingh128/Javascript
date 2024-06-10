const { Telegraf } = require('telegraf');
require('dotenv').config();
const axios = require('axios');
console.log(process.env);
const bot = new Telegraf(process.env.BOT_TOKEN)

const binarySearch = `function search(arr, x){
    let lo = 0, hi = arr.length-1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x){
            lo = mid + 1;
        } else{
            hi = mid - 1;
        }
    }
    return undefined;
}
`;


try{
    bot.start((ctx) => ctx.reply('Welcome to Deepak\'s Telegram bot'));
    bot.command('oldschool', (ctx) => ctx.reply('Vinayak Public School'));
    bot.command('brothername', (ctx) => ctx.reply('Deepak Singh'));
    bot.command('binarysearch', (ctx) => ctx.reply(binarySearch));  // this is not working 
    bot.on('sticker', (ctx) => ctx.reply('♥'));
    
    bot.command('binarytreejs', async (ctx) => {
        const response = await axios.get("https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/"); // too large
        console.log(response);  // therefore not giving any result
        ctx.reply(response);
    })
    
    
    
    bot.on('text', (ctx) => {
        // console.log(ctx);
        console.log(ctx.update.message);
        if(ctx.update.message.text == 'I love you'){
            ctx.reply('love you too');
        } else{
            ctx.reply('I don\'t understand humans');
        }
    });

    bot.launch();
} catch{
    console.log("unexpected command");
}



