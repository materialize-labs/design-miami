import type { NextApiRequest, NextApiResponse } from 'next'
import Data from '../../../public/data/home-page.json'

export type IBlog = {
  href: string
  name: string
  video?: string
  image?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<IBlog>) {
  const { blog } = req.query

  const data = Data.map((item) => {
    return item.blogs
      .filter((el) => el.href.replace(/ /gi, '-').toLowerCase() === blog?.toString())
      .map((el) => el)
  })[0][0]

  res.status(200).json(data)
}
