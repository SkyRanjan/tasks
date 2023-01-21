import telebot
import random

bot = telebot.TeleBot("5846508586:AAGj0SLllNbDj1Jqozt1uxbTBCmbEavoF5o")


#Variable to store the state of the game
game_state = "idle"

@bot.message_handler(commands=['start'])
def start_game(message):
    global game_state
    bot.send_message(message.chat.id, "Welcome! Let's play rock-paper-scissors. Type '/play' to start the game.")
    game_state = "idle"

@bot.message_handler(commands=['play'])
def play_game(message):
    global game_state
    if game_state == "idle":
        bot.send_message(message.chat.id, "Make your choice: rock, paper or scissors")
        game_state = "playing"
    else:
        bot.send_message(message.chat.id, "A game is already in progress. Type '/play' to play again.")

@bot.message_handler(content_types=['text'])
def check_answer(message):
    global game_state
    if game_state == "playing":
        user_choice = message.text
        if user_choice not in ['rock', 'paper', 'scissors']:
            bot.send_message(message.chat.id, "Invalid entry. Please enter 'rock', 'paper', or 'scissors'.")
            return
        # Generate a random choice for the bot
        bot_choice = random.choice(['rock', 'paper', 'scissors'])
        # Determine the winner
        if user_choice == bot_choice:
            result = "It's a tie!"
        elif (user_choice == 'rock' and bot_choice == 'scissors') or (user_choice == 'paper' and bot_choice == 'rock') or (user_choice == 'scissors' and bot_choice == 'paper'):
            result = "You win!"
        else:
            result = "You lose!"
        # Send the result to the user
        bot.send_message(message.chat.id, f'{result} The bot chose {bot_choice}.')
        game_state = "idle"

bot.polling()
