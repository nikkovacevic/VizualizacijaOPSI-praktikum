
import requests
import json


"Migracije_regije"
with open('C:\Opsi\data\Json\migracije_regije.json', 'r', encoding='utf-8') as myfile:
    data=myfile.read()
reg = json.loads(data)

"Json map"
mapa = 'https://raw.githubusercontent.com/stefanb/gurs-obcine/master/data/SR.geojson'
j = requests.get(url=mapa)
map = json.loads(j.content)

array_napolni = []
for i in range(12):
    mapa_r = map["features"][i]["properties"]['SR_UIME']
    for j in reg:
       if(j["STATISTIČNA REGIJA"]==mapa_r):
            array_napolni.append(j)
            map["features"][i]["podatki_regije"] = array_napolni
    array_napolni = []




with open(r"C:\Users\Miki\Desktop\regije_zdruzen.json", "w", encoding='utf-8') as jsonfile:
    json.dump(map, jsonfile, ensure_ascii=False, indent=4)