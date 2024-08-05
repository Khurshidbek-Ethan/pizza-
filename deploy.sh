#!/bin/bsh

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i
npm run build
pm2 start process.config.js --env production

# DEVELOPMENT
# git reset --hard -> albatta qoyilish kerak
# git checkout develop
# git pull origin develop

# npm i
# npm run build -> talab etilmaydi chunki develop un run qilganimizda bu mantiq bizga kerak emas
# pm2 start "npm run start:dev". --name=PIZZA

