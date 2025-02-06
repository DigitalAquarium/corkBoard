from pycountry import countries

tsOutput = open("country.ts","w",encoding="utf-8")

tsOutput.write("export enum Country {\n")

tsOutput.write("  //Generated countries\n")
for country in countries:
  tsOutput.write("  "+country.alpha_2 + ' = "' + country.name + "\",\n")
tsOutput.write("  //Manual countries\n")
tsOutput.write('''  XX = "Unknown",
  XZ = "Online",
  XE = "England",
  XS = "Scotland",
  XW = "Wales",
  XI = "Northern Ireland",
''')
tsOutput.write("}")
tsOutput.close()
