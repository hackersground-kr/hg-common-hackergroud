#!/bin/sh
echo "window._env_ = { REACT_APP_SERVER_BASE_URL: \"${REACT_APP_SERVER_BASE_URL}\" };" > /app/public/env-config.js
npm start
