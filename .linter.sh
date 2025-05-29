#!/bin/bash
cd /home/kavia/workspace/code-generation/artevo-27296-d3d4b61d/artevo_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

