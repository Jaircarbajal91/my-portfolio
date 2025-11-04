# Portfolio Project Rulebook

## CRITICAL RULE - READ THIS FIRST
**IF THERE IS A RULEBOOK FILE IN THE PROJECT, YOU MUST READ IT COMPLETELY BEFORE MAKING ANY CHANGES. NO EXCEPTIONS.**

## MANDATORY WORKFLOW - MUST FOLLOW EVERY TIME

### BEFORE ANY CHANGES:
1. **READ THIS ENTIRE RULEBOOK FIRST**
2. **Run `npm run build` to see current DOM state**
3. **Check CSS files for conflicts**
4. **Verify Tailwind classes exist**
5. **Check for linting errors**

### 1. NO !important declarations
- **NEVER** use `!important` in CSS unless absolutely necessary
- Tailwind CSS handles specificity properly without needing `!important`
- If styles aren't applying, check for conflicting classes or incorrect selectors first
- Use proper CSS cascade and specificity instead of forcing with `!important`

### 2. CSS Debugging Process
- **ALWAYS** check CSS files first before suggesting npm restarts
- Look for:
  - Conflicting class names
  - Missing Tailwind classes
  - Incorrect dark/light mode selectors
  - Typos in class names
  - Missing imports or dependencies
- Use browser dev tools to inspect computed styles
- Check if Tailwind classes are being purged incorrectly

### 3. Theme System Rules
- Use `dark:` prefix for dark mode styles
- Default styles should be light mode (no prefix)
- Theme context should handle class toggling on `document.documentElement`
- Check localStorage for existing theme preferences
- Ensure theme toggle works properly

### 4. Tailwind CSS Guidelines
- Use semantic color names (gray-50, gray-100, etc.)
- Avoid custom color classes that don't exist in config
- Use proper responsive prefixes (sm:, md:, lg:, xl:)
- Leverage Tailwind's built-in spacing and sizing system

### 5. Component Styling Standards
- Use reusable CSS classes defined in `@layer components`
- Maintain consistency across similar components
- Use proper hover and focus states
- Ensure accessibility with proper contrast ratios
- **Components should be white with darker text inside for light mode**
- **Headers/titles within components should be dark and not white in light mode**

### 6. File Structure Rules
- Keep component-specific styles in component files
- Global styles go in `src/index.css`
- Theme context in `src/contexts/ThemeContext.tsx`
- Use TypeScript for all React components

### 7. Development Workflow
1. **Before making changes, run `npm run build` to see how the DOM is currently rendered with the CSS being applied**
2. **Use Ubuntu WSL for all terminal commands** - `wsl npm run build`, `wsl npm run dev`, etc.
3. **NEVER use PowerShell** - Always use Ubuntu WSL environment for npm commands
4. Check CSS and styling issues first
5. Verify Tailwind classes are correct
6. Test theme switching functionality
7. Only suggest npm restarts as last resort
8. Always check for linting errors before suggesting restarts

### 8. Common Issues to Check
- Missing `dark:` prefixes on dark mode styles
- Incorrect Tailwind class names (e.g., `dark-700` instead of `slate-700`)
- Conflicting CSS rules
- Missing theme context provider
- Incorrect localStorage theme handling

### 9. Code Quality Standards
- Use semantic HTML elements
- Maintain proper component structure
- Follow React best practices
- Use proper TypeScript types
- Keep components focused and single-purpose

### 10. Testing Checklist
- [ ] Light mode displays correctly by default
- [ ] Dark mode toggle works properly
- [ ] All components use consistent styling
- [ ] No console errors
- [ ] Responsive design works on all screen sizes
- [ ] Accessibility standards met

## MANDATORY WORKFLOW - MUST FOLLOW EVERY TIME

### BEFORE ANY CHANGES:
1. **READ THIS ENTIRE RULEBOOK FIRST**
2. **Run `wsl npm run build` to see current DOM state** (NEVER use PowerShell)
3. **Check CSS files for conflicts**
4. **Verify Tailwind classes exist**
5. **Check for linting errors**

### TEXT READABILITY RULES:
- **NEVER use `text-gray-800` or `text-gray-700` for main content text in light mode**
- **ALWAYS use `text-gray-900` for main content text in light mode**
- **Headers must be `text-gray-900 dark:text-white`**
- **Body text must be `text-gray-900 dark:text-gray-200`**
- **Descriptions must be `text-gray-900 dark:text-gray-300`**

### COMPONENT STYLING RULES:
- **Components MUST be `bg-white` in light mode**
- **Text inside components MUST be dark (`text-gray-900`)**
- **Headers inside components MUST be dark, NOT white**

### ENFORCEMENT:
- **If I don't follow these rules, STOP and restart from step 1**
- **No exceptions, no shortcuts**
- **Every change must be verified against these rules**
