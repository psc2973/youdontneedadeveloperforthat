#!/bin/sh
# Prompts for Uniform credentials (input hidden) and writes them to .env in the project root.
cd "$(dirname "$0")/.." || exit 1

ask() {
  printf '%s: ' "$1" >&2
  stty -echo 2>/dev/null
  IFS= read -r value
  stty echo 2>/dev/null
  printf '\n' >&2
  printf '%s' "$value"
}

PROJECT_ID=$(ask "Uniform project ID (Security > Service Accounts)")
API_KEY=$(ask "Uniform API key")
PREVIEW_SECRET=$(ask "Preview secret (press Enter to generate a random one)")
if [ -z "$PREVIEW_SECRET" ]; then
  PREVIEW_SECRET=$(openssl rand -hex 16)
  echo "Generated preview secret: $PREVIEW_SECRET (use it in Uniform's preview URL)" >&2
fi

umask 077
{
  printf 'UNIFORM_PROJECT_ID=%s\n' "$PROJECT_ID"
  printf 'UNIFORM_API_KEY=%s\n' "$API_KEY"
  printf 'UNIFORM_PREVIEW_SECRET=%s\n' "$PREVIEW_SECRET"
} > .env

echo "Saved .env (project ID: ${#PROJECT_ID} chars, API key: ${#API_KEY} chars). You can tell Claude it's done."
