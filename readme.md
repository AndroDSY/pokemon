## Versteckte Features

1. Wenn das Inputfeld *Pokémon Name* fokussiert ist, kann durch drücken der Enter Taste, der Text markiert werden.  
    Dadurch kann direkt ein neuer Name eingegeben werden.
2. Negative Zahlen im Inputfeld *Anzahl Pokémon* sorgen dafür, dass alle passenden Pokémon angezeigt werden.
3. Der Wert des Inputfeldes *Anzahl Pokémon* kann durch eine URL-Variable im Voraus gesetzt werden.  
    Z.B. kann man **?anzahl=-1** ans Ende der URL setzen.  
    Dadurch muss dieser Wert nicht bei jedem erneuten Laden manuell gesetzt werden.
4. Will man im Voraus einen Wert für das Inputfeld *Name Pokémon* setzen, geht das mit der URL-Variable *pokemon*.
5. Für die URL-Variable *bild* kann man folgende Werte setzen:
    - shiny
    - both
    - none

Beispielsweise wäre eine solche Suche möglich:  
<https://pokemon.androdsy.ch/?anzahl=-1&pokemon=Glurak&bild=shiny>