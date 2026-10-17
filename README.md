# excuse-generator

Random excuse generator : click a button, get a funny excuse

[Demo](https://excuse-generator-mrmlrs.vercel.app)

Full-stack TypeScript

## Stack

| Front | Back | Database |
|-------|------|----------|
| Vite  | Node.js + Express | PostgreSQL |

## Features

- Generate a random excuse with a single click
- Some excuses come with a matching image and sound effect
- Two-state UI : clean home screen → full screen reveal

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [PostgreSQL](https://www.postgresql.org) v14+

### Installation

1. Clone the repo
```bash
git clone https://github.com/mrmlrs/excuse-generator.git
```

2. Install dependencies
```bash
cd back && npm install
cd ../front && npm install
```

3. Environment variables
```bash
cp back/.env.example back/.env
cp front/.env.example front/.env
```
> Fill the values in `back/.env` with your PostgreSQL credentials and in `front/.env` with your API URL

4. Run the project

Start the backend (in a terminal):
```bash
cd back && npm run dev
```

Start the frontend (in another terminal):
```bash
cd front && npm run dev
```

## Project Structure

```
excuse-generator/
├── back/                       # Express API
│   ├── src/
│   │   ├── db/
│   │   │   ├── migrations/     # SQL migration files
│   │   │   └── client.ts       # PostgreSQL connection
│   │   └── index.ts            # Server entry point
│   ├── .env.example
│   └── tsconfig.json
├── front/                      # Vite front-end
│   ├── public/                 # Static assets (images, sounds)
│   ├── src/
│   │   ├── main.ts             # App entry point
│   │   └── style.css
│   ├── index.html
│   └── .env.example
└── README.md
```

## API

### `GET /excuse`

Returns a random excuse.

**Response**
```json
{
  "excuse": "I missed the bus",
  "image": "/images/meme1.jpg",
  "sound": "/sounds/sound1.mp3"
}
```

> `image` and `sound` may be `null` if no media is associated with the excuse.

## Roadmap

- Add more excuses with images & sounds
- Admin interface to add/edit excuses
- Responsive design for mobile
