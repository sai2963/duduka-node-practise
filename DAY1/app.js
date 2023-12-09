const { writeFile, readFile } = require('fs');

for (let i = 0; i < 1000; i++) {
    writeFile('./content/subfolder/four.txt', `Hello World ${i}\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Appended content to file: Hello World ${i}`);

        // Read the file after writing to log the content
        readFile('./content/subfolder/four.txt', 'utf8', (readErr, data) => {
            if (readErr) {
                console.error(readErr);
                return;
            }
            console.log('File content:', data);
        });
    });
}
