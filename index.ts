import express from 'express';
import mongoose from 'mongoose';

import { PORT } from './config/appConfig';
import { MONGO_URI } from './config/appConfig';
import { AdminRoutes, BrandRoutes, CartRoutes, CategoryRoutes, GiftCardRoutes, OrderRoutes, ProductRoutes, UserRoutes } from './routes';

const app = express();

app.use(express.json());

app.use("/v1", BrandRoutes)
app.use("/v1", CartRoutes)
app.use("/v1", CategoryRoutes)
app.use("/v1", GiftCardRoutes)
app.use("/v1", OrderRoutes)
app.use("/v1", ProductRoutes)
app.use("/v1", UserRoutes)
app.use("/v1", AdminRoutes)

mongoose.connect(MONGO_URI).then(result => console.log("connected to db")).catch(err => console.error('error: ', err))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})