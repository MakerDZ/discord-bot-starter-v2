# Use Node.js v16 as base image for final production
FROM node:16 as production

# Create and set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Bundle app source
COPY . .

# Bulding Typescript app
RUN pnpm build

EXPOSE 4001

# Start the Discord bot
CMD ["node", "build/index.js"]