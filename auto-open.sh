#!/bin/bash

# Word of the Day Auto-Launcher
# This script opens the Word of the Day app in your default browser

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Path to the HTML file
HTML_FILE="$SCRIPT_DIR/index.html"

# Open in default browser
open "$HTML_FILE"

echo "🌟 Word of the Day opened! Time to learn new words! 🌟"
