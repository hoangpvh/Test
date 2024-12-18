// pages/api/resizeImage.js
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const { width, height, imageName } = req.query;
  const imagePath = path.resolve('public/images/products', `${imageName}.webp`);
  
  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: 'Image not found' });
  }

  try {
    const image = sharp(imagePath);
    const imageBuffer = await image.resize(parseInt(width), parseInt(height)).toBuffer();
    
    res.setHeader('Content-Type', 'image/webp');
    res.send(imageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Error processing image' });
  }
}
