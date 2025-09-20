const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary - You'll need to set these environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your_cloud_name',
  api_key: process.env.CLOUDINARY_API_KEY || 'your_api_key',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'your_api_secret'
});

async function uploadVideo() {
  try {
    console.log('Starting video upload to Cloudinary...');
    
    const videoPath = path.join(__dirname, '../public/hero.mp4');
    
    // Check if file exists
    if (!fs.existsSync(videoPath)) {
      console.error('Video file not found at:', videoPath);
      return;
    }
    
    // Upload the video with optimizations using large upload for big files
    const result = await cloudinary.uploader.upload_large(videoPath, {
      resource_type: 'video',
      folder: 'portfolio',
      public_id: 'hero-video',
      overwrite: true,
      chunk_size: 6000000, // 6MB chunks
      transformation: [
        { quality: 'auto:best' },
        { fetch_format: 'auto' }
      ]
    });
    
    console.log('Upload successful!');
    console.log('Video URL:', result.secure_url);
    console.log('Optimized URL:', cloudinary.url(result.public_id, {
      resource_type: 'video',
      quality: 'auto',
      fetch_format: 'auto'
    }));
    
    // Save the URL to a file for reference
    const urlData = {
      secure_url: result.secure_url,
      public_id: result.public_id,
      optimized_url: cloudinary.url(result.public_id, {
        resource_type: 'video',
        quality: 'auto',
        fetch_format: 'auto'
      })
    };
    
    fs.writeFileSync(
      path.join(__dirname, '../cloudinary-video-url.json'),
      JSON.stringify(urlData, null, 2)
    );
    
    console.log('\nVideo URLs saved to cloudinary-video-url.json');
    console.log('\nUse this URL in your Hero component:', result.secure_url);
    
  } catch (error) {
    console.error('Upload failed:', error);
  }
}

uploadVideo();
