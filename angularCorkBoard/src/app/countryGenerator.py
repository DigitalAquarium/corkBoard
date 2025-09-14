from pycountry import countries

countries_dict = {"XX":"Unknown","XZ":"Online","XE":"England","XS":"Scotland","XW":"Wales","XI":"Northern Ireland"}
for country in countries:
  countries_dict[country.alpha_2] = country.name
  
tsOutput = open("country.ts","w",encoding="utf-8")
tsOutput.write("export enum Country {\n")
for key,value in countries_dict.items():
  tsOutput.write("  "+key + ' = "' + value + "\",\n")
tsOutput.write("}\n\n")

tsOutput.write("function getFlag(code: Country) : string {\n")
tsOutput.write("  switch (code){\n")
for key,value in countries_dict.items():
  tsOutput.write("    case Country."+key+":\n")
  tsOutput.write("      return "+ "'flags/"+key.lower()+".svg'" + ";\n")
tsOutput.write("  }\n")
tsOutput.write("}")
tsOutput.close()
