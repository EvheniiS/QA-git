#Калькулятор

from colorama import init
from colorama import Fore, Back, Style

print (Fore.BLACK)
print (Back.RED)

what = input( 'Что делать? (+ , -) :' )

print(Back.CYAN )

a = float (input('Введите первое число :'))
b = float (input('Введите второе число :'))

print (Back.YELLOW)

if what == "+":
    c = a + b
    print("Результат:" + str(c))
elif what == "-":
    c = a - b
    print("Результат:" + str(c))
else:
    print("Выбрана неверная операция!")

input()
