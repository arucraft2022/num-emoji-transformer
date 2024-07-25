# num-emoji-transformer

`num-emoji-transformer` is a simple TypeScript module that converts numbers into emoji representations. It also retains symbols like `-`, `+`, `×`, `÷`, etc., without converting them.

## Installation

You can install this package via npm:

```bash
npm install num-emoji-transformer
```

## Usage

You can use this package via npx:

```
npx num-emoji-transformer <your-number-or-expression> 
```

For example:

```
npx num-emoji-transformer 1-2-3
```

will output:

```
1️⃣ - 2️⃣ - 3️⃣
```

## Example

```
import numberToEmoji from 'num-emoji-transformer';

const result = numberToEmoji('123');
console.log(result); // Outputs: 1️⃣2️⃣3️⃣

const expression = numberToEmoji('1-2+3');
console.log(expression); // Outputs: 1️⃣ - 2️⃣ + 3️⃣
```

## License

This project is licensed under the MIT License.
