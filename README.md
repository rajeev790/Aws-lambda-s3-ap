# Task 1: Lambda and S3 JSON Storage API

## Overview
This project creates a simple AWS-based API to store and retrieve JSON data using Lambda functions and S3. Two endpoints are available:
1. `POST /post` - Stores JSON data to S3
2. `GET /get` - Retrieves all stored JSON data

## Thought Process
- Designed the POST endpoint to accept JSON payloads, upload them to S3, and return an eTag and URL for verification.
- The GET endpoint fetches all JSON files from S3 and compiles them into a single response.
- Focused on modularizing the code and maintaining testability with helper functions.

## Setup
1. Install dependencies:
   ```bash
   npm install
