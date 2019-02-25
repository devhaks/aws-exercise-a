#!/bin/bash

echo '======================'
echo 'Running start_server'
echo '======================'

pwd
cd /home/ubuntu/projects/aws-exercise-a
pwd
pm2 l
pm2 restart app.js