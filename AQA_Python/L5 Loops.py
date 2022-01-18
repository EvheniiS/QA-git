fruits = ["apple", "orange", "pears", "cherries", "grapes"]

for fruit in fruits:
    print("Would you like {} ?".format(fruit))

for number in range(1,15):
    print("Number {}".format(number))

temp_c = 16

while temp_c >0:
    print("The water is {} degrees".format(temp_c))
    temp_c -= 1
    if temp_c == 1:
        break

for number in range(0,11):
    if number == 7:
        print("we're skipping number 7.")
        continue
    print("This is the number {}".format(number))

for number in range(0,11):
    if number == 3:
        pass
    else:
        print("The number is {}".format(number))
