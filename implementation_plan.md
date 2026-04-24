# FamLink Mobile - Frontend Expansion

This plan outlines the creation of three additional screens for the FamLink mobile application. The goal is to expand the app's functionality while maintaining a strict visual and architectural "handshake" with the existing `MyDash.tsx`.

## 🎨 Design Guidelines (Agent Instructions)

To ensure consistency with the existing Dashboard, the following design tokens and patterns **MUST** be followed:

### 1. Color Palette
- **Primary Teal**: `#1A9BAB` (Use for backgrounds, primary buttons, and active states).
- **Light Surface**: `#d9f2f5` (Use for secondary containers/grids).
- **Card Background**: `#FFFFFF` (Pure white).
- **Text (Primary)**: `#333333` (Dark grey for readability).
- **Text (Secondary/Greyed)**: `#666666` or `#AAAAAA`.

### 2. Layout & Spacing
- **Safe Area Header**: `marginTop: 55` for fixed headers.
- **Horizontal Padding**: `16px` for standard screen margins.
- **Card Radius**: `borderRadius: 10`.
- **Vertical Spacing**: Units of `10px` or `12px` (standardized across the dash).

### 3. Component Hierarchy
- **Header**: Consistent structure with User Avatar (left) and Action Icons (right).
- **Scroll Container**: Wrap main content in a `ScrollView` for future scalability.
- **Lists**: Use `FlatList` for repeating items (e.g., transactions, children) with `scrollEnabled={false}` if nested in a ScrollView.

---

## 🛠 Proposed Changes

### 📱 New Screens

#### [NEW] `Payments.tsx`
- **Goal**: Focused bill payment interface.
- **UI Structure**:
    - **Search Bar**: A white card with a "🔍 Search service" placeholder at the top.
    - **Payment Categories**: Use the `serviceBtn` pattern from `MyDash.tsx` (White card + icon + label).
    - **Quick Actions**: "Recently Paid" horizontal list using small avatars and labels.

#### [NEW] `Children.tsx`
- **Goal**: Manage linked child wallets.
- **UI Structure**:
    - **Balance Cards**: Large white cards showing "Child Name" and "NPR XXXX".
    - **Add Funds Button**: A full-width `TEAL` button with white border (match `bigBtn` style).
    - **Activity Feed**: Compact transaction list for children.

#### [NEW] `Setting.tsx`
- **Goal**: Profile and configuration.
- **UI Structure**:
    - **Profile Header**: Center-aligned avatar with "Edit" overlay.
    - **Configuration List**: Vertically stacked white cards with label text and a chevron `>` icon.
    - **Logout**: A standalone card with red text.

---

## 🚀 Architectural Directive

> [!IMPORTANT]
> **Componentization**: If you find redundant styles between `MyDash.tsx` and the new screens (e.g., `header`, `bigBtn`, `infoCard`), extract them into a `styles/sharedStyles.ts` or similar rather than duplicating the objects.

## 🤝 Verification Plan

### Automated Check
- Ensure all screens use the `TEAL` constant.

### Manual Verification
- Check that the header height and user avatar alignment exactly match `MyDash.tsx` when switching between screens.
- Verify that touchable feedback (opacities) is consistent across all new buttons.

