const sharp = require('sharp');

sharp('wallpaper_2.jpg')
    .resize(80)
    .grayscale()
    .toFile('resized.jpg')