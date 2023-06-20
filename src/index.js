const express = require('express')
const { PrismaClient } = require('@prisma/client')
var cors = require('cors')

const prisma = new PrismaClient()
const app = express()
app.use(cors())

app.use(express.json())

//Method POST

app.post(`/anime`, async (req, res) => {
  const { title, type, episodes, status, aired, premiered, producers, studios, genres, duration, synopsis, image} = req.body

  const result = await prisma.anime.create({
    data: {
      title,
      type,
      episodes,
      status,
      aired,
      premiered,
      producers,
      studios,
      genres,
      duration,
      synopsis, 
      image
    },
  })
  res.json(result)
})

//Method PUT

app.put('/anime/:id', async (req, res) => {
  const { id } = req.params
  const { title, type, episodes, status, aired, premiered, producers, studios, genres, duration, synopsis, image} = req.body
  try {
    const anime = await prisma.anime.update({
      where: { id: Number(id) },
      data: {
        title,
        type,
        episodes,
        status,
        aired,
        premiered,
        producers,
        studios,
        genres,
        duration,
        synopsis, 
        image
      },
    })

    res.json(anime)
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` })
  }
})

//Method DELETE

app.delete(`/anime/:id`, async (req, res) => {
  const { id } = req.params
  const anime = await prisma.anime.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(anime)
})

//Method GET

//GET anime berdasarkan filter & sortir
app.get('/anime', async (req, res) => {
    const {
      title, 
      type,
      status,
      premiered,
      genres,
      duration,
      sort,
    } = req.query;

    const type_filter = type?.split(",");
    const orderByTitle = sort === 'desc' ? 'desc' : 'asc';

    let orderBy ={
      id: 'asc',
    };

    if (sort && sort !== 'default') {
      orderBy = {
        title: orderByTitle,
      };
    }

    const anime = await prisma.anime.findMany({
        where : {
            title : {
                contains : title || undefined 
            },
            type: { in: type_filter } || undefined,
            status : {
              contains : status || undefined 
            },
            premiered : {
              contains : premiered || undefined 
            },
            genres: {
                contains: genres || undefined
            },
            duration: {
              contains: duration || undefined
          }
        },
        orderBy: orderBy,
      },
    )
    res.json(anime)
  })

//GET All
app.get('/anime', async (req, res) => {
  const anime = await prisma.anime.findMany()
  res.json(anime)
})

//GET Id
app.get('/anime/:id', async (req, res) => {
  const { id } = req.params

  const drafts = await prisma.anime
    .findUnique({
      where: {
        id: Number(id),
      },
    })

  res.json(drafts)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)