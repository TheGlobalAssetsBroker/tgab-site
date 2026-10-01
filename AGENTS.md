# Site icon convention

- Use `/images/upper-right-arrow.png`, the homepage hero arrow asset, for navigation and action arrows throughout the site.
- In React components, use `ActionArrow` from `src/components/ActionArrow.jsx` for new arrows. Set its direction prop when a control must point left, right or down.
- Keep the image decorative (`alt=""` and `aria-hidden="true"`) and give the parent link or button a clear text label.
- Do not add Unicode arrow characters as UI icons; they render inconsistently on iOS.
