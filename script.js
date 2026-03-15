const screens = {
    home: document.getElementById("home-screen"),
    word: document.getElementById("word-screen"),
    food: document.getElementById("food-screen"),
    hungry: document.getElementById("hungry-screen")
};

const wordEl = document.getElementById("current-word");
const definitionEl = document.getElementById("definition");
const exampleEl = document.getElementById("example");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const moreBtn = document.getElementById("more-btn");
const tryAgainBtn = document.getElementById("try-again-btn");
const wordScoreEl = document.getElementById("word-score");
const wordHighScoreEl = document.getElementById("word-highscore");

const foodEnvironmentEl = document.getElementById("food-environment");
const foodChainColumnEl = document.getElementById("food-chain-column");
const foodOptionsEl = document.getElementById("food-options");
const foodFeedbackEl = document.getElementById("food-feedback");
const nextChainBtn = document.getElementById("next-chain-btn");
const foodScoreEl = document.getElementById("food-score");
const foodHighScoreEl = document.getElementById("food-highscore");

const hungryTargetEl = document.getElementById("hungry-target");
const hungryOptionsEl = document.getElementById("hungry-options");
const hungryFeedbackEl = document.getElementById("hungry-feedback");
const nextHungryBtn = document.getElementById("next-hungry-btn");
const hungryScoreEl = document.getElementById("hungry-score");
const hungryHighScoreEl = document.getElementById("hungry-highscore");

const fireworksEl = document.getElementById("fireworks");

const wordSeed = [
    { word: "Dog", emoji: "🐶", type: "animal" },
    { word: "Cat", emoji: "🐱", type: "animal" },
    { word: "Cow", emoji: "🐮", type: "animal" },
    { word: "Pig", emoji: "🐷", type: "animal" },
    { word: "Hen", emoji: "🐔", type: "animal" },
    { word: "Duck", emoji: "🦆", type: "animal" },
    { word: "Goat", emoji: "🐐", type: "animal" },
    { word: "Frog", emoji: "🐸", type: "animal" },
    { word: "Fish", emoji: "🐟", type: "animal" },
    { word: "Bird", emoji: "🐦", type: "animal" },
    { word: "Bear", emoji: "🐻", type: "animal" },
    { word: "Lion", emoji: "🦁", type: "animal" },
    { word: "Wolf", emoji: "🐺", type: "animal" },
    { word: "Slug", emoji: "🐌", type: "animal" },
    { word: "Fox", emoji: "🦊", type: "animal" },
    { word: "Deer", emoji: "🦌", type: "animal" },
    { word: "Ant", emoji: "🐜", type: "animal" },
    { word: "Bee", emoji: "🐝", type: "animal" },
    { word: "Bat", emoji: "🦇", type: "animal" },
    { word: "Crab", emoji: "🦀", type: "animal" },
    { word: "Seal", emoji: "🦭", type: "animal" },
    { word: "Owl", emoji: "🦉", type: "animal" },
    { word: "Swan", emoji: "🦢", type: "animal" },
    { word: "Hare", emoji: "🐰", type: "animal" },
    { word: "Mole", emoji: "🐹", type: "animal" },
    { word: "Lamb", emoji: "🐑", type: "animal" },
    { word: "Colt", emoji: "🐴", type: "animal" },
    { word: "Calf", emoji: "🐮", type: "animal" },
    { word: "Dove", emoji: "🕊️", type: "animal" },
    { word: "Moth", emoji: "🦋", type: "animal" },
    { word: "Pear", emoji: "🍐", type: "food" },
    { word: "Plum", emoji: "🍑", type: "food" },
    { word: "Kiwi", emoji: "🥝", type: "food" },
    { word: "Fig", emoji: "🍇", type: "food" },
    { word: "Date", emoji: "🍇", type: "food" },
    { word: "Lime", emoji: "🍋", type: "food" },
    { word: "Leek", emoji: "🥬", type: "food" },
    { word: "Bean", emoji: "🫘", type: "food" },
    { word: "Pea", emoji: "🫛", type: "food" },
    { word: "Corn", emoji: "🌽", type: "food" },
    { word: "Rice", emoji: "🍚", type: "food" },
    { word: "Oats", emoji: "🌾", type: "food" },
    { word: "Milk", emoji: "🥛", type: "food" },
    { word: "Cake", emoji: "🎂", type: "food" },
    { word: "Pie", emoji: "🥧", type: "food" },
    { word: "Soup", emoji: "🍲", type: "food" },
    { word: "Yam", emoji: "🍠", type: "food" },
    { word: "Egg", emoji: "🥚", type: "food" },
    { word: "Taco", emoji: "🌮", type: "food" },
    { word: "Tofu", emoji: "🍱", type: "food" },
    { word: "Sun", emoji: "☀️", type: "nature" },
    { word: "Moon", emoji: "🌙", type: "nature" },
    { word: "Star", emoji: "⭐", type: "nature" },
    { word: "Rain", emoji: "🌧️", type: "nature" },
    { word: "Snow", emoji: "❄️", type: "nature" },
    { word: "Wind", emoji: "💨", type: "nature" },
    { word: "Sky", emoji: "🌤️", type: "nature" },
    { word: "Tree", emoji: "🌳", type: "nature" },
    { word: "Leaf", emoji: "🍃", type: "nature" },
    { word: "Seed", emoji: "🌱", type: "nature" },
    { word: "Fern", emoji: "🌿", type: "nature" },
    { word: "Moss", emoji: "🌿", type: "nature" },
    { word: "Rose", emoji: "🌹", type: "nature" },
    { word: "Lily", emoji: "🌸", type: "nature" },
    { word: "Iris", emoji: "🌸", type: "nature" },
    { word: "Pond", emoji: "🏞️", type: "nature" },
    { word: "Lake", emoji: "🌊", type: "nature" },
    { word: "Rock", emoji: "🪨", type: "nature" },
    { word: "Sand", emoji: "🏖️", type: "nature" },
    { word: "Soil", emoji: "🟫", type: "nature" },
    { word: "Car", emoji: "🚗", type: "vehicle" },
    { word: "Bus", emoji: "🚌", type: "vehicle" },
    { word: "Van", emoji: "🚐", type: "vehicle" },
    { word: "Bike", emoji: "🚲", type: "vehicle" },
    { word: "Boat", emoji: "⛵", type: "vehicle" },
    { word: "Tram", emoji: "🚋", type: "vehicle" },
    { word: "Jeep", emoji: "🚙", type: "vehicle" },
    { word: "Ship", emoji: "🚢", type: "vehicle" },
    { word: "Book", emoji: "📘", type: "home" },
    { word: "Ball", emoji: "⚽", type: "home" },
    { word: "Door", emoji: "🚪", type: "home" },
    { word: "Seat", emoji: "🪑", type: "home" },
    { word: "Lamp", emoji: "💡", type: "home" },
    { word: "Drum", emoji: "🥁", type: "music" },
    { word: "Horn", emoji: "📯", type: "music" },
    { word: "Sock", emoji: "🧦", type: "clothes" },
    { word: "Shoe", emoji: "👟", type: "clothes" },
    { word: "Hat", emoji: "🧢", type: "clothes" },
    { word: "Cap", emoji: "🧢", type: "clothes" },
    { word: "Coat", emoji: "🧥", type: "clothes" },
    { word: "Fork", emoji: "🍴", type: "home" },
    { word: "Cup", emoji: "🥤", type: "home" },
    { word: "Dish", emoji: "🍽️", type: "home" },
    { word: "Bed", emoji: "🛏️", type: "home" },
    { word: "Bath", emoji: "🛁", type: "home" },
    { word: "Hand", emoji: "🖐️", type: "body" },
    { word: "Foot", emoji: "🦶", type: "body" },
    { word: "Nose", emoji: "👃", type: "body" },
    { word: "Ear", emoji: "👂", type: "body" },
    { word: "Eye", emoji: "👁️", type: "body" }
];

const foodChains = [
    {
        environment: "Open Ocean",
        chain: [
            { label: "Phytoplankton", emoji: "🦠" },
            { label: "Krill", emoji: "🦐" },
            { label: "Penguin", emoji: "🐧" },
            { label: "Leopard Seal", emoji: "🦭" }
        ]
    },
    {
        environment: "Coral Reef (Ocean)",
        chain: [
            { label: "Algae", emoji: "🌿" },
            { label: "Parrotfish", emoji: "🐠" },
            { label: "Barracuda", emoji: "🐟" },
            { label: "Reef Shark", emoji: "🦈" }
        ]
    },
    {
        environment: "Kelp Forest (Ocean)",
        chain: [
            { label: "Kelp", emoji: "🌱" },
            { label: "Sea Urchin", emoji: "🟣" },
            { label: "Sea Otter", emoji: "🦦" },
            { label: "Orca", emoji: "🐋" }
        ]
    },
    {
        environment: "Savannah",
        chain: [
            { label: "Grass", emoji: "🌾" },
            { label: "Zebra", emoji: "🦓" },
            { label: "Lion", emoji: "🦁" }
        ]
    },
    {
        environment: "Tropical Rainforest (Jungle)",
        chain: [
            { label: "Fruit Tree", emoji: "🌳" },
            { label: "Capybara", emoji: "🦫" },
            { label: "Jaguar", emoji: "🐆" }
        ]
    },
    {
        environment: "Temperate Forest",
        chain: [
            { label: "Acorns", emoji: "🌰" },
            { label: "Mouse", emoji: "🐭" },
            { label: "Snake", emoji: "🐍" },
            { label: "Hawk", emoji: "🦅" }
        ]
    },
    {
        environment: "Desert",
        chain: [
            { label: "Seeds", emoji: "🌱" },
            { label: "Kangaroo Rat", emoji: "🐀" },
            { label: "Rattlesnake", emoji: "🐍" },
            { label: "Owl", emoji: "🦉" }
        ]
    },
    {
        environment: "Arctic Tundra",
        chain: [
            { label: "Tundra Plants", emoji: "🌿" },
            { label: "Lemming", emoji: "🐭" },
            { label: "Snowy Owl", emoji: "🦉" }
        ]
    },
    {
        environment: "Wetland / Pond",
        chain: [
            { label: "Algae", emoji: "🟢" },
            { label: "Insect Larva", emoji: "🪰" },
            { label: "Frog", emoji: "🐸" },
            { label: "Heron", emoji: "🪶" }
        ]
    },
    {
        environment: "Grassland",
        chain: [
            { label: "Grass", emoji: "🌾" },
            { label: "Grasshopper", emoji: "🦗" },
            { label: "Frog", emoji: "🐸" },
            { label: "Snake", emoji: "🐍" },
            { label: "Hawk", emoji: "🦅" }
        ]
    }
];

const hungryFoodPool = [
    { label: "Mouse", emoji: "🐭" },
    { label: "Fish", emoji: "🐟" },
    { label: "Grass", emoji: "🌿" },
    { label: "Leaves", emoji: "🍃" },
    { label: "Seeds", emoji: "🌱" },
    { label: "Fruit", emoji: "🍎" },
    { label: "Bamboo", emoji: "🎋" },
    { label: "Nectar", emoji: "🌸" },
    { label: "Insects", emoji: "🐛" },
    { label: "Frog", emoji: "🐸" },
    { label: "Rabbit", emoji: "🐇" },
    { label: "Deer", emoji: "🦌" },
    { label: "Zebra", emoji: "🦓" },
    { label: "Krill", emoji: "🦐" },
    { label: "Seal", emoji: "🦭" },
    { label: "Crab", emoji: "🦀" },
    { label: "Moth", emoji: "🦋" },
    { label: "Fly", emoji: "🪰" },
    { label: "Cheese", emoji: "🧀" },
    { label: "Corn", emoji: "🌽" },
    { label: "Hay", emoji: "🌾" },
    { label: "Algae", emoji: "🟢" },
    { label: "Grasshopper", emoji: "🦗" },
    { label: "Capybara", emoji: "🦫" },
    { label: "Meat", emoji: "🥩" },
    { label: "Pond Plants", emoji: "🌿" },
    { label: "Eucalyptus Leaves", emoji: "🍃" },
    { label: "Crumbs", emoji: "🍞" },
    { label: "Snake", emoji: "🐍" },
    { label: "Carrot", emoji: "🥕" },
    { label: "Honey", emoji: "🍯" }
];

const hungryAnimals = [
    { animal: "Snake", emoji: "🐍", diet: ["Mouse", "Frog"] },
    { animal: "Fox", emoji: "🦊", diet: ["Mouse", "Rabbit"] },
    { animal: "Lion", emoji: "🦁", diet: ["Zebra", "Deer"] },
    { animal: "Tiger", emoji: "🐯", diet: ["Deer", "Rabbit"] },
    { animal: "Owl", emoji: "🦉", diet: ["Mouse", "Insects"] },
    { animal: "Hawk", emoji: "🦅", diet: ["Snake", "Mouse"] },
    { animal: "Frog", emoji: "🐸", diet: ["Fly", "Grasshopper", "Insects"] },
    { animal: "Lizard", emoji: "🦎", diet: ["Grasshopper", "Insects"] },
    { animal: "Cat", emoji: "🐱", diet: ["Fish", "Mouse"] },
    { animal: "Dog", emoji: "🐶", diet: ["Meat"] },
    { animal: "Shark", emoji: "🦈", diet: ["Fish", "Seal"] },
    { animal: "Dolphin", emoji: "🐬", diet: ["Fish"] },
    { animal: "Whale", emoji: "🐋", diet: ["Krill"] },
    { animal: "Bear", emoji: "🐻", diet: ["Fish", "Honey"] },
    { animal: "Wolf", emoji: "🐺", diet: ["Rabbit", "Deer"] },
    { animal: "Eagle", emoji: "🦅", diet: ["Fish", "Rabbit", "Snake"] },
    { animal: "Penguin", emoji: "🐧", diet: ["Fish", "Krill"] },
    { animal: "Seal", emoji: "🦭", diet: ["Fish", "Crab"] },
    { animal: "Otter", emoji: "🦦", diet: ["Crab", "Fish"] },
    { animal: "Octopus", emoji: "🐙", diet: ["Crab", "Fish"] },
    { animal: "Spider", emoji: "🕷️", diet: ["Fly", "Insects"] },
    { animal: "Bat", emoji: "🦇", diet: ["Moth", "Insects"] },
    { animal: "Chicken", emoji: "🐔", diet: ["Seeds", "Corn"] },
    { animal: "Duck", emoji: "🦆", diet: ["Pond Plants", "Insects"] },
    { animal: "Rabbit", emoji: "🐰", diet: ["Grass", "Carrot"] },
    { animal: "Cow", emoji: "🐮", diet: ["Grass", "Hay"] },
    { animal: "Horse", emoji: "🐴", diet: ["Hay", "Grass"] },
    { animal: "Goat", emoji: "🐐", diet: ["Leaves", "Grass"] },
    { animal: "Sheep", emoji: "🐑", diet: ["Grass", "Hay"] },
    { animal: "Deer", emoji: "🦌", diet: ["Leaves", "Grass"] },
    { animal: "Elephant", emoji: "🐘", diet: ["Leaves", "Grass", "Fruit"] },
    { animal: "Giraffe", emoji: "🦒", diet: ["Leaves"] },
    { animal: "Panda", emoji: "🐼", diet: ["Bamboo"] },
    { animal: "Koala", emoji: "🐨", diet: ["Eucalyptus Leaves"] },
    { animal: "Monkey", emoji: "🐵", diet: ["Fruit", "Seeds"] },
    { animal: "Mouse", emoji: "🐭", diet: ["Cheese", "Seeds"] },
    { animal: "Rat", emoji: "🐀", diet: ["Seeds", "Crumbs"] },
    { animal: "Pig", emoji: "🐷", diet: ["Corn", "Fruit", "Crumbs"] },
    { animal: "Turtle", emoji: "🐢", diet: ["Algae", "Pond Plants"] },
    { animal: "Parrot", emoji: "🦜", diet: ["Fruit", "Seeds"] },
    { animal: "Bee", emoji: "🐝", diet: ["Nectar"] },
    { animal: "Ant", emoji: "🐜", diet: ["Crumbs", "Insects"] },
    { animal: "Butterfly", emoji: "🦋", diet: ["Nectar"] },
    { animal: "Crocodile", emoji: "🐊", diet: ["Fish", "Frog"] },
    { animal: "Alligator", emoji: "🐊", diet: ["Fish", "Crab"] },
    { animal: "Polar Bear", emoji: "🐻‍❄️", diet: ["Seal", "Fish"] },
    { animal: "Orca", emoji: "🐋", diet: ["Seal", "Fish"] },
    { animal: "Jaguar", emoji: "🐆", diet: ["Capybara", "Deer"] },
    { animal: "Cheetah", emoji: "🐆", diet: ["Deer", "Rabbit"] },
    { animal: "Hyena", emoji: "🦴", diet: ["Meat", "Zebra"] }
];

const words = wordSeed.map((item) => ({
    ...item,
    definition: buildWordDefinition(item),
    example: buildWordExample(item)
}));

const hungryFoodMap = new Map(hungryFoodPool.map((item) => [item.label, item]));

let currentWord = null;
let isWordRoundComplete = false;
let wordDeck = [];
let wordScore = 0;
let wordHighScore = Number(window.localStorage.getItem("word-game-high-score") || "0");

let currentFoodIndex = 0;
let currentMissingIndex = -1;
let selectedFoodOptionId = "";
let foodRoundComplete = false;
let foodScore = 0;
let foodHighScore = Number(window.localStorage.getItem("food-game-high-score") || "0");

let currentHungryAnimal = null;
let currentHungryCorrectLabel = "";
let hungryRoundComplete = false;
let hungryDeck = [];
let hungryScore = 0;
let hungryHighScore = Number(window.localStorage.getItem("hungry-game-high-score") || "0");

function showScreen(screenName) {
    Object.values(screens).forEach((screen) => screen.classList.remove("active"));
    screens[screenName].classList.add("active");
}

function shuffle(arr) {
    const cloned = [...arr];
    for (let i = cloned.length - 1; i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cloned[i], cloned[randomIndex]] = [cloned[randomIndex], cloned[i]];
    }
    return cloned;
}

function imageDataUrl(emoji, label, showLabel = true) {
    const labelMarkup = showLabel
        ? `<text x="130" y="161" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#21434f">${label}</text>`
        : "";

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="260" height="190" viewBox="0 0 260 190">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f7fbff"/>
                    <stop offset="100%" stop-color="#d8eff8"/>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="260" height="190" rx="18" fill="url(#bg)"/>
            <text x="130" y="95" text-anchor="middle" dominant-baseline="middle" font-size="74">${emoji}</text>
            ${labelMarkup}
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function withArticle(word) {
    if (/^[aeiou]/i.test(word)) {
        return `an ${word.toLowerCase()}`;
    }
    return `a ${word.toLowerCase()}`;
}

function buildWordDefinition(item) {
    const lower = item.word.toLowerCase();

    if (item.type === "animal") {
        return `A ${lower} is an animal.`;
    }

    if (item.type === "food") {
        if (item.word === "Water" || item.word === "Milk") {
            return `${item.word} is something we drink.`;
        }
        return `${item.word} is something we can eat.`;
    }

    if (item.type === "vehicle") {
        return `A ${lower} can move people or things.`;
    }

    if (item.type === "nature") {
        return `${item.word} is part of nature.`;
    }

    if (item.type === "place") {
        return `A ${lower} is a place you can visit.`;
    }

    if (item.type === "home") {
        return `A ${lower} is something we use at home.`;
    }

    if (item.type === "clothes") {
        return `A ${lower} is something you wear.`;
    }

    if (item.type === "body") {
        return `Your ${lower} is part of your body.`;
    }

    if (item.type === "music") {
        return `A ${lower} is a musical instrument.`;
    }

    return `${item.word} is a useful word to know.`;
}

function buildWordExample(item) {
    const lower = item.word.toLowerCase();

    if (item.type === "animal") {
        return `Example: "I can see ${withArticle(item.word)}."`;
    }

    if (item.type === "food") {
        if (item.word === "Water" || item.word === "Milk") {
            return `Example: "I can drink ${lower}."`;
        }
        return `Example: "I like to eat ${lower}."`;
    }

    if (item.type === "vehicle") {
        return `Example: "The ${lower} goes down the road."`;
    }

    if (item.type === "nature") {
        return `Example: "I can see ${lower} outside."`;
    }

    if (item.type === "place") {
        return `Example: "We visited the ${lower} today."`;
    }

    if (item.type === "home") {
        return `Example: "Please put the ${lower} away."`;
    }

    if (item.type === "clothes") {
        return `Example: "I put on my ${lower}."`;
    }

    if (item.type === "body") {
        return `Example: "I use my ${lower} every day."`;
    }

    if (item.type === "music") {
        return `Example: "I can play the ${lower}."`;
    }

    return `Example: "I learned the word ${lower}."`;
}

function launchFireworks(intensity = 1) {
    const colors = ["#ff6a3d", "#ffb302", "#2fa84f", "#1282a2", "#ff3f80"];
    const bursts = 36 * intensity;
    const waves = Math.max(1, intensity);

    for (let wave = 0; wave < waves; wave += 1) {
        const waveDelay = wave * 160;

        for (let i = 0; i < bursts / waves; i += 1) {
            const spark = document.createElement("span");
            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 220;

            spark.className = "spark";
            spark.style.left = `${20 + Math.random() * 60}%`;
            spark.style.top = `${24 + Math.random() * 38}%`;
            spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
            spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

            setTimeout(() => {
                fireworksEl.appendChild(spark);
                setTimeout(() => spark.remove(), 1000);
            }, waveDelay);
        }
    }
}

function getNextWordFromDeck() {
    if (wordDeck.length === 0) {
        wordDeck = shuffle([...words]);
    }

    return wordDeck.pop();
}

function setWordFeedback(message = "", type = "") {
    feedbackEl.textContent = message;
    feedbackEl.className = "feedback";
    if (type) {
        feedbackEl.classList.add(type);
    }
}

function clearWordChoiceStyles() {
    const buttons = choicesEl.querySelectorAll(".choice-btn");
    buttons.forEach((btn) => btn.classList.remove("correct", "incorrect"));
}

function updateWordScore() {
    wordScoreEl.textContent = `⭐ Points: ${wordScore}`;
    wordHighScoreEl.textContent = `🏆 Best: ${wordHighScore}`;
}

function awardWordPoints(points) {
    wordScore += points;
    if (wordScore > wordHighScore) {
        wordHighScore = wordScore;
        window.localStorage.setItem("word-game-high-score", String(wordHighScore));
    }
    updateWordScore();
}

function updateFoodScore() {
    foodScoreEl.textContent = `Points: ${foodScore}`;
    foodHighScoreEl.textContent = `🏆 Best: ${foodHighScore}`;
}

function awardFoodPoints(points) {
    foodScore += points;
    if (foodScore > foodHighScore) {
        foodHighScore = foodScore;
        window.localStorage.setItem("food-game-high-score", String(foodHighScore));
    }
    updateFoodScore();
}

function updateHungryScore() {
    hungryScoreEl.textContent = `Points: ${hungryScore}`;
    hungryHighScoreEl.textContent = `🏆 Best: ${hungryHighScore}`;
}

function awardHungryPoints(points) {
    hungryScore += points;
    if (hungryScore > hungryHighScore) {
        hungryHighScore = hungryScore;
        window.localStorage.setItem("hungry-game-high-score", String(hungryHighScore));
    }
    updateHungryScore();
}

function getWordOptions(correctWord) {
    const sameType = shuffle(words.filter((item) => item.word !== correctWord.word && item.type === correctWord.type));
    const fallback = shuffle(words.filter((item) => item.word !== correctWord.word && item.type !== correctWord.type));
    const distractors = [...sameType, ...fallback].slice(0, 2);

    return shuffle([
        { label: correctWord.word, emoji: correctWord.emoji, isCorrect: true },
        ...distractors.map((item) => ({ label: item.word, emoji: item.emoji, isCorrect: false }))
    ]);
}

function renderNextWordRound() {
    currentWord = getNextWordFromDeck();
    const options = getWordOptions(currentWord);

    isWordRoundComplete = false;
    setWordFeedback();
    tryAgainBtn.hidden = true;

    wordEl.textContent = currentWord.word;
    definitionEl.textContent = currentWord.definition;
    exampleEl.textContent = currentWord.example;

    choicesEl.innerHTML = "";

    options.forEach((option) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-btn";
        btn.setAttribute("aria-label", option.label);
        btn.innerHTML = `<img src="${imageDataUrl(option.emoji, option.label, false)}" alt="${option.label}" />`;

        btn.addEventListener("click", () => {
            if (isWordRoundComplete) {
                return;
            }

            clearWordChoiceStyles();

            if (option.isCorrect) {
                btn.classList.add("correct");
                isWordRoundComplete = true;
                setWordFeedback("Great job! You found the right picture! +10 points", "success");
                tryAgainBtn.hidden = true;
                awardWordPoints(10);
                launchFireworks(2);
                return;
            }

            btn.classList.add("incorrect");
            setWordFeedback("Not quite. Try again!", "error");
            tryAgainBtn.hidden = false;
        });

        choicesEl.appendChild(btn);
    });
}

function setFoodFeedback(message = "", type = "") {
    foodFeedbackEl.textContent = message;
    foodFeedbackEl.className = "feedback";
    if (type) {
        foodFeedbackEl.classList.add(type);
    }
}

function getFoodOrganismPool() {
    const map = new Map();

    foodChains.forEach((chainSet) => {
        chainSet.chain.forEach((organism) => {
            map.set(organism.label, organism);
        });
    });

    return [...map.values()];
}

const foodOrganismPool = getFoodOrganismPool();

function getFoodOptions(correctOrganism) {
    const distractors = shuffle(
        foodOrganismPool.filter((organism) => organism.label !== correctOrganism.label)
    ).slice(0, 2);

    return shuffle([correctOrganism, ...distractors]).map((item, index) => ({
        id: `${item.label}-${index}`,
        ...item
    }));
}

function renderChainNode(organism) {
    const node = document.createElement("div");
    node.className = "chain-node";
    node.innerHTML = `
        <span class="badge" aria-hidden="true">${organism.emoji}</span>
        <span class="label">${organism.label}</span>
    `;
    return node;
}

function clearFoodOptionSelection() {
    const options = foodOptionsEl.querySelectorAll(".food-option");
    options.forEach((option) => option.classList.remove("active"));
}

function fillDropZoneWithOrganism(dropZone, organism) {
    dropZone.innerHTML = `
        <span class="badge" aria-hidden="true">${organism.emoji}</span>
        <span class="label">${organism.label}</span>
    `;
    dropZone.classList.add("filled");
}

function handleFoodChoice(optionId) {
    if (foodRoundComplete) {
        return;
    }

    const optionEl = foodOptionsEl.querySelector(`[data-option-id="${optionId}"]`);
    if (!optionEl || optionEl.classList.contains("used")) {
        return;
    }

    const chainData = foodChains[currentFoodIndex];
    const correctOrganism = chainData.chain[currentMissingIndex];
    const chosenLabel = optionEl.getAttribute("data-label");
    const dropZone = foodChainColumnEl.querySelector(".drop-zone");

    if (chosenLabel === correctOrganism.label) {
        fillDropZoneWithOrganism(dropZone, correctOrganism);
        optionEl.classList.add("used");
        foodRoundComplete = true;
        setFoodFeedback("Great job! You completed the food chain! +10 points", "success");
        awardFoodPoints(10);
        launchFireworks();
        return;
    }

    setFoodFeedback("Not quite. Try another one.", "error");
}

function renderFoodRound(index) {
    const chainData = foodChains[index];
    const chain = chainData.chain;
    const missingRangeStart = chain.length > 2 ? 1 : 0;

    currentMissingIndex =
        missingRangeStart + Math.floor(Math.random() * (chain.length - missingRangeStart));

    const correctOrganism = chain[currentMissingIndex];
    const options = getFoodOptions(correctOrganism);

    foodRoundComplete = false;
    selectedFoodOptionId = "";
    setFoodFeedback();

    foodEnvironmentEl.textContent = `Environment: ${chainData.environment}`;

    foodChainColumnEl.innerHTML = "";

    chain.forEach((organism, indexInChain) => {
        if (indexInChain !== currentMissingIndex) {
            foodChainColumnEl.appendChild(renderChainNode(organism));
            return;
        }

        const dropZone = document.createElement("div");
        dropZone.className = "chain-node drop-zone";
        dropZone.textContent = "Drop here";

        dropZone.addEventListener("dragover", (event) => {
            event.preventDefault();
            dropZone.classList.add("active");
        });

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("active");
        });

        dropZone.addEventListener("drop", (event) => {
            event.preventDefault();
            dropZone.classList.remove("active");
            const optionId = event.dataTransfer.getData("text/plain");
            handleFoodChoice(optionId);
        });

        dropZone.addEventListener("click", () => {
            if (!selectedFoodOptionId) {
                return;
            }
            handleFoodChoice(selectedFoodOptionId);
            clearFoodOptionSelection();
            selectedFoodOptionId = "";
        });

        foodChainColumnEl.appendChild(dropZone);
    });

    foodOptionsEl.innerHTML = "";

    options.forEach((option) => {
        const optionBtn = document.createElement("button");
        optionBtn.type = "button";
        optionBtn.className = "food-option";
        optionBtn.draggable = true;
        optionBtn.setAttribute("data-option-id", option.id);
        optionBtn.setAttribute("data-label", option.label);
        optionBtn.setAttribute("aria-label", option.label);
        optionBtn.innerHTML = `<img src="${imageDataUrl(option.emoji, option.label)}" alt="${option.label}" />`;

        optionBtn.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", option.id);
        });

        optionBtn.addEventListener("click", () => {
            if (foodRoundComplete || optionBtn.classList.contains("used")) {
                return;
            }

            clearFoodOptionSelection();
            optionBtn.classList.add("active");
            selectedFoodOptionId = option.id;
            setFoodFeedback("Now tap the missing circle to place it.");
        });

        foodOptionsEl.appendChild(optionBtn);
    });
}

function getNextHungryAnimalFromDeck() {
    if (hungryDeck.length === 0) {
        hungryDeck = shuffle([...hungryAnimals]);
    }

    return hungryDeck.pop();
}

function setHungryFeedback(message = "", type = "") {
    hungryFeedbackEl.textContent = message;
    hungryFeedbackEl.className = "feedback";
    if (type) {
        hungryFeedbackEl.classList.add(type);
    }
}

function getHungryOptions(correctLabel, dietLabels) {
    const correctFood = hungryFoodMap.get(correctLabel);

    const distractors = shuffle(
        hungryFoodPool.filter((item) => item.label !== correctLabel && !dietLabels.includes(item.label))
    ).slice(0, 2);

    return shuffle([
        { ...correctFood, isCorrect: true },
        ...distractors.map((item) => ({ ...item, isCorrect: false }))
    ]);
}

function renderNextHungryRound() {
    currentHungryAnimal = getNextHungryAnimalFromDeck();
    currentHungryCorrectLabel =
        currentHungryAnimal.diet[Math.floor(Math.random() * currentHungryAnimal.diet.length)];

    const options = getHungryOptions(currentHungryCorrectLabel, currentHungryAnimal.diet);

    hungryRoundComplete = false;
    setHungryFeedback();

    hungryTargetEl.innerHTML = `
        <div class="target-card">
            <div class="target-emoji" aria-hidden="true">${currentHungryAnimal.emoji}</div>
            <p class="target-name">${currentHungryAnimal.animal}</p>
        </div>
    `;

    hungryOptionsEl.innerHTML = "";

    options.forEach((option) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-btn";
        btn.setAttribute("aria-label", option.label);
        btn.innerHTML = `<img src="${imageDataUrl(option.emoji, option.label)}" alt="${option.label}" />`;

        btn.addEventListener("click", () => {
            if (hungryRoundComplete) {
                return;
            }

            const allOptions = hungryOptionsEl.querySelectorAll(".choice-btn");
            allOptions.forEach((optionBtn) => optionBtn.classList.remove("correct", "incorrect"));

            if (option.isCorrect) {
                hungryRoundComplete = true;
                btn.classList.add("correct");
                setHungryFeedback("Yum! Great answer! +10 points", "success");
                awardHungryPoints(10);
                launchFireworks();
                return;
            }

            btn.classList.add("incorrect");
            setHungryFeedback("Try another food.", "error");
        });

        hungryOptionsEl.appendChild(btn);
    });
}

function moveToNextChain() {
    currentFoodIndex = (currentFoodIndex + 1) % foodChains.length;
    renderFoodRound(currentFoodIndex);
}

function initNavigation() {
    document.getElementById("open-word-game").addEventListener("click", () => {
        wordScore = 0;
        updateWordScore();
        showScreen("word");
        renderNextWordRound();
    });

    document.getElementById("open-food-game").addEventListener("click", () => {
        foodScore = 0;
        updateFoodScore();
        showScreen("food");
        renderFoodRound(currentFoodIndex);
    });

    document.getElementById("open-hungry-game").addEventListener("click", () => {
        hungryScore = 0;
        updateHungryScore();
        showScreen("hungry");
        renderNextHungryRound();
    });

    document.querySelectorAll("[data-back]").forEach((btn) => {
        btn.addEventListener("click", () => showScreen("home"));
    });
}

function initWordGame() {
    updateWordScore();

    moreBtn.addEventListener("click", renderNextWordRound);

    tryAgainBtn.addEventListener("click", () => {
        setWordFeedback("Pick another picture.", "error");
        clearWordChoiceStyles();
        tryAgainBtn.hidden = true;
    });
}

function initFoodGame() {
    updateFoodScore();
    currentFoodIndex = Math.floor(Math.random() * foodChains.length);
    nextChainBtn.addEventListener("click", moveToNextChain);
}

function initHungryGame() {
    updateHungryScore();
    nextHungryBtn.addEventListener("click", renderNextHungryRound);
}

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initWordGame();
    initFoodGame();
    initHungryGame();
    showScreen("home");
});
