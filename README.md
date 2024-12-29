<div align="center">
  <img src="https://i.imgur.com/5UELrjO.png" alt="SoundBeat Logo" width="200"/>
  
  # SoundBeat
  
  *Create, share and discover playlists*

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Made with Love](https://img.shields.io/badge/Made%20with-♥-ff69b4.svg)]()
</div>

## Overview
SoundBeat is a platform where music lovers can share playlists and connect with others who have similar music taste.

## Core Features
- Create and share playlists
- Discover people with similar music taste
- Follow users and their collections
- Create collaborative playlists
- Track playlist engagement
- Control privacy settings

## Technology
- NestJS v10 with TypeScript
- PostgreSQL with Prisma ORM
- Docker
- Jest for testing
- Swagger for API docs

## Getting Started
```bash
# Clone and setup
git clone https://github.com/LeviMaycon/openbeat-backend.git
cd soundbeat
cp .env.example .env

# Run with Docker
docker compose up -d

# Development
pnpm install
pnpm start:dev
pnpm test
```

## API Access
Swagger UI available at `http://localhost:3333/api`
