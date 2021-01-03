import { NextApiRequest, NextApiResponse } from 'next';
import { LiveDataList } from '../../../utils/LiveData';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(LiveDataList)) {
      throw new Error('Cannot find live data');
    }

    res.status(200).json(LiveDataList);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
