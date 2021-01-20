def find_gcd(x,y):
    while(y):
        x, y = y, x % y
        print("y" + str(y))
    return x

def find_lcm(a, b):
    return a * b / find_gcd(a, b)

if __name__ == '__main__':
    find_gcd(10, 24)
    find_lcm(10, 24)