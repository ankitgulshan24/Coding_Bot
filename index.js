const { Telegraf } = require('telegraf');
const axios = require('axios');
const bot = new Telegraf('7649288252:AAGrs434o0iiZYNM9oeoPRo-lRX5Y2f0N7U');




let binarysearchjs= 





bot.start((ctx) => ctx.reply('Welcome to new codeing bot from ankit'));

bot.command('binarysearch', (ctx) => ctx.reply(binarysearchjs))
bot.command('binarysearchinc', async function (ctx){
    const response= await axios.get('https://gist.githubusercontent.com/mytechs/d45f77b33c881b461405c4463a4e7183/raw/542679298eef6b359524b186775d0357b40af704/Binarysearch.c')
    return ctx.reply(response.data)

})
bot.command('ayush', (ctx) => ctx.reply("Ayush Rajpal is a bad boy"))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.launch();


