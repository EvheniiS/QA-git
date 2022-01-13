A = int(input())
B = int(input())
N = int(input())
cost1 = A * 100 + B
total_cost = cost1 * N
print(total_cost // 100, total_cost % 100)
