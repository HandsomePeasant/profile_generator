const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profileText = ``;

rl.question('What is your name? (Or nickname, if you prefer) ', (answer) => {
  profileText += answer;

  rl.question('What is a favourite hobby of yours? ', (answer) => {
    profileText += ` enjoys ${answer}`;

    rl.question('What do you like to listen to while doing that? ', (answer) => {
      profileText += ` while listening to ${answer}, `;

      rl.question('What meal do you like most? (Breakfast, lunch, etc) ', (answer) => {
        profileText += `and prefers ${answer} over other meals `;

        rl.question('What do you like to eat most for that meal? ', (answer) => {
          profileText += `(and likes eating ${answer} the most for it).`;

          console.log(profileText);
          rl.close();
        });
      });
    });
  });
});