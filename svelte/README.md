# Murder Mystery CTF - Hvordan lage CTF flagg?
Lurer du kanskje på hvordan jeg lagde flaggene til denne CTFen? Her kommer en grundig veiledning!

PS. Svelte blir brukt som rammeverk, denne veiledningen vil ikke nødvendigvis funke for andre rammeverk/vanilla HTML. Dette gjøres på macOS, kan hende ting fjøres annerledes på windows eller linux.

## 1 - Flagg nummer 1
**Gjerningsvåpen**
Det aller første flagget er veldig simpelt og enkelt. Det første du vil gjøre er å gå inn på [Dcode](https://www.dcode.fr/en) og finne en kryptering du foretrekker. De mest kjente og brukte er [Base64](https://www.dcode.fr/base-64-encoding) eller [SHA-256](https://www.dcode.fr/sha256-hash). Etter at du har funnet et krypteringsspråk og kryptert flagget ditt kan du gå inn i filen du skal ha flagget i og lage en `<div>`. Deretter limer du inn flagget ditt sammen med noe tekst om du ønsker det. I CSSen bytter du fargen på flagget eller hele teksten til fargen av bakgrunnen og sånn har du laget et flagg!

## 2 - Flagg nummer 2
**Biologisk Spor**
Neste flagget er litt mer komplisert enn flagg nr 1, men fremdeles ganske simpelt. I Svelte oppsettet ditt har du forskjellige mapper, den vi leter etter heter `static`, den ligger som regel rett under `src` mappen. Du går inn i mappen og lager en ny fil som heter `robots.txt`. Der kan du sette inn så mye tekst du vil, eller kun flagget. Å lage flagget er ganske simpelt, men det som er komplisert er hvordan man finner fram sliker mapper når man leter etter flaggene. Derfor er denne litt mer vrien enn flagg nr 1.

## 3 - Flagg nummer 3
**Philippa Britton**
Dette flagge er det mest kompliserte av alle. Det du trenger er:
1. Et bilde (f.eks nyancat)
2. iterm eller terminal
3. tålmodighet til html og css
Etter at du har funnet fram et bilde går du på terminalen og skriver inn følgende `cat > lol` (der lol er navnet på filen du vil ha), press enter, deretter skriver du meldingen du vil ha i tekstfilen, når du e ferdig trykker du Ctrl + D. Når du har gjort det må du comprimere txt-filen, dette kan du gjøre på to måter. Den første måten er å dobbelklikke på txt-filen og velge `compress`. Den andre måten er å skrive inn dette i terminalen `zip file.zip file` der du bytter ut file med fil navnet ditt, f.eks `zip lol.txt.zip lol.txt`. Det neste du trenger å gjøre er å skjule filen i bildet. Du finner frem bildet og zip filen din og skriver følgende `cat nyancat.png lol.txt.zip > newnyancat.png`, selvfølgelig må du bytte ut navnene slik at det passer filene dine. Nå har du skjult en fil i et bilde! Gratulerer. Neste steg vil være å sette det inn i prosjektet ditt, men dette fikser du selv.
