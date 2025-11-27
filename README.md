# Frontend Developer Intern - Assignment

A pixel-perfect quiz application built to match the exact Figma design specifications with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **UI Components**: Radix UI (via shadcn/ui)

## ✨ Key Features

### Design & UX
- **Pixel-Perfect Implementation**: Exact match to Figma design specifications
- **Light Blue Gradient Background**: Beautiful cyan-to-teal gradient (#B3E5F5 to #80DEEA)
- **White Quiz Cards**: Rounded corners with shadow and optional blue border
- **Smooth Animations**: Question transitions and result reveals using Framer Motion
- **Progress Indicators**: Visual progress bar showing quiz completion

### Interactive Elements
- **4 Quiz Questions**: Multiple choice questions with selectable answers
- **Navigation**: Previous/Next arrows for question navigation
- **Results Screen**: Displays final score as percentage
- **Restart Functionality**: "Start Again" button to retake quiz
- **Cat Paw Illustration**: Decorative element with "Best of luck!" message

### Technical Excellence
- **Accessibility (WCAG 2.1)**:
  - Semantic HTML5 elements
  - Proper ARIA labels and roles
  - Keyboard navigation support
  - Focus indicators on interactive elements
  
- **Performance Optimizations**:
  - Smooth animations with Framer Motion
  - Efficient state management with React hooks
  - Optimized re-renders
  
- **Code Quality**:
  - TypeScript for type safety
  - Clean, modular component architecture
  - Reusable design system tokens
  - ESLint for code linting

## 🎨 Design System

**Color Palette**:
- Background: Linear gradient from #B3E5F5 to #80DEEA
- Card Background: White (#FFFFFF)
- Primary/Border: Cyan (#00BCD4)
- Text: Dark gray for questions and answers
- Progress Bar: Dark gray (active) and light gray (inactive)

**Typography**:
- Display Font: Playfair Display (italic for title)
- Body Font: Inter (questions and answers)
- Title color: Teal/cyan blue

**Layout**:
- Max width: 896px (3xl)
- Border radius: 2rem for cards
- Padding: Generous spacing inside cards
- Shadow: Subtle shadow for depth

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn)
│   ├── Quiz.tsx         # Main quiz component with logic
│   ├── QuizCard.tsx     # Card wrapper component
│   ├── ProgressBar.tsx  # Progress indicator
│   └── CatPaw.tsx       # Decorative illustration
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx             # App wrapper with routing
├── index.css           # Global styles & design system
└── main.tsx            # App entry point
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy with one click

Build configuration:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Deploy to Netlify

1. Connect your Git repository
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy

## 📋 Assignment Requirements Checklist

- ✅ **Design Accuracy**: Pixel-perfect match to Figma design
- ✅ **Tech Stack**: React with TypeScript, Tailwind CSS, Framer Motion
- ✅ **Interactivity**: Smooth transitions, hover states, navigation
- ✅ **Accessibility**: WCAG 2.1 compliant with semantic HTML
- ✅ **Code Quality**: Clean structure, TypeScript strict mode, ESLint
- ✅ **Performance**: Optimized animations and rendering
- ✅ **Repository**: Clean folder structure with proper .gitignore
- ✅ **Documentation**: Comprehensive README
- ✅ **Deployment**: Production-ready and Vercel-compatible

## 📝 Implementation Notes

### Design Decisions
- Exact color matching from Figma screenshots
- Playfair Display italic for the title "Test Your Knowledge"
- Inter font for body text and answers
- Light blue gradient background matching the design
- White cards with rounded corners and shadow
- Blue border appears on questions 3 and 4
- Progress bar with 4 segments
- Cat paw illustration with "Best of luck!" speech bubble
- Navigation arrows for moving between questions
- Submit button on final question
- Results screen showing score percentage
- "Start Again" button to restart quiz

### Assumptions Made
- Target desktop screen width: 1440px
- Modern browser support (ES6+, CSS Grid, Flexbox)
- Light theme only (as shown in Figma)
- 4 quiz questions total
- Score calculated as percentage of correct answers
- Questions can be navigated back and forth

### Time Spent
- **Design Analysis**: [TO BE FILLED]
- **Component Development**: [TO BE FILLED]
- **Styling & Animations**: [TO BE FILLED]
- **Testing & Refinement**: [TO BE FILLED]
- **Documentation**: [TO BE FILLED]
- **Total**: [TO BE FILLED]

## 🎯 Features Implemented

1. **Quiz Flow**:
   - 4 multiple-choice questions
   - Single answer selection per question
   - Previous/Next navigation
   - Submit button on final question

2. **Visual Design**:
   - Light blue gradient background
   - White rounded cards with shadow
   - Blue border on questions 3-4
   - Progress bar indicator
   - Cat paw illustration (question 1 only)

3. **Results Screen**:
   - Display final score as percentage
   - Animated score reveal
   - "Start Again" button
   - "Keep Learning!" encouragement message

## 📄 License

This project was created as part of a Frontend Developer Intern assignment.

## 📞 Contact

For questions regarding this assignment:
- Email: [YOUR_EMAIL]
- GitHub: [YOUR_GITHUB]
- LinkedIn: [YOUR_LINKEDIN]

---

Built with React, TypeScript, Tailwind CSS, and Framer Motion
