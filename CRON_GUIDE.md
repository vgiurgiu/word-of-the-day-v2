# ⏰ Cron Jobs for Word of the Day

## What is a Cron Job?
A cron job is a scheduled task that runs automatically at specified times. It's perfect for opening your Word of the Day app every morning!

## Quick Setup (Automated)
Run the setup script I created:
```bash
./cron-setup.sh
```
This will ask for your desired time and set everything up automatically.

## Manual Setup

### 1. Edit Your Crontab
```bash
crontab -e
```

### 2. Add This Line (replace with your desired time):
```bash
# Word of the Day - opens at 8:00 AM every day
0 8 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
```

### 3. Save and Exit
- Press `Ctrl + X` (or `Cmd + X` on Mac)
- Press `Y` to confirm
- Press `Enter` to save

## Cron Time Format Explained
```
* * * * * command
│ │ │ │ │
│ │ │ │ └─── Day of week (0-7, Sunday = 0 or 7)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)
```

## Common Time Examples
```bash
# 8:00 AM every day
0 8 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html

# 7:30 AM every day
30 7 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html

# 9:15 AM every weekday (Monday-Friday)
15 9 * * 1-5 cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html

# 6:45 PM every day
45 18 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
```

## Useful Commands

### View Your Cron Jobs
```bash
crontab -l
```

### Edit Your Cron Jobs
```bash
crontab -e
```

### Remove All Cron Jobs
```bash
crontab -r
```

### Test Your Setup
```bash
./auto-open.sh
```

## Troubleshooting

### Cron Job Not Running?
1. **Check if cron is running:**
   ```bash
   sudo launchctl list | grep cron
   ```

2. **Check cron logs:**
   ```bash
   tail -f /var/log/cron.log
   ```

3. **Verify the path is correct:**
   ```bash
   pwd
   ls -la index.html
   ```

### Permission Issues?
Make sure the script has execute permissions:
```bash
chmod +x auto-open.sh
```

### Browser Not Opening?
Try using the full path to your browser:
```bash
# Instead of: open index.html
# Use: /Applications/Safari.app/Contents/MacOS/Safari index.html
```

## Advanced Options

### Multiple Times Per Day
```bash
# 8:00 AM and 6:00 PM every day
0 8 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
0 18 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
```

### Weekdays Only
```bash
# 8:00 AM Monday through Friday
0 8 * * 1-5 cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
```

### With Notifications
```bash
# 8:00 AM with system notification
0 8 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html && osascript -e 'display notification "Time for Word of the Day!" with title "Learning Time"'
```

## Security Note
Cron jobs run with your user permissions, so they're safe. The Word of the Day app only opens a local HTML file - no external connections or security risks.
