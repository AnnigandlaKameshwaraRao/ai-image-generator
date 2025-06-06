# AI Image Generator - Backend

This is the backend server for the AI Image Generator project. It uses the Google Gemini AI API to generate images from text prompts and serves them to the frontend.

## Features

- Accepts prompts from the frontend
- Uses Gemini AI API for image generation
- Sends back base64-encoded image
- CORS enabled for cross-origin access

## Tech Stack

- Node.js
- Express.js
- Google Generative AI API (`@google/genai`)
- CORS

## Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/AnnigandlaKameshwaraRao/ai-image-generator-backend.git
   cd ai-image-generator-backend
   ``` 
2. **Install dependencies**
    ```bash
    npm install
     ```

3. **Create .env**
    ```bash
    GOOGLE_API_KEY=replace_with_your_gemini_api_key
    ```

4. **Start the server**
    ```bash
    node srever.js
    ```
