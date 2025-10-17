#!/bin/sh

set -e

export PGUSER="postgres"

# Create database (ignore error if exists)
psql -c "CREATE DATABASE inventory;" || true

# Create extension in the inventory database
psql -d inventory -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"