import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method == 'POST') {
		const { secret, paths } = request.body
		if (secret !== process.env.REVALIDATE_SECRET) {
			return response.status(401).json({ message: 'Invalid secret' })
		}
        try {           
            await Promise.all(paths.map(response.revalidate))
            return response.json({ message: 'Revalidate' })
        }
        catch(err){
            console.log(err);
            return response.status(500).json({ message: 'Internal Error' })
        }
	}
}

export default handler