![OPSI](logo.PNG)



# Vizualizacija "OPSI" podatkov

## Opis projekta
    
Projekt je namenjen vizualizaciji podatkov o delovnih migracij v Sloveniji pridobljenih iz [Odprtih podaktkov Slovenije](https://podatki.gov.si/)

Projekt nastaja v sklopu predmeta _Praktikum II_ na Fakulteti za elektrotehiko, računalništvo in informatiko FERI.

## Besednjak

**Indeks delovnih migracij** = razmerje med številom delovno aktivnih
prebivalcev (brez kmetov) v določeni teritorialni enoti delovnega mesta in številom
delovno aktivnih prebivalcev (brez kmetov) v teritorialni enoti prebivališča pomnoženo
s 100.

**Migranti** = delovno aktivno prebivalstvo, ki dela zunaj regije svojega prebivališča 

## Tehnologije

- **Front-end**: React JS ^17.0.2
  - [react-map-gl ^6.1.15](https://visgl.github.io/react-map-gl/)
  - [mapbox-gl ^2.3.0](https://www.mapbox.com/mapbox-gljs)
  - [recharts ^2.0.9](https://recharts.org/en-US/)
- **Upravljanje s podatki**: Python

## Funkcionalnosti

- Pregled spreminjanja indeksa delovnih migracij regij med leti 2009 in 2020 s pomočjo interaktivnega zemljevida 

- Pregled grafov indeksa migracij in števila delovnih migrantov, glede na regijo/občino

- Pregled grafov indeksa migracij, primerjave aktivnosti med spoloma in grafov delavcev, ki delajo izven regije, kjer živijo, za posamzeno regijo s pomočjo interaktivnega zemljevida

- Pregled grafov indeksa migracij, primerjave aktivnosti med spoloma in grafov delavcev, ki delajo izven regije, kjer živijo, za posamzeno občino s pomočjo interaktivnega zemljevida

## Zaslonski posnetki

Homepage
![Homepage](screenshots/home.PNG)

----

Stran s statistiko
![Stran s statistiko](screenshots/statistika.PNG)

----

Stran z regijami
![Stran z regijami](screenshots/regija.PNG)

----

Stran z občinami
![Stran z občinami](screenshots/obcina.PNG)

## Namestitev

Zahteve: [node.js v12.19.0, npm 6.14.8](https://nodejs.org/en/download/releases/)

1. Kloniranje repozitorija

2. Namestitev /node_modules

    - Odpremo terminal (win + R in vtipkamo _cmd_ ter pritisnemo enter)

    - Navigirajte v mapo frontend/opsi/, za pomik v mapo se uporabi "cd [ime mape]", za pomik iz mape pa "."

    - V terminal vpišemo ukaz

      ```
      npm install
      ```
    - Počakamo, da se namesti, vse kar je potrebno

3. Da poženemo strežnik, v terminal vpišemo ukaz
      
      ```
      npm start
      ```

4. Za dostop do strani v brskalnik prekopiramo URL 

      ```
      localhost:3000/
      ```

## Avtorji:
- Nik Kovačević
- Aljaž Neuberg
- Luka Ogrizek
- Timotej Vošinek




