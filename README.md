# LinkedIn Easy Apply Filter

A Chrome extension that hides Easy Apply jobs on LinkedIn, allowing you to focus on jobs that require traditional application processes.

## Features

- ✅ Automatically hides Easy Apply jobs on LinkedIn job search pages
- ✅ Toggle button in the header to show/hide Easy Apply jobs
- ✅ Works with infinite scroll - new jobs are automatically filtered
- ✅ No popup or extra UI required
- ✅ Lightweight and fast

## Installation

### From Chrome Web Store (Recommended)

1. Visit the Chrome Web Store listing
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)

1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder

## How to Use

1. Go to LinkedIn Jobs: `https://www.linkedin.com/jobs/`
2. Search for jobs as usual
3. Easy Apply jobs will be automatically hidden
4. Use the "Hide Easy Apply" / "Show Easy Apply" button in the header to toggle

## How It Works

- **Target:** LinkedIn job cards with `[data-occludable-job-id]` attribute
- **Filter Logic:** Checks for "Easy Apply" text in job card content
- **Display Method:** Uses `display: none` to hide cards
- **Observer Pattern:** MutationObserver watches for new job cards

## Privacy

This extension:

- Only runs on LinkedIn job pages
- Does not collect any personal data
- Does not send data to external servers
- Only modifies the display of job cards locally

## Technical Details

- **Manifest Version:** 3
- **Permissions:** `activeTab` (only for LinkedIn job pages)
- **Content Script:** Runs on `*://*.linkedin.com/jobs/*`
- **Browser Support:** Chrome, Edge, other Chromium-based browsers

## Troubleshooting

- **Jobs not being filtered:** Refresh the page and try again
- **Button not appearing:** Make sure you're on a LinkedIn jobs page
- **Extension not working:** Check if Developer mode is enabled (for manual installation)

## Contributing

Feel free to submit issues and enhancement requests!

## Support

If you find this extension helpful, consider supporting the developer:

- [Buy me a coffee ☕](https://coff.ee/muhammetaydin)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Version History

- **v1.0.0** - Initial release with basic Easy Apply filtering
