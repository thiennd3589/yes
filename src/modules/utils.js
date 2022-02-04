import logger from "../helper/logger"

export const handleCatchedError = (res, message, status = 500) => {
  const response = {
    message
  }

  if (message.search('\n') >= 0) {
    response.message = message.split('\n')
  }

  logger.error(response.message);

  return res.status(status).json(response)
}
