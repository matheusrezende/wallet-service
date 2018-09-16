import {Router} from 'express';
import validate from 'express-validation';

import * as ETHController from '../controllers/eth.controller';

const routes = new Router();

routes.post(
  '/hd/wallet',
  ETHController.createHDWallet,
);

routes.post(
  '/validate',
  validate(ETHController.validateEthAddress),
  ETHController.validateEthAddress,
);

routes.get(
  '/tx/:txHash',
  validate(ETHController.getTxInfo),
  ETHController.getTxInfo,
);

export default routes;
