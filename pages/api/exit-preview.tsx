import {NextApiResponse} from 'next'

export default function exit(_, res: NextApiResponse) {
  res.clearPreviewData()

  res.writeHead(307, {Location: '/'})
  return res.end()
}
