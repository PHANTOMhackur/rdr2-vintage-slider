# 🤠 Red Dead Redemption II — Vintage Character Slider

<p align="center">
  <img src="https://img.shields.io/badge/Project-RDR2%20Vintage%20Slider-8B4513?style=for-the-badge" alt="Project">
  <img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  A cinematic vintage-style character slider inspired by the legendary world of Red Dead Redemption II.
</p>

---

## 🌵 About The Project

The **RDR2 Vintage Character Slider** is a western-themed JavaScript slider inspired by the atmosphere, characters and visual storytelling of Red Dead Redemption II.

Designed with an antique western aesthetic, it combines sepia tones, vintage typography, distressed textures and smooth transitions to recreate the feeling of the American Wild West in 1899.

The project is built using HTML, CSS and Vanilla JavaScript.

## ✨ Features

- 🤠 Red Dead Redemption II inspired design.
- 🎨 Vintage western and antique-paper aesthetic.
- 🟤 Sepia colour palette and distressed grain effects.
- 🔥 Cinematic image transitions.
- ⏮️ Previous and Next navigation buttons.
- ⏯️ Automatic slideshow.
- ⏱️ Six-second autoplay interval.
- 📊 Animated progress indicator.
- 🖥️ Responsive layout.
- 🖱️ Pause autoplay on hover and keyboard focus.
- 📱 Mobile-friendly design.
- 🎭 Six iconic Red Dead Redemption II characters.

## 🎮 Featured Characters

| Character | Description |
|---|---|
| Arthur Morgan | The loyal outlaw with a troubled conscience. |
| Dutch van der Linde | The charismatic leader of the gang. |
| John Marston | An outlaw searching for a second chance. |
| Sadie Adler | A fearless gunslinger. |
| Hosea Matthews | The experienced con man and storyteller. |
| Charles Smith | A quiet and dependable member of the gang. |

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome
- Google Fonts

## 📂 Project Structure

```text
Red_Dead_Redemption_2_Vintage_Slider/
│
├── slider.html
│
├── css/
│   ├── all.min.css
│   └── slider.css
│
├── js/
│   └── slider.js
│
├── webfonts/
│   ├── fa-brands-400.woff2
│   ├── fa-regular-400.woff2
│   ├── fa-solid-900.woff2
│   └── fa-v4compatibility.woff2
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PHANTOMhackur/rdr2-vintage-slider.git
```

### 2. Open the Project

```bash
cd rdr2-vintage-slider
```

### 3. Run the Project

Open `slider.html` in your browser.

You can also use the Live Server extension in Visual Studio Code.

No additional installation or build tools are required.

## 🖼️ Add Your Own Images

You can customize the slider with your favourite RDR2 character wallpapers.

### Step 1

Create a folder named:

```text
assets
```

### Step 2

Add your character images:

```text
assets/
├── arthur.jpg
├── dutch.jpg
├── john.jpg
├── sadie.jpg
├── hosea.jpg
└── charles.jpg
```

### Step 3

Open:

```text
js/slider.js
```

Replace the existing image references with your local images.

Example:

```javascript
const updates = [
  {
    image: "./assets/arthur.jpg",
    kicker: "THE RIGHT-HAND MAN",
    title: "ARTHUR MORGAN",
    description: "A loyal enforcer with a troubled conscience."
  },
  {
    image: "./assets/dutch.jpg",
    kicker: "THE MAN WITH A PLAN",
    title: "DUTCH VAN DER LINDE",
    description: "A charismatic leader chasing freedom."
  }
];
```

Repeat for the remaining characters.

**Recommended image resolution:** 1920 × 1080 pixels (16:9).

## 🌐 Live Demo

Coming soon!

## 📸 Screenshots

Screenshots of the project will be added here.

## 📦 Deployment

This project can be hosted for free using GitHub Pages.

1. Open your GitHub repository.
2. Go to Settings.
3. Select Pages.
4. Choose Deploy from a branch.
5. Select the `main` branch.
6. Select the root folder.
7. Click Save.

**Important:** Rename `slider.html` to `index.html` before deployment if you want your website to open directly at the main GitHub Pages URL.

## 🎨 Customization

You can customize:

- Character images.
- Character names and descriptions.
- Vintage colour palette.
- Typography.
- Transition animations.
- Autoplay timing.
- Background textures.

## ❤️ Credits

Inspired by **Red Dead Redemption II**, developed and published by Rockstar Games.

This is an unofficial fan-made frontend project created for educational and creative purposes.

All game names, characters, artwork and related trademarks belong to their respective owners.

---

<p align="center">
  <b>OUTLAWS FOR LIFE 🤠</b>
  <br>
  Made with ❤️ and a little bit of the Wild West.
</p>