import logger from 'pino';
import dayjs from 'dayjs';

// Just to print sexy logs.
const transport = logger.transport({
    target: 'pino-pretty',
    options: { colorize: true }
})

// Setting up pino for logging purposes.
const log = logger({
    base : {
        pid : false,
    },
    timestamp : () => `,"time":"${dayjs().format()}"`,
}, transport);

export default log;