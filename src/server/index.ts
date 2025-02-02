import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Wine routes
app.get('/api/wines', async (req, res) => {
  try {
    const wines = await prisma.wine.findMany();
    res.json(wines);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching wines' });
  }
});

app.get('/api/wines/:slug', async (req, res) => {
  try {
    const wine = await prisma.wine.findUnique({
      where: { slug: req.params.slug }
    });
    if (!wine) {
      return res.status(404).json({ error: 'Wine not found' });
    }
    res.json(wine);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching wine' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 