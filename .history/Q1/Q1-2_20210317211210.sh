#!/bin/bash
awk '$4 >= "[10/Jun/2019:00:00:00" && $4 < "[19/Jun/2019:23:59:59"' access.log | awk '{print $1}' | sort -n | uniq -c | sort -nr | head -10
