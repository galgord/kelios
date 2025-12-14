# Design System: "ConfConnect"

| **Document Version** | 1.0 |
| :--- | :--- |
| **Aesthetic Goal** | "Invisible Luxury" — Minimalist, high contrast, distraction-free. |
| **Base Theme** | Zinc (Shadcn/ui preset) |
| **Mode** | Support Light & Dark (Dark mode recommended for premium feel). |

---

## 1. Design Philosophy

* **Content is the Jewel:** The UI frames the content (attendee faces and event details) without competing for attention.
* **Tactile Feedback:** Every tap provides immediate visual feedback (ripple, scale, or color shift).
* **Depth over Borders:** Use subtle shadows and "glass" effects to separate layers instead of thick borders.
* **Whitespace:** Generous padding makes the app feel expensive. Avoid clutter.

---

## 2. Typography

**Font Family:** `Inter` or `Geist Sans` (Sans-serif).
* *Why:* Extremely legible at small mobile sizes, clean, and professional.

**Scale (Mobile First):**
* **H1 (Page Titles):** `text-3xl`, `font-bold`, `tracking-tight` (e.g., "Event Details")
* **H2 (Section Headers):** `text-xl`, `font-semibold`, `tracking-tight` (e.g., "Attendees")
* **Body:** `text-sm`, `font-normal`, `text-muted-foreground` (Bio text)
* **Labels/Micro:** `text-xs`, `font-medium`, `uppercase`, `tracking-widest` (Tags, Dates)

---

## 3. Color Palette (Tailwind / Shadcn Config)

We use the **Zinc** palette to avoid "cold" greys (Slate) or "warm" greys (Stone). Zinc is neutral and modern.

### Base Colors
* **Background:**
    * Light: `white` (#ffffff)
    * Dark: `zinc-950` (#09090b) — *Deep, rich black.*
* **Surface / Cards:**
    * Light: `zinc-50` (#fafafa)
    * Dark: `zinc-900` (#18181b)

### Brand / Primary
* **Primary Action:** `zinc-900` (Light Mode) / `white` (Dark Mode).
    * *Philosophy:* A monochromatic primary button feels more "fashion/high-end" than a generic blue SaaS button.
* **Accent (Subtle):** `indigo-500`
    * *Usage:* Only for notifications, active states in the bottom nav, or "New" badges.

### Semantic
* **Success:** `emerald-500` (Connection Accepted)
* **Destructive:** `red-500` (Cancel Ticket)
* **Muted:** `zinc-500` (Secondary text, inactive icons)

---

## 4. Components & Shapes

### Radius & Borders
* **Global Radius:** `0.75rem` (rounded-xl)
    * *Note:* A slightly larger radius feels friendlier and more modern on mobile.
* **Borders:** Thin, subtle. `border-zinc-200` (Light) / `border-zinc-800` (Dark).

### Shadows (Elevation)
* **Level 1 (Cards):** `shadow-sm`
* **Level 2 (Dropdowns/Modals):** `shadow-lg`
* **Level 3 (Floating Actions):** `shadow-xl`

### Glassmorphism (The "Sleek" Factor)
Used for sticky elements to maintain context while scrolling.
* **Class:** `bg-background/80 backdrop-blur-md border-t`
* **Where to use:**
    * **Bottom Navigation Bar:** The primary navigation for the PWA.
    * **Top Header:** Sticky event title.

---

## 5. UI Elements

### 5.1 The "Connect" Card (Core Component)
* **Layout:** Horizontal list item.
* **Avatar:** Large (12-16 size), rounded-full.
* **Typography:** Name in `font-semibold`, Job Title in `text-muted-foreground`.
* **Action:** A solitary "Connect" button or a minimal "Plus" icon button.
* **State:**
    * *Default:* Clean white/black background.
    * *Connected:* Gold/Yellow subtle border or glowing effect to signify value.

### 5.2 Buttons (Shadcn Variants)
* **Primary (CTA):** `h-12` (Tall for easy touch), `rounded-full` (optional, for maximum modernity), full width on mobile.
* **Secondary (Filters):** `variant="outline"`, `h-9`, `text-xs`.
* **Ghost:** Used for "Cancel" or "Back" actions to reduce visual noise.

### 5.3 Inputs
* **Style:** Minimalist. No background color, just a bottom border OR a very subtle full border.
* **Focus:** No harsh blue ring. Use a `ring-offset-2 ring-zinc-400` for a metallic focus feel.

---

## 6. Iconography
**Library:** `Lucide React`
**Style:**
* Stroke Width: `1.5px` (Thin strokes feel more premium/elegant than standard 2px).
* Size: `20px` standard.

---

## 7. Motion & Interaction
* **Transitions:** `duration-200 ease-in-out` (Fast but smooth).
* **Active State:** `active:scale-95` on all actionable cards and buttons. This "press" effect is crucial for a native app feel in a PWA.
* **Page Transitions:**
    * *Enter:* Fade in + Slide Up (`y-4` -> `y-0`).
    * *Exit:* Fade out.