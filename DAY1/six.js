const { writeFileSync, readFileSync } = require('fs');

for (let i = 0; i < 1000; i++) {
    writeFileSync('./content/subfolder/four.txt', `Hello World ${i}\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Appended content to file: Hello World ${i}`);

        // Read the file after writing to log the content
        readFileSync('./content/subfolder/four.txt', 'utf8', (readErr, data) => {
            if (readErr) {
                console.error(readErr);
                return;
            }else{
                console.log('File content:', data);
            }
            
        });
    });
}
