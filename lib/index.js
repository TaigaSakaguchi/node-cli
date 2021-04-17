
// コマンドライン引数
console.log(process.argv[2])

// ユーザーの入力を受け取り
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('あなたの名前を押してください。:', (answer) => {
	console.log(`ようこそ、${answer}さん！`)
	rl.close()
})