# 🌪️ Show Me Resistance

**A civic engagement and political education platform for Missouri.**

Show Me Resistance exists to expose harmful legislation and political hypocrisy in Missouri and empower citizens—especially those outside liberal strongholds—to take informed, meaningful action.

> Clarity. Defiance. Truth. Action.

---

## 🧭 Project Vision

Missourians deserve clear, accessible information about their state's laws and lawmakers. Our goal is to:

- Educate the public in plain language
- Track and expose elected officials' voting records
- Follow the money behind Missouri's legislation
- Offer tools for direct action
- Amplify rural and progressive voices

---

## 🌐 Website Features (In Progress)

- **Bill Breakdown Archive**: Weekly posts summarizing active legislation
- **Vote Tracker**: Visual dashboard of how lawmakers voted
- **Action Center**: Contact scripts, testimony guides, and organizing resources
- **What They’re Selling**: Follow-the-money infographics and donor data
- **Narratives from Missouri**: Rural stories, rebuttals, and progressive voices
- **Email Subscription & Shareables**: Sign-up, tweet threads, quote cards, and more

---

## 🛠 Tech Stack

| Layer       | Tool                        |
|-------------|-----------------------------|
| Framework   | [Astro](https://astro.build) (static site generator) |
| Language    | Markdown / Astro Components |
| Deployment  | GitHub + Vercel |

---

## 📁 Project Structure

```plaintext
show-me-resistance/
├── public/              → Static assets (logos, graphics, PDFs)
├── src/
│   ├── pages/           → index.astro, about.astro, bill-breakdowns/
│   ├── layouts/         → BaseLayout.astro, PostLayout.astro
│   ├── components/      → VoteTracker.astro, ActionCard.astro, etc.
│   ├── content/         → Markdown blog content
├── astro.config.mjs
├── package.json
