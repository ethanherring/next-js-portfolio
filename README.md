# next-js-portfolio

## Rolesmith waitlist

The product page is available at `/rolesmith`. Set `WAITLIST_WEBHOOK_URL` to an
endpoint that accepts JSON POST requests before deploying the waitlist form.
Without it, development submissions are logged locally and production returns
a clear configuration error instead of discarding addresses.
