# Boilerplate Framework Backend Bootcamp Vocasia

## Overview
Mengembangkan RESTful API untuk Sistem Informasi Akademik Kampus, sebuah platform yang memungkinkan administrasi, dosen, mata kuliah dan mahasiswa untuk mengelola informasi akademik dengan efisien. API ini dirancang untuk menyediakan layanan akses data yang cepat, aman, dan terstruktur melalui endpoint yang mendukung operasi CRUD (Create, Read, Update, Delete).

### How To Use ?
* silahkan `use this template`
* kemudian jalankan 

```bash
npm install
```
* setelah itu copy file `.env.example` pada terminal dengan cara :

```bash
cp .env.example .env
```
* kemudian isikan configurasi pada file `.env` silahkan disesuaikan sendiri
```
APP_NAME = Vocasia Backend Framework
APP_PORT = 3000
APP_URL = http://localhost
NODE_ENV=development

# database
DB_HOST=127.0.0.1
DB_DRIVER=mysql
DB_NAME=siakad_api
DB_USER=root
DB_PASS=root
DB_PORT=3306
PRIVATE_KEY=oUSCAVtZwJ6be9p //boleh diganting dengan string random lainnya

```
* Kemudian jalankan script dibawah ini untuk melakukan migration ke database : 
```
npx sequelize-cli db:migrate
```
* Coba jalankan menggunakan script dibawah ini : 
```
npm run start
```
* kemudian coba akses url dibawah ini menggunakan http request app favorit kalian :
```
http://localhost:3000/
```
jika berhasil akan muncul seperti ini : 
```json
{
    "message" : "Hello exampleController"
}
```

### How To Generate Controller Automatic ?
* untuk membuat controller secara otomatis silahkan jalankan skrip berikut di terminal :
  ```
  npm run generate-controller your_controller_name
  ```
* jika berhasil maka akan terbuat file controller baru
  
### Berikut ini untuk link API Dokumentasinya :
https://documenter.getpostman.com/view/29164346/2s9YeG7BmN

# Resources 
* ExpressJs
* Sequelize
* Nodemon
* mysql2
* Bcrypt
* Jsonwebtoken(JWT)
