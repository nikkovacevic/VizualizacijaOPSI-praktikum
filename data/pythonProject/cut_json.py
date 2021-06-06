import io
import json

with open('C:\Opsi\data\Json\delovno_aktivno.json', 'r', encoding='utf-8') as myfile:
    data=myfile.read()
reg = json.loads(data)


array_n = []
for i in reg:
    if "M12" not in i["MESEC"]:
        continue
    else:
        array_n.append(i)


print(array_n)




with open(r"C:\Opsi\data\Json\delovno_aktivno_leto.json", "w", encoding='utf-8') as jsonfile_o:
    json.dump(array_n, jsonfile_o, ensure_ascii=False, indent=4)