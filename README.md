# Aylien NLP Processing Tool

## Overview

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites using the Aylien API. The tool is built using Node.js and Express on the backend and Webpack for managing the build process. It also includes service workers for offline capabilities.

## Features

- Analyze content from URLs for sentiment, classification, and more using the Aylien API.
- Fully responsive UI.
- Offline capabilities with service workers.
- Environment-specific builds using Webpack.

## Tech Stack

- **Frontend:** JavaScript, HTML, CSS
- **Backend:** Node.js, Express
- **Build Tool:** Webpack
- **API:** Aylien API for Natural Language Processing

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Aylien API credentials (API ID and API Key)

## Folder Structure

|-- src
| |-- client
| | |-- js
| | |-- styles
| | |-- views
| | `-- index.js
|   |
|   |-- server
|       |-- index.js
|       `-- apiHandler.js
|
|-- .babelrc
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
|-- webpack.dev.js
`-- webpack.prod.js
