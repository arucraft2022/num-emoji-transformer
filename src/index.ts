#!/usr/bin/env node

const numberToEmoji = (input: string): string => {
  const emojiMap: { [key: string]: string } = {
    '0': '0️⃣',
    '1': '1️⃣',
    '2': '2️⃣',
    '3': '3️⃣',
    '4': '4️⃣',
    '5': '5️⃣',
    '6': '6️⃣',
    '7': '7️⃣',
    '8': '8️⃣',
    '9': '9️⃣'
  };

  return input.split('').map(char => emojiMap[char] || char).join(' ');
};

export default numberToEmoji;

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Please provide a number or expression as an argument.');
    process.exit(1);
  }

  const inputString = args.join('');
  console.log(numberToEmoji(inputString));
}
