import ImageSlider from './ImageSlider';
import placeholder1 from '../assets/placeholder_1.jpg';
import placeholder2 from '../assets/placeholder_2.jpg';
import placeholder3 from '../assets/placeholder_3.jpg';
import placeholder4 from '../assets/placeholder_4.jpg';

const RecentActivity = () => {
  const images = [
    {
      src: placeholder1,
      alt: 'First slide description',
      description: 'Mrs. Tigist Hamid, Director General of INSA, emphasized the administration’s achievements in ensuring national cybersecurity and strengthening digital sovereignty.',
      date: 'May 15, 2023'
    },
    {
      src: placeholder2,
      alt: 'Second slide description',
      description: 'Mrs. Tigist Hamid, Director General of INSA, emphasized the administration’s achievements in ensuring national cybersecurity and strengthening digital sovereignty.',
      date: 'May 16, 2023'
    },
    {
      src: placeholder3,
      alt: 'Third slide description',
      description: 'Mrs. Tigist Hamid, Director General of INSA, emphasized the administration’s achievements in ensuring national cybersecurity and strengthening digital sovereignty.',
      date: 'May 17, 2023'
    },
    {
      src: placeholder4,
      alt: 'Third slide description',
      description: 'The leadership and employees of EMAO (Information Network Security Administration) have successfully carried out their Green Legacy (reforestation) campaign, contributing to environmental sustainability efforts.',
      date: 'May 18, 2023'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row space-x-8">
      <ImageSlider 
        images={images} 
        interval={4000} 
        autoPlay 
        showControls 
        showDots
      />

      <div className="w-full lg:w-2/5">
        <h2 className="text-text-header text-2xl font-bold mb-[20px]">Recent Activity</h2>
        <div className='cards space-y-[15px]'>
          {images.map((image, index) => (
            <div key={index} className="card">
              <img src={image.src} alt={image.alt} className="w-[180px] h-[120px] rounded-[9px]" />
              <p className="text-[14px]">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;