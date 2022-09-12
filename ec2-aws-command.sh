ssh -i "<key>.pem" "<alamat instance E2>"
cd notes-app-back-end
git pull origin main
npm install
pm2 retart notes-api
pm2 logs