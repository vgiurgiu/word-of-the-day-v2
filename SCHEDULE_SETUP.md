# ⏰ How to Auto-Open Word of the Day Every Morning

## Option 1: macOS Automator (Easiest)

1. **Open Automator** (found in Applications folder)
2. **Choose "Calendar Alarm"** as the document type
3. **Add these actions:**
   - Search for "Run Shell Script"
   - Drag it to the workflow
   - In the script box, paste:
   ```bash
   cd "/Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2"
   open index.html
   ```
4. **Save** as "Word of the Day"
5. **Open Calendar app**
6. **Create a new event:**
   - Title: "Word of the Day"
   - Time: Set to your desired morning time (e.g., 8:00 AM)
   - Repeat: Every day
   - Alert: "Custom" → Choose "Word of the Day" (your Automator workflow)

## Option 2: Terminal Cron Job (Advanced)

1. **Open Terminal**
2. **Type:** `crontab -e`
3. **Add this line** (replace with your desired time):
   ```
   0 8 * * * cd /Users/victorgiurgiu/Documents/GitHub/word-of-the-day-v2 && open index.html
   ```
   - `0 8` = 8:00 AM
   - `* * *` = every day of every month
   - Adjust the time as needed (24-hour format)

## Option 3: Simple Script + Calendar Reminder

1. **Use the provided `auto-open.sh` script**
2. **Set a daily calendar reminder** at your desired time
3. **When the reminder pops up, double-click the script**

## Option 4: Browser Bookmark + Routine

1. **Bookmark the `index.html` file** in your browser
2. **Set a daily phone/computer reminder**
3. **Click the bookmark when reminded**

## Recommended: Option 1 (Automator)
This is the most reliable and user-friendly method for macOS users.

## Testing Your Setup
To test if it works:
1. Run: `./auto-open.sh` in Terminal
2. Or manually open `index.html` in your browser
3. The app should open and show today's word!

## Troubleshooting
- Make sure the file paths are correct
- Ensure your browser is set as the default
- Check that the HTML file opens properly when double-clicked
