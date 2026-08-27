# Website Style Guide

## 1. Project Design

**Design Style:** Clean, Modern, Simple, Professional

**Main Goal:**

* Website easy to understand ho
* Design consistent ho
* Mobile, tablet aur desktop par responsive ho
* Colors aur spacing consistent rahe
* UI simple aur professional lage

---

## 2. Color Palette

| Color         | HEX       | Use                                |
| ------------- | --------- | ---------------------------------- |
| Primary       | `#2563EB` | Buttons, links, important elements |
| Primary Hover | `#1D4ED8` | Button/link hover                  |
| Secondary     | `#0F172A` | Headings, dark sections            |
| Background    | `#F8FAFC` | Main page background               |
| White         | `#FFFFFF` | Cards, navbar                      |
| Text          | `#334155` | Normal text                        |
| Light Text    | `#64748B` | Secondary text                     |
| Border        | `#E2E8F0` | Borders                            |
| Success       | `#16A34A` | Success messages                   |
| Error         | `#DC2626` | Error messages                     |

### Color Rules

* Primary color ko important actions ke liye use karo.
* Secondary color headings aur dark sections ke liye use karo.
* Normal text ke liye `#334155` use karo.
* Background mostly light rakho.
* Ek page par unnecessary colors use mat karo.
* Buttons aur links ke colors consistent rakho.

---

## 3. Typography

### Font Family

**Primary Font:** Poppins

**Fallback:**

```css
font-family: "Poppins", Arial, sans-serif;
```

### Font Sizes

| Element    | Desktop | Mobile | Weight |
| ---------- | ------: | -----: | -----: |
| H1         |  `48px` | `36px` |  `700` |
| H2         |  `36px` | `28px` |  `600` |
| H3         |  `24px` | `22px` |  `600` |
| Body       |  `16px` | `16px` |  `400` |
| Small Text |  `14px` | `14px` |  `400` |
| Button     |  `16px` | `15px` |  `600` |

### Typography Rules

* H1 page ka main heading hoga.
* H2 major sections ke liye use hoga.
* H3 cards aur small sections ke liye use hoga.
* Body text normally `16px` rahega.
* Heading ke liye consistent font weight use karo.
* Paragraphs ko readable line-height do.

### Line Height

| Element    | Line Height |
| ---------- | ----------: |
| Heading    |       `1.2` |
| Body       |       `1.6` |
| Small Text |       `1.5` |

---

## 4. Container

### Desktop

```css
max-width: 1200px;
width: 90%;
margin: auto;
```

### Purpose

Container ka use content ko ek fixed readable width me rakhne ke liye hoga.

---

## 5. Spacing System

| Name          |  Value |
| ------------- | -----: |
| XS            |  `4px` |
| Small         |  `8px` |
| Medium        | `16px` |
| Large         | `24px` |
| XL            | `40px` |
| Section       | `64px` |
| Large Section | `80px` |

### Spacing Rules

* Small elements ke andar `8px–16px`.
* Cards ke andar approximately `24px`.
* Sections ke beech approximately `64px`.
* Large sections me `80px` tak spacing use kar sakte hain.
* Random spacing values avoid karo.

---

## 6. Border Radius

| Element          | Radius |
| ---------------- | -----: |
| Small Elements   |  `6px` |
| Buttons          |  `8px` |
| Cards            | `12px` |
| Images           | `12px` |
| Large Containers | `16px` |

### Rule

Similar elements ke liye same border radius use karo.

---

## 7. Buttons

### Primary Button

```text
Background: #2563EB
Text: #FFFFFF
Padding: 12px 24px
Border Radius: 8px
Font Weight: 600
```

### Hover

```text
Background: #1D4ED8
```

### Button Rules

* Button text clear hona chahiye.
* Primary action ke liye primary button use karo.
* Buttons ka size consistent rakho.
* Button ke around sufficient spacing rakho.

---

## 8. Cards

### Card Style

```text
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border Radius: 12px
Padding: 24px
```

### Card Rules

* Card content readable hona chahiye.
* Cards ke beech consistent gap rakho.
* Same type ke cards ka same design rakho.
* Hover effect zarurat hone par use karo.

---

## 9. Images

### General Images

```text
Border Radius: 8px–12px
Object Fit: cover
```

### Card Images

```text
Border Radius: 12px 12px 0 0
Object Fit: cover
```

### Hero Image

```text
Width: 100%
Object Fit: cover
```

### Image Rules

* Images unnecessarily stretch nahi honi chahiye.
* Similar images ka same aspect ratio rakho.
* Important images me proper `alt` text use karo.

---

## 10. Navbar

### Style

```text
Background: #FFFFFF
Text: #0F172A
Active Link: #2563EB
Height: 70px–80px
```

### Navbar Rules

* Logo left side.
* Navigation links right side.
* Active page ko visually highlight karo.
* Mobile par hamburger menu use kiya ja sakta hai.
* Navbar clean aur simple rakho.

---

## 11. Hero Section

### Structure

```text
Hero
├── Small Heading / Badge
├── Main Heading
├── Description
├── Primary Button
└── Image / Illustration
```

### Rules

* Hero me clear main message hona chahiye.
* H1 sabse important heading hogi.
* CTA button clearly visible hona chahiye.
* Hero ko unnecessary content se crowded mat karo.

---

## 12. Sections

Basic website structure:

```text
Navbar
   ↓
Hero
   ↓
About
   ↓
Services
   ↓
Features
   ↓
Testimonials
   ↓
Call To Action
   ↓
Footer
```

Har section me:

```text
Section
├── Section Heading
├── Short Description
└── Main Content
```

---

## 13. Forms

### Input

```text
Background: #FFFFFF
Border: #E2E8F0
Border Radius: 8px
Padding: 12px 16px
Font Size: 16px
```

### Focus

Input focus hone par primary color ka border use karo.

### Form Rules

* Labels clearly visible honi chahiye.
* Required fields clearly indicate karo.
* Error message understandable hona chahiye.
* Input fields ke beech consistent spacing rakho.

---

## 14. Footer

### Style

```text
Background: #0F172A
Text: #FFFFFF
Secondary Text: #94A3B8
```

### Footer Content

```text
Logo
Short Description
Quick Links
Contact Information
Social Links
Copyright
```

Footer simple aur organized hona chahiye.

---

## 15. Responsive Design

### Breakpoints

| Device  |            Width |
| ------- | ---------------: |
| Mobile  |        `< 768px` |
| Tablet  | `768px – 1023px` |
| Desktop |       `≥ 1024px` |

### Mobile Rules

* Navigation mobile-friendly ho.
* Columns generally single column me aa sakte hain.
* Images screen ke according resize hon.
* Font sizes reduce ho sakte hain.
* Buttons touch-friendly hon.
* Horizontal scrolling avoid karo.

### Tablet Rules

* 2-column layouts use kiye ja sakte hain.
* Spacing desktop se slightly reduce ho sakti hai.

### Desktop Rules

* Maximum container width `1200px`.
* Multi-column layouts use kiye ja sakte hain.
* Sections ke beech sufficient whitespace rakho.

---

## 16. Shadows

Light shadow use karo.

Example:

```css
box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
```

### Rule

* Shadow bahut dark nahi hona chahiye.
* Har element par shadow use mat karo.
* Cards aur important UI elements par hi use karo.

---

## 17. Links

### Normal

```text
Color: #2563EB
```

### Hover

```text
Color: #1D4ED8
```

Links ko clearly clickable dikhna chahiye.

---

## 18. Icons

* Same icon style maintain karo.
* Icons ka unnecessary use mat karo.
* Important information ke saath icons use kiye ja sakte hain.
* Icon size generally `18px–24px`.

---

## 19. Accessibility

* Images me `alt` text use karo.
* Text aur background ke beech sufficient contrast rakho.
* Buttons aur links clearly identifiable hon.
* Form inputs ke labels use karo.
* Keyboard navigation ko consider karo.
* Heading order logical rakho: H1 → H2 → H3.

---

## 20. CSS Variables

Project me colors aur common values ke liye CSS variables use karo.

```css
:root {
    /* Colors */
    --primary: #2563EB;
    --primary-hover: #1D4ED8;
    --secondary: #0F172A;

    --background: #F8FAFC;
    --white: #FFFFFF;

    --text: #334155;
    --text-light: #64748B;

    --border: #E2E8F0;

    --success: #16A34A;
    --error: #DC2626;

    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;

    /* Container */
    --container-width: 1200px;

    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 40px;
    --space-section: 64px;
    --space-section-lg: 80px;
}
```

---

## 21. General Design Rules

1. Website simple aur clean rakho.
2. Maximum 1–2 main colors use karo.
3. Font family consistent rakho.
4. Similar components ka design same rakho.
5. Random spacing values avoid karo.
6. Random colors avoid karo.
7. Buttons ka design consistent rakho.
8. Images ka aspect ratio maintain karo.
9. Mobile responsiveness starting se consider karo.
10. White space ka proper use karo.
11. Content ko unnecessary elements se crowded mat karo.
12. Accessibility ka dhyan rakho.

---

## 22. Final Design Checklist

Before development:

* [ ] Color palette finalized
* [ ] Font finalized
* [ ] Heading sizes finalized
* [ ] Body text finalized
* [ ] Container width finalized
* [ ] Spacing system finalized
* [ ] Button style finalized
* [ ] Card style finalized
* [ ] Border radius finalized
* [ ] Image style finalized
* [ ] Navbar style finalized
* [ ] Footer style finalized
* [ ] Responsive breakpoints finalized

---

## 23. Design System Summary

```text
Primary Color       → #2563EB
Secondary Color     → #0F172A
Background          → #F8FAFC
Text                → #334155
Light Text          → #64748B
Border              → #E2E8F0

Font                → Poppins

H1                  → 48px / 36px mobile
H2                  → 36px / 28px mobile
H3                  → 24px / 22px mobile
Body                → 16px

Container           → 1200px
Section Spacing     → 64px
Card Padding        → 24px

Button Radius       → 8px
Card Radius         → 12px
Large Radius        → 16px

Mobile              → < 768px
Tablet              → 768px–1023px
Desktop             → ≥ 1024px
```
