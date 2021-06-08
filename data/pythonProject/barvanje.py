
import json


"Migracije_regije"
with open(r'C:\Opsi\data\Json\regije_zdruzen.json', 'r', encoding='utf-8') as myfile:
    data=myfile.read()
reg = json.loads(data)

"Evo tu mas za dodajanje"
reg["features"][0]["properties"]["barvanje"]="[1,2,43]"
print(reg["features"][0]["properties"]["barvanje"])


"Evo tu je da gres skozi podatke pa samo indeks delovne migracije pogledas"
poskus=reg["features"][0]["podatki_regije"]

data = {}
for a in range(12):
    data = {}
    for j in reg["features"][a]["podatki_regije"]:
        if(j["KAZALNIK"] =="Indeks delovne migracije"):
            data[j["LETO"]] = j["num"]
            json_data = json.dumps(data)

    reg["features"][a]["properties"]["barvanje"] = json_data

with open(r"regije_samofor.json", "w", encoding='utf-8') as jsonfile_o:
    json.dump(reg, jsonfile_o, ensure_ascii=False, indent=4)


