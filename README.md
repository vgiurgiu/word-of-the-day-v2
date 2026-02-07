# Kid Learning Games

A local-first web app for children ages 3-5 with a game selector.

## Games included

- `Word of the Day`
  - 100 kid-friendly words (mostly 3-4 letters)
  - Randomized rounds (does not always start with the same word)
  - Large word + short definition + simple example sentence
  - 3 picture options per round
  - Correct answer gives `+10 points`
  - Points counter shown in the top-right of the game screen

- `Food Chain`
  - Vertical top-to-bottom circles
  - One missing circle to complete
  - Drag-and-drop (plus tap-to-place fallback)
  - 10 starter chains across multiple environments
  - Top-right points counter (`+10` per correct chain)

- `Hungry Animals`
  - Shows one animal at a time
  - Child picks what it can eat from 3 options
  - 50 animal prompts with simple kid-friendly food choices
  - Top-right points counter (`+10` per correct answer)

## Run on localhost

1. Open Terminal in this project folder.
2. Run:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

3. Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Deploy to Netlify

This is a static site; no build step is required.

1. Push this folder to GitHub.
2. In Netlify: **Add new site** -> **Import an existing project**.
3. Select your repo and use:
   - Build command: *(leave empty)*
   - Publish directory: `.`
4. Deploy.

## Project files

- `index.html`: selector + all game screens
- `styles.css`: responsive styling for the hub and games
- `script.js`: game logic and datasets (Word, Food Chain, Hungry Animals)
- `FOOD_CHAIN_SOURCES.md`: references for the food-chain starter dataset
