import express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Lerna!')
})

export const application = (): void => {
  app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
  })
}
