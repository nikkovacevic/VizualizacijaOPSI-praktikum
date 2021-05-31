import requests
import json
import pandas as pd
import io

"Migracije_regije"
df_migracije = pd.read_csv (r'C:\Opsi\data\migracije_regije.csv',encoding='utf-8-sig')
df_migracije = df_migracije[['STATISTIČNA REGIJA','num','LETO','KAZALNIK']]
df_migracije = pd.DataFrame(data=df_migracije)





mapa = 'https://raw.githubusercontent.com/stefanb/gurs-obcine/master/data/SR.geojson'
j = requests.get(url=mapa)
content = json.loads(j.content)
df = pd.DataFrame.from_dict(content['features'])


aaaaa=df_migracije.groupby("STATISTIČNA REGIJA")
print(aaaaa)

print(df_migracije.iloc[3])

for x in range (len(df)):
    bb = df.iloc[x,1]
    regija = bb["SR_UIME"]
    print(regija)
    for y in range(len(df_migracije)):
        regija_migracije=df_migracije.iloc[y,0]
        if (regija_migracije == regija):
            df['Podatki_regije'] = df.index

            zalepi=""
            json_dodaj = df_migracije
            print(json_dodaj)
            zalepi = zalepi,",",json_dodaj
            print("jhahahah  ",zalepi)

            x = "'/podatki_regije:'/" + ''
            df['Podatki_regije'] = x
print(df)


"""
"Dodajanje!!"
df['Podatki_regije'] = df.index
x = "'/podatki_regije:'/"+ '[{ "num": 15.2,"STATISTIČNA REGIJA": "Pomurska","LETO": 2014,"KAZALNIK": "Delovni migranti, ženske [brez kmetic], ki delajo zunaj regije prebivališča"}]'
df['Podatki_regije']= x

"""


regija=df["properties"]







testni = df.iloc[1]
result = testni.to_json(orient="split")
parsed = json.loads(result)
json.dumps(parsed, indent=4)





