# UFC Interface Design System

## Direction and Feel

- **Industrial & Visceral**: The interface should feel like the environment of a professional MMA fight—raw, technical, and high-impact.
- **Precision Typography**: Using dense, high-contrast typography that mirrors technical data and broadcast graphics.
- **Layered Textures**: Moving away from flat colors towards subtle layering that evokes materials like the Octagon canvas, steel fencing, and gym mats.

## Depth Strategy: Layered Materials

- **Base**: Dark, textured charcoal (The Gym floor).
- **Surface**: Subtle elevation shifts using semi-transparent overlays (The Canvas).
- **Separation**: Ultra-thin borders (1px) in "Oxide Steel" instead of heavy lines.
- **Interaction**: Sharp contrast shifts on hover (e.g., from dull steel to bright white or visceral red).

## Spacing Base Unit

- **8px (Base Unit)**: All margins and paddings must be multiples of 8.
- **Tight Micro-spacing**: Technical data and labels should use 4px spacing to feel dense and technical.

## Key Component Patterns

- **The Fight Board**: Asymmetric layouts with overlapping elements (e.g., a fighter's name breaking the container).
- **Impact Typography**: Headlines using heavily condensed fonts with tight tracking.
- **Technical Badges**: Small, high-contrast labels for weight classes and rankings.
- **Dynamic Contrast Transitions**: Interaction states that feel like a "strike"—fast, sharp, and decisive.

## Color Palette (Tokens)

- `--canvas-dark`: `#0a0a0b` (Deep, textured gym floor)
- `--canvas-surface`: `#161618` (The mat surface)
- `--oxide-steel`: `#2a2a2d` (Fencing and structural elements)
- `--visceral-red`: `#d70000` (The intensity of the sport)
- `--championship-gold`: `#d4af37` (The ultimate goal)
- `--technical-white`: `#f5f5f7` (Clean broadcast data)
