
brokenPrice = float(input("Price of broken console: "))
fixCost = float(input("Price of necessary parts: "))
buildCost = brokenPrice + fixCost
sellPrice = buildCost + (buildCost * 0.8)


print ("hello world")
print(fixCost)
print (f"Total cost: {buildCost}")
print (f"Sell cost: {sellPrice}")
