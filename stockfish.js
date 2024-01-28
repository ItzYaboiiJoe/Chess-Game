const { spawn } = require('child_process');

class Stockfish {
  constructor(path) {
    this.stockfishProcess = spawn(path);
    this.stockfishProcess.stdout.setEncoding('utf-8');
    this.stockfishProcess.stdout.on('data', (data) => {
      console.log(data);
    });
  }

  sendCommand(command) {
    this.stockfishProcess.stdin.write(command + '\n');
  }
}

module.exports = Stockfish;
