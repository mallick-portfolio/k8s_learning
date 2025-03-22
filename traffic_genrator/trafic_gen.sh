#!/bin/sh

if [ "$#" -lt 2 ]; then
echo "Usage: $0 <target> <interval_in_minutes>"
exit 1
fi

TARGET=$1
INTERVAL=$2

while true; do
    TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
    RESPONSE= curl -s "$TARGET"
    echo "[$TIMESTAMP] $RESPONSE"
    sleep "$INTERVAL"
done