console.log("=== Application Started ===");
console.log("Hello from Ubuntu Node.js app!");

// ENV değişkenini kontrol et
if (process.env.channel) {
  console.log(`Current channel is set to: "${process.env.channel.toUpperCase()}"`);
} else {
  console.log("No channel environment variable set.");
}

// Daha detaylı bilgi verelim
console.log("Environment details:");
console.log(`- Platform: ${process.platform}`);
console.log(`- Node.js version: ${process.version}`);
console.log(`- Working directory: ${process.cwd()}`);

console.log("=== End of Startup Info ===");
