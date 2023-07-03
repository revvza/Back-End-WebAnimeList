# Back-End Website Anime List

Proyek ini akan melibatkan pengembangan back-end menggunakan menggunakan Prisma, Express, dan MySQL. Tujuan utama proyek ini adalah mengimplementasikan REST API yang memungkinkan interaksi antara client dan server secara efisien.

## Teknologi yang Digunakan

- Prisma: Digunakan sebagai ORM (Object-Relational Mapping) untuk menghubungkan dan berinteraksi dengan database MySQL.
- Express: Framework web yang populer untuk Node.js, digunakan untuk mengembangkan REST API dengan mudah dan efisien.
- MySQL: Database manajemen sistem yang digunakan untuk menyimpan dan mengelola data terkait anime dan pengguna.

## Tujuan Proyek

- Mengembangkan back-end menggunakan Prisma, Express, dan MySQL.
- Membangun REST API yang memungkinkan client untuk berinteraksi dengan data secara efisien
- Mengimplementasikan operasi dasar seperti membuat, membaca, memperbarui, dan menghapus data melalui API.

## Atribut MySQL

Berikut adalah atribut-atribut yang ada dalam tabel anime di MySQL setelah di migrate menggunakan Prisma:

| Atribut   | Type               |
| :-------- | :----------------- |
| id        | int AUTO_INCREMENT |
| title     | varchar            |
| type      | varchar            |
| episodes  | varchar            |
| status    | varchar            |
| aired     | varchar            |
| premiered | varchar            |
| producers | varchar            |
| studios   | varchar            |
| genres    | varchar            |
| duration  | varchar            |
| synopsis  | text               |
| image     | varchar            |

-- untuk schema prisma bisa dilihat di [Link](https://github.com/revvza/Back-End-WebAnimeList/blob/main/prisma/schema.prisma)

## Fitur-Fitur API

Server sekarang berjalan di http://localhost:3000. Anda dapat mengirim permintaan API yang diterapkan di index.js, misalnya. http://localhost:3000/anime.

#### Get Semua Anime

```
  GET /anime
```

#### Get Anime Berdasarkan id

```
  GET /anime/:id
```

#### Get anime berdasarkan filter & sortir

- Get anime berdasarkan title, misalnya mencari anime dengan title gintama

  ```
    GET /anime?title=gintama
  ```

- Get anime berdasarkan type, misalnya mencari anime dengan type movie

  ```
    GET /anime?type=movie
  ```

- Get anime berdasarkan status, misalnya mencari anime dengan status finished airing

  ```
    GET /anime?status=finished airing
  ```

- Get anime berdasarkan premiered, misalnya mencari anime dengan premiered Spring

  ```
    GET /anime?premiered=Spring
  ```

- Get anime berdasarkan genres, misalnya mencari anime dengan genres action

  ```
    GET /anime?genres=action
  ```

- Get anime berdasarkan duration, misalnya mencari anime dengan duration 24 min

  ```
    GET /anime?duration=24 min
  ```

- Get semua anime dengan sortir huruf a-z atau z-a

  ```
    GET /anime?sort=asc
  ```

  ```
    GET /anime?sort=desc
  ```

#### Post Anime

```
  POST /anime
```

#### Put Anime Berdasarkan id

```
  PUT /anime/:id
```

#### Delete Anime Berdasarkan id

```
  DELETE /anime/:id
```

### Penambahan Fitur (revisi)

- Delete anime berdasarkan title, misalnya menghapus anime dengan title gintama

  ```
    DELETE /anime?title=gintama
  ```

- Delete anime berdasarkan type, misalnya menghapus anime dengan type movie

  ```
    DELETE /anime?type=movie
  ```

- Delete anime berdasarkan status, misalnya menghapus anime dengan status finished airing

  ```
    DELETE /anime?status=finished airing
  ```

- Delete anime berdasarkan premiered, misalnya menghapus anime dengan premiered Spring

  ```
    DELETE /anime?premiered=Spring
  ```

- Delete anime berdasarkan duration, misalnya menghapus anime dengan duration 24 min

  ```
    DELETE /anime?duration=24 min
  ```

## Lampiran

- Source Code untuk [Front-End Website Anime List](https://github.com/revvza/Front-End-WebAnimeList)
- Dokumentasi Pembuatan API dan Testing Menggunakan Postman bisa diakses di [Link Berikut](https://drive.google.com/file/d/1BgsoMiQeACkYmqd-U3UxefZFZK6bRk9R/view?usp=drive_link)
