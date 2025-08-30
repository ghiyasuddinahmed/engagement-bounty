# Engagement Bounty - Programs Management

A Next.js application for managing bug bounty programs with a clean, modern UI built using Tailwind CSS.

## Features

### Programs Management
- **View Programs**: Display all programs in a responsive table format
- **Create Program**: Add new programs through a comprehensive modal form
- **Asset Management**: Add/remove assets with WEB and MOBILE type options
- **Bounty Eligibility**: Set eligibility status (ELIGIBLE/INELIGIBLE) for each asset
- **Duplicate Prevention**: Prevents duplicate asset identifiers
- **Real-time Updates**: New programs are immediately added to the table

### UI Components
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modal System**: Clean, accessible modal for program creation
- **Form Validation**: Required field validation and user feedback
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Accessibility**: Proper focus states and keyboard navigation

## Technology Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with minimal custom CSS
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety and better development experience

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

4. **Access Programs Page**
   Click "View Programs" button or navigate to `/programs`

## Usage

### Creating a New Program

1. Click the "Create Program" button
2. Fill in the required fields:
   - Program Name (required)
   - Start Date (required)
   - Website (optional)
   - Twitter/X (optional)
   - Description (optional)
3. Add assets using the Bounty Eligibility section:
   - Select asset type (WEB or MOBILE)
   - Enter asset identifier
   - Add description
   - Set bounty eligibility (ELIGIBLE or INELIGIBLE)
   - Click "Add" to include the asset
4. Click "Submit" to create the program

### Managing Assets

- **Add Asset**: Fill in asset details and click "Add"
- **Delete Asset**: Click the trash icon next to any asset
- **Duplicate Prevention**: System prevents adding assets with duplicate identifiers
- **Multiple Assets**: Programs can have multiple assets with different eligibility statuses

### Program Table

- **Sortable Columns**: Click column headers to sort (visual indicators included)
- **Interactive Rows**: Hover effects and clickable program names
- **Status Indicators**: Color-coded bounty eligibility status
- **Responsive Design**: Horizontal scrolling on mobile devices

## File Structure

```
app/
├── programs/
│   ├── page.tsx          # Main programs page component
│   └── programs.css      # Custom CSS for programs page
├── globals.css           # Global Tailwind CSS configuration
├── layout.tsx            # Root layout component
└── page.tsx              # Home page with navigation
```

## Customization

### Styling
- Modify `app/programs/programs.css` for custom CSS
- Update Tailwind classes in components for design changes
- Custom color schemes can be adjusted in `app/globals.css`

### Functionality
- Add new form fields in the modal
- Implement additional validation rules
- Extend asset types beyond WEB/MOBILE
- Add program editing capabilities

## Browser Support

- Modern browsers with ES6+ support
- Responsive design for mobile and desktop
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
