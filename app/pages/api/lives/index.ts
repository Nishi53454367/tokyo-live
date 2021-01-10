import { NextApiRequest, NextApiResponse } from 'next';
import { LiveInfoList } from '../../../utils/LiveDataInfo';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(LiveInfoList)) {
      throw new Error('Cannot find live data');
    }

    res.status(200).json(LiveInfoList);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
