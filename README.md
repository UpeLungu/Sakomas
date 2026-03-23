# Sakomas Logistics Limited React Website

## What is included
A clean React + Vite website package for Sakomas Logistics Limited.

## Correct repo structure
Upload these files directly to the root of your GitHub repository:

- index.html
- package.json
- vite.config.js
- README.md
- src/App.jsx
- src/main.jsx
- src/index.css

## Deployment
This project is ready for Vercel.

1. Create a new GitHub repo
2. Upload the contents of this package to the repo root
3. Import the repo into Vercel
4. Deploy

## Notes
- `main.jsx` explicitly imports `./App.jsx`
- `index.html` uses `./src/main.jsx`
- This package avoids the earlier path ambiguity
