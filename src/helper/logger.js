const winston = require("winston");
require("winston-daily-rotate-file");
const { format } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.DailyRotateFile({
      filename: "%DATE%.log",
	  datePattern: 'YYYY-MM-DD',
      dirname: `logs/`,
    }),
  ],
});

export default logger;
