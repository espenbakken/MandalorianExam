**_Our exam in the course Webdevelopment 3. In this exam we showed what we had learned this semester by creating a Fullstack-application. We have been working with both the Backend and the Frontend part of this application._**

## The Mandalorian Project

## Eksamen Webutvikling 3 (PGR305)

<br/>

### Case: Fullstack applikasjon rundt et tema

I denne eksamenen skal du ta utgangspunkt i ett tema (i listen i neste setning) og utvikle en
fullstack løsning rundt informasjon om temaet. Velg én av følgende temaer:

- Ett eller annet med klær, vesker, klokker e.l.
- Pop-artister / musikere
- Fotballspillere / fotballag
- MMA-utøvere
- Om en historisk hendelse mellom 1600-tallet og 1800-tallet
- Én spesifikk TV-serie
  Du skal utvikle full CRUD-funksjonalitet i denne sammenheng som betyr at brukere skal
  kunne lese informasjon gjennom nettsidene, legge til, oppdatere og slette informasjon.
  Nedenfor følger de store linjene for frontend og backend, men oppgaven er ganske åpen og
  du har i stor grad frihet til å utforme løsningen etter egen smak. For både karakterens del og
  læringens del: Ikke tenk minimalistisk! Mer omfang og mer kompleksitet = bra!
  <br/>
  ### Backend:
- Database i MongoDb Atlas
- .NET/C# Web API med CRUD-funksjonalitet mot MongoDb
  <br/>
  ### Frontend:
- Sider med funksjonalitet hvor en bruker kan gjøre CRUD. Forsøk å dele opp CRUDfunksjonaliteten i flere komponenter.
- Diverse funksjonalitet som du mener kan passe å ha med. Eksempler kan være å ha
  med søkefunksjonalitet, sorteringsfunksjonalitet, quiz osv. Du har stor frihet til å
  bestemme funksjonalitet du kan ha med her.

### Prosjektbeskrivelse:

**_Vi har laget en fullstack løsning rettet rundt serien The Mandalorian. I løsningen kan du se sesonger med episoder, karakterer, skuespillere som har vært med i serien. På hver episode kan man gi en rating som settes i MongoDb. Du kan også legge til helt nye episoder i adminpanelet, samt slette eksisterende episoder i databasen._**
<br/>

## Oppsett

<br/>

### Hvordan starte prosjektet:

1. Åpne opp mappen i Visual Studio Code eller et annet program du ønsker å benytte.
2. Kjør `npm install` i terminalen
3. Skriv i terminalen `cd MandalorianApi` og press tab og enter
4. Skriv `dotnet watch run`
5. Åpne et nytt terminalvindu og skriv deg frem til mandalarian-app mappen
6. Kjør deretter kommandoen `npm install`
7. Kjør kommandoen `npm start`
8. Nå kan du se React-applikasjonen i nettleseren. Kos deg!

## Kriterier for funksjonalitet:

<br/>

### Frontend:

- [x] Komponentbasert utvikling med blant annet List og Item-fordeling av ansvar
- [x] State Management med context
- [x] TypeScript
- [x] Interface
- [x] Type
- [x] Typesetting
- [x] Router
- [x] Ajax
- [x] React Bootstrap (et hovedmoment her er å gjøre bruk av Grid-systemet i CSS-rammeverket)
- [x] Diverse JS-teknikker som for eksempel .map(), spread operator, ternary operator, array, object literal
      <br/>

### Backend:

- [x] CRUD
- [x] Database i MongoDb Atlas
- [x] .NET /C#
- [x] Interfaces
- [x] Model-klasser
- [x] Service-klasser
- [x] Controller
- [x] Konfigurasjon
- [x] CORS
- [x] StaticFiles
- [x] Bildeopplasting
