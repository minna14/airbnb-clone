---
name: log-prompt
description: Use at the start of EVERY user turn in this project, before doing any other work. Appends the user's current request verbatim to PROMPTS.md with a timestamp, so the assignment's required "sequence of prompts used" is built automatically instead of reconstructed from memory at the end.
---

# Log Prompt

This assignment's submission requirements include "the sequence of prompts used
for AI-assisted development." Reconstructing that at the end is unreliable and
looks worse than a live log.

## What to do, every turn, first
1. Read the user's current message.
2. Append it to `PROMPTS.md` at the repo root in this format:
   ```
   ## [YYYY-MM-DD HH:MM] 
   <the user's prompt, verbatim, unedited>
   ```
   Use the `date` bash command for the timestamp.
3. If `PROMPTS.md` doesn't exist yet, create it with a one-line header:
   `# Prompt Log — Airbnb Clone Assignment` before the first entry.
4. Then proceed with the user's actual request as normal.

Do not summarize or clean up the prompt text — verbatim is the point; it's
evidence of the real prompting process, including false starts.
