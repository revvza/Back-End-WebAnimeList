
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

| Atribut | Type     | 
| :-------- | :------- |
| id | int AUTO_INCREMENT |
| title | varchar |
| type | varchar |
| episodes | varchar |
| status | varchar |
| aired | varchar |
| premiered | varchar |
| producers | varchar |
| studios | varchar |
| genres | varchar |
| duration | varchar |
| synopsis | text |
| image | varchar |

-- untuk schema prisma bisa dilihat di [Link](https://github.com/revvza/Back-End-WebAnimeList/blob/main/prisma/schema.prisma)
## Fitur-Fitur API

Server sekarang berjalan di http://localhost:3000. Anda dapat mengirim permintaan API yang diterapkan di index.js, misalnya. http://localhost:3000/anime.

#### Get Semua Anime

```http
  GET /anime
```

#### Get Anime Berdasarkan id

```http
  GET /anime/:id
```
#### Get anime berdasarkan filter & sortir

 - Get anime berdasarkan title, misalnya mencari anime dengan title gintama

    ```http
      GET /anime?title=gintama
    ```

- Get anime berdasarkan type, misalnya mencari anime dengan type movie

    ```http
      GET /anime?type=movie
    ```

- Get anime berdasarkan status, misalnya mencari anime dengan status finished airing

    ```http
      GET /anime?status=finished airing
    ```
- Get anime berdasarkan premiered, misalnya mencari anime dengan premiered Spring 

    ```http
      GET /anime?premiered=Spring
    ```

- Get anime berdasarkan genres, misalnya mencari anime dengan genres action 

    ```http
      GET /anime?genres=action
    ```
- Get anime berdasarkan duration, misalnya mencari anime dengan duration 24 min

    ```http
      GET /anime?duration=24 min
    ```
- Get semua anime dengan sortir huruf a-z atau z-a

    ```http
      GET /anime?sort=asc
    ```

    ```http
      GET /anime?sort=desc
    ```

#### Post Anime

```http
  POST /anime
```

#### Put Anime Berdasarkan id

```http
  PUT /anime/:id
```

#### Delete Anime Berdasarkan id

```http
  DELETE /anime/:id
```
## Lampiran

 - Source Code untuk [Front-End Website Anime List](https://github.com/revvza/Front-End-WebAnimeList)