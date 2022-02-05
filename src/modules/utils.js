import logger from "../helper/logger";

export const handleCatchedError = (req, res, message, status = 500) => {
  const response = {
    message
  }

  if (message.search('\n') >= 0) {
    response.message = message.split('\n')
  }

  if (req) {
	logger.info(`${req.originalUrl} ${JSON.stringify(req.body)}`);
  }

  logger.error(response.message);

  return res.status(status).json(response)
}
