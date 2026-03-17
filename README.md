[README.md](https://github.com/user-attachments/files/26044039/README.md)
# Geo Crew Planning Hub

A simple, lightweight web interface for managing:

- Meetings  
- Seminars  

Built as a static site using plain HTML, CSS, and JavaScript. No backend required.

Data need to be exported -> saved locally (in JASON format) for privacy.

---

## Project Structure

/ (root)
|__ index.html              # Front page (navigation hub)
|__ weekly-catchup.html     # Weekly meeting notes
|__ seminars.html           # Bi-weekly seminar planner

---

## Usage

### Run Locally
Open index.html in your browser.

(Optional server)
python -m http.server 8000

Then open:
http://localhost:8000

---

### GitHub Pages
Settings -> Pages -> Deploy from main branch

---

## Features

Weekly Catch-up:
- Date, notes, attendees
- JSON import/export

Seminars:
- Date, presenter, topic, status, slides, notes
- JSON import/export

---

## Data Handling

Data is stored in:
- Browser localStorage
- JSON export files

---

## Workflow

1. Update entries
2. Export JSON
3. Save backup

---

## Privacy

No personal data displayed publicly.

---

## Limitations

- Not synced between users
- Data need to be exported and saved locally - good for privacy but add a few more steps to import in subsequent meetings.

---

