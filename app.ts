//require для підключення пакетів
import express, { Express, Router } from 'express';
import * as TimeController from './controllers/AvalibleTime.controllers';
import * as UserController from './controllers/Auth.controllers';
import { registerValidator } from './utils/validations';
import cors from 'cors';
const config = require('config')
//MongoDB
const mongoose = require('mongoose')
const app: Express = express();
const router: Router = express();
app.use(express.json())
app.use(cors())
router.post('/auth/registration', registerValidator, UserController.registration)
router.post('/auth/login', UserController.login)

router.post('/avalible-time', TimeController.create)
router.get('/avalible-all-time', TimeController.getAll)
router.get('/avalible-time/:date', TimeController.getOne)
app.use('/api', router);

const PORT = config.get('port') || 5000;
async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            // useNewUrlParser: true
        }).then(() => console.log('Db Ok'))
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...!`))
    } catch (e) {
        console.log('Server error', e);
        process.exit(1);
    }
}

start();

