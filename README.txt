SHRI NARUKA SCHOOL ERP - PWA WRAPPER

The school crest you supplied is used for the PWA app icons (192x192 and 512x512).

UPLOAD:
1. Extract this ZIP.
2. Open your GitHub repository and choose Add file > Upload files.
3. Upload the CONTENTS of this folder, including the icons folder (not the outer folder).
4. Commit changes to the main branch.
5. Open Settings > Pages.
6. Source: Deploy from a branch; Branch: main; Folder: /(root); Save.
7. Wait for GitHub Pages to publish, then open the Pages URL using HTTPS.

IMPORTANT:
- The Google Apps Script Web App remains the ERP backend.
- The service worker caches only the static wrapper shell and icons.
- Student records, login information, and ERP data are not cached.
- Internet is required to use the live ERP inside the frame.
- Do not upload Code.gs, spreadsheet IDs, passwords, or API secrets to GitHub.
- Test login/logout, receipt/PDF, photo upload, mobile layout, and browser back navigation after publishing.
