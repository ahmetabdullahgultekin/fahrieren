#!/bin/bash
rsync -avz --delete \
  -e "ssh -p 65002 -o StrictHostKeyChecking=no" \
  /opt/projects/fahrieren/ \
  u349700627@46.202.158.52:~/domains/fahrieren.com/public_html/ \
  --exclude .git --exclude deploy.sh
echo "Deployed fahrieren.com"
