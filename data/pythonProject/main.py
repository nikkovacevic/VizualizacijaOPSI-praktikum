import pandas as pd
import json
import io

"Sem se da path od datoteke, ki bi jo rad spremenil v json"
df_aktivnost = pd.read_csv (r'C:\Opsi\data\migracije_regije.csv',encoding='utf-8-sig')
data1 = pd.DataFrame(data=df_aktivnost)

data1=data1.to_json(orient="index")
parsed=json.loads(data1)
aa=json.dumps(parsed, indent=4,ensure_ascii=False).encode('utf8')
bb=aa.decode()
print(bb)

"Tukaj das path do datoteke v kiro bi rad shranil"
with io.open("test.json", "w", encoding="utf-8") as f:
    f.write(bb)

