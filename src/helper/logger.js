const winston = require("winston");
const { format } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

let mydate = new Date();
let newFilename = "logs/" + mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate() + ".log";

const logger = winston.createLogger({
  //   level: "info",
  //   format: winston.format.json(),
  //   defaultMeta: { service: "user-service" },
  format: combine(timestamp(), myFormat),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: newFilename, level: "error" }),
    // new winston.transports.File({ filename: "log/combined.log" }),
  ],
});

export default logger;
