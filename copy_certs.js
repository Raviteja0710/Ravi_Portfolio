const fs = require('fs');
const path = require('path');

const srcFolder = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\f936f9ad-9b21-4b31-90d8-d1d812666424';
const destFolder = path.join(__dirname, 'public', 'certificates');

// Ensure destination folder exists
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

const certs = [
  { src: 'media__1783000538010.pdf', dest: 'PowerBI_Fabric_Bootcamp.pdf' },
  { src: 'media__1783000555172.pdf', dest: 'LetsUpgrade_Python_Bootcamp.pdf' },
  { src: 'media__1783000600474.pdf', dest: 'HackerRank_SQL_Advanced.pdf' },
  { src: 'media__1783000624631.pdf', dest: 'Simplilearn_PowerBI_Beginners.pdf' },
  { src: 'media__1783000728144.pdf', dest: 'Simplilearn_Python_Data_Analysis.pdf' },
  // Once you upload your Excel certificate PDF to this workspace, replace the line below with its actual filename
  { src: 'YOUR_UPLOADED_EXCEL_FILENAME.pdf', dest: 'Excel_Data_Analysis.pdf' }
];

certs.forEach(cert => {
  const srcPath = path.join(srcFolder, cert.src);
  const destPath = path.join(destFolder, cert.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${cert.src} to ${cert.dest}`);
  } else {
    if (cert.src !== 'YOUR_UPLOADED_EXCEL_FILENAME.pdf') {
      console.warn(`Source file not found: ${srcPath}`);
    }
  }
});
console.log('Finished copying certificates!');
