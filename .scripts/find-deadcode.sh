#!/usr/bin/env sh

RED='\033[0;31m'
NC='\033[0m' # No Color

DEADCODE=$(npx ts-prune -i '.stories.tsx|.storybook|__tests__/mswServer.ts|.next|src/i18n/locales|src/i18n/settings.ts|src/middleware.ts|jest.config.ts')

if [ -z "$DEADCODE" ];
then
  exit 0
else
  COUNT_OF_DEADCODE=$(echo -n "${DEADCODE}" | wc -l)
  echo "$DEADCODE"
  echo "Found ${RED}$((COUNT_OF_DEADCODE + 0))${NC} unused elements"
  exit 1
fi

