SyncDocs

SyncDocs is a powerful, real-time collaborative document editing application inspired by Google Docs. With cutting-edge technology and a sleek, modern design, SyncDocs allows users to create, edit, and collaborate seamlessly.

🌟 Features

🔒 Authentication: Secure and user-friendly authentication powered by Clerk.

🌐 Real-Time Collaboration: Collaborate in real-time using Liveblocks for a smooth user experience.

🗄️ Backend: Scalable and efficient backend powered by Convex.

🎨 Modern Frontend: Built with Next.js 15 and styled using Tailwind CSS for a responsive and intuitive interface.

📄 Document Management: Create, edit, and save documents effortlessly.

🚀 Tech Stack

Frontend:

Next.js 15

Tailwind CSS

Backend:

Convex

Authentication:

Clerk

Real-Time Collaboration:

Liveblocks

🛠️ Installation

Follow these steps to run SyncDocs locally:

Clone the repository:

git clone https://github.com/your-username/syncdocs.git
cd syncdocs

Install dependencies:

npm install --legacy-peer-deps

Set up environment variables:
Create a .env.local file in the root directory and add the following:

# Deployment used by `npx convex dev`

CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
LIVEBLOCK_SECRET_KEY=
Run the development server:

npm run dev

Open http://localhost:3000 in your browser to see the application in action.

📂 Project Structure

app/ - Main application folder for Next.js 15 with the following structure:

(home)/ - Contains components for the home page such as documents-table.tsx, navbar.tsx, page.tsx, search-input.tsx, and templates-gallery.tsx.

api/ - Contains backend-related files powered by Convex.

documents/ - Contains the [documentId]/ folder with all the components of the editor, including:

actions.ts

avatars.tsx

document-input.tsx

document.tsx

editor.tsx

inbox.tsx

loading.tsx

navbar.tsx

page.tsx

room.tsx

ruler.tsx

threads.tsx

toolbar.tsx

fonts/ - Manages custom fonts for the application.

error.tsx - Error page.

favicon.ico - App favicon.

globals.css - Global styles.

layout.tsx - Application layout.

components/ - Reusable React components, including:

ui/ - UI components like fullscreen-loader.tsx, remove-dialog.tsx, and rename-dialog.tsx.

convex-client-provider.tsx - Provides Convex client integration.

constants/ - Holds application constants.

extensions/ - Additional functionalities or extensions.

hooks/ - Custom React hooks.

lib/ - Utility libraries.

store/ - State management logic.


🌐 Live Demo

Check out the live version here: https://syncdocs.vercel.app


