import telebot

bot = telebot.TeleBot("2035156427:AAEwtQ29HZTo2x6HSIopd1c28bBwqZKZD60") # You can set parse_mode by default. HTML or MARKDOWN

@bot.message_handler(content_types=['text'])
def send_echo(message):
	#bot.reply_to(message, messege.text)
    bot.send_message(message.chat.id, message.text)

bot.polling( none_stop = True )