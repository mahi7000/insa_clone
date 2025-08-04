import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// import tokenRoute from './routes/token.js';
import userRoute from './routes/user.js';

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.json({ limit: '50mb' }));

app.use('/api/user', userRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));