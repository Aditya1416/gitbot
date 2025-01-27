const { execSync } = require('child_process');
const fs = require('fs');
const moment = require('moment');

const REPO_PATH = "."; // Change to your repo path if needed
const FILE_NAME = "index.js"; // Modify this file

for (let i = 0; i < 250; i++) {
    const date = moment().subtract(i, 'days').format('YYYY-MM-DD HH:mm:ss');

    // Modify file
    fs.appendFileSync(FILE_NAME, `// Commit on ${date}\n`);

    // Git commit
    execSync(`git add ${FILE_NAME}`, { cwd: REPO_PATH });
    execSync(`GIT_COMMITTER_DATE="${date}" git commit -m "Commit on ${date}" --date "${date}"`, { cwd: REPO_PATH });
}

execSync("git push origin main --force", { cwd: REPO_PATH });

console.log("250 commits pushed successfully!");
// Commit on 2025-01-27 12:59:55
