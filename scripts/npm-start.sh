#!/bin/bash

echo '======================'
echo 'Running start_server'
echo '======================'

cd /home/ubuntu/projects/aws-exercise-a
pm2 kill
pm2 start app.js