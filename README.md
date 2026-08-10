# 🚀 Dynamic Portfolio & CV Template

So I'm writing this README as a last step on the development of this side project of mine that started as just a _"I'm a web developer, I need to create a portfolio or something of my own, showcase what I can do"_ and such.

It has been postponed for quite some time, but here it is! The idea was to expand it in a way it could be reused. Follow along in this file to understand the concept and how it came to be. Later on, I'll post a video/tutorial on how to set it up on YouTube and attach the link here as well (as I don't like to read, and most people are like me!).

---

## 💡 About The Project

Basically, this is a portfolio website that you can fork on GitHub and make your own—managing all your personal info securely through **Repository Secrets** (environment variables containing your personal details, basic info, etc.).

### Key Highlights:

- **CI/CD Magic:** Implemented with Continuous Integration via GitHub Actions. Every Pull Request automatically triggers an action that builds and deploys the app—pretty neat stuff!
- **Tech Stack Note:** Sorry for using React Router! It wasn't strictly necessary for a portfolio, but I was exploring the tool since I had never used it professionally before. No major complaints on my end, at least not for a regular client-side SPA.

---

## 📹 Video Tutorial

> 📌 _A video/tutorial on how to set this up will be posted on YouTube and linked here soon!_

---

## 📋 Complete Setup Steps

Sorry for too much info earlier, here are the steps:

1. **Fork and Rename the Repository:**
   - Fork the repo first: [https://github.com/michelbaratella/michelbaratella.github.io](https://github.com/michelbaratella/michelbaratella.github.io)
   - _(Don't have a GitHub account yet? Create one—it's easy and free!)_
   - Rename the repo following the pattern: `<your_github_username>.github.io`
   - This helps GitHub understand you want to use it as a GitHub Pages app. Learn more on the [GitHub Pages Documentation](https://docs.github.com/pt/pages).

2. **Configure Repository Secrets:**
   - After cloning/forking, go to **Settings** > **Secrets and variables** > **Actions** on your repo.
   - Click the **"New repository secret"** button and create each secret using these **exact** names (_don't use different names!!!_):
     - `VITE_NAME`
     - `VITE_EMAIL`
     - `VITE_GITHUB`
     - `VITE_LINKEDIN`
     - `VITE_PHONE`
     - `VITE_WHATSAPP`
   - Example text area values:
     ```text
     VITE_NAME="Michel Baratella"
     VITE_PHONE=5519992310077
     VITE_WHATSAPP="Olá, tudo bem? Gostaria de conversar com você."
     VITE_EMAIL="baratella@yahoo.com"
     VITE_LINKEDIN="[https://www.linkedin.com/in/michelbaratella/](https://www.linkedin.com/in/michelbaratella/)"
     VITE_GITHUB="[https://github.com/michelbaratella/](https://github.com/michelbaratella/)"
     ```

3. **Prepare Your CV Markdown Files:**
   - That's it? No, but we're almost there! Now's the tricky part: this app was made using my CV in Markdown format, which is the same format as this file you're reading, so it has some special styling applied to it.
   - Here's what I did to create the Markdown file of my CV:
     1. Update your LinkedIn profile.
     2. Download a PDF copy of it for your profile page (there's a 3 dots options).
     3. Use whatever AI tool you prefer (I used [Gemini](https://gemini.google.com/app)).
     4. Add a prompt like: _"Transform this CV PDF to markdown format"_ and attach the PDF.
     5. Copy the Markdown generated, and preview how it turned out using [Dillinger.io](https://dillinger.io/).
     6. Make sure it follows the same format as my example Markdown file: `LINK TO MARKDOWN TEMPLATE FILE HERE`.
   - Now don't forget to generate a copy of the Markdown content in **PT-BR** as well! The app supports English and Portuguese (BR).
   - Just update the content of the `app/assets/curriculum.md` and `app/assets/curriculum-br.md` files with your Markdown info, and boom, you're all set.

4. **Deploy Your Site:**
   - Now you can create a Pull Request to merge your updates on the repo, OR you can just trigger the action under `/actions/workflows/static.yml` if you've already updated the `main` branch directly.
   - This will trigger the deployment and set up the Pages app online, that's it!

---

Hope it helps in any way, shape, or form. **Peace!** ✌️
