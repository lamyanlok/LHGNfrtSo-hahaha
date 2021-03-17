#!/bin/bash

sudo yum install GeoIP GeoIP-data -y

awk 'END{for(i in a)print a[i],i }{a[$1]++}'  access.log | sort -rn | head -1 | awk '{print $2}' | xargs geoiplookup | grep Country -i -m 1 | cut -d ':' -f 2