# print('hello world')
# #comment here

# age = 20
# print(age)

# likes_to_code = True
# print(likes_to_code)

# rating = 4.5
# rating = 3
# if rating >3:
#     print('good')
#     print(rating)
# elif rating == 3:
#     print('okay')
# else:
#     print('bad')    

# fruits = ["apple", "berry", "cherry"]

# nums = [1, 2, 3]

# random_stuff = ["apple", 4, True, 5.1]

# print(fruits)
# print(nums)
# print(random_stuff[0])

# students = ["tim","sam"]
# for student in students:
#     # print(student[0]) #prints t s
#     print(student) #prints tim sam

#FUNCTIONS
# def print_name(name):
#     print(name)
    
# print_name("john")


# orders = open('orders.csv')
# for order in orders:
#     print(order)
# orders.close()

orders = open('orders.csv')
for order in orders:
    if order.startswith('Mon'):
        print(order)
orders.close()