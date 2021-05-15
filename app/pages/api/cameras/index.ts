import { NextApiRequest, NextApiResponse } from 'next';
import GetCameraInfoList from '../../../utils/GetCameraInfoList';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    res.status(200).json(GetCameraInfoList());
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
