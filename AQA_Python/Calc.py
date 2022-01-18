on = True

def add():
    a = float(input("Enter a number. "))
    b = float(input("Enter another nuimber. "))
    print((a + b))

def subtraction():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number. "))
    print(a - b)

def multiply():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number"))
    print(a * b)

def divede():
    a = float(input("Enter a number. "))
    b = float(input("Enter anouther number"))
    print(a / b)

while on:
    operation = input("Please type +, -, * , / or q")
    if operation =="+":
        add()
    elif operation == "-":
        subtraction()
    elif operation == "*":
        multiply()
    elif operation == "/":
        divede()
    elif operation == "q"
        on = False
    else:
        print("That operation is not avalible")
