#!/bin/bash

# Word of the Day Cron Job Setup Script
# This script helps you set up automatic daily opening of the Word of the Day app

echo "🌟 Word of the Day Cron Job Setup 🌟"
echo "======================================"
echo ""

# Get current directory
CURRENT_DIR=$(pwd)
echo "Current directory: $CURRENT_DIR"
echo ""

# Ask for desired time
echo "What time would you like the Word of the Day to open?"
echo "Enter time in 24-hour format (e.g., 08:00 for 8:00 AM, 19:30 for 7:30 PM)"
read -p "Time (HH:MM): " TIME

# Parse time
HOUR=$(echo $TIME | cut -d: -f1)
MINUTE=$(echo $TIME | cut -d: -f2)

# Validate time
if ! [[ $HOUR =~ ^[0-9]+$ ]] || ! [[ $MINUTE =~ ^[0-9]+$ ]]; then
    echo "❌ Invalid time format. Please use HH:MM format."
    exit 1
fi

if [ $HOUR -lt 0 ] || [ $HOUR -gt 23 ]; then
    echo "❌ Hour must be between 0 and 23."
    exit 1
fi

if [ $MINUTE -lt 0 ] || [ $MINUTE -gt 59 ]; then
    echo "❌ Minute must be between 0 and 59."
    exit 1
fi

echo ""
echo "✅ Time validated: $TIME"
echo ""

# Create cron job entry
CRON_ENTRY="$MINUTE $HOUR * * * cd $CURRENT_DIR && open index.html"

echo "Cron job entry that will be added:"
echo "$CRON_ENTRY"
echo ""

# Ask for confirmation
read -p "Do you want to add this cron job? (y/n): " CONFIRM

if [[ $CONFIRM =~ ^[Yy]$ ]]; then
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_ENTRY") | crontab -
    
    echo ""
    echo "✅ Cron job added successfully!"
    echo ""
    echo "📅 Your Word of the Day will now open automatically at $TIME every day."
    echo ""
    echo "To view your cron jobs, run: crontab -l"
    echo "To remove this cron job, run: crontab -e (then delete the line)"
    echo ""
    echo "🧪 To test it works, you can run: ./auto-open.sh"
else
    echo "❌ Cron job not added."
fi
