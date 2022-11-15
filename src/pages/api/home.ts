import type { NextApiRequest, NextApiResponse } from 'next'
import Data from '../../../public/data/home-page.json'

export type IData = {
  id: string
  blogs: {
    href: string
    name: string
    video?: string
    image?: string
  }[]
}[]

export default function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
  const data = Data

  res.status(200).json(data)
}
