# Full Stack Web Development - Lab 2

## Topic
Advanced CSS and Bootstrap Flex Utilities

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5.3.3 (bundled locally)
- JavaScript (experiment controls)
- VS Code (recommended editor)
- Git and GitHub (manual's version-control workflow below)

## Concepts Covered
- Advanced CSS: box-shadow, border-radius, linear-gradient and object-fit
- CSS Flexbox: alignment, wrapping, gap and flexible item sizing
- CSS Positioning: relative, absolute, sticky and fixed
- CSS Display Properties: block, inline, inline-block, flex and none
- CSS Pseudo-elements: ::before and ::after
- CSS Filters: grayscale, blur, brightness and saturation
- CSS Transitions and CSS Transform
- Bootstrap Flex Utilities

## Project Description
This project demonstrates advanced CSS layout and styling techniques together with Bootstrap Flex utilities. It retains the lab manual's navigation, hero, student profile, four skills, three projects, Bootstrap Flex demonstration, positioning demonstration, contact section and footer. Seven interactive experiments and a display experiment make every task reproducible. Completed answers appear both here and on the webpage.

## Author
Ali Muhammad  
Roll number: 242759  
Student identifier: AliMuhammad_242759

## Lab
Full Stack Web Development - Lab 2, Section C

## Open the project
1. Extract the ZIP completely.
2. Open `Lab02/index.html` in a modern browser, or open `Lab02` in VS Code and use **Open with Live Server**.
3. No installation, build command or server is required. Keep `assets/` beside the three required files; Bootstrap and images are local for offline use.
4. Select **Experiments** in the navigation. Change a value and use **Inspect demonstration**. **Reset all experiments** restores the starter values, including row direction.
5. View Profile, View Project and Contact Us expand real information. Contact details intentionally use the course LMS/directory rather than an invented email address. The page does not send messages or pretend to provide a backend.

## Project structure
```text
Lab02/
├── index.html
├── style.css
├── README.md
└── assets/
    ├── bootstrap.min.css
    ├── bootstrap.bundle.min.js
    └── image-1.jpg ... image-4.jpg
```

## Required sections and concept locations
| Requirement | Location |
| --- | --- |
| Navigation bar | `.navbar`, Bootstrap responsive collapse and `sticky-top` |
| Hero / Profile | `.hero-content`, `.profile-card`, student details |
| Skills | `.skills-container`, four `.skill-box` elements |
| Projects | `.project-container`, three `.project-card` elements |
| Flexbox demonstration | `.bootstrap-demo` uses `d-flex justify-content-between align-items-center flex-wrap gap-3` |
| Positioning demonstration | `.position-card` relative; `.featured-badge` absolute |
| Contact and footer | `#contact`, `.footer` |
| Fixed positioning | `.back-to-top` remains at the viewport corner |
| Display properties | `.display-demo` and the Display control |
| Pseudo-elements | `.section-heading h2::after`, `.profile-card::before` / `.label-after::after` |
| Filters | `.profile-image` saturation; `.grayscale img` selectable filter |
| Effects | skill lift, project lift/scale and image zoom; transitions smooth changes |
| Responsive design | original 768px media query, wrapping, small-screen safeguards |

## Tasks 1–7 — completed observations and answers

### Task 1 — Flexbox

Values compared: `center`, `space-between`, `space-around`, `space-evenly`.

With center, unused main-axis space sits before and after the group. Space-between puts it between items, with no additional edge space. Space-around gives each item equal surrounding space, so an interior space is twice an outer space. Space-evenly makes the outer and interior spaces equal. The 20px gap remains a minimum. In the original skills row, flex: 1 1 200px lets items grow and consume spare width, so changing justification may produce little or no visible difference. Enable the fixed-basis comparison to expose the difference.

### Task 2 — Flex Direction

Values compared: `row`, `column`.

Column changes the main axis from horizontal to vertical: skill boxes stack from top to bottom, and justify-content acts vertically. Align-items now controls horizontal alignment. Flex-basis: 200px applies along the new vertical main axis, so the boxes can become taller. Returning to row restores the horizontal, wrapping layout.

### Task 3 — Positioning

Values compared: `absolute`, `relative`.

The Online badge is initially removed from normal flow and anchored 15px from the bottom and 10px from the right of its relatively positioned image container. With position: relative, it participates in normal flow after the image and is shifted upward by bottom: 15px and leftward by right: 10px from its own normal position. Its original layout space remains reserved; it no longer anchors to the container’s bottom-right corner.

### Task 4 — Pseudo-element

Values compared: `before`, `after`.

::before generates content before the element’s actual content and ::after generates it after. However, the supplied label also has position: absolute, top: -12px and left: 25px. Keeping these declarations places both versions at the same visible coordinates. Their generated-content order changes, not their visible location in this example. If absolute positioning and offsets are removed, the before/after order becomes visible in normal flow.

### Task 5 — Filter

Values compared: `grayscale(100%)`, `blur(3px)`, `brightness(70%)`.

Grayscale(100%) removes color. Blur(3px) softens edges and text in the image. Brightness(70%) darkens the original colored image to 70% brightness. Each filter replaces the previous one; they are not combined. The supplied hover rule applies grayscale(0%), so hovering restores the unfiltered colors even after changing the base filter. Move the pointer away to compare the selected filter.

### Task 6 — Transform

Values compared: `translateY(-10px)`, `scale(1.05)`.

TranslateY(-10px) lifts the project card by 10px. Scale(1.05) enlarges its width and height by 5% around its center by default. Neither transform changes the surrounding layout space. A 0.3s transition smooths the change; transform defines the change itself. The independent image hover effect still zooms the image to scale(1.08).

### Task 7 — Bootstrap Flex

Values compared: `between`, `center`, `around`, `evenly`.

Justify-content-between distributes spare main-axis space between items. Justify-content-center groups them in the center. Justify-content-around gives half-sized outer spaces relative to interior spaces. Justify-content-evenly gives equal edge and interior spaces. D-flex, align-items-center, flex-wrap and gap-3 remain in place. On mobile each item is 100% wide, so horizontal justification differences disappear; compare on a wide viewport.

## Additional display experiment
`display: block` creates a new line and uses the available width when width is auto. `inline` flows with surrounding text and ignores explicit width/height. `inline-block` flows inline while accepting dimensions. `flex` creates a block-level flex container whose children become flex items. `none` removes the element and its descendants from layout, leaving no reserved space. The Before/After text makes these effects visible. The sample has a 90px height to show that inline ignores the height setting.

## Technical explanations
In a row flex container, justify-content controls horizontal/main-axis distribution and align-items controls vertical/cross-axis alignment. These directions switch for column layouts. Custom CSS defines the skills layout; Bootstrap supplies the Flex utility declarations for the Bootstrap demonstration. The project does not replace these Bootstrap classes with custom lookalikes.

Sticky navigation remains in normal flow and sticks at the top while scrolling. The fixed Top link is anchored to the viewport and removed from normal flow. Relative positioning establishes the reference for absolutely positioned children. Absolute positioning removes a child from normal flow.

The manual's explanatory `transform: ranslate(-10px)` is a typo. The working starter rule `transform: translateY(-10px)` is retained. Task 6 optionally substitutes `scale(1.05)`. Reduced-motion users get the same state changes without animated transitions.

## Responsive testing
The manual requires 1920 × 1080 (desktop), 768 × 1024 (tablet), and 375 × 667 (mobile). At desktop width the hero is a row, projects are three columns, and navigation is expanded. At 768px and below the hero stacks, project cards fill the row, and Bootstrap demo items are full width. Below Bootstrap's lg breakpoint (992px), the navigation uses its toggle button. Use browser developer tools → device toolbar to repeat the checks.

See the verification record below for checks actually performed on this submission.

## Git and GitHub submission workflow
Run the manual's commands in the extracted `Lab02` folder:
```sh
git init
git status
git add .
git status
git commit -m "Complete Lab 2 Advanced CSS and Bootstrap Flex"
```
Create a GitHub repository named `full-stack-lab-02`, then run:
```sh
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git remote -v
git branch -M main
git push -u origin main
```
Replace `YOUR_GITHUB_REPOSITORY_URL` with the repository's actual URL. Open the repository on GitHub to verify the files. Publication status: this ZIP is the deliverable; no GitHub repository or push is claimed. GitHub publication requires the intended account/repository. The archive omits `.git` history.

## Sources and assets
The supplied `LAB 02.docx` is the requirements source. The original starter HTML and CSS were preserved and extended with accessible controls, completed answers, meaningful button actions and responsive safeguards.

Bootstrap 5.3.3: https://getbootstrap.com/ (MIT license; license notices are retained in vendor files). Original CDN sources:
- https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

Images are the four Unsplash images referenced by the manual, bundled locally. The profile image is a sample image from the manual, not a claimed photograph of the author.
- `image-1.jpg`: https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80
- `image-2.jpg`: https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80
- `image-3.jpg`: https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80
- `image-4.jpg`: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80

## Verification record
Verified in Microsoft Edge (Chromium), opening the local HTML file directly. All 55 automated checks passed with no JavaScript runtime errors.

- Desktop 1920 × 1080, tablet 768 × 1024, and mobile 375 × 667: no horizontal overflow; correct hero direction; all images load; all seven task panels present.
- Tablet and mobile navigation: menu opens, follows the Skills link, and closes.
- All experiment values are selectable; computed styles confirm direction, relative positioning, after pseudo-element, brightness, Bootstrap even spacing, display none and hover scaling.
- Reset restores row layout; fixed-basis mode removes flex-grow.
- Profile, all three projects and contact disclosures open correctly.
- Desktop, tablet and mobile screenshots were reviewed for layout.
