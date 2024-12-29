<div align="center"> <img src="https://i.imgur.com/5UELrjO.png" alt="SoundBeat Logo" width="200"/>
SoundBeat

Create, share and discover playlists
</div>
About

SoundBeat is a platform where music lovers can share playlists and connect with others who have similar music taste.
Features

    Create and share playlists
    Discover people with similar music taste
    Follow users and their collections
    Create collaborative playlists
    Track playlist engagement
    Control privacy settings

Tech Stack

    NestJS v10 with TypeScript
    PostgreSQL with Prisma ORM
    Docker
    Jest for testing
    Swagger for API docs

Quick Start

bash

# Clone and enter
git clone https://github.com/LeviMaycon/openbeat-backend.git
cd soundbeat

# Setup
cp .env.example .env

# Run with Docker
docker compose up -d

Development

bash

# Install dependencies
pnpm install

# Start development server
pnpm start:dev

# Run tests
pnpm test

API Documentation

Access Swagger UI at http://localhost:3333/api

